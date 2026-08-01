type ExportPage = {
  title: string;
  section: string;
  note?: string;
  overlays?: { text: string; x: number; y: number; w: number; h: number; fontSize: number }[];
};

const RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
const OFFICE_RELS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";

function escapeXml(value: string | number) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function emu(inches: number) {
  return Math.round(inches * 914400);
}

function textBox(id: number, text: string, x: number, y: number, w: number, h: number, options: { size?: number; color?: string; bold?: boolean; font?: string } = {}) {
  const size = options.size ?? 1800;
  const color = options.color ?? "1A1815";
  const font = options.font ?? "Aptos";
  const bold = options.bold ? ' b="1"' : "";
  const paragraphs = (text || " ")
    .split(/\n/)
    .map((line) => `<a:p><a:r><a:rPr lang="en-US" sz="${size}"${bold}><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:latin typeface="${font}"/></a:rPr><a:t>${escapeXml(line)}</a:t></a:r></a:p>`)
    .join("");

  return `<p:sp><p:nvSpPr><p:cNvPr id="${id}" name="Editable Text ${id}"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="${emu(x)}" y="${emu(y)}"/><a:ext cx="${emu(w)}" cy="${emu(h)}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr wrap="square"/><a:lstStyle/>${paragraphs}</p:txBody></p:sp>`;
}

function slideXml(content: string, bg = "EDEAE5") {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="${OFFICE_RELS}" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:bg><p:bgPr><a:solidFill><a:srgbClr val="${bg}"/></a:solidFill><a:effectLst/></p:bgPr></p:bg><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>${content}</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>`;
}

function relsXml(items: { id: string; type: string; target: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="${RELS}">${items.map((item) => `<Relationship Id="${item.id}" Type="${item.type}" Target="${item.target}"/>`).join("")}</Relationships>`;
}

function encode(value: string) {
  return new TextEncoder().encode(value);
}

function crc32(bytes: Uint8Array) {
  let crc = -1;
  for (let i = 0; i < bytes.length; i += 1) {
    crc ^= bytes[i];
    for (let j = 0; j < 8; j += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ -1) >>> 0;
}

function u16(out: number[], value: number) {
  out.push(value & 255, (value >>> 8) & 255);
}

function u32(out: number[], value: number) {
  out.push(value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255);
}

function append(out: number[], bytes: Uint8Array) {
  for (let i = 0; i < bytes.length; i += 8192) out.push(...bytes.slice(i, i + 8192));
}

function makeZip(files: { name: string; bytes: string | Uint8Array }[]) {
  const out: number[] = [];
  const central: { name: Uint8Array; bytes: Uint8Array; crc: number; offset: number }[] = [];
  let offset = 0;

  files.forEach((file) => {
    const name = encode(file.name);
    const bytes = typeof file.bytes === "string" ? encode(file.bytes) : file.bytes;
    const crc = crc32(bytes);
    u32(out, 0x04034b50); u16(out, 20); u16(out, 0); u16(out, 0); u16(out, 0); u16(out, 0);
    u32(out, crc); u32(out, bytes.length); u32(out, bytes.length); u16(out, name.length); u16(out, 0);
    append(out, name); append(out, bytes);
    central.push({ name, bytes, crc, offset });
    offset = out.length;
  });

  const centralOffset = out.length;
  central.forEach((file) => {
    u32(out, 0x02014b50); u16(out, 20); u16(out, 20); u16(out, 0); u16(out, 0); u16(out, 0); u16(out, 0);
    u32(out, file.crc); u32(out, file.bytes.length); u32(out, file.bytes.length); u16(out, file.name.length);
    u16(out, 0); u16(out, 0); u16(out, 0); u16(out, 0); u32(out, 0); u32(out, file.offset); append(out, file.name);
  });

  const centralSize = out.length - centralOffset;
  u32(out, 0x06054b50); u16(out, 0); u16(out, 0); u16(out, central.length); u16(out, central.length);
  u32(out, centralSize); u32(out, centralOffset); u16(out, 0);
  return new Blob([new Uint8Array(out)], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" });
}

function download(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function exportEditablePptx(pages: ExportPage[], pdfPages: ExportPage[]) {
  const items = [
    {
      section: "Editable Export",
      title: "QG Gold Premium Editorial Portfolio",
      note: "This PowerPoint export is text-based so it remains editable. Flattened page captures are intentionally left out."
    },
    ...pages.map((page, index) => ({
      ...page,
      note: page.note || `Editable placeholder for portfolio page ${index + 1}. Add final artwork manually if needed.`
    })),
    ...pdfPages.map((page, index) => ({
      ...page,
      section: page.section || "Imported / Uploaded Artwork",
      note: page.note || `Editable placeholder for imported PDF slide ${index + 1}. Add final artwork manually if needed.`
    }))
  ];

  const slides = items.map((item, index) => {
    const overlayBoxes = (item.overlays || [])
      .filter((box) => box.text.trim())
      .map((box, boxIndex) => textBox(20 + boxIndex, box.text, box.x, box.y, box.w, box.h, {
        size: Math.max(800, Math.round(box.fontSize * 100)),
        color: "1A1815",
        font: "Aptos"
      }))
      .join("");

    return slideXml(
      textBox(2, item.section.toUpperCase(), 0.65, 0.55, 6.8, 0.4, { size: 1050, color: "C49A45", bold: true }) +
      textBox(3, item.title, 0.65, 1.35, 9.8, 1.4, { size: 3600, color: "1A1815", font: "Georgia" }) +
      textBox(4, item.note, 0.72, 3.25, 8.2, 1.2, { size: 1500, color: "4A3B32" }) +
      textBox(5, `Slide ${index + 1} of ${items.length}`, 0.72, 6.78, 3.2, 0.3, { size: 850, color: "969188", bold: true }) +
      overlayBoxes
    );
  });

  const slideOverrides = slides.map((_, index) => `<Override PartName="/ppt/slides/slide${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join("");
  const files: { name: string; bytes: string | Uint8Array }[] = [
    { name: "[Content_Types].xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/><Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/><Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/><Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>${slideOverrides}<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>` },
    { name: "_rels/.rels", bytes: relsXml([{ id: "rId1", type: `${OFFICE_RELS}/officeDocument`, target: "ppt/presentation.xml" }, { id: "rId2", type: `${RELS}/metadata/core-properties`, target: "docProps/core.xml" }, { id: "rId3", type: `${OFFICE_RELS}/extended-properties`, target: "docProps/app.xml" }]) },
    { name: "docProps/core.xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>QG Gold Premium Editorial Portfolio</dc:title><dc:creator>QG Portfolio App</dc:creator><cp:lastModifiedBy>QG Portfolio App</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:modified></cp:coreProperties>` },
    { name: "docProps/app.xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>QG Portfolio App</Application><PresentationFormat>Widescreen</PresentationFormat><Slides>${slides.length}</Slides></Properties>` },
    { name: "ppt/presentation.xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="${OFFICE_RELS}" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst><p:sldIdLst>${slides.map((_, index) => `<p:sldId id="${256 + index}" r:id="rId${index + 2}"/>`).join("")}</p:sldIdLst><p:sldSz cx="12192000" cy="6858000" type="wide"/><p:notesSz cx="6858000" cy="9144000"/></p:presentation>` },
    { name: "ppt/_rels/presentation.xml.rels", bytes: relsXml([{ id: "rId1", type: `${OFFICE_RELS}/slideMaster`, target: "slideMasters/slideMaster1.xml" }, ...slides.map((_, index) => ({ id: `rId${index + 2}`, type: `${OFFICE_RELS}/slide`, target: `slides/slide${index + 1}.xml` }))]) },
    { name: "ppt/slideMasters/slideMaster1.xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="${OFFICE_RELS}" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld><p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst><p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles></p:sldMaster>` },
    { name: "ppt/slideMasters/_rels/slideMaster1.xml.rels", bytes: relsXml([{ id: "rId1", type: `${OFFICE_RELS}/slideLayout`, target: "../slideLayouts/slideLayout1.xml" }, { id: "rId2", type: `${OFFICE_RELS}/theme`, target: "../theme/theme1.xml" }]) },
    { name: "ppt/slideLayouts/slideLayout1.xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="${OFFICE_RELS}" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank" preserve="1"><p:cSld name="Blank"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>` },
    { name: "ppt/slideLayouts/_rels/slideLayout1.xml.rels", bytes: relsXml([{ id: "rId1", type: `${OFFICE_RELS}/slideMaster`, target: "../slideMasters/slideMaster1.xml" }]) },
    { name: "ppt/theme/theme1.xml", bytes: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="QG Portfolio"><a:themeElements><a:clrScheme name="QG Portfolio"><a:dk1><a:srgbClr val="1A1815"/></a:dk1><a:lt1><a:srgbClr val="EDEAE5"/></a:lt1><a:dk2><a:srgbClr val="4A3B32"/></a:dk2><a:lt2><a:srgbClr val="FAFAFA"/></a:lt2><a:accent1><a:srgbClr val="C49A45"/></a:accent1><a:accent2><a:srgbClr val="6B705C"/></a:accent2><a:accent3><a:srgbClr val="969188"/></a:accent3><a:accent4><a:srgbClr val="4A3B32"/></a:accent4><a:accent5><a:srgbClr val="1A1815"/></a:accent5><a:accent6><a:srgbClr val="EDEAE5"/></a:accent6><a:hlink><a:srgbClr val="C49A45"/></a:hlink><a:folHlink><a:srgbClr val="6B705C"/></a:folHlink></a:clrScheme><a:fontScheme name="QG Portfolio"><a:majorFont><a:latin typeface="Georgia"/></a:majorFont><a:minorFont><a:latin typeface="Aptos"/></a:minorFont></a:fontScheme><a:fmtScheme name="QG Portfolio"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements></a:theme>` }
  ];

  slides.forEach((slide, index) => {
    files.push({ name: `ppt/slides/slide${index + 1}.xml`, bytes: slide });
    files.push({ name: `ppt/slides/_rels/slide${index + 1}.xml.rels`, bytes: relsXml([]) });
  });

  download(makeZip(files), "qg-gold-editable-portfolio-no-captures.pptx");
}
