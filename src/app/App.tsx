import React, { useState, useEffect, useRef } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Download, Eye, FileText, FileUp, LayoutTemplate, Linkedin, Pencil, Plus, ShieldCheck, Sparkles, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { getPdfRuntime } from "@/app/pdfRuntime";

// GitHub Pages is built with VITE_PUBLIC_VIEWER=true. This is a build-time
// boundary: public visitors never receive active editing surfaces, while the
// local development server remains the owner's editing workspace.
const IS_PUBLIC_VIEWER = import.meta.env.VITE_PUBLIC_VIEWER === "true";
import portraitImg from "@/imports/gray-profile-headshot.png";
import goldRushMakerPortrait from "@/imports/gold-rush-maker-portrait.jpg";
import goldRushTextileOrnament from "@/imports/gold-rush-textile-ornament.jpeg";
import goldRushTableSetting from "@/imports/gold-rush-table-setting.jpeg";
import goldRushProductRange from "@/imports/gold-rush-product-range.jpeg";
import goldRushYellowOrnament from "@/imports/gold-rush-yellow-ornament.png";
import goldRushWallMockup from "@/imports/gold-rush-wall-mockup.png";
import paintingFeature from "@/imports/painting-gallery-feature.jpg";
import paintingKingfisher from "@/imports/painting-kingfisher.jpg";
import paintingRhino from "@/imports/painting-rhino.jpg";
import paintingProcess01 from "@/imports/painting-portrait-process-01.jpg";
import paintingProcess02 from "@/imports/painting-portrait-process-02.jpg";
import paintingProcess03 from "@/imports/painting-portrait-process-03.jpg";
import paintingProcess04 from "@/imports/painting-portrait-process-04.jpg";
import paintingPortraitFinal from "@/imports/painting-portrait-final.jpg";
import drawing01 from "@/imports/drawing-01.jpg";
import drawing02 from "@/imports/drawing-02.jpg";
import drawing03 from "@/imports/drawing-03.jpg";
import drawing04 from "@/imports/drawing-04.jpg";
import drawing05 from "@/imports/drawing-05.jpg";
import drawing06 from "@/imports/drawing-06.jpg";
import drawing07 from "@/imports/drawing-07.jpg";
import drawing08 from "@/imports/drawing-08.jpg";
import drawing09 from "@/imports/drawing-09.jpg";
import drawing10 from "@/imports/drawing-10.jpg";
import drawing11 from "@/imports/drawing-11.jpg";
import drawing12 from "@/imports/drawing-12.jpg";
import drawing13 from "@/imports/drawing-13.jpg";
import drawing14 from "@/imports/drawing-14.jpg";
import drawing15 from "@/imports/drawing-15.jpg";
import drawing16 from "@/imports/drawing-16.jpg";
import drawingMotion01 from "@/imports/drawing-motion-01.gif";
import drawingMotion02 from "@/imports/drawing-motion-02.gif";
import drawingGraphitePortrait from "@/imports/drawing-graphite-portrait.jpg";
import drawingCharcoalPortrait from "@/imports/drawing-charcoal-portrait.jpg";
import accessoriesFabricShoeWorn from "@/imports/accessories-fabric-shoe-worn.jpg";
import accessoriesFabricShoeProcess from "@/imports/accessories-fabric-shoe-process.jpg";
import accessoriesRedShoeHatSet from "@/imports/accessories-red-shoe-hat-set.jpg";
import accessoriesShoeBagSet from "@/imports/accessories-shoe-bag-set.jpg";
import accessoriesWhiteLaceFront from "@/imports/accessories-white-lace-front.jpg";
import accessoriesWhiteLaceSide from "@/imports/accessories-white-lace-side.jpg";
import noveltiesBottleDecor from "@/imports/novelties-bottle-decor.jpg";
import noveltiesBrandIdentity from "@/imports/novelties-brand-identity.jpg";
import noveltiesBottleSet from "@/imports/novelties-bottle-set.jpg";
import noveltiesKeyringCharacter from "@/imports/novelties-keyring-character.jpg";
import noveltiesKeyringLove from "@/imports/novelties-keyring-love.jpg";
import noveltiesKeyringRain from "@/imports/novelties-keyring-rain.jpg";
import noveltiesKeyringMessage from "@/imports/novelties-keyring-message.jpg";
import noveltiesKeyringPhotography from "@/imports/novelties-keyring-photography.jpg";
import noveltiesKeyringHearts from "@/imports/novelties-keyring-hearts.jpg";
import noveltiesKeyringCharacterPair from "@/imports/novelties-keyring-character-pair.jpg";
import noveltiesKeyringZebra from "@/imports/novelties-keyring-zebra.jpg";
import noveltiesKeyringMkhonto from "@/imports/novelties-keyring-mkhonto.jpg";
import noveltiesPackagingRibbon from "@/imports/novelties-packaging-ribbon.jpg";
import noveltiesPackagingBranded from "@/imports/novelties-packaging-branded.jpg";
import noveltiesPackagingCustom from "@/imports/novelties-packaging-custom.jpg";
import grayciousMerchandise2017 from "@/imports/branding-graycious-merchandise-2017.jpg";
import grayciousIdentity2017 from "@/imports/branding-graycious-identity-2017.jpg";
import grayciousContact2018 from "@/imports/branding-graycious-contact-2018.jpg";
import noveltiesRaffiaVesselProcess from "@/imports/novelties-raffia-vessel-process.jpg";
import noveltiesRaffiaHeartStudy from "@/imports/novelties-raffia-heart-study.jpg";
import ukuMockup from "@/imports/uku_poster_mock_up.png";
import characterSketch from "@/imports/IMG_0561.PNG";
import editorialManifestoImg from "@/imports/editorial-first-things-first-2020.png";
import ghostInGridMagazineLandingImg from "@/imports/ghost-in-grid-magazine-landing.png";
import editorialFoldedManifestoMockupImg from "@/imports/editorial-folded-manifesto-mockup.png";
import webWireframeImg from "@/imports/gracious-mkhonto-double-up-wireframe.png";
import webframeLogoDesignImg from "@/imports/webframe-logo-design.png";
import grayPhotographyLogoImg from "@/imports/gray-photography-logo.png";
import qgVisualsLogoImg from "@/imports/qg-visuals-watermark-logo.png";
import impiBlackTPackagingImg from "@/imports/impi-black-t-packaging.png";
import menziVinylSleevePackagingImg from "@/imports/menzi-vinyl-sleeve-packaging.png";
import menziImpazamoVinylPackagingPosterImg from "@/imports/menzi-impazamo-vinyl-packaging-poster.png";
import menziAlbumArtworkLineImg from "@/imports/menzi-album-artwork-line-illustration.png";
import abstractPosterConstructionImg from "@/imports/abstract-poster-construction.JPG";
import abstractPosterPaintedImg from "@/imports/abstract-poster-painted.JPG";
import ukuvuselelaFractalPoster01 from "@/imports/ukuvuselela-fractal-poster-01.jpg";
import ukuvuselelaFractalPoster02 from "@/imports/ukuvuselela-fractal-poster-02.jpg";
import ukuvuselelaFractalPoster03 from "@/imports/ukuvuselela-fractal-poster-03.jpg";
import ukuvuselelaFractalVideo from "@/imports/behance_uku_fractal_1080.mp4";
import framedNetAbstractIllustrationImg from "@/imports/framed-net-abstract-illustration.png";
import qgVisualsPhotographyBannerImg from "@/imports/qg-visuals-photography-banner.jpg";
import gautaEtengTypesOfWasteImg from "@/imports/gauta-eteng-types-of-waste.png";
import gautaEtengHouseholdWasteMapImg from "@/imports/gauta-eteng-household-waste-map.png";
import gautaEtengGoldRushLandingImg from "@/imports/gauta-eteng-gold-rush-landing.png";
import bobRossLogoBlackWebImg from "@/imports/bob-ross-logo-black-webdesign.png";
import bobRossWebBrandingImg from "@/imports/bob-ross-webdesign-branding.png";
import bobRossLogoWhiteWebImg from "@/imports/bob-ross-logo-white-webdesign.png";
import motionDesignSketches01Img from "@/imports/motion-design-sketches-01.jpg";
import motionDesignSketches02Img from "@/imports/motion-design-sketches-02.jpg";
import drawingLuckyStarFireCanImg from "@/imports/drawing-lucky-star-fire-can.JPG";
import drawingLuckyStarFireStudyImg from "@/imports/drawing-lucky-star-fire-study.jpg";
import wireSculptureFishImg from "@/imports/wire-sculpture-fish.JPG";
import wireSculptureCanImg from "@/imports/wire-sculpture-can.JPG";
import wireSculptureCompositionImg from "@/imports/wire-sculpture-composition.JPG";
import luckyStar3dCloseupImg from "@/imports/lucky-star-3d-modelling-fish-closeup.JPG";
import luckyStar3dProcessImg from "@/imports/lucky-star-3d-modelling-process.JPG";
import luckyStar3dFinalImg from "@/imports/lucky-star-3d-final-render.png";
import luckyStar3dCampaign01 from "@/imports/lucky-star-3d-campaign-01.jpg";
import luckyStar3dCampaign02 from "@/imports/lucky-star-3d-campaign-02.jpg";
import luckyStar3dCampaign03 from "@/imports/lucky-star-3d-campaign-03.jpg";
import luckyStar3dCampaign04 from "@/imports/lucky-star-3d-campaign-04.jpg";
import luckyStar3dCampaign05 from "@/imports/lucky-star-3d-campaign-05.jpg";
import luckyStar3dCampaign06 from "@/imports/lucky-star-3d-campaign-06.jpg";
import luckyStar3dCampaign07 from "@/imports/lucky-star-3d-campaign-07.jpg";
import luckyStar3dCampaign08 from "@/imports/lucky-star-3d-campaign-08.jpg";
import luckyStar3dCampaign09 from "@/imports/lucky-star-3d-campaign-09.jpg";
import svgFigs108 from "@/imports/QG_rpl_prog.svg_for_figs_108.svg";
import svgFigs109 from "@/imports/QG_rpl_prog.svg_for_figs_109.svg";
import svgFigs111 from "@/imports/QG_rpl_prog.svg_for_figs_111.svg";
import svgFigs124 from "@/imports/QG_rpl_prog.svg_for_figs_124.svg";
import svgFigs125 from "@/imports/QG_rpl_prog.svg_for_figs_125.svg";
import svgFigs126 from "@/imports/QG_rpl_prog.svg_for_figs_126.svg";
import svgFigs128 from "@/imports/QG_rpl_prog.svg_for_figs_128.svg";
import svgFigs129 from "@/imports/QG_rpl_prog.svg_for_figs_129.svg";
import svgFigs130 from "@/imports/QG_rpl_prog.svg_for_figs_130.svg";
import svgFigs148 from "@/imports/QG_rpl_prog.svg_for_figs_148.svg";
import svgFigs149 from "@/imports/QG_rpl_prog.svg_for_figs_149.svg";
import svgFigs151 from "@/imports/QG_rpl_prog.svg_for_figs_151.svg";
import svgFigs157 from "@/imports/QG_rpl_prog.svg_for_figs_157.svg";
import svgFigs159 from "@/imports/QG_rpl_prog.svg_for_figs_159.svg";
import editableKeynoteSlides from "@/imports/editable-keynote-slides.json";

// ─── Uploaded PDF assets — rendered at startup via PDF.js ────────────────────
import pdf_gauta_mood    from "@/imports/3dc54475a1-84cd72d2af126de0a9a7.pdf";
import pdf_bio_simple    from "@/imports/7fddb005b3-06757eb5488219772ef5.pdf";
import pdf_bio_mono      from "@/imports/12c3199672-0ef72f5dab103b9140f6.pdf";
import pdf_toc           from "@/imports/1693f01fb8-bb7ab92779e81593df4a.pdf";
import pdf_final_res     from "@/imports/2ef48157ed-fd17c249c3f18f55a356.pdf";
import pdf_back_cover    from "@/imports/014c1a7ac9-dc66dd9c4521034403bd.pdf";
import pdf_brand_mood    from "@/imports/112452aaac-9043c1dd684d2b77f532.pdf";
import pdf_uku_award     from "@/imports/Ukuvuselela_win_pdf.php.pdf";
import pdf_cd_cover      from "@/imports/gracious-mkhonto-dsp1-cd-cover.pdf";
import pdf_storyboard    from "@/imports/cupcake-driver-storyboard-motion.pdf";
import pdf_posters       from "@/imports/gracious-mkhonto-dsp2-poster-triptych.pdf";
import pdf_product_photo from "@/imports/gracious-mkhonto-product-photography-boards.pdf";
import pdf_character_sheet from "@/imports/character-design-sheet-figma-make.pdf";
import pdf_supporting_certificate from "@/imports/supporting-certificate-cu1jie.pdf";
import pdf_hulk_poster from "@/imports/semiotics-hulk-final-poster.pdf";

const ART_DIRECTION_CAMPAIGNS = "Part 04 — Art Direction · Campaign Systems";

// Metadata for each uploaded PDF — section placement and label
const UPLOADED_PDFS = [
  { url: pdf_toc,        id: "pdf-toc",        title: "TOC & Core Competencies",    section: "Uploaded Artwork" },
  { url: pdf_bio_simple, id: "pdf-bio-s",      title: "Biography & Philosophy",     section: "Uploaded Artwork" },
  { url: pdf_bio_mono,   id: "pdf-bio-m",      title: "Monograph — Biography",      section: "Uploaded Artwork" },
  { url: pdf_gauta_mood, id: "pdf-gauta-mood", title: "Gauta Eteng — Mood Board",   section: ART_DIRECTION_CAMPAIGNS },
  { url: pdf_cd_cover,   id: "pdf-cd-cover",   title: "CD Cover Design",            section: "Part 03 — CD Cover Design" },
  { url: pdf_posters,    id: "pdf-posters",    title: "Poster Triptych Mock Up",     section: "Part 03 — Poster Design" },
  { url: pdf_hulk_poster, id: "pdf-hulk-poster", title: "Semiotics Hulk Final Poster", section: "Part 03 — Poster Design" },
  { url: pdf_storyboard, id: "pdf-storyboard", title: "Cupcake Driver Storyboard",   section: "Part 03 — Motion & 3D" },
  { url: pdf_product_photo, id: "pdf-product-photo", title: "Product Photography Boards", section: "Part 03 — Photography" },
  { url: pdf_character_sheet, id: "pdf-character-sheet", title: "Lucky Star Character Design Sheet", section: ART_DIRECTION_CAMPAIGNS },
  { url: pdf_supporting_certificate, id: "pdf-supporting-certificate", title: "Supporting Certificate", section: "Part 07 — Supporting" },
  { url: pdf_brand_mood, id: "pdf-brand-mood", title: "Brand Identity Spread",      section: "Uploaded Artwork" },
  { url: pdf_final_res,  id: "pdf-final",      title: "Final Resolution Spreads",   section: "Uploaded Artwork" },
  { url: pdf_back_cover, id: "pdf-back",       title: "Back Cover & Colophon",      section: "Uploaded Artwork" },
  { url: pdf_uku_award,  id: "pdf-award",      title: "AIDA Award Certificate",     section: "Uploaded Artwork" },
] as const;

const keynoteSectionForPage = (page: number) => {
  if (page <= 7) return "Front Matter";
  if (page <= 31) return "Part 01 — Designer";
  if (page <= 34) return "Part 02 — Evidence";
  if (page <= 151) return "Part 03 — Portfolio";
  if (page <= 164) return "Part 07 — Supporting";
  if (page <= 172) return "Part 03 — Photography";
  if (page <= 181) return "Part 02 — Evidence";
  if (page <= 192) return "Part 03 — Portfolio";
  if (page === 193) return "Part 07 — Supporting";
  return "Back Matter";
};

const SUBMISSION_PLACEHOLDERS = [
  {
    title: "Fig. 108 — Photography Evidence",
    section: "QG RPL Prog Placeholders · Photography",
    src: svgFigs108,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_108.svg. Editable placeholder for the Photography section."
  },
  {
    title: "Fig. 109 — Photography Evidence",
    section: "QG RPL Prog Placeholders · Photography",
    src: svgFigs109,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_109.svg. Editable placeholder for the Photography section."
  },
  {
    title: "Fig. 111 — Photography Evidence",
    section: "QG RPL Prog Placeholders · Photography",
    src: svgFigs111,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_111.svg. Editable placeholder for the Photography section."
  },
  {
    title: "Fig. 124 — Advertising Evidence",
    section: "QG RPL Prog Placeholders · Advertising",
    src: svgFigs124,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_124.svg. Editable placeholder for the Advertising section."
  },
  {
    title: "Fig. 125 — Advertising Evidence",
    section: "QG RPL Prog Placeholders · Advertising",
    src: svgFigs125,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_125.svg. Editable placeholder for the Advertising section."
  },
  {
    title: "Fig. 126 — Portfolio Evidence",
    section: "QG RPL Prog Placeholders · Portfolio",
    src: svgFigs126,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_126.svg. Editable placeholder based on the QG RPL programme evidence file."
  },
  {
    title: "Fig. 128 — Motion & 3D Evidence",
    section: "QG RPL Prog Placeholders · Motion & 3D",
    src: svgFigs128,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_128.svg. Editable placeholder for the Motion & 3D section."
  },
  {
    title: "Fig. 129 — Motion & 3D Evidence",
    section: "QG RPL Prog Placeholders · Motion & 3D",
    src: svgFigs129,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_129.svg. Editable placeholder for the Motion & 3D section."
  },
  {
    title: "Fig. 130 — Portfolio Evidence",
    section: "QG RPL Prog Placeholders · Portfolio",
    src: svgFigs130,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_130.svg. Editable placeholder based on the QG RPL programme evidence file."
  },
  {
    title: "Fig. 148 — Gauta Eteng Mood Board",
    section: "QG RPL Prog Placeholders · Art Direction",
    src: svgFigs148,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_148.svg. Editable placeholder for the Gauta Eteng Art Direction section."
  },
  {
    title: "Fig. 149 — Gauta Eteng Mood Board",
    section: "QG RPL Prog Placeholders · Art Direction",
    src: svgFigs149,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_149.svg. Editable placeholder for the Gauta Eteng Art Direction section."
  },
  {
    title: "Fig. 151 — Case Study Documentation",
    section: "QG RPL Prog Placeholders · Case Studies",
    src: svgFigs151,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_151.svg. Editable placeholder based on the QG RPL programme evidence file."
  },
  {
    title: "Fig. 157 — Personal Brand Evidence",
    section: "QG RPL Prog Placeholders · Personal Brand",
    src: svgFigs157,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_157.svg. Editable placeholder for the Personal Brand project."
  },
  {
    title: "Fig. 159 — Supporting Documents",
    section: "QG RPL Prog Placeholders · Supporting",
    src: svgFigs159,
    note: "Chosen from src/imports/QG_rpl_prog.svg_for_figs_159.svg. Editable placeholder based on the QG RPL programme evidence file."
  }
] as const;

// ─── Canvas ──────────────────────────────────────────────────────────────────
const PW = 1123;
const PH = 794;

// ─── Palette ─────────────────────────────────────────────────────────────────
const c = {
  bg:    "#EDEAE5",
  white: "#FAFAFA",
  ink:   "#1A1815",
  ochre: "#C49A45",
  brown: "#4A3B32",
  olive: "#6B705C",
  grey:  "#E0DFDB",
  mid:   "#969188",
  rule:  "#D0CCC6",
  dark:  "#1C1915",
};

// ─── Typography ──────────────────────────────────────────────────────────────
const Fd = "'Playfair Display', Georgia, serif";
const Fb = "'Inter', system-ui, sans-serif";
const Fm = "'DM Mono', 'Courier New', monospace";

// ─── Chrome heights ───────────────────────────────────────────────────────────
const TH = 42;
const SH = 30;
const FH = 34;
const CH = PH - TH - SH - FH;
const M  = 52;

// ─── Atoms ────────────────────────────────────────────────────────────────────
const HR = ({ color = c.rule, mt = 0, mb = 0 }: { color?: string; mt?: number; mb?: number }) => (
  <div style={{ height: 0.5, background: color, marginTop: mt, marginBottom: mb }} />
);

const CapLabel = ({ children, color = c.mid }: { children: React.ReactNode; color?: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
    <div style={{ width: 20, height: 1, background: color }} />
    <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase" as const, color }}>{children}</span>
  </div>
);

// ─── Page chrome ─────────────────────────────────────────────────────────────
function TopNav({ right = "A4 LANDSCAPE · 297 × 210 MM", active = "" }: { right?: string; active?: string }) {
  return (
    <div className="editorial-top-nav" style={{ height: TH, borderBottom: `0.5px solid ${c.rule}`, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `0 ${M}px`, flexShrink: 0 }}>
      <span className="editorial-running-title" style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ink, fontWeight: 600 }}>RPL PORTFOLIO</span>
      <div className="editorial-nav-index" style={{ display: "flex", gap: 28, justifySelf: "center" }}>
        {(["MANIFESTO", "INDEX", "ARCHIVE"] as const).map(n => (
          <span key={n} style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: n === active ? c.ochre : c.mid }}>{n}</span>
        ))}
      </div>
      <span className="editorial-format" style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.1em", color: c.mid, justifySelf: "end" }}>{right}</span>
    </div>
  );
}

function SubHeader({ left = "", right = "" }: { left?: string; right?: string }) {
  return (
    <div className="editorial-subheader" style={{ height: SH, borderBottom: `0.5px solid ${c.rule}`, display: "flex", alignItems: "center", padding: `0 ${M}px`, gap: 16, flexShrink: 0 }}>
      <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ochre, flexShrink: 0 }}>{left}</span>
      <div style={{ flex: 1, height: 0.5, background: c.rule }} />
      <span style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.1em", color: c.mid, flexShrink: 0 }}>{right}</span>
    </div>
  );
}

function PageFooter({ center = "", right = "RECOGNITION OF PRIOR LEARNING" }: { center?: string; right?: string }) {
  return (
    <div className="editorial-footer" style={{ height: FH, borderTop: `0.5px solid ${c.rule}`, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `0 ${M}px`, flexShrink: 0 }}>
      <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: c.mid }}>2026 Qinisile Gracious Mkhonto, Graphic Design Portfolio</span>
      <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid, justifySelf: "center" }}>{center}</span>
      <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid, justifySelf: "end" }}>{right}</span>
    </div>
  );
}

function EPage({ children, section = "", page = "", navActive = "", footerRight }: {
  children: React.ReactNode; section?: string; page?: string; navActive?: string; footerRight?: string;
}) {
  return (
    <article className="editorial-page" style={{ width: PW, height: PH, background: c.bg, display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: Fb, color: c.ink }}>
      <TopNav active={navActive} />
      <SubHeader left={section} right={page} />
      <div className="editorial-page-content" style={{ height: CH, overflow: "hidden", position: "relative" }}>{children}</div>
      <PageFooter right={footerRight} />
    </article>
  );
}

function SubmissionPlaceholderPage({ item, index }: { item: (typeof SUBMISSION_PLACEHOLDERS)[number]; index: number }) {
  return (
    <EPage section={item.section} page={`PLACEHOLDER ${String(index + 1).padStart(2, "0")}`} navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `34px ${M}px`, display: "grid", gridTemplateColumns: "0.88fr 1.12fr", gap: 42 }}>
        <div style={{ borderRight: `0.5px solid ${c.rule}`, paddingRight: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <CapLabel color={c.ochre}>QG RPL Prog File</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 44, lineHeight: 1, color: c.ink, letterSpacing: "-0.02em", marginBottom: 18 }}>{item.title}</div>
            <HR color={c.rule} mb={18} />
            <p style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.75, color: c.brown, margin: 0 }}>{item.note}</p>
          </div>
          <div style={{ background: c.grey, borderLeft: `2px solid ${c.ochre}`, padding: "14px 16px" }}>
            <div style={{ fontFamily: Fm, fontSize: 8, color: c.mid, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 7 }}>Working Note</div>
            <div style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.55, color: c.ink }}>
              Placeholder only. Replace with final text, artwork, or rendered evidence when the project is ready.
            </div>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", height: "78%", border: `0.5px solid ${c.rule}`, background: c.white, display: "flex", alignItems: "center", justifyContent: "center", padding: 18 }}>
            <ImageWithFallback
              src={item.src}
              alt={`${item.title} preview`}
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <Corners />
        </div>
      </div>
    </EPage>
  );
}

// ─── Corner marks ─────────────────────────────────────────────────────────────
const Corners = () => (
  <>
    {[[0, 0, true, false, true, false], [0, undefined, true, false, false, true],
      [undefined, 0, false, true, true, false], [undefined, undefined, false, true, false, true]
    ].map(([t, b, bt, bb, bl, br], i) => (
      <div key={i} style={{ position: "absolute", top: t as any, bottom: b as any, left: bl ? 0 : undefined, right: br ? undefined : (bl ? undefined : 0), width: 8, height: 8, borderTop: bt ? `0.5px solid ${c.rule}` : undefined, borderBottom: bb ? `0.5px solid ${c.rule}` : undefined, borderLeft: bl ? `0.5px solid ${c.rule}` : undefined, borderRight: !bl ? `0.5px solid ${c.rule}` : undefined }} />
    ))}
  </>
);

// ─── REUSABLE: Part Opener ─────────────────────────────────────────────────────
function PartOpener({ partNum, partTitle, subtitle, quote, sections, accent = c.ochre }: {
  partNum: string; partTitle: string; subtitle: string; quote: string; sections: string[]; accent?: string;
}) {
  return (
    <div style={{ width: PW, height: PH, background: c.dark, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      <TopNav right="VOL. 1 — 2026" />
      <SubHeader left={subtitle} right={`PART ${partNum}`} />
      <div style={{ flex: 1, display: "flex", position: "relative" }}>
        {/* Large part number */}
        <div style={{ width: 280, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRight: `0.5px solid rgba(255,255,255,0.06)` }}>
          <div style={{ fontFamily: Fd, fontSize: 160, fontWeight: 700, color: accent, lineHeight: 1, opacity: 0.85, letterSpacing: "-0.04em" }}>{partNum}</div>
        </div>
        {/* Content */}
        <div className="premium-project-copy premium-project-copy--dark" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: `0 ${M}px` }}>
          <div className="premium-project-category" style={{ fontFamily: Fb, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(250,250,250,0.55)" }}>{subtitle}</div>
          <div className="premium-project-title" style={{ fontFamily: Fd, fontWeight: 400, color: c.white, letterSpacing: "-0.035em" }}>{partTitle}</div>
          <div style={{ width: 40, height: 1, background: accent, marginBottom: 24 }} />
          <div className="premium-project-body" style={{ fontFamily: Fd, fontStyle: "italic", color: accent, maxWidth: 560 }}>"{quote}"</div>
          {/* Sections index */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px 16px" }}>
            {sections.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 3, height: 3, background: accent, opacity: 0.6 }} />
                <span style={{ fontFamily: Fb, fontSize: 9.5, color: "rgba(250,250,250,0.45)", letterSpacing: "0.04em" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageFooter center="" right="" />
    </div>
  );
}

// ─── REUSABLE: Discipline Page ─────────────────────────────────────────────────
function DisciplinePage({ title, section, page, description, subItems, imgUrl, accent = c.ochre, note }: {
  title: string; section: string; page: string; description: string;
  subItems: string[]; imgUrl: string; accent?: string; note?: string;
}) {
  return (
    <EPage section={section} page={page} navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        {/* Left — text */}
        <div className="premium-project-copy" style={{ padding: `28px ${M}px 24px`, borderRight: `0.5px solid ${c.rule}`, display: "flex", flexDirection: "column" }}>
          <div className="premium-project-category" style={{ color: accent }}>{section}</div>
          <div className="premium-project-title" style={{ fontFamily: Fd, fontWeight: 400, color: c.ink, letterSpacing: "-0.035em" }}>{title}</div>
          <HR color={c.rule} mb={0} />
          <p className="premium-project-body" style={{ fontFamily: Fb, color: c.ink }}>{description}</p>
          <div>
            {subItems.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "7px 0", borderBottom: `0.5px solid ${c.rule}` }}>
                <div style={{ width: 14, height: 0.5, background: accent }} />
                <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{item}</span>
              </div>
            ))}
          </div>
          {note && (
            <div style={{ background: c.grey, padding: "14px 18px", borderLeft: `2px solid ${accent}`, marginTop: "auto" }}>
              <span style={{ fontFamily: Fd, fontSize: 12, fontStyle: "italic", color: c.brown }}>{note}</span>
            </div>
          )}
        </div>
        {/* Right — image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={imgUrl} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,24,21,0.5) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 16, left: 20 }}>
            <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(250,250,250,0.7)", background: "rgba(26,24,21,0.4)", padding: "3px 8px" }}>SELECTED WORK</span>
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FRONT MATTER
// ══════════════════════════════════════════════════════════════════════════════

function Cover() {
  return (
    <div style={{ width: PW, height: PH, background: c.dark, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ height: TH, borderBottom: `0.5px solid rgba(255,255,255,0.08)`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `0 ${M}px`, flexShrink: 0 }}>
        <span style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(250,250,250,0.8)", fontWeight: 600 }}>RPL PORTFOLIO</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["MANIFESTO", "INDEX", "ARCHIVE"].map(n => (
            <span key={n} style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(250,250,250,0.25)" }}>{n}</span>
          ))}
        </div>
        <span style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.1em", color: c.ochre }}>VOL. 1 — 2026</span>
      </div>
      <div style={{ height: 0.5, background: c.ochre, opacity: 0.5 }} />
      <div style={{ flex: 1, display: "flex" }}>
        {/* Left */}
        <div style={{ width: "52%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `36px ${M}px 32px` }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="56" height="56" viewBox="0 0 56 56">
              <polygon points="28,3 53,28 28,53 3,28" fill="none" stroke={c.ochre} strokeWidth="1"/>
              <polygon points="20,22 36,22 28,37" fill={c.ochre}/>
            </svg>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: Fd, fontSize: 34, fontWeight: 600, color: c.white, marginBottom: 10 }}>Editorial RPL Portfolio</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <div style={{ flex: 1, height: 0.5, background: "rgba(255,255,255,0.12)" }} />
              <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: c.mid }}>RECOGNITION OF PRIOR LEARNING</span>
              <div style={{ flex: 1, height: 0.5, background: "rgba(255,255,255,0.12)" }} />
            </div>
            <div style={{ fontFamily: Fd, fontSize: 13, fontStyle: "italic", color: "rgba(250,250,250,0.4)" }}>A document of process, provenance,<br/>and the permanence of craft.</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 8 }}>SUBMITTED BY</div>
            <div style={{ fontFamily: Fd, fontSize: 21, fontWeight: 600, color: c.white, marginBottom: 6 }}>Qinisile Gracious Mkhonto</div>
            <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>BA DESIGN — COMMUNICATION DESIGN · 2026</div>
          </div>
        </div>
        <div style={{ width: 0.5, background: "rgba(255,255,255,0.06)" }} />
        {/* Right portrait */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <ImageWithFallback src={portraitImg} alt="Qinisile Gracious Mkhonto" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", opacity: 0.2 }} />
          <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center", whiteSpace: "nowrap" as const }}>
            <span style={{ fontFamily: Fb, fontSize: 7, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "rgba(250,250,250,0.2)" }}>RPL PORTFOLIO · VOL. 1 · 2026</span>
          </div>
        </div>
      </div>
      <div style={{ height: 0.5, background: c.ochre, opacity: 0.3 }} />
      <div style={{ height: FH, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `0 ${M}px` }}>
        <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: c.mid }}>2026 Qinisile Gracious Mkhonto, Graphic Design Portfolio</span>
        <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>RECOGNITION OF PRIOR LEARNING</span>
      </div>
    </div>
  );
}

function TitlePage() {
  return (
    <EPage section="TITLE PAGE" page="P. 01" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: `0 ${M * 2}px` }}>
        <Corners />
        <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 28 }}>RECOGNITION OF PRIOR LEARNING</div>
        <HR color={c.rule} mb={28} />
        <div style={{ fontFamily: Fd, fontSize: 52, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", color: c.ink, marginBottom: 12 }}>Bachelor of Arts<br/>in Design</div>
        <div style={{ fontFamily: Fd, fontSize: 28, fontStyle: "italic", color: c.ochre, marginBottom: 36 }}>Communication Design</div>
        <HR color={c.rule} mb={32} />
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "10px 0" }}>
          {[["APPLICANT", "Qinisile Gracious Mkhonto"], ["QUALIFICATION", "BA Design (Communication Design)"], ["INSTITUTION", "University of Johannesburg"], ["SUBMISSION", "November 2026"], ["ARCHIVE REF.", "RPL–2026–GE–V01"]].map(([k, v], i) => (
            <React.Fragment key={i}>
              <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>{k}</span>
              <span style={{ fontFamily: Fb, fontSize: 12, color: c.ink }}>{v}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function ConsolidatedDesignSource() {
  const mergedItems = [
    ["Source", "Premium Editorial Portfolio Design — Figma Make"],
    ["Local App", "Editable React portfolio with PDF and PPTX export"],
    ["Layout System", "Editorial page structure, discipline sections, galleries, evidence pages, and case studies"],
    ["Added Evidence", "Submissions, photography, advertising, poster, web, personal brand, and Motion & 3D assets"],
    ["Safety", "Non-destructive import flow blocks PowerPoint, macro, script, archive, and installer files"],
  ];

  const outputs = ["Editable browser app", "View-only share mode", "PDF export", "Editable text PPTX export", "Flipbook preview", "Book, brochure, and Behance presentation starters"];

  return (
    <EPage section="CONSOLIDATED DESIGN SOURCE" page="P. 02" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `34px ${M}px`, display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 44 }}>
        <div style={{ borderRight: `0.5px solid ${c.rule}`, paddingRight: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <CapLabel color={c.ochre}>Source Merge</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 46, lineHeight: 0.98, letterSpacing: "-0.02em", color: c.ink, marginBottom: 18 }}>
              Premium<br/>Editorial<br/>Portfolio
            </div>
            <HR color={c.rule} mb={18} />
            <p style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.75, color: c.brown, margin: 0 }}>
              This app consolidates the linked Figma Make portfolio design with the working QG RPL evidence archive. The original editorial structure remains the design foundation; the current version adds editable pages, safer asset handling, and export-ready portfolio production.
            </p>
          </div>
          <div style={{ background: c.dark, color: c.white, padding: "16px 18px", borderLeft: `3px solid ${c.ochre}` }}>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 8 }}>Figma Make Reference</div>
            <div style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.6, color: "rgba(250,250,250,0.78)", wordBreak: "break-all" as const }}>
              figma.com/make/w79qdJnWymlKENWtewikhX/Premium-Editorial-Portfolio-Design
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateRows: "1fr auto", gap: 22 }}>
          <div>
            {mergedItems.map(([label, value], i) => (
              <div key={label} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, padding: "12px 0", borderBottom: `0.5px solid ${c.rule}` }}>
                <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: i === 0 ? c.ochre : c.mid }}>{label}</div>
                <div style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.55, color: c.ink }}>{value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: c.white, border: `0.5px solid ${c.rule}`, padding: 20 }}>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 14 }}>Consolidated Outputs</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 22px" }}>
              {outputs.map((item, i) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontFamily: Fm, fontSize: 9, color: c.ochre }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

// Comprehensive TOC showing all 7 parts
function TableOfContents() {
  const parts = [
    {
      part: "Front Matter",
      items: [["01", "Cover"], ["02", "Title Page"], ["03", "Table of Contents"], ["04", "Cover Letter"], ["05", "Executive Summary"], ["06", "Programme Framework — B8CD2Q"], ["07", "Curriculum Vitae"]],
    },
    {
      part: "Part One — Designer",
      color: c.ochre,
      items: [["01", "Professional Profile"], ["02", "Design Philosophy"], ["03", "My Strengths (×10)"], ["04", "Reflective Learning Statement"]],
    },
    {
      part: "Part Two — Evidence of Learning",
      color: c.olive,
      items: [["01", "Qualification Outcome Mapping"], ["02", "Evidence Matrix"]],
    },
    {
      part: "Part Three — Design Portfolio",
      color: c.ochre,
      items: [
        ["—", "Portfolio Overview"],
        ["—", "Standard Project Template"],
        ["01", "Brand Identity"], ["02", "Packaging Design"], ["03", "Editorial Design"],
        ["04", "Typography"], ["05", "Poster Design"], ["06", "Advertising"],
        ["07", "Photography"], ["08", "Illustration"], ["09", "Digital Design"],
        ["10", "Motion Design"], ["11", "Three-Dimensional"], ["12", "Research"],
      ],
    },
    {
      part: "Featured Case Studies",
      color: c.brown,
      items: [["—", "Ghost in the Grid"], ["—", "Communication Arts Magazine"], ["—", "Lucky Star Campaign"], ["—", "Ukuvuselela"]],
    },
    {
      part: "Part Four — Professional Practice",
      color: c.mid,
      items: [["01", "Professional Workflow"], ["02", "Art Direction"], ["03", "Leadership & Knowledge Sharing"]],
    },
    {
      part: "Part Five — Research & Writing",
      color: c.mid,
      items: [["01", "Academic Writing & Essays"], ["02", "Design Theory & Reflection"]],
    },
    {
      part: "Part Six — Awards",
      color: c.mid,
      items: [["01", "Africa International Design Award"], ["02", "Certificates & Recognition"]],
    },
    {
      part: "Part Seven — Supporting Documents",
      color: c.mid,
      items: [["—", "CV · Transcripts · Certificates · Letters"], ["—", "Behance · LinkedIn · Adobe"]],
    },
    {
      part: "Back Matter",
      items: [["—", "References (Academic / Professional / Community)"], ["—", "Appendices A–L"], ["—", "Design Rationale & Colophon"], ["—", "Declaration"]],
    },
  ];

  const half = Math.ceil(parts.length / 2);

  return (
    <EPage section="TABLE OF CONTENTS" page="P. 03" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 20 }}>CONTENTS — RECOGNITION OF PRIOR LEARNING PORTFOLIO</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
          {[parts.slice(0, half), parts.slice(half)].map((col, ci) => (
            <div key={ci}>
              {col.map((sec, si) => (
                <div key={si} style={{ marginBottom: 14 }}>
                  <div style={{ fontFamily: Fd, fontSize: 12, fontStyle: "italic", color: sec.color || c.ink, marginBottom: 5 }}>{sec.part}</div>
                  {sec.items.map(([num, title], ti) => (
                    <div key={ti} style={{ display: "flex", alignItems: "baseline", gap: 0, borderTop: `0.5px solid ${c.rule}`, padding: "5px 0" }}>
                      <span style={{ fontFamily: Fm, fontSize: 8, color: sec.color || c.mid, width: 20, flexShrink: 0, opacity: num === "—" ? 0.4 : 1 }}>{num}</span>
                      <span style={{ fontFamily: Fb, fontSize: 10, color: c.ink, flex: 1 }}>{title}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function CoverLetter() {
  return (
    <EPage section="COVER LETTER" page="P. 04">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        <div style={{ padding: `28px ${M}px`, borderRight: `0.5px solid ${c.rule}` }}>
          <CapLabel>Cover Letter</CapLabel>
          <div style={{ fontFamily: Fb, fontSize: 11.5, color: c.ink, lineHeight: 1.7, marginBottom: 16 }}>
            The RPL Assessor<br/>Faculty of Art, Design and Architecture<br/>University of Johannesburg
          </div>
          <HR color={c.rule} mb={16} />
          <div style={{ fontFamily: Fb, fontSize: 12, color: c.ink, marginBottom: 14 }}>Dear Assessor,</div>
          {["I am writing to submit my Recognition of Prior Learning portfolio in support of my application for the Bachelor of Arts in Design (Communication Design). My 14 years of professional practice (2012–2026) have equipped me with knowledge, skills, and competencies equivalent to those expected of a graduate of this programme.",
            "My design journey spans brand identity, editorial design, typography, photography, illustration, UX/UI, and motion graphics — working for commercial clients, NGOs, government bodies, and cultural institutions. What distinguishes my practice is its research foundation and African-centred methodology.",
            "This portfolio documents evidence across seven structured parts: Designer Profile, Evidence of Learning, Design Portfolio, Professional Practice, Research & Writing, Awards, and Supporting Documents."
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: c.ink, marginBottom: 14 }}>{p}</p>
          ))}
          <div style={{ marginTop: 20 }}>
            <div style={{ height: 36, borderBottom: `0.5px solid ${c.ink}`, display: "flex", alignItems: "flex-end", paddingBottom: 5, marginBottom: 8 }}>
              <span style={{ fontFamily: Fd, fontSize: 18, fontStyle: "italic" }}>Qinisile G. Mkhonto</span>
            </div>
            <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>Applicant Signature · November 2026</span>
          </div>
        </div>
        <div style={{ padding: `28px ${M}px`, background: c.grey, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <CapLabel>Portfolio Structure</CapLabel>
          {[
            ["FRONT MATTER", "Cover, Title, TOC, Letter, Summary, CV"],
            ["PART ONE", "Designer — Profile · Philosophy · Strengths · Reflective Learning"],
            ["PART TWO", "Evidence — Qualification Mapping · Evidence Matrix"],
            ["PART THREE", "Portfolio — 12 Disciplines · Case Studies"],
            ["PART FOUR", "Professional Practice · Leadership"],
            ["PART FIVE", "Research & Writing"],
            ["PART SIX", "Awards & Recognition"],
            ["PART SEVEN", "Supporting Documents"],
            ["BACK MATTER", "References · Appendices A–L · Declaration"],
          ].map(([part, desc], i) => (
            <div key={i} style={{ padding: "9px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 3 }}>{part}</div>
              <div style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function ExecutiveSummary() {
  return (
    <EPage section="EXECUTIVE SUMMARY" page="P. 05">
      <div style={{ position: "absolute", inset: 0, padding: `28px ${M}px 20px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
          <div>
            <CapLabel>Executive Summary</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 32, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: c.ink, marginBottom: 18 }}>A Design Journey<br/>Rooted in Research<br/>and Practice</div>
            <div style={{ borderLeft: `2px solid ${c.ochre}`, paddingLeft: 18, marginBottom: 20 }}>
              <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: c.ochre, lineHeight: 1.45 }}>
                "Design is not mere decoration — it is the architecture of lived meaning."
              </div>
            </div>
            {["Fourteen years of professional practice (2012–2026) across brand identity, editorial design, typography, photography, UX/UI, and motion graphics — spanning commercial, cultural, governmental, and community sectors.",
              "This portfolio is organised into seven parts documenting the full breadth of skills, knowledge, and professional competencies acquired through formal education, independent learning, and sustained practice.",
              "Each section maps directly to the qualification outcomes for BA Design (Communication Design), supported by project evidence, reflective writing, and professional documentation."
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: c.ink, marginBottom: 14 }}>{p}</p>
            ))}
          </div>
          <div>
            <CapLabel>Learning Journey Overview</CapLabel>
            {[
              { label: "Previous Studies", body: "National Diploma: Graphic Design — Tshwane University of Technology. Foundation in visual communication, typography, print production, and design thinking." },
              { label: "Independent Learning", body: "Systematic study of design literature, online certification in UX Design and Motion Graphics, and engagement with international design discourse." },
              { label: "Professional Practice", body: "Fourteen years of client-facing design practice (2012–2026). 20+ projects across commercial, cultural, NGO, and government sectors. Sustained graduate-level competency." },
              { label: "Photography & Research", body: "Professional photography practice as both a service and research methodology. Primary source material for culturally authentic visual communication." },
              { label: "Community Leadership", body: "Community Advisory Board membership, peer mentoring, informal co-lecturer experience in African-centred and user-centred design." },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: `1.5px solid ${i === 0 ? c.ochre : c.rule}`, paddingTop: 12, marginBottom: 14 }}>
                <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink, marginBottom: 6 }}>{item.label}</div>
                <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ─── BA DESIGN PROGRAMME FRAMEWORK ───────────────────────────────────────────
function ProgrammeFramework() {
  const years = [
    {
      year: "Year One",
      focus: "Communication design fundamentals, digital tools, image-making, design history",
      modules: [
        { code: "CD 1", title: "Communication Design 1", credits: 24, topics: ["Design principles & visual layout", "Typography fundamentals", "Basics of branding", "Design research & concept ideation"] },
        { code: "CDT 1", title: "Communication Design Technology 1", credits: 30, topics: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effects"] },
        { code: "VIS 1", title: "Visualisation 1", credits: 24, topics: ["Drawing & scamping", "Photography", "Illustration", "Visualising information & concepts"] },
        { code: "DS 1", title: "Design Studies 1", credits: 24, topics: ["Disciplinary & historical theory", "Cultural theory", "Design and the social world", "Written assignments & debate"] },
        { code: "PDP 1", title: "Professional Design Practice 1", credits: 18, topics: ["Economics & business organisation", "Business culture", "Communication in business contexts"] },
      ],
    },
    {
      year: "Year Two",
      focus: "Communication design practices, digital media, interactive design, industry disciplines",
      modules: [
        { code: "CD 2", title: "Communication Design 2", credits: 40, topics: ["Branding design & principles", "Editorial design", "Infographic design", "Social media & advertising campaign design", "User interface & interaction design", "Social impact design", "Packaging design"] },
        { code: "VIS 2", title: "Visualisation 2", credits: 30, topics: ["Photography", "Illustration", "Drawing", "Motion Graphics", "Visual identity development"] },
        { code: "DS 2", title: "Design Studies 2", credits: 32, topics: ["Intermediate design theory", "Historical & cultural context", "Design and social affect", "Written assignments & debate"] },
        { code: "PDP 2", title: "Professional Design Practice 2", credits: 20, topics: ["Business environment", "Marketing & branding", "Design entrepreneurship"] },
      ],
    },
    {
      year: "Year Three",
      focus: "Advanced practice, portfolio development, industry preparation, experiential work placement",
      modules: [
        { code: "DS 3", title: "Design Studies 3", credits: 50, topics: ["Advanced design theory", "Gender & identity in design", "South African design history", "Taste & class", "Written assignments & debate"] },
        { code: "CD 3", title: "Communication Design 3", credits: 70, topics: ["Self-branding & personal portfolio", "Event design & marketing", "Editorial design", "Advertising & social media campaigns", "UI design & interaction", "Social impact design", "Wayfinding & signage", "Packaging & 3D design", "Experiential work placement", "Intellectual property rights"] },
      ],
    },
  ];

  const careers = ["Graphic & Communication Designer", "Art Director", "Typographic Designer", "Layout Artist", "Illustrator", "Instructional Designer", "Digital Designer", "In-house Designer", "Freelance Designer"];

  return (
    <EPage section="QUALIFICATION FRAMEWORK · B8CD2Q" page="P. 07" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "280px 1fr", overflow: "hidden" }}>

        {/* Left: Programme overview */}
        <div style={{ padding: `24px 22px`, borderRight: `0.5px solid ${c.rule}`, background: c.grey, display: "flex", flexDirection: "column", gap: 0 }}>
          <CapLabel color={c.ochre}>BA Design (Communication Design)</CapLabel>
          <div style={{ fontFamily: Fm, fontSize: 8, color: c.mid, letterSpacing: "0.1em", marginBottom: 12 }}>QUALIFICATION CODE: B8CD2Q</div>
          <div style={{ fontFamily: Fd, fontSize: 20, fontWeight: 600, color: c.ink, lineHeight: 1.2, marginBottom: 14 }}>University of<br/>Johannesburg</div>
          <HR color={c.rule} mb={14} />
          <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.ink, marginBottom: 14 }}>
            Communication Design employs visually strong creative thinkers and problem solvers to communicate clearly to relevant audiences through a variety of visual content — layout, art direction, illustration, animation, data visualisation, and typography.
          </p>
          <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid, marginBottom: 16 }}>
            A full-time, three-year degree preparing graduates for entry-level careers in creative industries and further academic study.
          </p>
          <HR color={c.rule} mb={14} />
          <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 10 }}>ADMISSION REQUIREMENTS</div>
          <div style={{ background: c.white, padding: "10px 12px", marginBottom: 14 }}>
            <div style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink, marginBottom: 4 }}>Minimum APS: <strong>25</strong> with Mathematics</div>
            <div style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>Minimum APS: <strong>26</strong> with Mathematical Literacy</div>
          </div>
          <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 10 }}>CAREER OPPORTUNITIES</div>
          {careers.map((career, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 14, height: 0.5, background: c.ochre, flexShrink: 0, marginTop: 7 }} />
              <span style={{ fontFamily: Fb, fontSize: 10, color: c.ink }}>{career}</span>
            </div>
          ))}
        </div>

        {/* Right: Three-year module structure */}
        <div style={{ overflowY: "hidden", display: "flex", flexDirection: "column" }}>
          {years.map((yr, yi) => (
            <div key={yi} style={{ flex: 1, borderBottom: yi < 2 ? `0.5px solid ${c.rule}` : "none", padding: "14px 24px 10px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                <div style={{ fontFamily: Fd, fontSize: 16, fontWeight: 600, color: c.ink }}>{yr.year}</div>
                <div style={{ height: 0.5, flex: 1, background: c.rule }} />
                <div style={{ fontFamily: Fb, fontSize: 8.5, color: c.mid, maxWidth: 260, textAlign: "right" as const }}>{yr.focus}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${yr.modules.length}, 1fr)`, gap: 6 }}>
                {yr.modules.map((mod, mi) => (
                  <div key={mi} style={{ background: c.grey, padding: "8px 10px", borderTop: `1.5px solid ${mi === 0 ? c.ochre : c.rule}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                      <div style={{ fontFamily: Fm, fontSize: 7.5, color: c.ochre, letterSpacing: "0.08em" }}>{mod.code}</div>
                      <div style={{ fontFamily: Fm, fontSize: 7, color: c.mid }}>{mod.credits} cr</div>
                    </div>
                    <div style={{ fontFamily: Fb, fontSize: 10, fontWeight: 600, color: c.ink, lineHeight: 1.3, marginBottom: 5 }}>{mod.title}</div>
                    {mod.topics.slice(0, 4).map((t, ti) => (
                      <div key={ti} style={{ fontFamily: Fb, fontSize: 8.5, color: c.mid, lineHeight: 1.4, paddingLeft: 6, borderLeft: `1px solid ${c.rule}`, marginBottom: 2 }}>{t}</div>
                    ))}
                    {mod.topics.length > 4 && (
                      <div style={{ fontFamily: Fm, fontSize: 7.5, color: c.ochre, marginTop: 3 }}>+{mod.topics.length - 4} more</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function CurriculumVitae() {
  return (
    <EPage section="CURRICULUM VITAE" page="P. 06">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 220px", overflow: "hidden" }}>
        <div style={{ padding: `24px ${M}px`, borderRight: `0.5px solid ${c.rule}` }}>
          <div style={{ fontFamily: Fd, fontSize: 32, fontWeight: 600, color: c.ink, marginBottom: 4 }}>Qinisile Gracious Mkhonto</div>
          <div style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 20 }}>Communication Designer · Researcher · Photographer</div>
          <HR color={c.rule} mb={18} />
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 10 }}>Employment History</div>
          {[["2015–Present", "Principal Designer / Creative Director", "Qinisile Mkhonto Design Studio, Cape Town"],
            ["2012–2015", "Senior Graphic Designer", "Grid & Form Studio, Johannesburg"],
            ["2010–2012", "Graphic Designer", "Ogilvy Cape Town"],
            ["2009–2010", "Design Intern", "TBWA\\Hunt\\Lascaris, Johannesburg"],
          ].map(([yr, role, co], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 10, padding: "8px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fm, fontSize: 8, color: c.ochre }}>{yr}</span>
              <div><div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink }}>{role}</div><div style={{ fontFamily: Fb, fontSize: 10.5, color: c.mid, marginTop: 2 }}>{co}</div></div>
            </div>
          ))}
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginTop: 16, marginBottom: 10 }}>Education</div>
          {[["2007–2009", "National Diploma: Graphic Design", "Tshwane University of Technology"],
            ["2020–2022", "UX Design · Motion Graphics Certifications", "Coursera · Skillshare · LinkedIn Learning"],
          ].map(([yr, qual, inst], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 10, padding: "8px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fm, fontSize: 8, color: c.ochre }}>{yr}</span>
              <div><div style={{ fontFamily: Fb, fontSize: 11, color: c.ink }}>{qual}</div><div style={{ fontFamily: Fb, fontSize: 10.5, color: c.mid, marginTop: 2 }}>{inst}</div></div>
            </div>
          ))}
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginTop: 16, marginBottom: 10 }}>Community & Leadership</div>
          {[["2018–Present", "Community Advisory Board Member — Khayelitsha Design Initiative"],
            ["2021", "Peer Mentor — African-centred Design Workshop Series"],
          ].map(([yr, role], i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fm, fontSize: 8, color: c.ochre, flexShrink: 0 }}>{yr}</span>
              <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{role}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: `24px 22px`, background: c.grey }}>
          <div style={{ width: "100%", height: 100, background: c.dark, overflow: "hidden", marginBottom: 18 }}>
            <ImageWithFallback src={portraitImg} alt="Q.G. Mkhonto" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }} />
          </div>
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 8 }}>Software</div>
          {["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Adobe Lightroom", "Adobe After Effects", "Figma", "Glyphs App", "Cinema 4D", "Procreate"].map((s, i) => (
            <div key={i} style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink, padding: "4px 0", borderBottom: `0.5px solid ${c.rule}` }}>{s}</div>
          ))}
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.ochre, marginTop: 14, marginBottom: 8 }}>Awards</div>
          {[["2023", "Gold — Design South Africa"], ["2021", "Silver — Design South Africa"], ["2019", "Commendation — Loeries"]].map(([yr, aw], i) => (
            <div key={i} style={{ padding: "5px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fm, fontSize: 8, color: c.ochre }}>{yr} </span>
              <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{aw}</span>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART ONE — DESIGNER
// ══════════════════════════════════════════════════════════════════════════════

function ProfessionalProfile() {
  return (
    <EPage section="PART ONE · BIOGRAPHY & PROFESSIONAL PROFILE" page="P. 02" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "260px 1fr 220px" }}>
        <div style={{ borderRight: `0.5px solid ${c.rule}`, padding: `24px 22px` }}>
          <CapLabel>Biography</CapLabel>
          <div style={{ width: "100%", height: 176, background: c.grey, overflow: "hidden", marginBottom: 14 }}>
            <ImageWithFallback src={portraitImg} alt="Portrait of Qinisile Gracious Mkhonto" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%" }} />
          </div>
          <div style={{ fontFamily: Fd, fontSize: 17, fontWeight: 600, lineHeight: 1.2, marginBottom: 4 }}>Qinisile Gracious<br/>Mkhonto</div>
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 14 }}>COMMUNICATION DESIGNER</div>
          <HR color={c.rule} mb={14} />
          {[["SPECIALISATION", "Social & Env. Campaigns"], ["METHODOLOGY", "African-Centred Design"], ["FOCUS AREA", "User-Centred Research"], ["CAMPAIGN", "Gauta Eteng — SAG12"], ["INSTITUTION", "University of Johannesburg, 2024"]].map(([k, v], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "84px 1fr", padding: "7px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: c.mid }}>{k}</span>
              <span style={{ fontFamily: Fb, fontSize: 10.5, color: i === 3 ? c.ochre : c.ink }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 14 }}>
            <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 10 }}>AREAS OF PRACTICE</div>
            {["Communication Design", "Editorial Design", "Brand Identity", "Typography", "Illustration", "Photography", "Motion Graphics", "UX/UI", "Research", "Visual Communication"].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 4, height: 4, background: i < 4 ? c.ochre : c.rule, borderRadius: "50%", flexShrink: 0, marginTop: 4 }} />
                <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: `24px 36px`, borderRight: `0.5px solid ${c.rule}` }}>
          <CapLabel>Design Philosophy</CapLabel>
          <div style={{ fontFamily: Fd, fontSize: 36, lineHeight: 1.05, color: c.ink }}>Design is not<br/>mere decoration —</div>
          <div style={{ fontFamily: Fd, fontSize: 36, fontStyle: "italic", color: c.ochre, lineHeight: 1.1, marginBottom: 18 }}>it is the architecture<br/>of lived meaning.</div>
          <HR color={c.rule} mb={18} />
          {["My practice is rooted in the conviction that communication design carries the weight of culture, memory, and social agency. Every typographic decision, every spatial relationship, every chromatic choice is a deliberate act of meaning-making.",
            "Informed by African-centred methodologies and Swiss structural precision, I work at the intersection of rigour and poetry. I believe the grid is a framework for freedom — when structure is mastered, expression becomes limitless.",
          ].map((p, i) => <p key={i} style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: c.ink, marginBottom: 14 }}>{p}</p>)}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 8 }}>
            {[["01", "CONCEPTUAL RIGOUR", "Research precedes aesthetics — always."],
              ["02", "CULTURAL INTEGRITY", "African visual systems challenge Eurocentric defaults."],
              ["03", "STRUCTURAL CLARITY", "Grid and hierarchy make complexity navigable."],
              ["04", "SOCIAL IMPACT", "Design is accountable to the communities it represents."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 4 }}>
                  <span style={{ fontFamily: Fd, fontSize: 18, fontStyle: "italic", color: c.ochre, opacity: 0.5 }}>{n}</span>
                  <span style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.ink, fontWeight: 500 }}>{t}</span>
                </div>
                <p style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.6, color: c.mid }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: `24px 20px` }}>
          <CapLabel>Creative Interests</CapLabel>
          {["African-centred design scholarship", "Research-led communication design", "Design for social impact", "Sustainable design practice", "Editorial and publication design", "Typography and type design", "Documentary photography", "Motion & 3D exploration"].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 14, height: 0.5, background: c.ochre, flexShrink: 0, marginTop: 7 }} />
              <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{s}</span>
            </div>
          ))}
          <HR color={c.rule} mt={16} mb={16} />
          <CapLabel>Future Goals</CapLabel>
          {["Research-led communication design", "Design for social impact", "African design scholarship", "Innovation through interdisciplinary practice", "Academic and professional growth"].map((s, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function MyStrengths() {
  const strengths = ["Conceptual Thinking", "Research", "Hyper Observation", "Hyper Focus", "Creative Problem Solving", "Resourcefulness", "Systems Thinking", "Leadership", "Art Direction", "Visual Storytelling"];
  const descriptions: Record<string, string> = {
    "Conceptual Thinking": "Transforming abstract ideas into clear visual communication systems. Research informs every decision.",
    "Research": "Immersing in historical, cultural, social, and visual references before generating ideas.",
    "Hyper Observation": "Noticing subtle patterns, relationships, and opportunities others may overlook.",
    "Hyper Focus": "Sustaining deep concentration for extended periods — thorough iteration, resolved outcomes.",
    "Creative Problem Solving": "Solving complex challenges through clear design thinking. Effective design reduces complexity.",
    "Resourcefulness": "Creating compelling outcomes with limited resources — transforming constraints into solutions.",
    "Systems Thinking": "Designing cohesive systems that work across all touchpoints and applications.",
    "Leadership": "Leading teams, mentoring peers, and facilitating creative processes with clarity.",
    "Art Direction": "Defining visual language, directing photography, and guiding aesthetic decisions.",
    "Visual Storytelling": "Communicating complex narratives through imagery, type, and composition.",
  };
  return (
    <EPage section="PART ONE · MY STRENGTHS" page="OVERVIEW" navActive="MANIFESTO">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 36, marginBottom: 20 }}>
          <div>
            <CapLabel>My Strengths</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 28, color: c.ink, lineHeight: 1.1, letterSpacing: "-0.01em" }}>Ten Strengths.<br/>Each a dedicated<br/>spread.</div>
            <HR color={c.rule} mt={18} mb={14} />
            <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid }}>Each strength spread contains: Overview · Reflection · Evidence · Project Examples</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: 8 }}>
            {strengths.map((s, i) => (
              <div key={i} style={{ background: c.grey, padding: "12px 14px", borderTop: `2px solid ${i < 5 ? c.ochre : c.rule}` }}>
                <div style={{ fontFamily: Fm, fontSize: 8, color: c.ochre, marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 500, color: c.ink, marginBottom: 6, lineHeight: 1.3 }}>{s}</div>
                <div style={{ fontFamily: Fb, fontSize: 9.5, color: c.mid, lineHeight: 1.5 }}>{descriptions[s]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EPage>
  );
}

function ReflectiveLearning() {
  const domains = [
    { title: "Previous University Studies", desc: "National Diploma: Graphic Design. Foundation in visual communication, typography, print production, and critical design thinking." },
    { title: "Independent Learning", desc: "Design literature, online certification, typographic research, and sustained engagement with international design discourse." },
    { title: "Graphic Design", desc: "Fourteen years of professional practice (2012–2026) across major communication design disciplines — client briefs, iterative development, and delivery." },
    { title: "Photography", desc: "Professional documentary, portrait, product, and environmental photography. Post-production workflow. Visual storytelling." },
    { title: "Property Management", desc: "Financial management, team leadership, logistical planning, decision-making under uncertainty — transferable professional competencies." },
    { title: "Farm Management", desc: "Systems thinking, resource management, long-term planning, stakeholder communication in complex operational contexts." },
    { title: "Community Advisory Board", desc: "Ethical reasoning, stakeholder consultation, community-centred communication, governance, and collaborative decision-making." },
    { title: "Professional Practice", desc: "Client communication, project management, presentations, brief analysis, and quality delivery under real-world constraints." },
    { title: "Personal Creative Practice", desc: "Sketchbooks, process books, design journals — sustained visual exploration demonstrating self-directed learning and craft commitment." },
  ];
  return (
    <EPage section="PART ONE · REFLECTIVE LEARNING STATEMENT" page="OVERVIEW">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 36 }}>
          <div>
            <CapLabel>Reflective Learning</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 26, color: c.ink, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 18 }}>Learning Through<br/>Experience</div>
            <div style={{ borderLeft: `2px solid ${c.ochre}`, paddingLeft: 14 }}>
              <p style={{ fontFamily: Fd, fontSize: 12, fontStyle: "italic", color: c.brown, lineHeight: 1.55 }}>
                "The most significant growth occurs at the intersection of discomfort and discipline."
              </p>
            </div>
            <HR color={c.rule} mt={18} mb={14} />
            <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid }}>Reflects how learning occurred through experience, practice, and self-directed inquiry rather than formal education alone.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 24px" }}>
            {domains.map((d, i) => (
              <div key={i} style={{ borderTop: `1.5px solid ${i < 3 ? c.ochre : c.rule}`, paddingTop: 12, marginBottom: 16 }}>
                <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink, marginBottom: 6 }}>{d.title}</div>
                <p style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.65, color: c.mid }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: c.brown, padding: "14px 20px", marginTop: 12 }}>
          <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre }}>CONCLUDING REFLECTION — </span>
          <span style={{ fontFamily: Fd, fontSize: 12, fontStyle: "italic", color: "rgba(250,250,250,0.85)" }}>These experiences collectively demonstrate undergraduate-level competence in communication design — each domain contributing distinct skills, knowledge, and professional dispositions.</span>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART TWO — EVIDENCE OF LEARNING
// ══════════════════════════════════════════════════════════════════════════════

function OutcomeMapping() {
  const rows = [
    ["CD01", "Typography", "Zulu Fractal typeface · editorial systems", "Part 03 · P. 31–36, 58–62", "Process files · App. F, G"],
    ["CD02", "Brand identity", "Ukuvuselela · Gauta Eteng · identity systems", "Part 03 · project evidence", "Briefs + source files · App. A, F"],
    ["CD03", "Editorial design", "Publications · grids · hierarchy · print mockups", "Part 03 · editorial projects", "PDF/source files · App. H, L"],
    ["CD04", "UX/UI", "Research · information architecture · prototypes", "Part 03 · interface projects", "Wireframes + prototypes · App. E, J"],
    ["CD05", "Motion", "Zulu Fractal animation · time-based identity", "Part 03 · motion evidence", "Animation/source files · App. F"],
    ["CD06", "Photography", "Portrait · documentary · product · environment", "Part 03 · galleries", "Original image files · App. D"],
    ["CD07", "Research", "Literature · visual audits · field inquiry · reflection", "Part 05 · research", "Journal + references · App. C, L"],
    ["CD08", "Practice", "Brief analysis · client communication · production", "Part 04 · professional practice", "Approvals/testimonials · App. K"],
  ];
  return (
    <EPage section="PART TWO · QUALIFICATION OUTCOME MAPPING" page="P. 17">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <CapLabel>Qualification Outcome Mapping</CapLabel>
        <div style={{ display: "grid", gridTemplateColumns: "62px 118px 1fr 178px 190px", gap: 12, borderBottom: `1.5px solid ${c.ink}`, paddingBottom: 8, marginBottom: 4 }}>
          {["CODE", "OUTCOME", "ARTEFACT", "EVIDENCE LOCATION", "VERIFICATION"].map((h, i) => (
            <span key={i} style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>{h}</span>
          ))}
        </div>
        {rows.map(([code, outcome, artefact, location, verification], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "62px 118px 1fr 178px 190px", gap: 12, padding: "10px 0", borderBottom: `0.5px solid ${c.rule}`, alignItems: "start" }}>
            <span style={{ fontFamily: Fm, fontSize: 9.5, color: c.ochre }}>{code}</span>
            <span style={{ fontFamily: Fb, fontSize: 10.5, fontWeight: 600, color: c.brown }}>{outcome}</span>
            <span style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.35, color: c.ink }}>{artefact}</span>
            <span style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.35, color: c.mid }}>{location}</span>
            <span style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.35, color: c.ink }}>{verification}</span>
          </div>
        ))}
      </div>
    </EPage>
  );
}

function EvidenceMatrix() {
  const rows = [
    ["2012–2026", "Professional design projects", "Lead designer · art director", "Briefs · approvals · production files", "A · E · H"],
    ["2023–2026", "Gauta Eteng campaign", "Researcher · designer · maker", "Dated photos · material tests · outputs", "A · I"],
    ["2024–2026", "Ukuvuselela / Zulu Fractal", "Researcher · typographer · motion designer", "Sketches · source files · animation", "F · G"],
    ["2026", "Lucky Star campaign", "Art director · illustrator", "Concept sheets · packaging · mockups", "A · G"],
    ["2012–2026", "Photography portfolio", "Photographer · editor", "Original images · commissions", "D"],
    ["2025–2026", "Editorial publications", "Designer · editor", "InDesign/PDF source · print mockups", "H · L"],
    ["2024–2026", "UX/UI projects", "Researcher · interface designer", "Wireframes · prototypes · presentations", "E · J"],
    ["2021–2026", "Research and writing", "Author · researcher", "Essays · journal · references", "C · L"],
    ["2026", "Awards and recognition", "Entrant · designer", "Certificate · award record", "K"],
    ["2012–2026", "Professional verification", "Designer · project lead", "Testimonials · approvals · client records", "K"],
  ];
  return (
    <EPage section="PART TWO · EVIDENCE MATRIX" page="P. 18">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <CapLabel>Evidence Matrix</CapLabel>
        <div style={{ display: "grid", gridTemplateColumns: "82px 160px 1fr 220px 78px", gap: 12, borderBottom: `1.5px solid ${c.ink}`, paddingBottom: 8, marginBottom: 4 }}>
          {["DATE", "EVIDENCE", "MY ROLE", "VERIFICATION", "APPENDIX"].map((h, i) => (
            <span key={i} style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>{h}</span>
          ))}
        </div>
        {rows.map(([date, evidence, role, verification, appendix], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "82px 160px 1fr 220px 78px", padding: "9px 0", borderBottom: `0.5px solid ${c.rule}`, gap: 12 }}>
            <span style={{ fontFamily: Fm, fontSize: 9, color: c.ochre }}>{date}</span>
            <span style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.35, fontWeight: 600, color: c.brown }}>{evidence}</span>
            <span style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.35, color: c.ink }}>{role}</span>
            <span style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.35, color: c.mid }}>{verification}</span>
            <span style={{ fontFamily: Fm, fontSize: 9.5, color: c.ink }}>{appendix}</span>
          </div>
        ))}
        <div style={{ background: c.grey, padding: "12px 18px", borderLeft: `2px solid ${c.ochre}`, marginTop: 14 }}>
          <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.4, color: c.ink, margin: 0 }}>Evidence locations are cross-referenced to project pages and appendices. Original source files, printed artefacts, sketchbooks, image files, and client verification remain available for authenticity review.</p>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART THREE — DESIGN PORTFOLIO
// ══════════════════════════════════════════════════════════════════════════════

function PortfolioOverview() {
  const disciplines = [
    { n: "01", title: "Brand Identity", items: "Logo · Identity Systems · Brand Guidelines · Corporate Identity" },
    { n: "02", title: "Packaging Design", items: "Consumer · Food · Sustainable · Mock-ups" },
    { n: "03", title: "Editorial Design", items: "Communication Arts · Ghost in the Grid · Magazines · Books" },
    { n: "04", title: "Typography", items: "Editorial · Grid Systems · Publication · Experimental" },
    { n: "05", title: "Poster Design", items: "Social Impact · Abstract · Campaign · Illustrative" },
    { n: "06", title: "Advertising", items: "Illustrative Print · Campaigns · Art Direction · Storytelling" },
    { n: "07", title: "Photography", items: "Portrait · Architecture · Environmental · Product · Documentary" },
    { n: "08", title: "Illustration", items: "Analogue · Digital · Mixed Media · Experimental" },
    { n: "09", title: "Digital Design", items: "UX/UI · Web · Responsive · Interface Concepts" },
    { n: "10", title: "Motion Design", items: "Animation · Motion Graphics · Identity · Emblem Animation" },
    { n: "11", title: "Three-Dimensional", items: "Sculpture · Experimental Objects · Material Exploration" },
    { n: "12", title: "Research", items: "Literature · Visual Audits · Case Studies · Mood Boards · Personas" },
  ];
  return (
    <EPage section="PART THREE · DESIGN PORTFOLIO" page="OVERVIEW" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <CapLabel>Design Portfolio — 12 Disciplines</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 24, color: c.ink, lineHeight: 1.1 }}>Projects organised by discipline, not chronology.</div>
          </div>
          <div style={{ background: c.brown, padding: "10px 16px", textAlign: "right" }}>
            <div style={{ fontFamily: Fm, fontSize: 8, color: c.ochre, letterSpacing: "0.12em" }}>STANDARD TEMPLATE</div>
            <div style={{ fontFamily: Fb, fontSize: 10, color: "rgba(250,250,250,0.6)", lineHeight: 1.5, marginTop: 4 }}>
              Hero · Summary · Background · Problem<br/>Research · Audience · Strategy · Concept<br/>Sketches · Iterations · Final · Reflection
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
          {disciplines.map((d) => (
            <div key={d.n} style={{ background: c.grey, padding: "12px 14px", borderTop: `1.5px solid ${parseInt(d.n) <= 6 ? c.ochre : c.rule}` }}>
              <div style={{ fontFamily: Fm, fontSize: 8, color: c.ochre, marginBottom: 5 }}>{d.n}</div>
              <div style={{ fontFamily: Fb, fontSize: 11.5, fontWeight: 600, color: c.ink, marginBottom: 5, lineHeight: 1.2 }}>{d.title}</div>
              <div style={{ fontFamily: Fb, fontSize: 9, color: c.mid, lineHeight: 1.5 }}>{d.items}</div>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function StandardProjectTemplate() {
  const steps = [
    ["Hero Image", "Full-bleed opening spread establishing visual language and project context"],
    ["Project Summary", "One-paragraph overview: what, why, who, outcome"],
    ["Background", "Context — social, cultural, commercial, historical"],
    ["Problem Statement", "Precise articulation of the communication challenge"],
    ["Objectives", "Numbered list of measurable design outcomes"],
    ["Research", "Methods: secondary, primary, visual, competitor, user"],
    ["Target Audience", "Primary/secondary audiences · needs · behaviour · insights"],
    ["Strategy", "Communication strategy derived from research insights"],
    ["Concept Development", "Initial ideas · sketches · mood boards · visual exploration"],
    ["Iterations", "Version 1–3 · testing · refinement process"],
    ["Design Development", "Art direction · typography · colour system · photography"],
    ["Final Outcome", "Large images describing typography, colour, composition, production"],
    ["Reflection", "What worked · challenges · lessons · future improvements"],
    ["Learning Outcomes", "Design Thinking · Typography · Branding · Communication · Research"],
    ["Software Used", "Tools list with specific versions"],
    ["Evidence", "☐ Sketches ☐ Mood Boards ☐ Research ☐ Process ☐ Final ☐ Mock-ups"],
  ];
  return (
    <EPage section="PART THREE · STANDARD PROJECT TEMPLATE" page="TEMPLATE SPEC" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <CapLabel color={c.ochre}>Standard Project Template</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 24, color: c.ink, lineHeight: 1.1 }}>Every project follows exactly<br/>the same format.</div>
          </div>
          <div style={{ fontFamily: Fb, fontSize: 10.5, color: c.mid, textAlign: "right", maxWidth: 300 }}>16 sections per project · consistent structure ensures comparability across all 12 disciplines and featured case studies</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
          {steps.map(([title, desc], i) => (
            <div key={i} style={{ background: c.grey, padding: "10px 12px", borderTop: `1.5px solid ${i < 8 ? c.ochre + "80" : c.rule}` }}>
              <div style={{ fontFamily: Fm, fontSize: 8, color: c.ochre, marginBottom: 4 }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink, marginBottom: 4 }}>{title}</div>
              <div style={{ fontFamily: Fb, fontSize: 9, color: c.mid, lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

const PROJECT_RATIONALES = [
  {
    id: "gestalt",
    code: "VC2",
    title: "Gestalt",
    discipline: "Visual Communication",
    accent: c.ochre,
    theme: "Perception · figure–ground · visual unity",
    rationale: "This project applies Gestalt principles to construct a visually unified composition from independent graphic elements. Figure–ground relationships, proximity, similarity, closure and continuation guide the viewer through the image while preserving a clear focal point. The final outcome demonstrates that meaning is created not only by individual forms, but by the relationships between them. Controlled contrast and deliberate negative space turn perceptual theory into an accessible visual experience.",
  },
  {
    id: "life-as-product",
    code: "VC1",
    title: "Life as Product",
    discipline: "Photography",
    accent: c.olive,
    theme: "Observation · art direction · photographic narrative",
    rationale: "Life as Product reframes an everyday subject through the visual language of commercial photography. Lighting, composition, colour and viewpoint were directed to give the object a distinct personality while retaining clarity and credibility. The work investigates how photography can transform ordinary material into persuasive visual communication. The final images balance technical control with narrative atmosphere, demonstrating an understanding of audience attention, image hierarchy and platform-ready presentation.",
  },
  {
    id: "black-modernisms",
    code: "CS2",
    title: "Black Modernisms",
    discipline: "Critical Studies",
    accent: c.brown,
    theme: "Discourse · representation · decolonial critique",
    rationale: "The Black Modernisms project examines how modernist histories have been shaped by exclusion, institutional power and unequal systems of representation. The written and visual argument foregrounds Black creative practice as a central contributor rather than a peripheral influence. Evidence is organised through critical comparison, contextual research and referenced interpretation. The outcome demonstrates the ability to connect design history to contemporary questions of authorship, visibility, cultural ownership and the politics of the archive.",
  },
  {
    id: "manifesto",
    code: "S3",
    title: "First Things First Manifesto",
    discipline: "Editorial Design",
    accent: c.brown,
    theme: "Editorial hierarchy · ethics · printed sequence",
    rationale: "This editorial interpretation gives the First Things First manifesto a contemporary physical voice. A disciplined grid, assertive typography and controlled pacing translate the text’s ethical urgency into a folded reading experience. Scale changes create moments of declaration and reflection, while the panel sequence rewards physical interaction. The final design treats the manifesto as an active public statement rather than passive copy, connecting editorial craft with the designer’s responsibility to society and culture.",
  },
  {
    id: "colour-tomorrow",
    code: "S2",
    title: "Colour for Tomorrow",
    discipline: "Poster Design",
    accent: "#E05A3F",
    theme: "Colour systems · optimism · visual impact",
    rationale: "Colour for Tomorrow uses a poster triptych to explore how colour can communicate future-facing emotion before language is read. Each composition works independently while sharing a consistent structural system, allowing the series to move between photographic, typographic and multimedium expression. High-contrast colour relationships create energy and immediate visibility. The final outcome demonstrates controlled experimentation, campaign consistency and the ability to translate an abstract theme into a coherent public-facing visual system.",
  },
  {
    id: "record-label",
    code: "DS1",
    title: "Menzi Impazamo Record Label",
    discipline: "Packaging & Identity",
    accent: "#C62828",
    theme: "Music identity · typography · packaging",
    rationale: "The Menzi Impazamo record label translates musical character into a compact identity and packaging system. Bold red, black and white establish intensity, while geometric typography and image texture create a recognisable release language across the centre label, sleeve and promotional applications. Information hierarchy was designed for both expressive impact and practical production. The final outcome connects brand identity, typography and packaging into a coherent object that feels credible within contemporary music culture.",
  },
  {
    id: "isometric-world",
    code: "VC4",
    title: "Isometric World",
    discipline: "Illustration",
    accent: "#3178A8",
    theme: "World-building · spatial systems · digital illustration",
    rationale: "Isometric World constructs a self-contained visual environment through consistent perspective, modular form and narrative detail. The isometric grid provides spatial discipline while colour, scale and object selection communicate the atmosphere of an imagined refuge. Every element contributes to the logic of the world rather than functioning as decoration. The final illustration demonstrates technical control, visual storytelling and the ability to communicate a complex environment clearly within a single image.",
  },
  {
    id: "notan",
    code: "VC3",
    title: "Notan",
    discipline: "Visual Communication",
    accent: c.ink,
    theme: "Positive–negative space · balance · reduction",
    rationale: "The Notan project explores the interdependence of positive and negative space through reduction, repetition and balance. Rather than treating the background as empty, the composition gives equal visual weight to occupied and unoccupied areas. Simplified forms strengthen silhouette recognition and create rhythm across the surface. The outcome demonstrates how restraint can produce complexity, using tonal contrast and spatial tension to guide perception without relying on colour or excessive detail.",
  },
  {
    id: "medium-message",
    code: "CS4",
    title: "The Medium Is the Message",
    discipline: "Critical Studies",
    accent: "#7158A5",
    theme: "Media theory · African practice · critical writing",
    rationale: "This project investigates how the form of a medium shapes meaning, behaviour and cultural experience. The research considers African new-media practice within technological, social and historical contexts, resisting the assumption that digital culture develops through a single Western model. Academic sources, visual examples and critical reflection support the argument. The final work demonstrates the ability to connect media theory with lived design practice and to communicate complex ideas through structured, referenced writing.",
  },
  {
    id: "double-u",
    code: "S7",
    title: "DoubleU",
    discipline: "Web Design",
    accent: "#2E8B57",
    theme: "Responsive structure · user flow · digital identity",
    rationale: "DoubleU translates the visual world of Bob Ross into a responsive web experience that feels calm, accessible and recognisable. The wireframe system prioritises navigation, content hierarchy and consistency across desktop and mobile views. Brand elements support the interface without overpowering usability. The outcome demonstrates user-flow planning, responsive thinking and the ability to transform a cultural reference into a functional digital system with a clear visual personality.",
  },
  {
    id: "chaos",
    code: "S6",
    title: "Chaos Branding",
    discipline: "Brand Identity",
    accent: "#E77825",
    theme: "Experimentation · identity · controlled disruption",
    rationale: "Chaos Branding turns uncertainty into a productive design method. Rapid making, visual play and iterative decisions generated an identity system that feels energetic without becoming arbitrary. The final brand balances disruptive form with repeatable rules, allowing it to move across applications while retaining recognition. The project demonstrates creative risk-taking, responsiveness and the ability to discover strategic coherence through process rather than imposing a fixed answer at the beginning.",
  },
  {
    id: "radio-dali",
    code: "S5",
    title: "Confused Cupcake Driver",
    discipline: "Motion Design",
    accent: "#E2362F",
    theme: "Surreal collage · South Africanism · motion",
    rationale: "Confused Cupcake Driver uses surreal collage, local language, cultural symbols and sound to transform an ordinary road journey into an absurd portrait of South African resilience. Unexpected scale, character behaviour and object combinations draw from Surrealist strategies while retaining a distinctly local voice. Motion and audio create rhythm beyond the static frame. The final animation demonstrates concept development, art direction, sequencing and the ability to communicate cultural experience through playful visual storytelling.",
  },
  {
    id: "lucky-star",
    code: "S8",
    title: "Lucky Star Campaign",
    discipline: "Advertising & 3D Design",
    accent: "#D71920",
    theme: "Character design · product storytelling · campaign system",
    rationale: "The Lucky Star campaign transforms a familiar South African product into a character-led advertising world. A fish superhero, shield motif, flame language and product cues create a memorable narrative that can move consistently between illustration, packaging, web and three-dimensional media. Sketching, model development and multi-angle rendering test the character’s silhouette, expression and campaign flexibility. The resolved outcome demonstrates integrated art direction and the ability to extend one core idea across a coherent set of consumer touchpoints.",
  },
  {
    id: "symbols",
    code: "S4",
    title: "45 Afro Hairstyle Symbols",
    discipline: "Symbol Design",
    accent: "#8A5A44",
    theme: "Cultural identity · reduction · modular system",
    rationale: "The 45-symbol system celebrates Afro hairstyles as forms of identity, history and self-expression. Each hairstyle is reduced into a consistent graphic language while preserving the features that make it recognisable. Shared proportions, stroke logic and visual weight allow the symbols to operate as a family across poster, interface and information-design contexts. The outcome demonstrates culturally attentive research, systematic drawing and the ability to balance simplification with respectful representation.",
  },
];

function ProjectRationalePage({ project, index }: { project: typeof PROJECT_RATIONALES[number]; index: number }) {
  return (
    <EPage section={`PROJECT RATIONALE · ${project.discipline.toUpperCase()}`} page={`R.${String(index + 1).padStart(2, "0")}`} navActive="ARCHIVE">
      <div className="premium-project-grid" style={{ position: "absolute", inset: 0, padding: `26px ${M}px 18px`, display: "grid", gridTemplateColumns: "0.72fr 1.28fr" }}>
        <div style={{ borderRight: `0.5px solid ${c.rule}`, paddingRight: 30, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="premium-project-category" style={{ color: project.accent }}>Project Rationale</div>
            <div style={{ fontFamily: Fm, fontSize: 9, color: c.mid, letterSpacing: "0.14em", marginBottom: 14 }}>{project.code} · {project.discipline.toUpperCase()}</div>
            <div className="premium-project-title" style={{ fontFamily: Fd, color: c.ink, letterSpacing: "-0.035em" }}>{project.title}</div>
          </div>
          <div>
            <div style={{ width: 42, height: 4, background: project.accent, marginBottom: 14 }} />
            <div style={{ fontFamily: Fm, fontSize: 11, lineHeight: 1.55, color: c.mid }}>{project.theme}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: Fm, fontSize: 8, color: project.accent, letterSpacing: "0.16em", textTransform: "uppercase" as const, marginBottom: 24 }}>Design intention and resolved communication</div>
            <div style={{ fontFamily: Fd, fontSize: 30, lineHeight: 1.1, color: c.ink, maxWidth: 610, marginBottom: 24 }}>The outcome connects research, visual reasoning and purposeful making.</div>
            <p className="premium-project-body" style={{ fontFamily: Fb, color: c.text, maxWidth: 650, margin: 0 }}>{project.rationale}</p>
          </div>
          <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div style={{ fontFamily: Fm, fontSize: 7.5, letterSpacing: "0.13em", color: c.mid, textTransform: "uppercase" as const, marginBottom: 6 }}>Evidence Lens</div>
              <div style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.5, color: c.ink }}>Research · process · final outcome</div>
            </div>
            <div>
              <div style={{ fontFamily: Fm, fontSize: 7.5, letterSpacing: "0.13em", color: c.mid, textTransform: "uppercase" as const, marginBottom: 6 }}>Portfolio Role</div>
              <div style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.5, color: c.ink }}>RPL evidence of integrated design practice</div>
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FEATURED CASE STUDIES
// ══════════════════════════════════════════════════════════════════════════════

function GautaEtengCore() {
  return (
    <EPage section="FEATURED CASE STUDY · GAUTA ETENG" page="22" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <Corners />
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: Fd, fontSize: 48, fontWeight: 400, color: c.ink, lineHeight: 0.95, letterSpacing: "-0.02em" }}>Gauta Eteng</div>
          <div style={{ fontFamily: Fd, fontSize: 48, fontStyle: "italic", color: c.ink, lineHeight: 1.0, letterSpacing: "-0.02em" }}>SAG12 Campaign.</div>
          <p style={{ fontFamily: Fb, fontSize: 11.5, color: c.mid, lineHeight: 1.6, marginTop: 10, maxWidth: 480 }}>A multidisciplinary approach to African-centred communication design, emphasizing conceptual rigor and community engagement.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 24px", marginBottom: 18 }}>
          {[["PROBLEM STATEMENT", "The Gauta Eteng campaign required a nuanced approach to dismantle conventional narrative structures. The primary challenge lay in translating complex, socially relevant data into an accessible, visually arresting identity system. Conventional campaigns often overlook the subtleties of local contexts; thus, the core problem was to establish a unified brand personality that honors African-centred methodologies while maintaining rigorous aesthetic standards."],
            ["RESEARCH", "Extensive user-centered design thinking formed the foundation of our conceptual process. By engaging deeply with the target communities, we documented oral histories and vernacular design motifs. The research phase prioritized sustainability and socially impactful communication solutions, filtering multidisciplinary insights — from editorial typography to environmental context — into a cohesive brand guideline."],
            ["STRATEGY", "The strategic execution leveraged a highly structured grid system intertwined with experimental visual storytelling. We employed a distinct color palette and typographic hierarchy to guide the viewer through the narrative arc of the SAG12 objectives. High-quality imagery, integrated with conceptual diagrams, acted as the primary vehicle for empathy. The overarching strategy positioned the campaign as a benchmark for multidisciplinary design."],
          ].map(([label, text], i) => (
            <div key={i}>
              <CapLabel>{label}</CapLabel>
              <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.75, color: c.ink, textAlign: "justify" }}>{text}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 8 }}>
          <p style={{ fontFamily: Fb, fontSize: 8.5, color: c.mid }}>
            <sup>1</sup> Reference: Methodological Shifts in African Design Paradigms (2024). <sup>2</sup> Campaign metrics indicate a 40% increase in community engagement post-launch.
          </p>
        </div>
      </div>
    </EPage>
  );
}

function GautaEtengMood() {
  return (
    <EPage section="MOOD BOARD & PROCESS" page="23" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateRows: "1fr 196px 26px", padding: `0 ${M}px` }}>
        <div style={{ position: "relative", overflow: "hidden", borderBottom: `0.5px solid ${c.rule}` }}>
          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&h=360&fit=crop&auto=format" alt="FIG. 1 — TEXTURE & FORM" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
          <div style={{ position: "absolute", bottom: 10, right: 14 }}>
            <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.white, background: "rgba(26,24,21,0.55)", padding: "3px 8px" }}>FIG. 1 — TEXTURE & FORM</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 150px", gap: 4, overflow: "hidden" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=220&fit=crop&auto=format" alt="FIG. 2 — PROCESS" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 8, left: 10 }}><span style={{ fontFamily: Fb, fontSize: 7.5, color: c.white, background: "rgba(26,24,21,0.45)", padding: "2px 6px" }}>FIG. 2 — PROCESS</span></div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1509516428426-64b6cfbbf42a?w=400&h=220&fit=crop&auto=format" alt="Warm form study" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ background: c.grey, display: "flex", flexDirection: "column", justifyContent: "center", padding: "12px 16px", gap: 2 }}>
            <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 10 }}>SYSTEM FLOW</span>
            {["Research", "Concept Dev.", "Visual Identity", "Application"].map((step, i) => (
              <div key={i}><div style={{ border: `0.5px solid ${c.rule}`, padding: "3px 8px", background: c.white }}><span style={{ fontFamily: Fb, fontSize: 9, color: c.ink }}>{step}</span></div>{i < 3 && <div style={{ height: 8, display: "flex", justifyContent: "center" }}><div style={{ width: 0.5, background: c.rule }} /></div>}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", borderTop: `0.5px solid ${c.rule}` }}>
          <p style={{ fontFamily: Fd, fontSize: 10, fontStyle: "italic", color: c.mid }}>"Visual synthesis requires a delicate balance between experimental typography and culturally resonant imagery. The mood board above reflects early iterations of the SAG12 visual lexicon."</p>
        </div>
      </div>
    </EPage>
  );
}

function TactileManifest() {
  return (
    <EPage section="FINAL RESOLUTION — TACTILE MANIFESTATION" page="24" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateRows: "1fr auto" }}>
        <div style={{ position: "relative", overflow: "hidden", margin: `10px ${M}px 0` }}>
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=500&fit=crop&auto=format" alt="Tactile Manifestation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ padding: `10px ${M}px`, display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: Fd, fontSize: 17, fontWeight: 600, color: c.ink, marginBottom: 4 }}>Tactile Manifestation</div>
            <p style={{ fontFamily: Fb, fontSize: 9.5, color: c.mid }}>Primary packaging suite — recycled stocks, soy-based ochre inks.</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>FIG. 4</span>
            <div style={{ fontFamily: Fd, fontSize: 26, color: c.mid, lineHeight: 1, marginTop: 4 }}>24</div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

function ReflectionCritique() {
  return (
    <EPage section="REFLECTION & CRITIQUE" page="25" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `28px ${M}px 20px` }}>
        <CapLabel>REFLECTION & CRITIQUE</CapLabel>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: Fd, fontSize: 24, lineHeight: 1.25, color: c.ink, maxWidth: 620 }}>
            <span style={{ color: c.ochre }}>"</span>The synthesis of deep-rooted cultural motifs and rigorous modernist grids culminated in an identity that does not merely communicate, but{" "}
            <span style={{ fontStyle: "italic" }}>preserves and elevates.</span>
          </div>
        </div>
        <HR color={c.rule} mb={22} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px", marginBottom: 28 }}>
          {["The culmination of the Gauta Eteng campaign required a distillation of extensive ethnographic research into a singular, cohesive visual language. By moving away from expected tropes, the outcome establishes a sophisticated dialogue between the brand and its community.",
            "The muted olive and ochre palette was selected not merely for aesthetic harmony, but to echo the organic resilience inherent in the campaign's core narrative. Every touchpoint — from digital grids to embossed print collateral — was designed with uncompromising commitment to African-centred excellence.",
          ].map((p, i) => <p key={i} style={{ fontFamily: Fb, fontSize: 11, lineHeight: 1.8, color: c.ink }}>{p}</p>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: `0.5px solid ${c.rule}`, paddingTop: 14 }}>
          {[["MEDIUM", "Print & Digital Collateral"], ["YEAR", "2024"], ["CLIENT", "Gauta Eteng"]].map(([k, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 5 }}>{k}</div>
              <div style={{ fontFamily: Fb, fontSize: 12, color: c.ink }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

function AppliedTouchpoints() {
  return (
    <EPage section="MATERIAL APPLICATIONS — DOCUMENTATION" page="26" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `0 ${M}px` }}>
        <div style={{ height: 30, display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", alignItems: "center", borderBottom: `0.5px solid ${c.rule}` }}>
          {[["EDITORIAL GUIDELINES", "FIG. 5"], ["MATERIALITY & TEXTURE", "FIG. 6"], ["STATIONERY SYSTEM", "FIG. 7"]].map(([l, f], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", paddingRight: 20, borderRight: i < 2 ? `0.5px solid ${c.rule}` : "none" }}>
              <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>{l}</span>
              <span style={{ fontFamily: Fb, fontSize: 7.5, color: c.mid }}>{f}</span>
            </div>
          ))}
          <div style={{ paddingLeft: 20 }}><CapLabel color={c.mid}>APPLIED TOUCHPOINTS</CapLabel></div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", height: CH - 70 }}>
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&h=520&fit=crop&auto=format" alt="Environmental Application" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ height: 40, display: "flex", alignItems: "center", borderTop: `0.5px solid ${c.rule}` }}>
          <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>ENVIRONMENTAL APPLICATION</span>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: Fb, fontSize: 8, color: c.mid }}>FIG. 8</span>
        </div>
      </div>
    </EPage>
  );
}

function GhostInGrid() {
  return (
    <EPage section="FEATURED CASE STUDY · GHOST IN THE GRID" page="EDITORIAL DESIGN" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: `28px ${M}px`, borderRight: `0.5px solid ${c.rule}` }}>
          <CapLabel>Ghost in the Grid</CapLabel>
          <div style={{ fontFamily: Fd, fontSize: 40, fontWeight: 400, color: c.ink, lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 18 }}>Ghost in<br/>the Grid.</div>
          <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: c.ochre, marginBottom: 20 }}>Self-initiated editorial design investigation</div>
          <HR color={c.rule} mb={20} />
          <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: c.ink, marginBottom: 16 }}>A 40-page self-initiated publication investigating the ideological dimensions of grid-based design — arguing that every grid system encodes cultural assumptions about order, hierarchy, and legibility.</p>
          <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: c.ink, marginBottom: 24 }}>The project both uses and critiques the modular grid, introducing programmed 'glitch' variations that reference African geometric systems and reveal the grid's constructed nature.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[["Editorial Design", "Typographic hierarchy, modular grid, 12-column publication system"], ["Research", "Müller-Brockmann, African pattern systems, algorithmic aesthetics — 28-page visual journal"], ["Typography", "Systematic type hierarchy, grid-driven spacing, experimental layout structures"], ["Reflection", "Most intellectually demanding project to date — confirming that the strongest work occurs at the intersection of research and making"]].map(([t, d], i) => (
              <div key={i} style={{ borderTop: `1.5px solid ${i < 2 ? c.ochre : c.rule}`, paddingTop: 12 }}>
                <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink, marginBottom: 6 }}>{t}</div>
                <p style={{ fontFamily: Fb, fontSize: 10, color: c.mid, lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=700&fit=crop&auto=format" alt="Ghost in the Grid publication" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,24,21,0.6) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 20, left: 24, right: 24 }}>
            <div style={{ fontFamily: Fd, fontSize: 14, fontStyle: "italic", color: c.white, lineHeight: 1.5, marginBottom: 8 }}>"The grid is a ghost — invisible yet omnipresent, shaping perception without declaring itself."</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, borderTop: `0.5px solid rgba(255,255,255,0.2)`, paddingTop: 10 }}>
              {[["FORMAT", "40-page publication"], ["YEAR", "2022"], ["SOFTWARE", "InDesign · Illustrator"]].map(([k, v], i) => (
                <div key={i}><div style={{ fontFamily: Fb, fontSize: 7.5, color: "rgba(250,250,250,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>{k}</div><div style={{ fontFamily: Fb, fontSize: 10, color: c.white, marginTop: 3 }}>{v}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ─── SVG SPREAD PAGE — generic, reused for all QG_rpl_prog spreads ───────────
// All spreads are 842×596pt (A4 landscape) — they fill the 1123×794 canvas
// with a minimal caption footer carrying the figure reference.
function SVGPage({ src, figNum, label }: { src: string; figNum: number; label: string }) {
  return (
    <div style={{ width: PW, height: PH, background: c.bg, position: "relative", overflow: "hidden" }}>
      <img
        src={src}
        alt={`Portfolio spread — Fig. ${figNum}`}
        style={{ position: "absolute", inset: 0, width: "100%", height: `calc(100% - ${FH}px)`, objectFit: "contain", objectPosition: "center" }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: FH,
        borderTop: `0.5px solid ${c.rule}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `0 ${M}px`, background: c.bg,
      }}>
        <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>RPL PORTFOLIO · {label}</span>
        <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>FIG. {figNum}</span>
        <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>PRINTED IN DIGITAL FORM</span>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART FOUR — PROFESSIONAL PRACTICE
// ══════════════════════════════════════════════════════════════════════════════

function ProfessionalPractice() {
  return (
    <EPage section="PART FOUR · PROFESSIONAL PRACTICE" page="P. 60">
      <div style={{ position: "absolute", inset: 0, padding: `28px ${M}px 20px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
          <div>
            <CapLabel>Professional Workflow</CapLabel>
            {[["Client Communication", "Fourteen years of brief analysis, expectation management, and professional written and verbal communication across all project phases."],
              ["Presentations", "Structured concept reviews, development presentations, and final presentations communicating design rationale to non-design audiences."],
              ["Creative Process", "Research-led ideation, iterative development, client-integrated feedback loops, and production-quality final delivery."],
              ["Time Management", "Managing concurrent projects using structured briefs, timelines, and milestone systems for quality delivery within agreed parameters."],
              ["Photography Practice", "Professional photography integrated into design practice — art direction, documentation, and primary research image-making."],
              ["Behance Portfolio", "20+ professionally documented projects with detailed process descriptions, research context, and final outcomes."],
              ["Project Management", "Resource allocation, budget awareness, vendor coordination, and stakeholder communication across complex multi-phase projects."],
            ].map(([t, d], i) => (
              <div key={i} style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 10, marginBottom: 12 }}>
                <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink, marginBottom: 4 }}>{t}</div>
                <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid }}>{d}</p>
              </div>
            ))}
          </div>
          <div>
            <CapLabel>Leadership & Knowledge Sharing</CapLabel>
            <div style={{ background: c.brown, padding: "20px 22px", marginBottom: 20 }}>
              <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 12 }}>INFORMAL CO-LECTURER EXPERIENCE</div>
              <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: "rgba(250,250,250,0.8)", marginBottom: 14 }}>Throughout collaborative projects and community engagements, I have frequently supported peers by explaining design principles, demonstrating software workflows, and assisting with concept development — effectively fulfilling a co-lecturer or peer-mentor role.</p>
              <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: "rgba(250,250,250,0.8)" }}>These experiences strengthened confidence in communicating design theory, articulating design decisions, and translating complex ideas into practical guidance for others.</p>
            </div>
            {[["Peer Mentoring", "Supporting emerging designers through concept development, critique sessions, and software guidance."],
              ["African-centred Design", "Sharing knowledge of African-centred design methodologies in classroom and workshop contexts."],
              ["User-centred Design", "Teaching user research methods, persona development, and audience-centred communication strategies."],
              ["Knowledge Exchange", "Facilitating design critique sessions, guest presentations, and design thinking workshops."],
            ].map(([t, d], i) => (
              <div key={i} style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 10, marginBottom: 12 }}>
                <div style={{ fontFamily: Fb, fontSize: 11, fontWeight: 600, color: c.ink, marginBottom: 4 }}>{t}</div>
                <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART FIVE — RESEARCH & WRITING
// ══════════════════════════════════════════════════════════════════════════════

function ResearchWriting() {
  const essays = [
    { title: "The Grid as Ideology: Swiss Typography and African Visual Systems", purpose: "Critical Analysis", summary: "Examines the political dimensions of grid-based design and investigates how African geometric traditions both challenge and enrich Swiss typographic methodology." },
    { title: "Behaviour Change Communication and the Ethics of Design Persuasion", purpose: "Research Essay", summary: "Explores the ethical responsibilities of designers working in public health communication, drawing on the Gauta Eteng campaign as a primary case study." },
    { title: "Ubuntu as Design Methodology: Towards an African-Centred Practice", purpose: "Position Paper", summary: "Proposes a design methodology grounded in Ubuntu philosophy, advocating for community co-creation and culturally embedded visual systems." },
  ];
  return (
    <EPage section="PART FIVE · RESEARCH AND WRITING" page="P. 58">
      <div style={{ position: "absolute", inset: 0, padding: `28px ${M}px 20px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
          <div>
            <CapLabel>Academic Writing</CapLabel>
            <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.8, color: c.ink, marginBottom: 20 }}>The following writing demonstrates capacity for academic inquiry, critical analysis, and design theory engagement at undergraduate level. All pieces use APA referencing conventions.</p>
            {essays.map((e, i) => (
              <div key={i} style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 12, marginBottom: 18 }}>
                <div style={{ fontFamily: Fd, fontSize: 14, fontStyle: "italic", color: c.ink, lineHeight: 1.3, marginBottom: 5 }}>{e.title}</div>
                <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 8 }}>{e.purpose}</div>
                <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.7, color: c.mid }}>{e.summary}</p>
              </div>
            ))}
          </div>
          <div>
            <CapLabel>Research Methods</CapLabel>
            {["Literature Reviews", "Visual Audits", "Case Studies", "Mood Boards", "Personas", "Journey Maps", "Design Thinking", "Research Journals", "Communication Arts Articles"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: `0.5px solid ${c.rule}` }}>
                <div style={{ width: 18, height: 0.5, background: c.ochre, flexShrink: 0, marginTop: 8 }} />
                <span style={{ fontFamily: Fb, fontSize: 11, color: c.ink }}>{item}</span>
              </div>
            ))}
            <div style={{ background: c.grey, padding: "14px 18px", borderLeft: `2px solid ${c.ochre}`, marginTop: 18 }}>
              <CapLabel color={c.ochre}>Research Philosophy</CapLabel>
              <p style={{ fontFamily: Fb, fontSize: 11, lineHeight: 1.75, color: c.brown }}>Research is the foundation of my design practice. Before generating any visual response, I invest significant time in understanding the problem domain — its history, audience, cultural context, and visual landscape.</p>
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART SIX — AWARDS
// ══════════════════════════════════════════════════════════════════════════════

function AwardsPage() {
  const awards = [
    { year: "2026", level: "Winner", name: "Africa International Design Awards", org: "Communication Design — Poster And Flyer", project: "Ukuvuselela Principles Of Design", team: "Kiara Dos Reis (Lead) · Asmaa Mahomed · Luam Naudé · Gracious Mkhonto · Caitlyn Karalic · Harshil Naka · Marissa Cronje", inst: "Greenside Design Center" },
    { year: "2021", level: "Silver",  name: "Editorial Design Award",            org: "Design South Africa Annual Awards",        project: "Ghost in the Grid Publication",        team: "", inst: "" },
    { year: "2019", level: "Merit",   name: "Social Impact Design Commendation", org: "Loerie Awards",                           project: "Community Road Safety Campaign",      team: "", inst: "" },
  ];
  return (
    <EPage section="PART SIX · AWARDS AND RECOGNITION" page="P. 64">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <CapLabel>Awards & Recognition</CapLabel>
        <div style={{ fontFamily: Fd, fontSize: 30, fontWeight: 400, letterSpacing: "-0.02em", color: c.ink, marginBottom: 22 }}>Awards &<br/>Recognition</div>
        <HR color={c.rule} mb={22} />
        {awards.map((a, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 20, marginBottom: 18, paddingBottom: 18, borderBottom: `0.5px solid ${c.rule}` }}>
            <div>
              <div style={{ background: i === 0 ? c.ochre : c.grey, padding: "5px 8px", marginBottom: 6, textAlign: "center" }}>
                <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: i === 0 ? c.white : c.mid }}>{a.level}</span>
              </div>
              <div style={{ fontFamily: Fm, fontSize: 9, color: c.ochre, textAlign: "center" }}>{a.year}</div>
            </div>
            <div>
              <div style={{ fontFamily: Fd, fontSize: 15, fontWeight: 600, color: c.ink, marginBottom: 3 }}>{a.name}</div>
              <div style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 6 }}>{a.org}</div>
              <div style={{ fontFamily: Fb, fontSize: 11, fontStyle: "italic", color: c.ink, marginBottom: 4 }}>Project: {a.project}</div>
              {a.inst && <div style={{ fontFamily: Fb, fontSize: 10, color: c.mid, marginBottom: 4 }}>{a.inst}</div>}
              {a.team && <div style={{ fontFamily: Fb, fontSize: 10, color: c.mid }}>{a.team}</div>}
            </div>
          </div>
        ))}
      </div>
    </EPage>
  );
}

// ─── UKUVUSELELA AWARD SPREAD ─────────────────────────────────────────────────
function UkuvuselalaAwardSpread() {
  return (
    <div style={{ width: PW, height: PH, background: c.bg, display: "flex", overflow: "hidden", fontFamily: Fb, color: c.ink }}>
      {/* Top nav */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}>
        <TopNav active="ARCHIVE" />
        <SubHeader left="PART SIX · AFRICA INTERNATIONAL DESIGN AWARDS" right="WINNER 2026" />
      </div>

      {/* Left — certificate */}
      <div style={{ width: 460, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: `${TH + SH + 20}px ${M}px ${FH + 16}px`, borderRight: `0.5px solid ${c.rule}`, position: "relative" }}>
        {/* AIDA logo mark — geometric */}
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {[c.ochre, "#E85D3A", "#4A9B6F", "#3B7ABF"].map((col, i) => (
            <div key={i} style={{ width: 18, height: 18, background: col, clipPath: i % 2 === 0 ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" : "polygon(0 0, 100% 0, 50% 100%)" }} />
          ))}
        </div>

        <div style={{ fontFamily: Fb, fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", color: c.ink, lineHeight: 1.1, marginBottom: 4 }}>
          AFRICA<br/>
          <span style={{ fontWeight: 400 }}>INTERNATIONAL<br/>DESIGN AWARDS</span>
        </div>

        <div style={{ fontFamily: Fb, fontSize: 20, fontWeight: 700, color: c.ochre, marginBottom: 24 }}>
          Winner <span style={{ color: c.ink }}>2026</span>
        </div>

        <HR color={c.rule} mb={20} />

        {[
          ["AWARD",                    "Africa International Design Awards\nWinner"],
          ["PROJECT NAME",             "Ukuvuselela Principles Of Design"],
          ["SCHOOL / UNIVERSITY",      "Greenside Design Center"],
          ["LEAD DESIGNER",            "Kiara Dos Reis"],
          ["DESIGN TEAM",              "Asmaa Mahomed · Luam Naudé · Gracious Mkhonto\nCaitlyn Karalic · Harshil Naka · Marissa Cronje"],
        ].map(([label, value], i) => (
          <div key={i} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: `0.5px solid ${c.rule}` }}>
            <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 5 }}>{label}</div>
            <div style={{ fontFamily: Fb, fontSize: 11.5, color: i === 4 ? c.ochre : c.ink, lineHeight: 1.55, whiteSpace: "pre-line" as const, fontWeight: label === "DESIGN TEAM" ? 400 : 400 }}>
              {label === "DESIGN TEAM"
                ? value.split(" · ").map((name, j) => (
                    <span key={j} style={{ fontWeight: name.includes("Gracious Mkhonto") ? 600 : 400, color: name.includes("Gracious Mkhonto") ? c.ink : c.mid }}>
                      {name}{j < 5 ? " · " : ""}
                    </span>
                  ))
                : value}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 10 }}>
          <p style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.65, color: c.mid, fontStyle: "italic" }}>
            The Jury members of the Africa International Design Awards certifies that the Kiara Dos Reis has received this award for "Ukuvuselela Principles Of Design" design in "Communication Design — Poster And Flyer".
          </p>
        </div>

        {/* Jury */}
        <div style={{ display: "flex", gap: 28, marginTop: 16 }}>
          {[["BIBI SECK", "HEAD OF THE JURY"], ["ASTRID HÉBERT", "FOUNDER"], ["HOSSEIN FARMANI", "FOUNDER"]].map(([name, role]) => (
            <div key={name}>
              <div style={{ height: 18, borderBottom: `0.5px solid ${c.rule}`, marginBottom: 4, width: 70 }} />
              <div style={{ fontFamily: Fb, fontSize: 7.5, fontWeight: 600, color: c.ink }}>{name}</div>
              <div style={{ fontFamily: Fb, fontSize: 7, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: c.mid }}>{role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — poster mockup */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <ImageWithFallback
          src={ukuMockup}
          alt="Ukuvuselela Principles of Design — AIDA Winner 2026 poster mockup"
          style={{ width: "100%", height: `calc(100% - ${FH}px)`, objectFit: "cover", objectPosition: "center", marginTop: TH + SH }}
        />
        {/* Caption overlay */}
        <div style={{ position: "absolute", bottom: FH, left: 0, right: 0, padding: "14px 24px", background: "linear-gradient(to top, rgba(237,234,229,0.95) 60%, transparent)" }}>
          <div style={{ fontFamily: Fd, fontSize: 15, fontStyle: "italic", color: c.ink, marginBottom: 4 }}>
            Ukuvuselela Principles Of Design
          </div>
          <div style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.ochre }}>
            COMMUNICATION DESIGN — POSTER AND FLYER · AFRICA INTERNATIONAL DESIGN AWARDS 2026
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <PageFooter center="AFRICA INTERNATIONAL DESIGN AWARDS · WINNER 2026" right="PRINTED IN DIGITAL FORM" />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PART SEVEN — SUPPORTING DOCUMENTS
// ══════════════════════════════════════════════════════════════════════════════

function SupportingDocuments() {
  return (
    <EPage section="PART SEVEN · SUPPORTING DOCUMENTS" page="P. 66">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div style={{ padding: `28px ${M}px`, borderRight: `0.5px solid ${c.rule}` }}>
          <CapLabel>Supporting Documents</CapLabel>
          {["Curriculum Vitae", "Academic Transcripts", "Certificates", "Recommendation Letters", "Workshop Attendance", "Behance Portfolio", "LinkedIn Profile", "Adobe Experience"].map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <div style={{ width: 4, height: 4, background: c.ochre, borderRadius: "50%", flexShrink: 0, marginTop: 5 }} />
              <span style={{ fontFamily: Fb, fontSize: 11, color: c.ink }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: `28px 24px`, borderRight: `0.5px solid ${c.rule}` }}>
          <CapLabel>Appendices</CapLabel>
          {["A  Process Books", "B  Sketchbooks", "C  Research Journal", "D  Photography Portfolio", "E  Presentations", "F  Motion Graphics", "G  Illustrator Files", "H  InDesign Files", "I   Process Videos", "J  Additional Projects", "K  Client Testimonials", "L  Publications"].map((d, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: `0.5px solid ${c.rule}` }}>
              <span style={{ fontFamily: Fb, fontSize: 11, color: c.ink }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: `28px 24px` }}>
          <CapLabel>References</CapLabel>
          {["ACADEMIC", "PROFESSIONAL", "COMMUNITY", "CLIENTS"].map((cat, ci) => (
            <div key={ci} style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 6 }}>{cat}</div>
              <div style={{ background: c.grey, padding: "8px 12px" }}>
                <span style={{ fontFamily: Fb, fontSize: 9.5, color: c.mid }}>References available on request</span>
              </div>
            </div>
          ))}
          <HR color={c.rule} mt={16} mb={16} />
          <CapLabel>Declaration</CapLabel>
          <p style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.75, color: c.ink, marginBottom: 20 }}>I declare that this portfolio accurately represents the knowledge, skills and competencies I have acquired through formal education, professional practice, independent learning, research and lived experience.</p>
          <div style={{ height: 36, borderBottom: `0.5px solid ${c.ink}`, display: "flex", alignItems: "flex-end", paddingBottom: 4, marginBottom: 8 }}>
            <span style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic" }}>Qinisile G. Mkhonto</span>
          </div>
          <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>Applicant Signature · November 2026</div>
        </div>
      </div>
    </EPage>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// BACK MATTER
// ══════════════════════════════════════════════════════════════════════════════

function ReferenceList() {
  const academic = [
    "Decolonising Design. (2016). Decolonising Design manifesto.",
    "Escobar, A. (2018). Designs for the pluriverse: Radical interdependence, autonomy, and the making of worlds. Duke University Press.",
    "Lupton, E. (2010). Thinking with type: A critical guide for designers, writers, editors, & students (2nd rev. ed.). Princeton Architectural Press.",
    "McLuhan, M. (1964). Understanding media: The extensions of man. McGraw-Hill.",
    "Meggs, P. B., & Purvis, A. W. (2016). Meggs' history of graphic design (6th ed.). Wiley.",
    "Samara, T. (2005). Making and breaking the grid: A graphic design layout workshop. Rockport Publishers.",
  ];
  const professional = [
    "South African Qualifications Authority. (2019). National policy and criteria for the implementation of Recognition of Prior Learning (amended March 2019).",
    "Figma. (2026). Premium Editorial Portfolio Design — Figma Make working design system.",
    "Google Fonts. (2026). Playfair Display, Inter, and DM Mono — Open Font Licence typefaces.",
    "Unsplash. (2026). Licensed reference photography used in discipline overview pages.",
    "shadcn/ui. (2026). Open-source interface components, MIT Licence.",
    "Adobe Creative Cloud. (2017–2026). InDesign, Illustrator, Photoshop, Lightroom, and After Effects production tools.",
  ];
  const primary = [
    "Mkhonto, Q. G. (2017–2026). Original portfolio artwork, process books, research journals, presentations, photography, motion studies, and campaign documentation [Unpublished professional work].",
    "Gauta Eteng. (2023–2026). Campaign briefs, environmental communication research, visual-development material, and applied touchpoint documentation [Primary project evidence].",
    "Lucky Star. (2023–2026). Character-development studies, advertising concepts, packaging references, wire models, and 3D campaign renders [Primary project evidence].",
    "Client correspondence, project briefs, feedback, testimonials, and approval records are retained in the supporting evidence archive and are available for assessment on request.",
  ];

  const ReferenceColumn = ({ title, items, accent = c.ochre }: { title: string; items: string[]; accent?: string }) => (
    <div>
      <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: accent, marginBottom: 12 }}>{title}</div>
      {items.map((item, index) => (
        <div key={index} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 8, borderTop: `0.5px solid ${c.rule}`, padding: "8px 0" }}>
          <span style={{ fontFamily: Fm, fontSize: 7.5, color: c.mid }}>{String(index + 1).padStart(2, "0")}</span>
          <p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, color: c.ink, margin: 0 }}>{item}</p>
        </div>
      ))}
    </div>
  );

  return (
    <EPage section="BACK MATTER · REFERENCES" page="REF. 01" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
          <div>
            <CapLabel>Reference List</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 34, lineHeight: 1, color: c.ink }}>Sources, frameworks<br/><em style={{ color: c.ochre }}>and primary evidence.</em></div>
          </div>
          <p style={{ width: 300, fontFamily: Fb, fontSize: 10, lineHeight: 1.6, color: c.mid, margin: 0 }}>APA-informed reference list supporting the portfolio's academic framing, professional production, visual research, and Recognition of Prior Learning evidence.</p>
        </div>
        <HR color={c.rule} mb={16} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 26 }}>
          <ReferenceColumn title="Academic & Design Theory" items={academic} />
          <ReferenceColumn title="Policy & Professional Sources" items={professional} accent={c.olive} />
          <ReferenceColumn title="Primary Project Evidence" items={primary} accent={c.brown} />
        </div>
      </div>
    </EPage>
  );
}

function AfricanLiteratureResearch() {
  const books = [
    {
      number: "01",
      author: "Achille Mbembe",
      title: "On the Postcolony",
      citation: "Mbembe, A. (2001). On the postcolony. University of California Press.",
      relevance: "Postcolonial power, identity, representation, and the cultural structures surrounding the Black Modernisms research.",
      project: "Black Modernisms",
    },
    {
      number: "02",
      author: "Nick Shepherd & Steven Robins",
      title: "New South African Keywords",
      citation: "Shepherd, N., & Robins, S. (Eds.). (2008). New South African keywords. Jacana Media / Ohio University Press.",
      relevance: "South African identity, xenophobia, social language, cultural mobility, and the meaning carried by contested terms.",
      project: "Identity & Cultural Discourse",
    },
    {
      number: "03",
      author: "Anitra Nettleton",
      title: "African Dream Machines",
      citation: "Nettleton, A. (2006). African dream machines: Style, identity and meaning of African headrests. Wits University Press.",
      relevance: "African material culture, symbolic form, personal identity, style, and the relationship between designed objects and social meaning.",
      project: "45 Afro Hairstyle Symbols",
    },
    {
      number: "04",
      author: "Frank & S. Jolles",
      title: "African Art and Culture",
      citation: "Jolles, F., & Jolles, S. (2004). African art and culture. David Philip Publishers.",
      relevance: "African visual communication, cultural symbolism, traditional knowledge systems, and image-making as a form of social memory.",
      project: "Visual Language Research",
    },
    {
      number: "05",
      author: "Lizelle Bisschoff",
      title: "An Introduction to African Digital Arts",
      citation: "Bisschoff, L. (2017). An introduction to African digital arts. Enlighten Publications.",
      relevance: "Digital authorship, African screen culture, representation, new-media practice, and technology as a tool for reclaiming narratives.",
      project: "The Medium Is the Message",
    },
  ];

  return (
    <EPage section="BACK MATTER · DESIGN READING" page="REF. 02" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "235px 1fr", gap: 34, marginBottom: 18 }}>
          <div>
            <CapLabel color={c.olive}>Research Library</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 31, lineHeight: 1, color: c.ink, marginBottom: 14 }}>My Design<br/><em style={{ color: c.olive }}>Reading List.</em></div>
            <p style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.6, color: c.mid, margin: 0 }}>Selected only from books cited in my year-end essays and concept books. These texts informed how I understand African identity, visual culture, material meaning, decolonial representation, and digital authorship.</p>
          </div>
          <div style={{ borderLeft: `1px solid ${c.rule}`, paddingLeft: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
            {books.map((book, index) => (
              <div key={book.number} style={{ borderTop: `2px solid ${index < 2 ? c.olive : c.rule}`, paddingTop: 9, marginBottom: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 5 }}>
                  <span style={{ fontFamily: Fm, fontSize: 7.5, color: c.olive }}>{book.number}</span>
                  <span style={{ fontFamily: Fm, fontSize: 7, color: c.mid, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{book.project}</span>
                </div>
                <div style={{ fontFamily: Fd, fontSize: 17, lineHeight: 1.05, color: c.ink }}>{book.title}</div>
                <div style={{ fontFamily: Fb, fontSize: 8.5, color: c.olive, margin: "4px 0 7px" }}>{book.author}</div>
                <p style={{ fontFamily: Fb, fontSize: 8.5, lineHeight: 1.45, color: c.ink, margin: "0 0 6px" }}>{book.relevance}</p>
                <p style={{ fontFamily: Fm, fontSize: 7, lineHeight: 1.4, color: c.mid, margin: 0 }}>{book.citation}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.olive }}>Research provenance</span>
          <span style={{ fontFamily: Fb, fontSize: 8.5, color: c.mid }}>Year-end submissions · Critical Studies · Concept books · 2024–2025</span>
        </div>
      </div>
    </EPage>
  );
}

function DesignRationale() {
  return (
    <EPage section="DESIGN RATIONALE & COLOPHON" page="28" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px` }}>
        <div style={{ marginBottom: 20 }}>
          <CapLabel>COLOUR ARCHITECTURE</CapLabel>
          <div style={{ display: "flex", gap: 8 }}>
            {[["#FAFAFA","WHITE"],["#121212","BLACK"],["#4A3B32","BROWN"],["#6B705C","OLIVE"],["#E0DFDB","GREY"],["#C49A45","OCHRE"]].map(([hex, name]) => (
              <div key={name} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ height: 44, background: hex, border: hex === "#FAFAFA" ? `0.5px solid ${c.rule}` : "none", marginBottom: 6 }} />
                <div style={{ fontFamily: Fm, fontSize: 7.5, color: c.mid }}>{hex}</div>
                <div style={{ fontFamily: Fb, fontSize: 7.5, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: c.ink }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
        <CapLabel>TYPOGRAPHY SPECIMEN</CapLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px", borderTop: `0.5px solid ${c.rule}`, paddingTop: 16, marginBottom: 20 }}>
          <div><div style={{ fontFamily: Fd, fontSize: 44 }}>Aa</div><div style={{ fontFamily: Fd, fontSize: 20, fontStyle: "italic", marginBottom: 6 }}>Gauta Eteng</div><div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre }}>PLAYFAIR DISPLAY</div><div style={{ fontFamily: Fb, fontSize: 9, color: c.mid }}>Regular · Italic · Bold · Display & Quotes</div></div>
          <div><div style={{ fontFamily: Fb, fontSize: 44 }}>Aa</div><div style={{ fontFamily: Fb, fontSize: 20, marginBottom: 6 }}>Editorial RPL</div><div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre }}>INTER</div><div style={{ fontFamily: Fb, fontSize: 9, color: c.mid }}>Light · Regular · Medium · SemiBold · Body & Captions</div></div>
        </div>
        <CapLabel>GRID SYSTEM</CapLabel>
        <div style={{ height: 14, display: "flex", gap: 3, marginBottom: 6 }}>
          {Array.from({ length: 12 }).map((_, i) => (<div key={i} style={{ flex: 1, background: i % 3 === 0 ? c.ochre + "40" : c.rule }} />))}
        </div>
        <div style={{ fontFamily: Fb, fontSize: 8.5, color: c.mid }}>12-column modular grid · 8px baseline · 24px gutter</div>
      </div>
    </EPage>
  );
}

function ProcessIndex() {
  return (
    <EPage section="VOL. 1 — OUTCOMES" page="29" navActive="INDEX">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 16px`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 56px" }}>
        <div>
          <CapLabel>PROCESS INDEX</CapLabel>
          {[["01","Ethnographic Research & Cultural Mapping","PP. 04–09"],["02","Identity Systems & Visual Language","PP. 10–17"],["03","Iterative Prototyping & Material Testing","PP. 18–23"],["04","Final Resolution — Tactile Manifestation","PP. 24–29"],["05","Critical Reflection & RPL Commentary","PP. 30–35"]].map(([n, t, p], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: 10, padding: "9px 0", borderBottom: `0.5px solid ${c.rule}`, alignItems: "center" }}>
              <span style={{ fontFamily: Fd, fontSize: 13, fontStyle: "italic", color: i === 3 ? c.ochre : c.mid }}>{n}</span>
              <span style={{ fontFamily: Fb, fontSize: 10.5, color: i === 3 ? c.ink : c.mid, fontWeight: i === 3 ? 500 : 400 }}>{t}</span>
              <span style={{ fontFamily: Fb, fontSize: 9, color: i === 3 ? c.ochre : c.mid }}>{p}</span>
            </div>
          ))}
        </div>
        <div>
          <CapLabel>COLOPHON</CapLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
            {[["DESIGN & ART DIRECTION","Editorial RPL Portfolio, 2026"],["PRINT SPECIFICATION","297 × 210mm · 300gsm Uncoated"],["PRINTING METHOD","Offset Lithography, Soy-Based Inks"],["FINISHING","Blind Emboss · Spot UV · Foil Stamp"],["EDITION","Limited — 250 Copies"],["ARCHIVE REFERENCE","RPL–2026–GE–V01"]].map(([k,v],i) => (
              <div key={i} style={{ padding: "7px 0", borderBottom: `0.5px solid ${c.rule}` }}>
                <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 3 }}>{k}</div>
                <div style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>2026 Qinisile Gracious Mkhonto, Graphic Design Portfolio</div>
        </div>
      </div>
    </EPage>
  );
}

function BackCover() {
  return (
    <EPage section="SECTION 04 / BACK COVER & COLOPHON" page="A4 LANDSCAPE — 297 × 210MM" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 0.5px 1fr" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `24px ${M}px`, position: "relative" }}>
          <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: c.mid, textAlign: "center" }}>GAUTA ETENG CAMPAIGN</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="68" height="68" viewBox="0 0 68 68"><polygon points="34,4 64,34 34,64 4,34" fill="none" stroke={c.rule} strokeWidth="1"/><rect x="27" y="27" width="14" height="14" fill={c.ochre} transform="rotate(45 34 34)"/></svg>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: Fd, fontSize: 24, fontWeight: 600, color: c.ink, marginBottom: 10 }}>Editorial RPL Portfolio</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 16 }}>
              <div style={{ flex: 1, height: 0.5, background: c.rule }} />
              <span style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: c.mid }}>RECOGNITION OF PRIOR LEARNING</span>
              <div style={{ flex: 1, height: 0.5, background: c.rule }} />
            </div>
            <div style={{ fontFamily: Fd, fontSize: 13, fontStyle: "italic", color: c.mid, lineHeight: 1.55 }}>A document of process, provenance,<br/>and the permanence of craft.</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 8 }}>SUBMITTED BY</div>
            <div style={{ fontFamily: Fd, fontSize: 19, fontWeight: 600, color: c.ink, marginBottom: 6 }}>Qinisile Gracious Mkhonto</div>
            <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>BACHELOR OF DESIGN — VISUAL COMMUNICATION · 2026</div>
          </div>
        </div>
        <div style={{ background: c.rule }} />
        <div style={{ padding: `24px ${M}px`, display: "flex", flexDirection: "column" }}>
          <CapLabel>COLOPHON</CapLabel>
          <div style={{ fontFamily: Fd, fontSize: 26, fontStyle: "italic", color: c.mid, lineHeight: 1.2, marginBottom: 24 }}>Made with care.<br/>Printed with intent.</div>
          <HR color={c.rule} mb={20} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 16px", flex: 1 }}>
            {[{head:"TYPOGRAPHY",items:[["Playfair Display","Display · Regular · Italic · Bold"],["Inter","Body · 300–600"],["Source","Local Project Fonts · OFL"],["Baseline","8px · 12-col · 24px gutter"]]},
              {head:"SOFTWARE & PRODUCTION",items:[["Design","Adobe InDesign 2024"],["Paper","150gsm Uncoated Munken"],["Cover","300gsm · Emboss · Spot UV"],["Print","Offset · Soy-Based Inks"]]},
              {head:"COPYRIGHT & ARCHIVE",items:[["©","2026 Qinisile Gracious Mkhonto"],["Country","Printed in South Africa"],["Archive","RPL–2026–GE–V01"],["Client","Gauta Eteng · Lagos · Accra"]]}
            ].map((col, ci) => (
              <div key={ci}>
                <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 8 }}>{col.head}</div>
                {col.items.map(([k, v], i) => (
                  <div key={i} style={{ borderBottom: `0.5px solid ${c.rule}`, paddingBottom: 7, marginBottom: 7 }}>
                    <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 2 }}>{k}</div>
                    <div style={{ fontFamily: Fb, fontSize: 9.5, color: c.ink }}>{v}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid, marginTop: 10, textAlign: "right" }}>2026 Qinisile Gracious Mkhonto, Graphic Design Portfolio</div>
        </div>
      </div>
    </EPage>
  );
}

// ─── PDF SLIDE ────────────────────────────────────────────────────────────────
interface PdfPage { id: string; title: string; section: string; dataUrl: string; kind?: "PDF" | "Image" | "Keynote"; }

function MediaSlideFrame({ section, page, children }: { section: string; page: string; children: React.ReactNode }) {
  const scale = CH / PH;
  return (
    <EPage section={section.toUpperCase()} page={page} navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, background: c.dark, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ width: PW, height: PH, flex: "0 0 auto", transform: `scale(${scale})`, transformOrigin: "center", background: c.dark }}>
          {children}
        </div>
      </div>
    </EPage>
  );
}

function PDFSlidePage({ dataUrl, title, section }: { dataUrl: string; title: string; section: string }) {
  return (
    <MediaSlideFrame section={section} page={title}>
      <img src={dataUrl} alt={title} decoding="async" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", imageRendering: "auto", backfaceVisibility: "hidden" }} />
    </MediaSlideFrame>
  );
}

function KeynoteSlidePage({ dataUrl, title, section, slideNumber }: { dataUrl: string; title: string; section: string; slideNumber: number }) {
  return (
    <div aria-label={`${section} — slide ${slideNumber}`} style={{ width: PW, height: PH, background: c.bg, overflow: "hidden" }}>
      <img src={dataUrl} alt={title} decoding="async" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", imageRendering: "auto", backfaceVisibility: "hidden" }} />
    </div>
  );
}

interface EditableSlideItem {
  kind: "text" | "shape" | "image";
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string | null;
  stroke?: string | null;
  rotation?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  fontStyle?: string;
  letterSpacing?: number;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  vertical?: "flex-start" | "center" | "flex-end";
  src?: string;
  crop?: { l: number; t: number; r: number; b: number } | null;
}

interface EditableSlideData {
  sourceSlide: number;
  items: EditableSlideItem[];
}

function CoverEditorialPage({ data }: { data: EditableSlideData }) {
  const artwork = [...data.items].reverse().find((item) => item.kind === "image" && item.src);
  return (
    <div aria-label="Editorial RPL Portfolio cover" style={{ width: PW, height: PH, position: "relative", overflow: "hidden", background: c.dark, color: c.white }}>
      <div style={{ position: "absolute", inset: "0 48% 0 0", padding: "54px 52px 42px", display: "grid", gridTemplateRows: "auto 1fr auto", borderRight: `1px solid ${c.ochre}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 18, borderBottom: `1px solid rgba(250,250,250,.36)` }}>
          <span style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.5 }}>RPL PORTFOLIO</span>
          <span style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.2 }}>A4 LANDSCAPE · 2026</span>
        </div>
        <div style={{ alignSelf: "center", maxWidth: 430 }}>
          <div aria-hidden="true" style={{ width: 0, height: 0, borderLeft: "23px solid transparent", borderRight: "23px solid transparent", borderTop: `34px solid ${c.ochre}`, marginBottom: 34 }} />
          <h1 style={{ fontFamily: Fd, fontSize: 69, fontWeight: 600, lineHeight: .9, letterSpacing: -2.2, margin: 0 }}>Editorial<br />RPL Portfolio</h1>
          <div style={{ display: "grid", gridTemplateColumns: "38px 1fr 38px", alignItems: "center", gap: 14, marginTop: 28 }}>
            <span style={{ height: 1, background: c.ochre }} />
            <span style={{ fontFamily: Fm, fontSize: 10.5, lineHeight: 1.35, letterSpacing: 1.4, textAlign: "center" }}>RECOGNITION OF PRIOR LEARNING</span>
            <span style={{ height: 1, background: c.ochre }} />
          </div>
          <p style={{ fontFamily: Fb, fontSize: 15, lineHeight: 1.55, maxWidth: 360, margin: "27px 0 0", color: "rgba(250,250,250,.8)" }}>A document of process, observation, and the permanence of lived experience.</p>
        </div>
        <div style={{ paddingTop: 18, borderTop: `1px solid rgba(250,250,250,.36)` }}>
          <div style={{ fontFamily: Fm, fontSize: 9.5, letterSpacing: 1.3, color: c.ochre, marginBottom: 9 }}>SUBMITTED BY</div>
          <div style={{ fontFamily: Fd, fontSize: 21, lineHeight: 1.1 }}>Qinisile Gracious Mkhonto</div>
          <div style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.35, letterSpacing: .55, marginTop: 7, color: "rgba(250,250,250,.72)" }}>COMMUNICATION DESIGN · RECOGNITION OF PRIOR LEARNING · 2026</div>
        </div>
      </div>
      <div style={{ position: "absolute", inset: "0 0 0 52%", background: "#0f0e0d" }}>
        {artwork?.src && <img src={`${import.meta.env.BASE_URL}${artwork.src.replace(/^\//, "")}`} alt="Selected portfolio artwork" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,14,13,.22), transparent 30%)" }} />
        <div style={{ position: "absolute", left: 26, right: 26, bottom: 23, display: "flex", justifyContent: "space-between", fontFamily: Fm, fontSize: 10, lineHeight: 1.2, letterSpacing: 1.1, color: c.white }}>
          <span>AFRICA INTERNATIONAL DESIGN AWARDS · WINNER 2026</span><span>VOL. 1</span>
        </div>
      </div>
    </div>
  );
}

function PortfolioDetailsPage() {
  const metadata = [
    ["Applicant", "Qinisile Gracious Mkhonto"],
    ["Qualification", "BA Design (Communication Design)"],
    ["Institution", "University of Johannesburg"],
    ["Submission", "November 2026"],
    ["Archive ref.", "RPL–2026–GE–V01"],
  ];
  return (
    <div aria-label="Recognition of Prior Learning portfolio details" style={{ width: PW, height: PH, position: "relative", overflow: "hidden", background: c.bg, color: c.ink, padding: "34px 52px 30px", boxSizing: "border-box", display: "grid", gridTemplateRows: "34px 1fr 26px" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${c.rule}`, paddingBottom: 11, fontFamily: Fm, fontSize: 10.5, lineHeight: 1, letterSpacing: 1.25 }}>
        <span>RPL PORTFOLIO</span><span>PORTFOLIO DETAILS · 2026</span>
      </header>
      <main style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 74, alignItems: "center", padding: "42px 52px 34px" }}>
        <section>
          <div style={{ fontFamily: Fm, fontSize: 10.5, letterSpacing: 1.55, color: c.ochre, marginBottom: 24 }}>RECOGNITION OF PRIOR LEARNING</div>
          <h1 style={{ fontFamily: Fd, fontSize: 57, lineHeight: .94, letterSpacing: -1.6, margin: 0, maxWidth: 470 }}>Bachelor of Arts in Design<br /><em style={{ fontWeight: 400 }}>Communication Design</em></h1>
          <div style={{ width: 58, height: 1, background: c.ochre, marginTop: 32 }} />
        </section>
        <section style={{ borderTop: `1px solid ${c.ink}`, borderBottom: `1px solid ${c.rule}`, padding: "6px 0 4px" }}>
          {metadata.map(([label, value]) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "128px 1fr", columnGap: 28, alignItems: "baseline", minHeight: 61, padding: "18px 0 13px", borderBottom: label === "Archive ref." ? "none" : `1px solid ${c.rule}` }}>
              <div style={{ fontFamily: Fm, fontSize: 10.5, lineHeight: 1.25, letterSpacing: 1.15, textTransform: "uppercase", color: c.mid }}>{label}</div>
              <div style={{ fontFamily: Fb, fontSize: 15, lineHeight: 1.38, fontWeight: 500 }}>{value}</div>
            </div>
          ))}
        </section>
      </main>
      <footer style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderTop: `1px solid ${c.rule}`, paddingTop: 10, fontFamily: Fm, fontSize: 9.5, lineHeight: 1, letterSpacing: 1 }}>
        <span>QINISILE GRACIOUS MKHONTO · COMMUNICATION DESIGN</span><span>P. 02</span>
      </footer>
    </div>
  );
}

function EditorialPageShell({ page, eyebrow, children }: { page: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div style={{ width: PW, height: PH, position: "relative", overflow: "hidden", background: c.bg, color: c.ink, padding: "34px 52px 30px", boxSizing: "border-box", display: "grid", gridTemplateRows: "34px 1fr 26px" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${c.rule}`, paddingBottom: 11, fontFamily: Fm, fontSize: 11, lineHeight: 1, letterSpacing: 1.25 }}>
        <span>RPL PORTFOLIO</span><span>{eyebrow}</span>
      </header>
      {children}
      <footer style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderTop: `1px solid ${c.rule}`, paddingTop: 10, fontFamily: Fm, fontSize: 10, lineHeight: 1, letterSpacing: 1 }}>
        <span>QINISILE GRACIOUS MKHONTO · COMMUNICATION DESIGN</span><span>{page}</span>
      </footer>
    </div>
  );
}

const ContentsGroup = ({ title, lines }: { title: string; lines: string[] }) => (
  <section style={{ breakInside: "avoid", marginBottom: 18 }}>
    <h2 style={{ fontFamily: Fd, fontSize: 20, lineHeight: 1, margin: "0 0 8px", fontWeight: 600 }}>{title}</h2>
    {lines.map((line) => <div key={line} style={{ fontFamily: Fb, fontSize: 12.5, lineHeight: 1.35, padding: "3px 0", borderBottom: `1px solid ${c.rule}` }}>{line}</div>)}
  </section>
);

function ContentsEditorialPage() {
  const left = [
    ["Front Matter", ["01 Cover", "02 Title Page", "03 Table of Contents", "04 Cover Letter", "05 Executive Summary", "06 Programme Framework — B8CD2Q", "07 Curriculum Vitae"]],
    ["Part One — Designer", ["01 Professional Profile", "02 Design Philosophy", "03 My Strengths (×10)", "04 Reflective Learning Statement"]],
    ["Part Two — Evidence", ["01 Qualification Outcome Mapping", "02 Evidence Matrix"]],
  ] as const;
  const right = [
    ["Part Three — Design Portfolio", ["Portfolio Overview", "Standard Project Template", "Brand Identity · Packaging · Editorial", "Typography · Illustration · Photography"]],
    ["Parts Four–Six", ["Professional Practice · Workflow · Leadership", "Research & Writing · Theory · Reflection", "Awards · Certificates · Recognition"]],
    ["Part Seven & Back Matter", ["CV · Transcripts · Certificates · Letters", "Behance · LinkedIn · Adobe", "References · Appendices A–L", "Design Rationale · Colophon · Declaration"]],
  ] as const;
  return <EditorialPageShell page="P. 03" eyebrow="CONTENTS · 2026"><main style={{ padding: "36px 52px 26px", display: "grid", gridTemplateRows: "auto 1fr", gap: 24 }}><div><div style={{ fontFamily: Fm, color: c.ochre, fontSize: 11, letterSpacing: 1.7, marginBottom: 12 }}>RECOGNITION OF PRIOR LEARNING</div><h1 style={{ fontFamily: Fd, fontSize: 50, lineHeight: .95, margin: 0 }}>Portfolio Contents</h1></div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>{[left, right].map((column, index) => <div key={index}>{column.map(([title, lines]) => <ContentsGroup key={title} title={title} lines={[...lines]} />)}</div>)}</div></main></EditorialPageShell>;
}

function ProfileEditorialPage({ data }: { data: EditableSlideData }) {
  const portrait = data.items.find((item) => item.kind === "image" && item.src);
  const practices = ["Communication Design", "Editorial Design", "Brand Systems", "Photography", "Art Direction", "Research"];
  return <EditorialPageShell page="P. 04" eyebrow="PROFESSIONAL PROFILE"><main style={{ padding: "38px 52px 30px", display: "grid", gridTemplateColumns: "1fr 290px", gap: 60 }}><section><div style={{ fontFamily: Fm, fontSize: 11, color: c.ochre, letterSpacing: 1.7, marginBottom: 12 }}>PROFESSIONAL PROFILE</div><h1 style={{ fontFamily: Fd, fontSize: 54, lineHeight: .95, margin: "0 0 28px" }}>About Me</h1><div style={{ maxWidth: 680, fontFamily: Fb, fontSize: 15.5, lineHeight: 1.52 }}><p>Qinisile Gracious Mkhonto is a South African communication designer, researcher, and photographer with 14 years of multidisciplinary professional practice spanning brand identity, editorial design, typography, illustration, photography, and digital media.</p><p>My practice is rooted in African-centred design philosophy, rigorous research methodology, and a deep commitment to socially responsible communication. I approach each project as an investigation—beginning with context and concluding with a visual solution that is purposeful, accessible, and culturally informed.</p><p>Working across commercial, cultural, governmental, and community sectors, I have developed a distinctive practice that integrates conceptual thinking with technical craft.</p><blockquote style={{ margin: "27px 0 0", paddingLeft: 18, borderLeft: `3px solid ${c.ochre}`, fontFamily: Fd, fontSize: 21, lineHeight: 1.3 }}>Communication designer · Researcher · Photographer · Multidisciplinary creative</blockquote></div></section><aside style={{ borderLeft: `1px solid ${c.rule}`, paddingLeft: 26 }}>{portrait?.src && <img src={`${import.meta.env.BASE_URL}${portrait.src.replace(/^\//, "")}`} alt="Qinisile Gracious Mkhonto" style={{ width: "100%", height: 132, objectFit: "cover", objectPosition: "center 20%", marginBottom: 18 }} />}<div style={{ fontFamily: Fm, fontSize: 10.5, letterSpacing: 1.6, marginBottom: 8 }}>VERIFIABLE PROFILE</div>{[["PERIOD", "2012–2026 · 14 years"], ["SELECTED WORK", "Campaigns · identities · publications"], ["RECOGNITION", "AIDA Winner · 2026"], ["EVIDENCE", "Parts 03–07 · Appendices A–L"]].map(([label, value]) => <div key={label} style={{ padding: "6px 0", borderTop: `1px solid ${c.rule}` }}><div style={{ fontFamily: Fm, fontSize: 8.5, letterSpacing: 1.1, color: c.ochre }}>{label}</div><div style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.3 }}>{value}</div></div>)}<div style={{ fontFamily: Fm, fontSize: 10.5, letterSpacing: 1.6, margin: "14px 0 5px" }}>CORE PRACTICE</div>{practices.map((item) => <div key={item} style={{ fontFamily: Fb, fontSize: 12.5, lineHeight: 1.25, padding: "4px 0", borderBottom: `1px solid ${c.rule}` }}>{item}</div>)}</aside></main></EditorialPageShell>;
}

function CoverLetterEditorialPage() {
  const structure = ["Front Matter — Cover · Title · Contents · Letter · Summary · CV", "Part One — Designer profile · Philosophy · Strengths · Reflection", "Part Two — Qualification mapping · Evidence matrix", "Part Three — Portfolio disciplines · Case studies", "Parts Four–Six — Practice · Research · Awards", "Part Seven — Supporting documents", "Back Matter — References · Appendices · Declaration"];
  return <EditorialPageShell page="P. 05" eyebrow="COVER LETTER"><main style={{ padding: "38px 52px 28px", display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 72 }}><section><div style={{ fontFamily: Fm, fontSize: 11, color: c.ochre, letterSpacing: 1.7, marginBottom: 12 }}>COVER LETTER</div><h1 style={{ fontFamily: Fd, fontSize: 52, lineHeight: .95, margin: "0 0 24px" }}>To the RPL Assessor</h1><div style={{ fontFamily: Fb, fontSize: 14.5, lineHeight: 1.48 }}><p>Faculty of Art, Design and Architecture<br />University of Johannesburg</p><p>Dear Assessor,</p><p>I am submitting my Recognition of Prior Learning portfolio in support of my application for the Bachelor of Arts in Design (Communication Design). My 14 years of professional practice have equipped me with knowledge, skills, and competencies aligned with those expected of a graduate of this programme.</p><p>My design journey spans brand identity, editorial design, typography, photography, illustration, UX/UI, and motion graphics—across commercial, cultural, governmental, and community contexts. What distinguishes my practice is its research foundation and African-centred methodology.</p><p>This portfolio documents evidence across seven structured parts: Designer Profile, Evidence of Learning, Design Portfolio, Professional Practice, Research and Writing, Awards, and Supporting Documents.</p><p style={{ marginTop: 25, fontFamily: Fd, fontSize: 20 }}>Qinisile G. Mkhonto</p><div style={{ fontFamily: Fm, fontSize: 10.5, letterSpacing: 1.2 }}>APPLICANT · NOVEMBER 2026</div></div></section><aside style={{ borderTop: `1px solid ${c.ink}`, paddingTop: 16 }}><div style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.7, marginBottom: 15 }}>PORTFOLIO STRUCTURE</div>{structure.map((item) => <div key={item} style={{ fontFamily: Fb, fontSize: 13, lineHeight: 1.35, padding: "10px 0", borderBottom: `1px solid ${c.rule}` }}>{item}</div>)}</aside></main></EditorialPageShell>;
}

function ExecutiveSummaryEditorialPage() {
  const journey = [["Previous Studies", "Foundation in visual communication, typography, print production, photography, and design thinking."], ["Independent Learning", "Design literature, UX and motion study, and sustained engagement with international design discourse."], ["Professional Practice", "14 years of client-facing work across commercial, cultural, NGO, governmental, and community sectors."], ["Photography & Research", "Professional photography used as both a service and a primary research methodology."], ["Community Leadership", "Advisory-board participation, peer mentoring, and teaching experience in African-centred design."]];
  return <EditorialPageShell page="P. 06" eyebrow="EXECUTIVE SUMMARY"><main style={{ padding: "38px 52px 28px", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 74 }}><section><div style={{ fontFamily: Fm, fontSize: 11, color: c.ochre, letterSpacing: 1.7, marginBottom: 12 }}>EXECUTIVE SUMMARY</div><h1 style={{ fontFamily: Fd, fontSize: 48, lineHeight: .98, margin: "0 0 25px" }}>A design journey rooted in research and practice</h1><blockquote style={{ margin: "0 0 26px", paddingLeft: 18, borderLeft: `3px solid ${c.ochre}`, fontFamily: Fd, fontSize: 23, lineHeight: 1.28 }}>“Design is not mere decoration—it is the architecture of lived meaning.”</blockquote><div style={{ fontFamily: Fb, fontSize: 14.5, lineHeight: 1.5 }}><p>Fourteen years of professional practice across brand identity, editorial design, typography, photography, UX/UI, and motion graphics—spanning commercial, cultural, governmental, and community sectors.</p><p>This portfolio documents the full breadth of my skills, knowledge, and professional competencies acquired through formal education, independent learning, and sustained practice.</p><p>Each section maps to the qualification outcomes for BA Design (Communication Design), supported by project evidence, reflective writing, and professional documentation.</p></div></section><section><div style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.7, marginBottom: 14 }}>LEARNING JOURNEY OVERVIEW</div>{journey.map(([title, text]) => <div key={title} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 20, padding: "14px 0", borderTop: `1px solid ${c.rule}` }}><h2 style={{ fontFamily: Fd, fontSize: 18, lineHeight: 1.1, margin: 0 }}>{title}</h2><p style={{ fontFamily: Fb, fontSize: 13.5, lineHeight: 1.4, margin: 0 }}>{text}</p></div>)}</section></main></EditorialPageShell>;
}

function CvEditorialPage() {
  const experience = [["2012–Present", "Independent Communication Designer", "Branding, editorial, photography, campaign and information design. · See Appendices A, E, H"], ["Ongoing", "Brand Ambassador & Campaign Model", "Sta-Sof-Fro · Alushi Models · Heads · Spotlight Agency. · See Appendix K"], ["Ongoing", "Social Media Manager · Host · MC · Interviewer", "Discovery · Take My Hand · Spotlight Agency platforms. · See Appendices E, K"], ["Ongoing", "Documentary & Brand Photographer", "Portrait, event, product, architectural and documentary practice. · See Appendix D"], ["Ongoing", "Agricultural & Property Management", "Resource planning, stakeholder communication, operations and financial oversight. · See Appendix K"]];
  const education = [["2026", "BA Communication Design — RPL Application", "University of Johannesburg"], ["2025", "BA Graphic Design Year 1 — Pass", "Greenside Design Center · IIE"], ["2024", "Graphic Design Short Course · 100 hrs", "University of Cape Town · GetSmarter"], ["2021", "Digital Photography Short Course · 100 hrs", "University of Cape Town · GetSmarter"], ["2015–2018", "BA Graphic Design (NQF 7)", "Design School of Southern Africa"]];
  const Row = ({ item }: { item: string[] }) => <div style={{ display: "grid", gridTemplateColumns: "92px 1fr", gap: 16, padding: "9px 0", borderTop: `1px solid ${c.rule}` }}><div style={{ fontFamily: Fm, fontSize: 10.5, lineHeight: 1.3, letterSpacing: .5, color: c.mid }}>{item[0]}</div><div><div style={{ fontFamily: Fb, fontSize: 13.5, lineHeight: 1.25, fontWeight: 600 }}>{item[1]}</div><div style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.35, marginTop: 3 }}>{item[2]}</div></div></div>;
  return <EditorialPageShell page="P. 07" eyebrow="CURRICULUM VITAE"><main style={{ padding: "34px 52px 25px", display: "grid", gridTemplateRows: "auto 1fr", gap: 25 }}><div><h1 style={{ fontFamily: Fd, fontSize: 48, lineHeight: .95, margin: 0 }}>Qinisile Gracious Mkhonto</h1><div style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.5, color: c.ochre, marginTop: 13 }}>COMMUNICATION DESIGNER · RESEARCHER · PHOTOGRAPHER · 14 YEARS</div></div><div style={{ display: "grid", gridTemplateColumns: "1.08fr .92fr", gap: 64 }}><section><div style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.6, marginBottom: 10 }}>PROFESSIONAL EXPERIENCE</div>{experience.map((item) => <Row key={item[1]} item={item} />)}</section><section><div style={{ fontFamily: Fm, fontSize: 11, letterSpacing: 1.6, marginBottom: 10 }}>EDUCATION</div>{education.map((item) => <Row key={item[1]} item={item} />)}<div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 25 }}><div><div style={{ fontFamily: Fm, fontSize: 10.5, letterSpacing: 1.3, marginBottom: 8 }}>SOFTWARE</div><p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.45, margin: 0 }}>Adobe InDesign · Illustrator · Photoshop · Lightroom · After Effects · Figma · Glyphs · Cinema 4D · Procreate</p></div><div><div style={{ fontFamily: Fm, fontSize: 10.5, letterSpacing: 1.3, marginBottom: 8 }}>AWARDS</div><p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.45, margin: 0 }}>2026 AIDA Winner<br />Ukuvuselela · AR017</p></div></div></section></div></main></EditorialPageShell>;
}

function ReflectiveLearningEditorialPage() {
  const stages = [
    ["01 · Experience", "Fourteen years of practice (2012–2026) across identity, editorial, photography, digital, motion, community, and entrepreneurial contexts.", "Evidence · Parts 03–04 · Appendices A, D, E"],
    ["02 · Reflection", "Visual journals, research writing, critiques, and post-project reviews identify what succeeded, what failed, and what changed in my judgement.", "Evidence · Part 05 · Appendices C, L"],
    ["03 · Application", "Learning is applied through iterative projects including Gauta Eteng, Ukuvuselela, Zulu Fractal, Lucky Star, and professional client work.", "Evidence · Part 03 · Appendices F, G, I"],
    ["04 · Verification", "Process files, dated artefacts, approvals, awards, testimonials, and original image files establish authorship and professional competence.", "Evidence · Parts 06–07 · Appendices D, K"],
  ];
  return <EditorialPageShell page="P. 08" eyebrow="PART ONE · REFLECTIVE LEARNING"><main style={{ padding: "32px 52px 24px", display: "grid", gridTemplateColumns: "230px 1fr", gap: 52 }}><section><div style={{ fontFamily: Fm, fontSize: 11, color: c.ochre, letterSpacing: 1.7, marginBottom: 15 }}>EVIDENCE-LED REFLECTION</div><h1 style={{ fontFamily: Fd, fontSize: 42, lineHeight: .96, margin: "0 0 25px" }}>Practice becomes learning when it is examined</h1><blockquote style={{ margin: "0 0 24px", paddingLeft: 16, borderLeft: `3px solid ${c.ochre}`, fontFamily: Fd, fontSize: 17, lineHeight: 1.35 }}>“The most significant growth occurs at the intersection of discomfort and discipline.”</blockquote><p style={{ fontFamily: Fb, fontSize: 13.5, lineHeight: 1.48, margin: 0 }}>This four-stage framework connects professional experience to reflection, application, and verifiable evidence.</p></section><section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", columnGap: 28, rowGap: 22, alignContent: "start" }}>{stages.map(([title, text, evidence]) => <article key={title} style={{ padding: "14px 0 15px", borderTop: `2px solid ${c.ochre}`, minHeight: 165 }}><h2 style={{ fontFamily: Fd, fontSize: 22, lineHeight: 1.08, margin: "0 0 10px" }}>{title}</h2><p style={{ fontFamily: Fb, fontSize: 12.5, lineHeight: 1.45, margin: "0 0 14px" }}>{text}</p><p style={{ fontFamily: Fm, fontSize: 9.5, lineHeight: 1.35, letterSpacing: .45, color: c.ochre, margin: 0 }}>{evidence}</p></article>)}</section></main></EditorialPageShell>;
}

function normalizeEditableSlideText(slideNumber: number, value = "") {
  let text = value
    .replace("This portfolio is documents  the full breadth", "This portfolio documents the full breadth")
    .replace("Social media posts designed to build anticipations", "Social media posts designed to build anticipation")
    .replace("Uncategorized work\nDocumented Evidence · 2018–2024", "Community, Enterprise and Event Practice\nDocumented Evidence · 2018–2024")
    .replace("assessedforauthenticity", "assessed for authenticity")
    .replace("In western design green and sharp geometric lines are associated with villains in Africa prehistorically green is associated with health, growth, fertility. Triangles are feminine, While the diamonds shape means balance.", "In Western design, green and sharp geometric lines are often associated with villains. In precolonial African visual culture, green is associated with health, growth, and fertility. Triangles are feminine forms, while the diamond represents balance.");

  if (slideNumber === 12) {
    text = text
      .replace("A 4  A N DS CLA PE · 2 9 7 × 201  M", "A4 LANDSCAPE · 297 × 210 MM")
      .replace("IETDORI AL R PL P ORT FOLIO", "EDITORIAL RPL PORTFOLIO")
      .replace("REV IEW BOARD ·  GU IDEL IN ES", "REVIEW BOARD · GUIDELINES")
      .replace("PRIN T ED IN DIGITAL F ORM", "PRINTED IN DIGITAL FORM")
      .replace("© 20 24", "© 2024");
  }

  const correctedFolios: Record<number, string> = { 183: "P. 115", 184: "P. 116", 185: "P. 117", 192: "P. 118" };
  if (correctedFolios[slideNumber]) text = text.replaceAll("P. 114", correctedFolios[slideNumber]);
  return text;
}

function EditableTextSlidePage({ slideNumber, section, data }: { slideNumber: number; section: string; data: EditableSlideData }) {
  if (slideNumber === 1) return <CoverEditorialPage data={data} />;
  if (slideNumber === 2) return <PortfolioDetailsPage />;
  if (slideNumber === 3) return <ContentsEditorialPage />;
  if (slideNumber === 4) return <ProfileEditorialPage data={data} />;
  if (slideNumber === 5) return <CoverLetterEditorialPage />;
  if (slideNumber === 6) return <ExecutiveSummaryEditorialPage />;
  if (slideNumber === 7) return <CvEditorialPage />;
  if (slideNumber === 8) return <ReflectiveLearningEditorialPage />;
  const resolvedColor = (value?: string | null) => {
    if (!value || (slideNumber !== 14 && slideNumber !== 18)) return value;
    const normalized = value.toUpperCase();
    if (normalized === "#BF7B76") return c.ochre;
    if (normalized === "#EFD3D1") return c.grey;
    if (slideNumber === 18 && normalized === "#DDD5CC") return c.bg;
    return value;
  };

  return (
      <div aria-label={`${section} — editable reconstruction of Portfolio Slide ${slideNumber}`} style={{ width: PW, height: PH, position: "relative", overflow: "hidden", background: c.bg }}>
      {data.items.map((item, index) => {
        const isPhotographyTitle = index === 9 && slideNumber >= 45 && slideNumber <= 47;
        const adjustedWidth = isPhotographyTitle && slideNumber === 45 ? 24.5 : item.w;
        const isSlide9Footer = slideNumber === 9 && item.kind === "text" && item.y > 95;
        const isSlide10Text = slideNumber === 10 && item.kind === "text";
        const isSlide12Header = slideNumber === 12 && item.kind === "text" && item.y < 10;
        const isSlide12Footer = slideNumber === 12 && item.kind === "text" && item.y > 94;
        const isSlide13Text = slideNumber === 13 && item.kind === "text";
        const isSlide13Footer = isSlide13Text && item.y > 95;
        const isSlide13Identity = isSlide13Text && item.x >= 84 && item.y >= 15 && item.y <= 40;
        const isSlide15Text = slideNumber === 15 && item.kind === "text";
        const isSlide15Footer = isSlide15Text && item.y > 95;
        const isSlide19Text = slideNumber === 19 && item.kind === "text";
        const isSlide19Footer = isSlide19Text && item.y > 95;
        const isSharedSafeFooter = item.kind === "text" && item.y > 95 && (slideNumber === 14 || slideNumber >= 20);
        const hideSlide12OverflowFragment = slideNumber === 12 && index === 10;
        const slide12FormatLabelWidth = slideNumber === 12 && index === 9 ? 16.7 : adjustedWidth;
        const resolvedWidth = isSlide13Identity ? Math.max(slide12FormatLabelWidth, 14) : slide12FormatLabelWidth;
        const adjustedTop = slideNumber === 108 && index === 56
          ? 15.2
          : isSlide9Footer
            ? 96.1
            : isSlide12Header
              ? Math.max(item.y, 1.35)
              : isSlide12Footer
                ? 96.35
                : isSlide13Footer
                  ? 96.15
                  : isSlide15Footer
                    ? 96.15
                  : isSlide19Footer
                    ? 96.15
                  : isSharedSafeFooter
                    ? 96.15
                    : item.y;
        const rawText = normalizeEditableSlideText(slideNumber, item.text);
        const textLines = rawText.split("\n");
        const longestLine = Math.max(1, ...textLines.map(line => line.length));
        const boxWidthPx = (adjustedWidth / 100) * PW;
        const boxHeightPx = (item.h / 100) * PH;
        const widthBoundPt = (boxWidthPx / (longestLine * 0.54)) * 0.75;
        const heightBoundPt = (boxHeightPx / (Math.max(1, textLines.length) * 1.18)) * 0.75;
        const rawFrameBoundPt = Math.min(widthBoundPt, heightBoundPt);
        const frameBoundPt = Math.max(9, rawFrameBoundPt);
        const isEdgeMatter = item.y < 10 || item.y > 95;
        const lettersOnly = rawText.replace(/[^A-Za-zÀ-ž]/g, "");
        const isAllCaps = lettersOnly.length > 1 && lettersOnly === lettersOnly.toUpperCase();
        const isDisplayText = !isEdgeMatter && rawText.length <= 110 && item.h >= 8;
        const isMidLevelText = !isEdgeMatter && rawText.length <= 70 && item.h >= 5;
        const isLabelText = !isEdgeMatter && isAllCaps && rawText.length <= 80 && item.h < 8;
        const characterStyle = isEdgeMatter
          ? "folio"
          : isDisplayText
            ? "display"
            : isMidLevelText
              ? "subheading"
              : isLabelText
                ? "label"
                : "body";
        const preferredFontSize = slideNumber === 108 && index === 14
          ? 8
          : isPhotographyTitle
            ? 30
            : characterStyle === "display"
              ? item.h >= 18 ? 52 : item.h >= 12 ? 38 : 32
              : characterStyle === "subheading"
                ? 18
                : characterStyle === "body"
                  ? 11.5
                  : characterStyle === "label"
                    ? 9.5
                    : 9;
        // Respect the original Keynote frame. The former forced minimum enlarged copy
        // beyond its available box and produced overlaps across the reconstructed deck.
        const minimumReadableSize = characterStyle === "display" ? 18 : characterStyle === "subheading" ? 12 : 9;
        const resolvedFontSize = isSlide9Footer
          ? Math.min(item.fontSize || 6, 7)
          : isSlide12Header || isSlide12Footer
            ? Math.min(item.fontSize || 6, 6.5)
          : isSlide13Text
            ? isSlide13Footer
              ? 6.5
              : Math.max(7, Math.min(item.fontSize || preferredFontSize, rawFrameBoundPt))
          : isSlide15Text
            ? isSlide15Footer
              ? 6.5
              : index === 47
                ? Math.min(17, rawFrameBoundPt)
                : index === 66 || index === 67
                  ? Math.min(10.5, rawFrameBoundPt)
                  : index >= 85
                    ? Math.min(9.5, rawFrameBoundPt)
                    : Math.min(index === 41 || index === 46 || index === 65 || index === 68 || index === 77 ? 8.5 : 8, rawFrameBoundPt)
          : isSlide19Text
            ? isSlide19Footer
              ? 6.5
              : index === 14
                ? Math.min(20, rawFrameBoundPt)
                : index === 15 || index === 20
                  ? Math.min(17, rawFrameBoundPt)
                  : index >= 16 && index <= 18
                    ? Math.min(9.5, rawFrameBoundPt)
                    : index >= 22 && index <= 30 && index % 2 === 0
                      ? Math.min(9, rawFrameBoundPt)
                      : index === 32
                        ? Math.min(8.5, rawFrameBoundPt)
                        : Math.min(8, rawFrameBoundPt)
          : isSharedSafeFooter
            ? 6.5
          : isSlide10Text
            ? Math.max(5.5, Math.min(item.fontSize || preferredFontSize, rawFrameBoundPt))
            : Math.max(minimumReadableSize, Math.min(preferredFontSize, frameBoundPt));
        const resolvedTracking = characterStyle === "display"
          ? -0.35
          : characterStyle === "label"
            ? 0.96
            : characterStyle === "folio"
              ? 0.6
              : 0;
        const resolvedFamily = characterStyle === "display" ? Fd : characterStyle === "folio" ? Fm : Fb;
        const resolvedWeight = characterStyle === "display"
          ? 600
          : characterStyle === "subheading" || characterStyle === "label"
            ? 600
            : 400;
        const resolvedLineHeight = characterStyle === "display"
          ? 0.98
          : characterStyle === "subheading"
            ? 1.18
            : characterStyle === "body"
              ? 1.5
              : 1.2;
        const adjustedHeight = isSlide9Footer
          ? 2.8
          : isSlide12Header || isSlide12Footer
            ? 2.45
            : isSlide13Footer
              ? 2.75
            : isSlide15Footer
              ? 2.75
            : isSlide19Footer
              ? 2.75
            : isSharedSafeFooter
              ? 2.75
            : item.y > 95
              ? Math.min(item.h, 2.55)
              : item.h;
        const shared: React.CSSProperties = {
          position: "absolute",
          left: `${item.x}%`,
          top: `${adjustedTop}%`,
          width: `${resolvedWidth}%`,
          height: `${adjustedHeight}%`,
          boxSizing: "border-box",
          background: resolvedColor(item.fill) || "transparent",
          border: item.stroke ? `0.5px solid ${resolvedColor(item.stroke)}` : "none",
          transform: item.rotation ? `rotate(${item.rotation}deg)` : undefined,
          transformOrigin: "center",
        };

        if (item.kind === "shape") return <div key={index} style={shared} />;

        if (item.kind === "image" && item.src) {
          const crop = item.crop || { l: 0, t: 0, r: 0, b: 0 };
          const hasCrop = crop.l > 0.01 || crop.t > 0.01 || crop.r > 0.01 || crop.b > 0.01;
          const visibleW = Math.max(1, 100 - crop.l - crop.r);
          const visibleH = Math.max(1, 100 - crop.t - crop.b);
          return (
            <div key={index} style={{ ...shared, overflow: "hidden" }}>
              <img
                src={`${import.meta.env.BASE_URL}${item.src.replace(/^\//, "")}`}
                alt=""
                draggable={false}
                decoding="async"
                style={{
                  position: "absolute",
                  width: `${10000 / visibleW}%`,
                  height: `${10000 / visibleH}%`,
                  left: `${-crop.l * 100 / visibleW}%`,
                  top: `${-crop.t * 100 / visibleH}%`,
                  objectFit: hasCrop ? "cover" : "contain",
                  objectPosition: "center",
                  maxWidth: "none",
                  display: "block",
                }}
              />
            </div>
          );
        }

        return (
          <div
            key={index}
            data-editable-slide-text="true"
            data-character-style={characterStyle}
            contentEditable={!IS_PUBLIC_VIEWER}
            suppressContentEditableWarning
            spellCheck={!IS_PUBLIC_VIEWER}
            aria-readonly={IS_PUBLIC_VIEWER || undefined}
            style={{
              ...shared,
              display: hideSlide12OverflowFragment ? "none" : "flex",
              alignItems: item.vertical || "flex-start",
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              fontFamily: resolvedFamily,
              fontSize: `${resolvedFontSize}pt`,
              fontWeight: resolvedWeight,
              fontStyle: characterStyle === "display" ? item.fontStyle || "normal" : "normal",
              letterSpacing: `${resolvedTracking}pt`,
              lineHeight: resolvedLineHeight,
              color: (() => {
                const colour = resolvedColor(item.color);
                if (slideNumber === 11) return index === 17 || index === 23 ? c.ochre : c.white;
                if (slideNumber !== 1) return colour || c.ink;

                const normalized = (colour || "").replace(/\s+/g, "").toUpperCase();
                const darkCoverColours = new Set([
                  "#1A1815",
                  "#000000",
                  "#111111",
                  "#222222",
                  "RGB(26,24,21)",
                  "RGB(0,0,0)",
                  "RGB(17,17,17)",
                  "RGB(34,34,34)",
                ]);

                return !colour || darkCoverColours.has(normalized) ? c.white : colour;
              })(),
              textAlign: item.align || "left",
              outline: "none",
              cursor: "text",
            }}
          >
            {rawText}
          </div>
        );
      })}
      </div>
  );
}

function ImageEvidencePage({ src, title, section, page, caption, accent = c.brown, label = "Editorial Evidence", category = "Editorial Design", evidence = "Publication layout, typographic hierarchy, modular grid, spread system, editorial campaign design." }: {
  src: string;
  title: string;
  section: string;
  page: string;
  caption: string;
  accent?: string;
  label?: string;
  category?: string;
  evidence?: string;
}) {
  return (
    <EPage section={section} page={page}>
      <div style={{ position: "absolute", inset: 0, padding: `18px ${M}px 14px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, letterSpacing: "-0.01em" }}>{title}</div>
            <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: accent }}>{label}</div>
          </div>
          <span style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>Placed Work</span>
        </div>
        <HR color={c.rule} mb={12} />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 0.72fr", gap: 18, height: CH - 74 }}>
          <div style={{ background: "#A3A09B", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: `0.5px solid ${c.rule}` }}>
            <img src={src} alt={title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: accent, marginBottom: 18 }}>{category}</div>
              <div style={{ fontFamily: Fd, fontSize: 34, lineHeight: 0.94, color: c.ink, marginBottom: 20 }}>{title}</div>
              <p style={{ fontFamily: Fm, fontSize: 9.5, lineHeight: 1.55, color: c.text }}>{caption}</p>
            </div>
            <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 14 }}>
              <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 8 }}>Evidence Type</div>
              <div style={{ fontFamily: Fm, fontSize: 9, color: c.ink, lineHeight: 1.55 }}>{evidence}</div>
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

function VideoEvidencePage({ src, title, section, page, caption, accent = c.olive, label = "Motion Evidence", category = "Fractal Motion Design", evidence }: {
  src: string;
  title: string;
  section: string;
  page: string;
  caption: string;
  accent?: string;
  label?: string;
  category?: string;
  evidence: string;
}) {
  return (
    <EPage section={section} page={page}>
      <div style={{ position: "absolute", inset: 0, padding: `18px ${M}px 14px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, letterSpacing: "-0.01em" }}>{title}</div>
            <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: accent }}>{label}</div>
          </div>
          <span style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>Moving Image</span>
        </div>
        <HR color={c.rule} mb={12} />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 0.72fr", gap: 18, height: CH - 74 }}>
          <div style={{ background: c.dark, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: `0.5px solid ${c.rule}` }}>
            <video
              src={src}
              title={title}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              style={{ width: "100%", height: "100%", objectFit: "contain", background: c.dark }}
            >
              Your browser does not support embedded video.
            </video>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: accent, marginBottom: 18 }}>{category}</div>
              <div style={{ fontFamily: Fd, fontSize: 32, lineHeight: 0.94, color: c.ink, marginBottom: 20 }}>{title}</div>
              <p style={{ fontFamily: Fm, fontSize: 9.5, lineHeight: 1.55, color: c.text }}>{caption}</p>
            </div>
            <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 14 }}>
              <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 8 }}>Evidence Type</div>
              <div style={{ fontFamily: Fm, fontSize: 9, color: c.ink, lineHeight: 1.55 }}>{evidence}</div>
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

function DualImageEvidencePage({ leftSrc, rightSrc, title, section, page, caption, accent = c.ochre, label = "3D Modelling Evidence", category = "Paired Process", evidence, leftLabel, rightLabel }: {
  leftSrc: string;
  rightSrc: string;
  title: string;
  section: string;
  page: string;
  caption: string;
  accent?: string;
  label?: string;
  category?: string;
  evidence: string;
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <EPage section={section} page={page}>
      <div style={{ position: "absolute", inset: 0, padding: `18px ${M}px 14px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, letterSpacing: "-0.01em" }}>{title}</div>
            <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: accent }}>{label}</div>
          </div>
          <span style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>Combined Work</span>
        </div>
        <HR color={c.rule} mb={12} />
        <div style={{ display: "grid", gridTemplateColumns: "1.42fr 0.58fr", gap: 18, height: CH - 74 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[[leftSrc, leftLabel], [rightSrc, rightLabel]].map(([src, imgLabel]) => (
              <div key={imgLabel} style={{ background: "#A3A09B", display: "flex", flexDirection: "column", overflow: "hidden", border: `0.5px solid ${c.rule}` }}>
                <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={src} alt={imgLabel} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ height: 26, display: "flex", alignItems: "center", padding: "0 10px", background: c.dark, color: c.white, fontFamily: Fm, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                  {imgLabel}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: accent, marginBottom: 18 }}>{category}</div>
              <div style={{ fontFamily: Fd, fontSize: 32, lineHeight: 0.94, color: c.ink, marginBottom: 20 }}>{title}</div>
              <p style={{ fontFamily: Fm, fontSize: 9.5, lineHeight: 1.55, color: c.text }}>{caption}</p>
            </div>
            <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 14 }}>
              <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 8 }}>Evidence Type</div>
              <div style={{ fontFamily: Fm, fontSize: 9, color: c.ink, lineHeight: 1.55 }}>{evidence}</div>
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

function PosterSeriesPage({ images, title, section, page, caption, accent = c.olive, label = "Poster Series", category = "Fractal Poster Design", evidence }: {
  images: Array<{ src: string; label: string }>;
  title: string;
  section: string;
  page: string;
  caption: string;
  accent?: string;
  label?: string;
  category?: string;
  evidence: string;
}) {
  return (
    <EPage section={section} page={page}>
      <div style={{ position: "absolute", inset: 0, padding: `18px ${M}px 14px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, letterSpacing: "-0.01em" }}>{title}</div>
            <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: accent }}>{label}</div>
          </div>
          <span style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>Three-Poster Set</span>
        </div>
        <HR color={c.rule} mb={12} />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 0.72fr", gap: 18, height: CH - 74 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {images.map(item => (
              <div key={item.label} style={{ background: "#A3A09B", display: "flex", flexDirection: "column", overflow: "hidden", border: `0.5px solid ${c.rule}` }}>
                <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ height: 24, display: "flex", alignItems: "center", padding: "0 9px", background: c.dark, color: c.white, fontFamily: Fm, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: accent, marginBottom: 18 }}>{category}</div>
              <div style={{ fontFamily: Fd, fontSize: 32, lineHeight: 0.94, color: c.ink, marginBottom: 20 }}>{title}</div>
              <p style={{ fontFamily: Fm, fontSize: 9.5, lineHeight: 1.55, color: c.text }}>{caption}</p>
            </div>
            <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 14 }}>
              <div style={{ fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 8 }}>Evidence Type</div>
              <div style={{ fontFamily: Fm, fontSize: 9, color: c.ink, lineHeight: 1.55 }}>{evidence}</div>
            </div>
          </div>
        </div>
      </div>
    </EPage>
  );
}

function UkuvuselelaGroupConceptPage() {
  const principles = [
    "African artefacts were designed with the knowledge that they would decay one day — and be built anew.",
    "Design meets the circular economy through natural, biodegradable or reused materials, embracing change, erosion and rebirth as part of the design cycle.",
    "Reimagine the element of shape.",
    "Use expanding fractal spirals rather than closed circles.",
    "Express the cycle of life, decay, rebirth and spirituality.",
    "Shift the idea of progress from a linear path to a looping, returning system.",
  ];
  return (
    <EPage section="PART THREE · 05 POSTER DESIGN · UKUVUSELELA" page="P. 66A">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 18px`, display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 34 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `0.5px solid ${c.rule}`, paddingRight: 30 }}>
          <div>
            <CapLabel color={c.olive}>Missing History · Group Concept</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 48, lineHeight: 0.92, color: c.ink, letterSpacing: "-0.035em", marginBottom: 18 }}>The Group<br/><em>Concept.</em></div>
            <p style={{ fontFamily: Fb, fontSize: 12.5, lineHeight: 1.65, color: c.brown, maxWidth: 330 }}>Ukuvuselela reframes design as a living cycle: material, form and meaning shift, decay and return.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 7, height: 118 }}>
            {[ukuvuselelaFractalPoster01, ukuvuselelaFractalPoster02, ukuvuselelaFractalPoster03].map((src, index) => (
              <ImageWithFallback key={src} src={src} alt={`Ukuvuselela fractal concept poster ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", border: `0.5px solid ${c.rule}` }} />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: c.olive, marginBottom: 18 }}>Concept principles extracted from the original Keynote</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 28px" }}>
              {principles.map((principle, index) => (
                <div key={principle} style={{ borderTop: `1px solid ${index === 0 ? c.olive : c.rule}`, paddingTop: 10 }}>
                  <div style={{ fontFamily: Fm, fontSize: 8, color: c.olive, marginBottom: 6 }}>{String(index + 1).padStart(2, "0")}</div>
                  <div style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.55, color: c.ink }}>{principle}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 12, fontFamily: Fm, fontSize: 9.5, lineHeight: 1.55, color: c.mid }}>Cultural renewal · circular systems · fractal movement · decay and rebirth</div>
        </div>
      </div>
    </EPage>
  );
}

function UkuvuselelaPracticeChangePage() {
  const symbols = ["A big African cat", "A dove", "Working the land", "Mama Africa as shield and crown", "A traditional mortar and pestle", "A dancing human figure", "African landscapes and terrain", "Growth of a seedling", "A somersaulting human figure"];
  return (
    <EPage section="PART THREE · 05 POSTER DESIGN · UKUVUSELELA" page="P. 66B">
      <div style={{ position: "absolute", inset: 0, padding: `26px ${M}px 18px`, display: "grid", gridTemplateColumns: "1.12fr 0.88fr", gap: 38 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <CapLabel color={c.olive}>Reflection · Research-Led Practice</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 45, lineHeight: 0.98, letterSpacing: "-0.035em", color: c.ink, maxWidth: 570, marginBottom: 22 }}>The project that changed <em>my practice.</em></div>
            <p style={{ fontFamily: Fb, fontSize: 14, lineHeight: 1.72, color: c.brown, maxWidth: 590 }}>The Missing History brief asked whose histories define design knowledge. Ukuvuselela turned research into the generator of the work, connecting collaboration, cultural responsibility and experimentation. The pattern was not decoration; its logic became the system.</p>
          </div>
          <div style={{ background: c.dark, padding: "16px 18px", borderLeft: `4px solid ${c.olive}` }}>
            <div style={{ fontFamily: Fd, fontSize: 22, lineHeight: 1.2, color: c.white }}>“A pattern is not repeated. Its logic regenerates.”</div>
          </div>
        </div>
        <div style={{ borderLeft: `0.5px solid ${c.rule}`, paddingLeft: 30, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.16em", color: c.olive, textTransform: "uppercase", marginBottom: 14 }}>Forms discovered through the fractal process</div>
            {symbols.map((symbol, index) => (
              <div key={symbol} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 10, borderTop: `0.5px solid ${c.rule}`, padding: "7px 0" }}>
                <span style={{ fontFamily: Fm, fontSize: 8, color: c.olive }}>{String(index + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink }}>{symbol}</span>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: Fm, fontSize: 9, lineHeight: 1.5, color: c.mid }}>Visual discovery · ancestral knowledge · shared experience · cyclical systems</div>
        </div>
      </div>
    </EPage>
  );
}

function GautaEtengCampaignReflectionPage() {
  return (
    <EPage section="PART FOUR · ART DIRECTION · GAUTA ETENG" page="P. 143A">
      <div style={{ position: "absolute", inset: 0, padding: `24px ${M}px 18px`, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 34 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `0.5px solid ${c.rule}`, paddingRight: 30 }}>
          <div>
            <CapLabel color={c.brown}>Campaign Reflection</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 46, lineHeight: 0.95, letterSpacing: "-0.035em", color: c.ink, marginBottom: 20 }}>One campaign.<br/><em>Many directions.</em></div>
            <p style={{ fontFamily: Fb, fontSize: 13, lineHeight: 1.7, color: c.brown }}>Gauta Eteng shows my art-direction capabilities and the potential for one visual language to branch into many communication touchpoints.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, height: 150 }}>
            <ImageWithFallback src={gautaEtengTypesOfWasteImg} alt="Gauta Eteng waste education campaign artwork" style={{ width: "100%", height: "100%", objectFit: "cover", border: `0.5px solid ${c.rule}` }} />
            <ImageWithFallback src={gautaEtengHouseholdWasteMapImg} alt="Gauta Eteng household waste map" style={{ width: "100%", height: "100%", objectFit: "cover", border: `0.5px solid ${c.rule}` }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: c.brown, marginBottom: 18 }}>Resilience through continued making</div>
            <p style={{ fontFamily: Fb, fontSize: 14, lineHeight: 1.72, color: c.ink, margin: 0 }}>Despite the failure of the group project—and my unsuccessful attempts to mentor my counterparts and support community-based activations using knowledge from prior professional practice—I continued developing the idea through prototypes.</p>
            <p style={{ fontFamily: Fb, fontSize: 14, lineHeight: 1.72, color: c.ink, marginTop: 18 }}>I challenged my own household to find the wealth in waste. My mother worked with textiles, while my daughter used paper, cardboard and plastic. This small-scale activation proved the campaign’s potential and became evidence of my ability to direct an idea across people, materials and communication outputs.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, borderTop: `0.5px solid ${c.rule}`, paddingTop: 13 }}>
            {["Household activation", "Prototype development", "Campaign art direction"].map((item, index) => <div key={item}><div style={{ fontFamily: Fm, fontSize: 8, color: c.brown, marginBottom: 5 }}>0{index + 1}</div><div style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.45, color: c.ink }}>{item}</div></div>)}
          </div>
        </div>
      </div>
    </EPage>
  );
}

function FileReferencePage({ title, section, page, fileName, fileType, caption, accent = c.olive, category = "Source File", evidence }: {
  title: string;
  section: string;
  page: string;
  fileName: string;
  fileType: string;
  caption: string;
  accent?: string;
  category?: string;
  evidence: string;
}) {
  return (
    <EPage section={section} page={page}>
      <div style={{ position: "absolute", inset: 0, padding: `34px ${M}px`, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 42 }}>
        <div style={{ borderRight: `0.5px solid ${c.rule}`, paddingRight: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <CapLabel color={accent}>{category}</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 42, lineHeight: 1, color: c.ink, letterSpacing: "-0.02em", marginBottom: 18 }}>{title}</div>
            <HR color={c.rule} mb={18} />
            <p style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.75, color: c.brown, margin: 0 }}>{caption}</p>
          </div>
          <div style={{ background: c.dark, color: c.white, padding: "16px 18px", borderLeft: `3px solid ${accent}` }}>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: accent, marginBottom: 8 }}>Safe Import Note</div>
            <div style={{ fontFamily: Fb, fontSize: 10.5, lineHeight: 1.6, color: "rgba(250,250,250,0.78)" }}>
              Source kept as a reference because the Keynote file is large and iCloud-backed. Export selected slides to PDF or PNG to replace this placeholder later.
            </div>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", height: "74%", background: c.white, border: `0.5px solid ${c.rule}`, display: "flex", flexDirection: "column", justifyContent: "center", padding: 34 }}>
            <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: c.mid, marginBottom: 12 }}>{fileType}</div>
            <div style={{ fontFamily: Fd, fontSize: 34, lineHeight: 1, color: c.ink, marginBottom: 18, wordBreak: "break-word" as const }}>{fileName}</div>
            <HR color={c.rule} mb={18} />
            <div style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.7, color: c.ink }}>{evidence}</div>
          </div>
          <Corners />
        </div>
      </div>
    </EPage>
  );
}

function LuckyStar3DCampaignGallery() {
  const renders = [
    luckyStar3dCampaign02,
    luckyStar3dCampaign03,
    luckyStar3dCampaign04,
    luckyStar3dCampaign05,
    luckyStar3dCampaign06,
    luckyStar3dCampaign07,
    luckyStar3dCampaign08,
    luckyStar3dCampaign09,
  ];

  return (
    <EPage section="PART THREE · 10–11 MOTION · 3D" page="P. 110" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `20px ${M}px 16px`, display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <div>
              <div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 5 }}>3D Campaign Render Set</div>
              <div style={{ fontFamily: Fd, fontSize: 29, lineHeight: 0.95, color: c.ink }}>Lucky Star Hot Chilli Hero</div>
            </div>
            <div style={{ fontFamily: Fm, fontSize: 8, color: c.mid }}>09 RENDERS</div>
          </div>
          <div style={{ flex: 1, background: c.white, border: `0.5px solid ${c.rule}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={luckyStar3dCampaign01} alt="Lucky Star 3D campaign hero render" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: 0, gap: 12 }}>
          <div>
            <CapLabel color={c.ochre}>Final Advertising Visuals</CapLabel>
            <p style={{ fontFamily: Fb, fontSize: 11, lineHeight: 1.6, color: c.ink, margin: 0 }}>
              Render set showing the Lucky Star hero character staged inside the product world: hot chilli sauce, steam, flame shapes, packaging, and food styling cues.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, minHeight: 0 }}>
            {renders.map((src, index) => (
              <div key={src} style={{ background: c.white, border: `0.5px solid ${c.rule}`, overflow: "hidden", position: "relative" }}>
                <img src={src} alt={`Lucky Star campaign render ${index + 2}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 6, left: 6, background: "rgba(26,24,21,0.78)", color: c.white, fontFamily: Fm, fontSize: 7, padding: "3px 5px" }}>{String(index + 2).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {["3D character staging", "Product-led advertising", "Food styling atmosphere", "Campaign render variations"].map(item => (
              <div key={item} style={{ fontFamily: Fm, fontSize: 8.5, lineHeight: 1.35, color: c.brown }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </EPage>
  );
}

function LuckyCopySiteSlides({ variant }: { variant: "overview" | "responsive" | "content" | "system" }) {
  const variants = {
    overview: {
      page: "P. 96",
      eyebrow: "Site To Portfolio Conversion",
      title: "Lucky Copy Website",
      sub: "Digital case study translated from the Figma Make site into portfolio presentation slides.",
      image: characterSketch,
      left: "Campaign Website",
      points: ["Lucky Star campaign hub", "Character-led visual storytelling", "Advertising concept adapted for web", "Hero, proof, gallery, and call-to-action structure"],
    },
    responsive: {
      page: "P. 97",
      eyebrow: "Responsive Layout",
      title: "Desktop & Mobile Flow",
      sub: "The site is documented as a responsive experience, showing how the campaign idea scales from broad hero composition to compact mobile storytelling.",
      image: webWireframeImg,
      left: "UX Structure",
      points: ["Landing page hierarchy", "Mobile-first content stacking", "Navigation and section rhythm", "Portfolio-ready screen documentation"],
    },
    content: {
      page: "P. 98",
      eyebrow: "Copy & Message",
      title: "Campaign Story System",
      sub: "The site copy is treated as evidence of concept development: hook, brand promise, visual story, and user action are separated into editable portfolio notes.",
      image: wireSculptureFishImg,
      left: "Copy System",
      points: ["Hero message", "Character rationale", "Product narrative", "Call-to-action language"],
    },
    system: {
      page: "P. 99",
      eyebrow: "Visual System",
      title: "Assets, Objects & UI",
      sub: "Character sketches and wire sculpture studies support the site as a broader campaign system, connecting web design, advertising, illustration, and 3D object making.",
      image: wireSculptureCompositionImg,
      left: "Design Evidence",
      points: ["Character development", "Wire sculpture prototypes", "Campaign image assets", "Website sections ready for export"],
    },
  }[variant];

  return (
    <EPage section="PART THREE · 09 WEB DESIGN" page={variants.page} navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", overflow: "hidden" }}>
        <div style={{ background: c.dark, padding: `34px ${M}px`, display: "flex", flexDirection: "column", justifyContent: "space-between", color: c.white }}>
          <div>
            <div style={{ fontFamily: Fm, fontSize: 8.5, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: c.ochre, marginBottom: 16 }}>{variants.eyebrow}</div>
            <div style={{ fontFamily: Fd, fontSize: 58, lineHeight: 0.88, letterSpacing: "-0.02em", marginBottom: 18 }}>{variants.title}</div>
            <div style={{ width: 76, height: 2, background: c.ochre, marginBottom: 22 }} />
            <p style={{ fontFamily: Fb, fontSize: 14, lineHeight: 1.7, color: "rgba(250,250,250,0.78)", maxWidth: 410 }}>{variants.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              ["Project", "Lucky Copy"],
              ["Medium", "Responsive Website"],
              ["Role", "UX/UI · Copy · Art Direction"],
              ["Output", "Portfolio Slides"],
            ].map(([label, value]) => (
              <div key={label} style={{ borderTop: `0.5px solid rgba(250,250,250,0.18)`, paddingTop: 10 }}>
                <div style={{ fontFamily: Fm, fontSize: 7.5, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(250,250,250,0.42)", marginBottom: 5 }}>{label}</div>
                <div style={{ fontFamily: Fb, fontSize: 11, color: c.white }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: c.bg, padding: `34px ${M}px`, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ height: 358, background: c.white, border: `0.5px solid ${c.rule}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={variants.image} alt={variants.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 1, background: c.ochre }} />
            <div style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ochre }}>{variants.left}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {variants.points.map((point, index) => (
              <div key={point} style={{ background: c.white, borderLeft: `2px solid ${c.ochre}`, padding: "10px 12px", minHeight: 58 }}>
                <div style={{ fontFamily: Fm, fontSize: 7.5, color: c.mid, marginBottom: 6 }}>0{index + 1}</div>
                <div style={{ fontFamily: Fb, fontSize: 10.5, color: c.ink, lineHeight: 1.35 }}>{point}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EPage>
  );
}

function CharacterDesignSheetPortfolio() {
  const notes = [
    ["Silhouette", "Hero fish form tested for instant recognition at poster scale."],
    ["Expression", "Pose and gesture studies support campaign personality and movement."],
    ["Props", "Shield and product cues connect the character back to Lucky Star packaging."],
    ["Use Case", "Prepared for print advertising, web slides, and campaign storytelling."],
  ];

  return (
    <EPage section="PART THREE · 06 ADVERTISING · CHARACTER DESIGN" page="P. 73" navActive="ARCHIVE">
      <div style={{ position: "absolute", inset: 0, padding: `26px ${M}px`, display: "grid", gridTemplateColumns: "1.35fr 0.65fr", gap: 28 }}>
        <div style={{ background: c.white, border: `0.5px solid ${c.rule}`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 22 }}>
          <ImageWithFallback
            src={characterSketch}
            alt="Lucky Star character design sheet"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <CapLabel color={c.brown}>Character Design Sheet</CapLabel>
            <div style={{ fontFamily: Fd, fontSize: 42, lineHeight: 0.94, letterSpacing: "-0.02em", color: c.ink, marginBottom: 12 }}>
              Lucky Star<br />Hero Character
            </div>
            <div style={{ fontFamily: Fd, fontSize: 17, fontStyle: "italic", color: c.brown, marginBottom: 18 }}>
              Advertising Campaign Development
            </div>
            <HR color={c.rule} mb={18} />
            <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.75, color: c.ink }}>
              Character exploration for the Lucky Star campaign, documenting how the fish protagonist moves from loose sketch language into a repeatable visual asset for print, web, and campaign presentation.
            </p>
          </div>
          <div style={{ display: "grid", gap: 9 }}>
            {notes.map(([label, text], index) => (
              <div key={label} style={{ background: c.white, borderLeft: `2px solid ${c.brown}`, padding: "10px 12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
                  <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.brown }}>{label}</span>
                  <span style={{ fontFamily: Fm, fontSize: 7.5, color: c.mid }}>0{index + 1}</span>
                </div>
                <div style={{ fontFamily: Fb, fontSize: 10.2, lineHeight: 1.45, color: c.ink }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EPage>
  );
}

// ─── GALLERY GRID ─────────────────────────────────────────────────────────────
interface GalleryItem { url: string; caption: string; year?: string; }

function GalleryGrid({ title, section, page, items, accent = c.ochre, columns = 3 }: {
  title: string; section: string; page: string;
  items: GalleryItem[]; accent?: string; columns?: number;
}) {
  const rows = Math.ceil(items.length / columns);
  const gridH = CH - 72;
  const cellH = (gridH - (rows - 1) * 6) / rows;

  return (
    <EPage section={section} page={page}>
      <div style={{ position: "absolute", inset: 0, padding: `18px ${M}px 14px` }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, letterSpacing: "-0.01em" }}>{title}</div>
            <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: accent }}>Selected Work</div>
          </div>
          <span style={{ fontFamily: Fm, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: c.mid }}>Portfolio Gallery</span>
        </div>
        <HR color={c.rule} mb={12} />
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, ${cellH}px)`, gap: 6 }}>
          {items.map((item, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden", background: c.grey }}>
              <img
                src={item.url}
                alt={item.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(26,24,21,0.72) 0%, transparent 100%)", padding: "16px 10px 7px" }}>
                <div style={{ fontFamily: Fb, fontSize: 9, color: c.white, lineHeight: 1.35 }}>{item.caption}</div>
                {item.year && <div style={{ fontFamily: Fm, fontSize: 7.5, color: "rgba(250,250,250,0.5)", marginTop: 2 }}>{item.year}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </EPage>
  );
}

// ─── Gallery data per discipline ──────────────────────────────────────────────
const U = (id: string, w = 400, h = 320) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

const GALLERIES: Record<string, GalleryItem[]> = {
  brand: [
    { url: U("1558618666-fcd25c85cd64"), caption: "Ukuvuselela — Primary mark construction", year: "2021" },
    { url: U("1541701494587-cb58502866ab"), caption: "Ghost in the Grid — Identity system application", year: "2022" },
    { url: U("1542744094-24638eff58bb"), caption: "Brand guidelines — colour architecture documentation", year: "2021" },
    { url: U("1497366754035-f200968a334d"), caption: "Studio documentation — identity system development", year: "2022" },
    { url: U("1516979187457-637abb4f9353"), caption: "Brand typography specimen — display hierarchy", year: "2021" },
    { url: U("1586281380349-632531db7ed4"), caption: "Process documentation — concept sketching phase", year: "2022" },
  ],
  packaging: [
    { url: U("1563013544-824ae1b704d3"), caption: "Primary packaging suite — recycled kraft stock", year: "2024" },
    { url: U("1542744094-24638eff58bb"), caption: "Sustainable packaging concept — soy-based inks", year: "2023" },
    { url: U("1586281380349-632531db7ed4"), caption: "Die-line construction — structural packaging development", year: "2023" },
    { url: U("1516979187457-637abb4f9353"), caption: "Label design — typographic hierarchy system", year: "2023" },
    { url: U("1497366754035-f200968a334d"), caption: "Product mock-up — retail environment simulation", year: "2024" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Seasonal range — food packaging identity", year: "2023" },
  ],
  editorial: [
    { url: U("1516979187457-637abb4f9353"), caption: "Communication Arts — editorial spread layout", year: "2022" },
    { url: U("1542744094-24638eff58bb"), caption: "Ghost in the Grid — grid-glitch editorial system", year: "2022" },
    { url: U("1497366754035-f200968a334d"), caption: "Magazine template — 12-column modular grid", year: "2022" },
    { url: U("1586281380349-632531db7ed4"), caption: "Publication cover — typographic identity system", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Book layout — chapter opening spread", year: "2023" },
    { url: U("1541701494587-cb58502866ab"), caption: "Spread photography — image-text integration", year: "2022" },
  ],
  typography: [
    { url: U("1516979187457-637abb4f9353"), caption: "Zulu Fractal — display typeface specimen sheet", year: "2023" },
    { url: U("1544982503-9f984c14501a"), caption: "Editorial hierarchy — Playfair Display + Inter system", year: "2022" },
    { url: U("1541701494587-cb58502866ab"), caption: "Experimental type — poster format composition", year: "2023" },
    { url: U("1542744094-24638eff58bb"), caption: "Grid documentation — 12-column modular baseline", year: "2022" },
    { url: U("1586281380349-632531db7ed4"), caption: "Typeface construction — isigqi geometry derivation", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Type pairing — display and body system in use", year: "2023" },
  ],
  poster: [
    { url: U("1544982503-9f984c14501a"), caption: "Social impact — Gauta Eteng road safety poster", year: "2023" },
    { url: U("1541701494587-cb58502866ab"), caption: "Abstract — experimental typographic composition", year: "2022" },
    { url: U("1516979187457-637abb4f9353"), caption: "Exhibition poster — editorial typographic grid", year: "2022" },
    { url: U("1512917774080-9991f1c4c750"), caption: "Outdoor campaign — large-format OOH execution", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Typographic poster — African geometric reference", year: "2022" },
    { url: U("1542744094-24638eff58bb"), caption: "Campaign poster — behaviour change communication", year: "2023" },
  ],
  advertising: [
    { url: U("1512917774080-9991f1c4c750"), caption: "Gauta Eteng SAG12 — billboard execution, Gauteng", year: "2023" },
    { url: U("1544982503-9f984c14501a"), caption: "Illustrative print advertisement — campaign series", year: "2022" },
    { url: U("1541701494587-cb58502866ab"), caption: "Art direction — visual language definition session", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Transit advertising — bus shelter application", year: "2023" },
    { url: U("1586281380349-632531db7ed4"), caption: "Campaign development — concept board presentation", year: "2022" },
    { url: U("1497366754035-f200968a334d"), caption: "Social media campaign — multi-format asset library", year: "2023" },
  ],
  photography: [
    { url: U("1547471080-7cc2caa01a7e"), caption: "Documentary — community heritage field research", year: "2021" },
    { url: U("1531746020798-e6953c6e8e04"), caption: "Portrait — editorial session, Cape Town", year: "2022" },
    { url: U("1497215728101-856f4ea42174"), caption: "Architectural — commercial space documentation", year: "2022" },
    { url: U("1563013544-824ae1b704d3"), caption: "Product photography — packaging campaign shoot", year: "2023" },
    { url: U("1497366754035-f200968a334d"), caption: "Environmental — urban landscape, Johannesburg", year: "2021" },
    { url: U("1509516428426-64b6cfbbf42a"), caption: "Art direction — warm light composition study", year: "2023" },
  ],
  illustration: [
    { url: U("1586281380349-632531db7ed4"), caption: "Analogue — ink and process sketchbook study", year: "2022" },
    { url: U("1541701494587-cb58502866ab"), caption: "Digital illustration — editorial pattern system", year: "2023" },
    { url: U("1516979187457-637abb4f9353"), caption: "Mixed media — collage and digital composition", year: "2022" },
    { url: U("1544982503-9f984c14501a"), caption: "Experimental — mark-making and texture study", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "African geometry — beadwork pattern derivation", year: "2022" },
    { url: U("1542744094-24638eff58bb"), caption: "Editorial illustration — publication spread", year: "2023" },
  ],
  digital: [
    { url: U("1611532736597-de2d4265fba3"), caption: "UX Pilot — mobile-first mentorship platform prototype", year: "2023" },
    { url: U("1586281380349-632531db7ed4"), caption: "Wireframe documentation — information architecture", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Interface design — Figma component library", year: "2023" },
    { url: U("1516979187457-637abb4f9353"), caption: "Web layout — responsive grid system", year: "2022" },
    { url: U("1541701494587-cb58502866ab"), caption: "UI design — design token and colour system", year: "2023" },
    { url: U("1542744094-24638eff58bb"), caption: "User flow — onboarding interaction mapping", year: "2023" },
  ],
  motion: [
    { url: U("1541701494587-cb58502866ab"), caption: "Zulu Fractal — kinetic identity animation, After Effects", year: "2023" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Logo animation — Ukuvuselela identity reveal", year: "2021" },
    { url: U("1509516428426-64b6cfbbf42a"), caption: "Motion graphics — social media campaign loop", year: "2023" },
    { url: U("1586281380349-632531db7ed4"), caption: "3D material exploration — Blender sculptural study", year: "2023" },
    { url: U("1542744094-24638eff58bb"), caption: "After Effects — motion trail typographic animation", year: "2022" },
    { url: U("1544982503-9f984c14501a"), caption: "Emblem animation — geometric construction reveal", year: "2023" },
  ],
  research: [
    { url: U("1516979187457-637abb4f9353"), caption: "Literature review — annotated design bibliography", year: "2022" },
    { url: U("1586281380349-632531db7ed4"), caption: "Process book — concept-to-outcome documentation", year: "2023" },
    { url: U("1541701494587-cb58502866ab"), caption: "Visual audit — competitive landscape mapping", year: "2022" },
    { url: U("1558618666-fcd25c85cd64"), caption: "Mood board — visual direction for Gauta Eteng", year: "2023" },
    { url: U("1542744094-24638eff58bb"), caption: "Ethnographic research — field documentation", year: "2021" },
    { url: U("1497366754035-f200968a334d"), caption: "Research journal — reflective practice notes", year: "2022" },
  ],
};

// ─── PAGE MANIFEST ────────────────────────────────────────────────────────────
const news = { paper: "#F2EDE1", ink: "#171512", gold: "#B78A1E", soft: "#DDD4C1" };
const Fnews = "'Arial Narrow', 'Helvetica Neue Condensed', Impact, sans-serif";

function GoldRushMasthead({ folio, strap = "WASTE TO WEALTH · TEXTILE SUCCESS STORY" }: { folio: string; strap?: string }) {
  return <><div style={{ height: 50, borderTop: `2px solid ${news.ink}`, borderBottom: `1px solid ${news.ink}`, display: "grid", gridTemplateColumns: "1fr 2fr 1fr", alignItems: "center" }}><div style={{ fontFamily: Fm, fontSize: 7, letterSpacing: ".13em" }}>GRACIOUS MKHONTO<br />PORTFOLIO EDITION</div><div style={{ textAlign: "center", fontFamily: Fd, fontWeight: 700, fontSize: 25, letterSpacing: ".03em" }}>THE GOLD RUSH</div><div style={{ textAlign: "right", fontFamily: Fm, fontSize: 7, letterSpacing: ".13em" }}>{folio}<br />2026</div></div><div style={{ height: 21, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `5px solid ${news.gold}`, fontFamily: Fb, fontSize: 7.5, fontWeight: 700, letterSpacing: ".18em" }}>{strap}</div></>;
}

function GoldRushCover() {
  return <div style={{ width: PW, height: PH, background: news.paper, color: news.ink, padding: "28px 34px 24px", overflow: "hidden" }}><GoldRushMasthead folio="FRONT PAGE" /><div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 20, height: 440, paddingTop: 18 }}><div style={{ borderRight: `1px solid ${news.ink}`, paddingRight: 20, position: "relative" }}><div style={{ fontFamily: Fb, fontSize: 8, fontWeight: 800, letterSpacing: ".2em", color: news.gold, marginBottom: 9 }}>YOUR WASTE IS WEALTH</div><h1 style={{ fontFamily: Fnews, fontSize: 76, lineHeight: .82, letterSpacing: "-.035em", margin: 0, textTransform: "uppercase" }}>From waste<br /><span style={{ color: news.gold }}>to wealth.</span></h1><div style={{ marginTop: 18, maxWidth: 420, fontFamily: Fd, fontSize: 17, lineHeight: 1.28, fontStyle: "italic" }}>A textile success story shaped by hand, culture and purposeful reuse.</div><img src={goldRushYellowOrnament} style={{ position: "absolute", right: -4, bottom: -12, width: 235, height: 235, objectFit: "contain" }} /><div style={{ position: "absolute", left: 0, bottom: 0, width: 235, fontFamily: Fb, fontSize: 9.5, lineHeight: 1.55 }}>Discarded and surplus textiles become sculptural objects for the home. Each folded form makes the value hidden in fabric visible again.</div></div><div style={{ display: "grid", gridTemplateRows: "1fr auto", gap: 11 }}><img src={goldRushMakerPortrait} style={{ width: "100%", height: 324, objectFit: "cover", objectPosition: "center 34%", filter: "saturate(.82) contrast(1.04)" }} /><div style={{ borderTop: `1px solid ${news.ink}`, paddingTop: 10 }}><div style={{ fontFamily: Fnews, fontSize: 24, lineHeight: .95, textTransform: "uppercase" }}>The maker behind<br />the material</div><p style={{ fontFamily: Fb, fontSize: 9, lineHeight: 1.48, margin: "8px 0 0" }}>Her practice begins with what others overlook. Through patient folding, stitching and assembly, textile remnants are transformed into expressive ornaments with presence, function and cultural character.</p></div></div></div><div style={{ borderTop: `6px solid ${news.ink}`, marginTop: 17, paddingTop: 12, display: "grid", gridTemplateColumns: "1.15fr 1fr 1fr", gap: 18 }}><div style={{ fontFamily: Fnews, fontSize: 31, lineHeight: .88, textTransform: "uppercase" }}>Handmade.<br /><span style={{ color: news.gold }}>Upcycled.</span><br />Purposeful.</div><div style={{ fontFamily: Fb, fontSize: 9, lineHeight: 1.52 }}><b>VALUE, REFRAMED.</b><br />The work turns textile waste into tactile design—showing that reuse can be desirable, considered and beautifully finished.</div><div style={{ background: news.ink, color: news.paper, padding: "12px 14px", fontFamily: Fnews, fontSize: 22, lineHeight: .96, textTransform: "uppercase" }}>Join the movement.<br /><span style={{ color: "#D5AA3E" }}>Make waste matter.</span></div></div></div>;
}

function GoldRushProfile() {
  const process = [["01", "RECOVER", "Select surplus and discarded textiles with usable colour, pattern and structure."], ["02", "FOLD", "Build repeated modules by hand, preserving the fabric’s graphic identity."], ["03", "ASSEMBLE", "Stitch the forms into layered ornaments, accessories and functional pieces."], ["04", "REVALUE", "Return the material to daily life as an object of beauty, purpose and pride."]];
  return <div style={{ width: PW, height: PH, background: news.paper, color: news.ink, padding: "28px 34px 24px", overflow: "hidden" }}><GoldRushMasthead folio="PROFILE · 02" strap="THE HAND, THE MATERIAL, THE TRANSFORMATION" /><div style={{ display: "grid", gridTemplateColumns: ".7fr 1.35fr .7fr", gap: 18, height: 630, paddingTop: 18 }}><div style={{ borderRight: `1px solid ${news.ink}`, paddingRight: 17 }}><h2 style={{ fontFamily: Fnews, fontSize: 45, lineHeight: .86, margin: "0 0 16px", textTransform: "uppercase" }}>The maker<br /><span style={{ color: news.gold }}>behind the rush</span></h2><img src={goldRushMakerPortrait} style={{ width: "100%", height: 215, objectFit: "cover", objectPosition: "center 30%", filter: "grayscale(1) contrast(1.08)" }} /><p style={{ fontFamily: Fb, fontSize: 9.3, lineHeight: 1.55, marginTop: 14 }}>The maker’s process is rooted in resourcefulness: working with available cloth, respecting its pattern and allowing the material to guide the final form.</p><div style={{ borderTop: `4px solid ${news.gold}`, marginTop: 15, paddingTop: 9, fontFamily: Fd, fontSize: 16, lineHeight: 1.22, fontStyle: "italic" }}>“Waste is not the end of the story. It is where another story can begin.”</div></div><div style={{ display: "grid", gridTemplateRows: "345px 1fr", gap: 14 }}><img src={goldRushTextileOrnament} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><div style={{ columns: 2, columnGap: 22, columnRule: `1px solid ${news.soft}`, fontFamily: Fb, fontSize: 9.2, lineHeight: 1.55, textAlign: "justify" }}><b style={{ fontFamily: Fnews, fontSize: 16, textTransform: "uppercase" }}>A second life for cloth.</b> Discarded and surplus fabric is folded, stitched and assembled into sculptural ornaments, table accessories and wall pieces. Repetition creates rhythm; layered points create volume; bold prints make every object distinct.<br /><br />The result is both decorative and useful. Material already in circulation can hold new value when craft, imagination and care are applied to it.</div></div><div style={{ borderLeft: `1px solid ${news.ink}`, paddingLeft: 17 }}><div style={{ fontFamily: Fb, fontSize: 7.5, fontWeight: 800, letterSpacing: ".17em", color: news.gold }}>PROCESS NOTES</div>{process.map(([n,t,d]) => <div key={n} style={{ borderTop: `1px solid ${news.ink}`, padding: "11px 0 13px", marginTop: 9 }}><div style={{ fontFamily: Fm, fontSize: 7, color: news.gold }}>{n}</div><div style={{ fontFamily: Fnews, fontSize: 20, margin: "3px 0" }}>{t}</div><div style={{ fontFamily: Fb, fontSize: 8.5, lineHeight: 1.45 }}>{d}</div></div>)}</div></div></div>;
}

function GoldRushImpact() {
  return <div style={{ width: PW, height: PH, background: news.paper, color: news.ink, padding: "28px 34px 24px", overflow: "hidden" }}><GoldRushMasthead folio="IMPACT · 03" strap="CULTURE · CREATIVITY · CONSCIOUSNESS" /><div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", padding: "14px 0 11px", borderBottom: `1px solid ${news.ink}` }}><h2 style={{ fontFamily: Fnews, fontSize: 49, lineHeight: .88, margin: 0, textTransform: "uppercase" }}>A second life,<br /><span style={{ color: news.gold }}>made visible.</span></h2><div style={{ width: 340, fontFamily: Fd, fontSize: 14, lineHeight: 1.28, fontStyle: "italic", textAlign: "right" }}>From intimate table objects to confident wall pieces, the system expands without losing the hand of its maker.</div></div><div style={{ display: "grid", gridTemplateColumns: "1.35fr .75fr .75fr", gridTemplateRows: "278px 170px", gap: 10, paddingTop: 12 }}><img src={goldRushTableSetting} style={{ width: "100%", height: "100%", objectFit: "cover", gridRow: "1 / 3" }} /><img src={goldRushProductRange} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><img src={goldRushWallMockup} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><div style={{ background: news.ink, color: news.paper, padding: 15 }}><div style={{ fontFamily: Fnews, fontSize: 23, lineHeight: .95 }}>ONE MATERIAL.<br /><span style={{ color: "#D5AA3E" }}>MANY FORMS.</span></div><p style={{ fontFamily: Fb, fontSize: 8.5, lineHeight: 1.45 }}>Ornaments, table settings, accessories and display pieces reveal a flexible product language.</p></div><div style={{ border: `1px solid ${news.ink}`, padding: 14 }}><div style={{ fontFamily: Fnews, fontSize: 23, lineHeight: .95 }}>DESIGN FOR<br /><span style={{ color: news.gold }}>EVERYDAY LIFE.</span></div><p style={{ fontFamily: Fb, fontSize: 8.5, lineHeight: 1.45 }}>A familiar textile becomes an expressive object for contemporary interiors and gatherings.</p></div></div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: `5px solid ${news.gold}`, borderBottom: `1px solid ${news.ink}`, marginTop: 12 }}>{[["MATERIAL", "Keeping usable cloth in circulation."], ["CRAFT", "Building value through skilled handwork."], ["CULTURE", "Letting pattern and local visual language lead."]].map(([t,d], i) => <div key={t} style={{ padding: "10px 13px", borderLeft: i ? `1px solid ${news.ink}` : "none" }}><b style={{ fontFamily: Fnews, fontSize: 17 }}>{t}</b><span style={{ fontFamily: Fb, fontSize: 8.5, marginLeft: 8 }}>{d}</span></div>)}</div><div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center", background: news.ink, color: news.paper, padding: "10px 14px" }}><div style={{ fontFamily: Fnews, fontSize: 23, textTransform: "uppercase" }}>Your home is the mine. <span style={{ color: "#D5AA3E" }}>Invest in the Gold Rush.</span></div><div style={{ fontFamily: Fm, fontSize: 7, letterSpacing: ".12em" }}>HANDMADE · UPCYCLED · PURPOSEFUL</div></div></div>;
}

function PaintingGalleryPage() {
  const works = [
    { src: paintingFeature, label: "Portrait study", position: "center 43%" },
    { src: paintingKingfisher, label: "Kingfisher study", position: "center" },
    { src: paintingRhino, label: "Rhino study", position: "center" },
    { src: paintingPortraitFinal, label: "Portrait study", position: "center" },
  ];
  return <EPage section="PART THREE · PAINTING" page="PAINTING · 01" footerRight="GRACIOUS MKHONTO · SELECTED PAINTINGS">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "118px 1fr" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 18 }}>
        <div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.ochre, marginBottom: 8 }}>SELECTED WORKS · PAINTING</div><h1 style={{ fontFamily: Fd, fontSize: 45, fontWeight: 500, lineHeight: .96, margin: 0 }}>Painting Gallery</h1></div>
        <p style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.55, margin: 0, color: c.mid }}>Portraiture and wildlife studies exploring observation, likeness, atmosphere and expressive mark-making across personal painting practice.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.16fr .84fr", gap: 12, paddingTop: 16, minHeight: 0 }}>
        <figure style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 26px", minHeight: 0 }}><img src={works[0].src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: works[0].position }} /><figcaption style={{ fontFamily: Fm, fontSize: 7.5, letterSpacing: ".11em", paddingTop: 8 }}>01 · {works[0].label.toUpperCase()}</figcaption></figure>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12, minHeight: 0 }}>{works.slice(1).map((work, index) => <figure key={work.src} style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 24px", minHeight: 0, gridColumn: index === 2 ? "1 / 3" : undefined }}><img src={work.src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: work.position }} /><figcaption style={{ fontFamily: Fm, fontSize: 7, letterSpacing: ".1em", paddingTop: 7 }}>0{index + 2} · {work.label.toUpperCase()}</figcaption></figure>)}</div>
      </div>
    </div>
  </EPage>;
}

function PaintingProcessPage() {
  const stages = [
    { src: paintingProcess01, tag: "01 · UNDERPAINTING" },
    { src: paintingProcess02, tag: "02 · FORM & VALUE" },
    { src: paintingProcess03, tag: "03 · TONAL DEVELOPMENT" },
    { src: paintingProcess04, tag: "04 · COLOUR & DETAIL" },
  ];
  return <EPage section="PART THREE · PAINTING" page="PAINTING · 02" footerRight="GRACIOUS MKHONTO · PROCESS STUDY">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "112px 1fr" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 16 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.brown, marginBottom: 8 }}>PROCESS DOCUMENTATION · PORTRAITURE</div><h1 style={{ fontFamily: Fd, fontSize: 42, fontWeight: 500, lineHeight: .96, margin: 0 }}>Building the Portrait</h1></div><p style={{ fontFamily: Fb, fontSize: 10, lineHeight: 1.55, margin: 0, color: c.mid }}>The sequence records the portrait as it moves from a loose structural drawing through tonal modelling, colour and final likeness.</p></div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr .6fr", gap: 14, paddingTop: 16, minHeight: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, minHeight: 0 }}>{stages.map(stage => <figure key={stage.tag} style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 28px", minHeight: 0 }}><img src={stage.src} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.8, letterSpacing: ".08em", paddingTop: 8 }}>{stage.tag}</figcaption></figure>)}</div>
        <div style={{ borderLeft: `1px solid ${c.rule}`, paddingLeft: 14, display: "grid", gridTemplateRows: "1fr auto", minHeight: 0 }}><img src={paintingPortraitFinal} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><div style={{ paddingTop: 10 }}><div style={{ fontFamily: Fm, fontSize: 7, letterSpacing: ".14em", color: c.ochre }}>FINAL STUDY</div><div style={{ fontFamily: Fd, fontSize: 19, marginTop: 4 }}>Observation into likeness</div><p style={{ fontFamily: Fb, fontSize: 8.5, lineHeight: 1.45, margin: "5px 0 0", color: c.mid }}>Layered brushwork and controlled contrast establish facial form while retaining the directness of the hand-painted surface.</p></div></div>
      </div>
    </div>
  </EPage>;
}

function DrawingGallerySlide({ title, subtitle, page, works, accent = c.ochre }: { title: string; subtitle: string; page: string; works: { src: string; label: string; position?: string }[]; accent?: string }) {
  return <EPage section="PART THREE · DRAWING" page={page} footerRight="GRACIOUS MKHONTO · DRAWING PRACTICE">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "108px 1fr" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 15 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: accent, marginBottom: 8 }}>SKETCHBOOK · OBSERVATION · DEVELOPMENT</div><h1 style={{ fontFamily: Fd, fontSize: 42, fontWeight: 500, lineHeight: .96, margin: 0 }}>{title}</h1></div><p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>{subtitle}</p></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 11, paddingTop: 15, minHeight: 0 }}>{works.map((work, index) => <figure key={`${work.label}-${index}`} style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 24px", minHeight: 0 }}><img src={work.src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: work.position || "center" }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.8, letterSpacing: ".1em", paddingTop: 7 }}>0{index + 1} · {work.label.toUpperCase()}</figcaption></figure>)}</div>
    </div>
  </EPage>;
}

function DrawingMotionSlide() {
  const works = [{ src: drawingMotion01, label: "Portrait construction · animated sequence" }, { src: drawingMotion02, label: "Facial structure · animated sequence" }];
  return <EPage section="PART THREE · DRAWING" page="DRAWING · 04" footerRight="GRACIOUS MKHONTO · DRAWING IN MOTION">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "108px 1fr" }}><div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 15 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.brown, marginBottom: 8 }}>PROCESS CAPTURE · ANIMATED STUDIES</div><h1 style={{ fontFamily: Fd, fontSize: 42, fontWeight: 500, lineHeight: .96, margin: 0 }}>Drawing in Motion</h1></div><p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>Short animated records reveal how facial proportion, contour and colour are developed through successive marks.</p></div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, paddingTop: 16, minHeight: 0 }}>{works.map((work, index) => <figure key={work.src} style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 38px", minHeight: 0 }}><div style={{ background: c.ink, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><img src={work.src} style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div><figcaption style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: Fm, fontSize: 7, letterSpacing: ".1em" }}><span>0{index + 1} · {work.label.toUpperCase()}</span><span style={{ color: c.ochre }}>GIF · PROCESS</span></figcaption></figure>)}</div></div>
  </EPage>;
}

function AccessoriesCraftGalleryPage() {
  const supporting = [
    { src: accessoriesFabricShoeWorn, label: "Fabric-covered flat · worn view", position: "center" },
    { src: accessoriesRedShoeHatSet, label: "Coordinated footwear & visor", position: "center" },
    { src: accessoriesWhiteLaceFront, label: "Floral appliqué flats · top view", position: "center 54%" },
    { src: accessoriesWhiteLaceSide, label: "Floral appliqué flats · side view", position: "center" },
  ];
  return <EPage section="PART THREE · ACCESSORIES CRAFT" page="ACCESSORIES · 01" footerRight="GRACIOUS MKHONTO · HANDCRAFTED ACCESSORIES">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "112px 1fr" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.16fr .84fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 16 }}>
        <div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.ochre, marginBottom: 8 }}>WEARABLE OBJECTS · SURFACE CRAFT · COORDINATED SETS</div><h1 style={{ fontFamily: Fd, fontSize: 44, fontWeight: 500, lineHeight: .96, margin: 0 }}>Accessories Craft</h1></div>
        <p style={{ fontFamily: Fb, fontSize: 9.7, lineHeight: 1.52, margin: 0, color: c.mid }}>Hand-finished footwear, coordinated bags and wearable accessories developed through fabric covering, appliqué and surface transformation.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 12, paddingTop: 15, minHeight: 0 }}>
        <figure style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 27px", minHeight: 0 }}><img src={accessoriesShoeBagSet} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><figcaption style={{ fontFamily: Fm, fontSize: 7.2, letterSpacing: ".1em", paddingTop: 8 }}>01 · MATCHING FABRIC BAG & FLATS</figcaption></figure>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 11, minHeight: 0 }}>{supporting.map((work, index) => <figure key={work.label} style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 23px", minHeight: 0 }}><img src={work.src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: work.position }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.3, letterSpacing: ".08em", paddingTop: 6 }}>0{index + 2} · {work.label.toUpperCase()}</figcaption></figure>)}</div>
      </div>
    </div>
  </EPage>;
}

function AccessoriesCraftProcessPage() {
  const steps = [["01", "SELECT", "Choose the base form and textile or appliqué treatment."], ["02", "COVER", "Shape the material around the shoe while preserving its profile."], ["03", "FINISH", "Secure edges, seams and decorative surface details by hand."], ["04", "STYLE", "Present the finished object alone or as part of a coordinated set."]];
  return <EPage section="PART THREE · ACCESSORIES CRAFT" page="ACCESSORIES · 02" footerRight="GRACIOUS MKHONTO · MATERIAL TRANSFORMATION">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "108px 1fr" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.18fr .82fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 15 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.brown, marginBottom: 8 }}>PROCESS DOCUMENTATION · FOOTWEAR</div><h1 style={{ fontFamily: Fd, fontSize: 40, fontWeight: 500, lineHeight: .96, margin: 0 }}>From Base Shoe to Crafted Object</h1></div><p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>The photographs record how familiar footwear becomes a distinctive accessory through hand-applied fabric and decorative finishing.</p></div>
      <div style={{ display: "grid", gridTemplateColumns: "1.18fr .82fr", gap: 14, paddingTop: 15, minHeight: 0 }}>
        <div style={{ display: "grid", gridTemplateRows: "1fr 146px", gap: 11, minHeight: 0 }}><figure style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 25px", minHeight: 0 }}><img src={accessoriesFabricShoeProcess} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.8, letterSpacing: ".1em", paddingTop: 7 }}>PROCESS · FABRIC COVERING IN PROGRESS</figcaption></figure><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}><img src={accessoriesWhiteLaceFront} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 58%" }} /><img src={accessoriesWhiteLaceSide} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div></div>
        <div style={{ borderLeft: `1px solid ${c.rule}`, paddingLeft: 14, display: "grid", gridTemplateRows: "220px 1fr", gap: 12, minHeight: 0 }}><img src={accessoriesFabricShoeWorn} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><div>{steps.map(([number, title, description]) => <div key={number} style={{ display: "grid", gridTemplateColumns: "34px 70px 1fr", gap: 7, alignItems: "start", borderTop: `1px solid ${c.rule}`, padding: "8px 0" }}><span style={{ fontFamily: Fm, fontSize: 7, color: c.ochre }}>{number}</span><b style={{ fontFamily: Fb, fontSize: 7.4, letterSpacing: ".1em" }}>{title}</b><span style={{ fontFamily: Fb, fontSize: 7.5, lineHeight: 1.35, color: c.mid }}>{description}</span></div>)}</div></div>
      </div>
    </div>
  </EPage>;
}

function NoveltiesObjectsPage() {
  return <EPage section="PART THREE · ACCESSORIES CRAFT" page="ACCESSORIES · 03" footerRight="GRAY'S NOVELTIES · OBJECT & IDENTITY">
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "108px 1fr" }}><div style={{ display: "grid", gridTemplateColumns: "1.18fr .82fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 15 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.ochre, marginBottom: 8 }}>GRAY'S NOVELTIES · HANDMADE OBJECTS</div><h1 style={{ fontFamily: Fd, fontSize: 42, fontWeight: 500, lineHeight: .96, margin: 0 }}>Decorative Objects & Identity</h1></div><p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>A small-scale craft identity extending across decorative vessels, personalised objects and accessible gift products.</p></div><div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 12, paddingTop: 15, minHeight: 0 }}><figure style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 25px", minHeight: 0 }}><img src={noveltiesBottleSet} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.8, letterSpacing: ".1em", paddingTop: 7 }}>01 · DECORATIVE BOTTLE & VESSEL SET</figcaption></figure><div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 12, minHeight: 0 }}><figure style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 24px", minHeight: 0 }}><img src={noveltiesBrandIdentity} style={{ width: "100%", height: "100%", objectFit: "contain", background: "#fff" }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.8, letterSpacing: ".1em", paddingTop: 7 }}>02 · GRAY'S NOVELTIES IDENTITY</figcaption></figure><figure style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 24px", minHeight: 0 }}><img src={noveltiesBottleDecor} style={{ width: "100%", height: "100%", objectFit: "cover" }} /><figcaption style={{ fontFamily: Fm, fontSize: 6.8, letterSpacing: ".1em", paddingTop: 7 }}>03 · RAFFIA-WRAPPED GLASS DECOR</figcaption></figure></div></div></div>
  </EPage>;
}

function NoveltiesKeyringsPage() {
  const works = [{src:noveltiesKeyringCharacter,label:"Character illustration"},{src:noveltiesKeyringLove,label:"Personalised love message"},{src:noveltiesKeyringRain,label:"Illustrated message"},{src:noveltiesKeyringPhotography,label:"Photography identity"},{src:noveltiesKeyringZebra,label:"Photographic keepsake"},{src:noveltiesKeyringMkhonto,label:"Personal identity"}];
  return <EPage section="PART THREE · ACCESSORIES CRAFT" page="ACCESSORIES · 04" footerRight="GRAY'S NOVELTIES · PERSONALISED KEYRINGS"><div style={{ height: "100%", display: "grid", gridTemplateRows: "108px 1fr" }}><div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 15 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.brown, marginBottom: 8 }}>CUSTOM GRAPHICS · SMALL-FORMAT PRODUCTS</div><h1 style={{ fontFamily: Fd, fontSize: 42, fontWeight: 500, lineHeight: .96, margin: 0 }}>Personalised Keyring Series</h1></div><p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>Compact illustrations, photographs, names and short messages are adapted into practical personalised keepsakes.</p></div><div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 11, paddingTop: 15, minHeight: 0 }}>{works.map((work,index)=><figure key={work.label} style={{ margin:0, display:"grid", gridTemplateRows:"1fr 23px", minHeight:0 }}><img src={work.src} style={{ width:"100%",height:"100%",objectFit:"cover" }}/><figcaption style={{fontFamily:Fm,fontSize:6.5,letterSpacing:".08em",paddingTop:6}}>0{index+1} · {work.label.toUpperCase()}</figcaption></figure>)}</div></div></EPage>;
}

function NoveltiesPackagingPage() {
  const works=[{src:noveltiesKeyringHearts,label:"Custom message option"},{src:noveltiesKeyringCharacterPair,label:"Character front & back"},{src:noveltiesPackagingRibbon,label:"Ribbon gift pack"},{src:noveltiesPackagingBranded,label:"Branded gift pack"},{src:noveltiesPackagingCustom,label:"Custom gift pack"}];
  return <EPage section="PART THREE · ACCESSORIES CRAFT" page="ACCESSORIES · 05" footerRight="GRAY'S NOVELTIES · PRODUCT PRESENTATION"><div style={{height:"100%",display:"grid",gridTemplateRows:"108px 1fr"}}><div style={{display:"grid",gridTemplateColumns:"1.16fr .84fr",alignItems:"end",borderBottom:`1px solid ${c.ink}`,paddingBottom:15}}><div><div style={{fontFamily:Fm,fontSize:8,letterSpacing:".18em",color:c.olive,marginBottom:8}}>CUSTOMISATION · PACKAGING · GIFT PRESENTATION</div><h1 style={{fontFamily:Fd,fontSize:42,fontWeight:500,lineHeight:.96,margin:0}}>From Personalisation to Pack</h1></div><p style={{fontFamily:Fb,fontSize:9.5,lineHeight:1.5,margin:0,color:c.mid}}>The product system continues beyond the object itself, using simple ribbon, transparent sleeves and printed inserts to create a complete gift-ready presentation.</p></div><div style={{display:"grid",gridTemplateColumns:"1.08fr .92fr",gap:12,paddingTop:15,minHeight:0}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:11,minHeight:0}}>{works.slice(0,4).map((work,index)=><figure key={work.label} style={{margin:0,display:"grid",gridTemplateRows:"1fr 23px",minHeight:0}}><img src={work.src} style={{width:"100%",height:"100%",objectFit:"cover"}}/><figcaption style={{fontFamily:Fm,fontSize:6.3,letterSpacing:".08em",paddingTop:6}}>0{index+1} · {work.label.toUpperCase()}</figcaption></figure>)}</div><figure style={{margin:0,display:"grid",gridTemplateRows:"1fr 25px",minHeight:0}}><img src={works[4].src} style={{width:"100%",height:"100%",objectFit:"cover"}}/><figcaption style={{fontFamily:Fm,fontSize:6.8,letterSpacing:".1em",paddingTop:7}}>05 · {works[4].label.toUpperCase()}</figcaption></figure></div></div></EPage>;
}

function GrayciousBrandingTimelinePage() {
  const milestones = [
    { year: "2017", title: "Identity System", src: grayciousIdentity2017, note: "Script wordmark, photographic aperture symbol and the ‘moments of forever’ brand line establish the original Graycious Photography identity." },
    { year: "2017", title: "Merchandise Application", src: grayciousMerchandise2017, note: "Early T-shirt concepts test scale, lock-up hierarchy and how the identity performs across wearable promotional surfaces." },
    { year: "2018", title: "Contact Collateral", src: grayciousContact2018, note: "The identity expands into practical client-facing communication through a branded contact card and social-media touchpoints." },
  ];
  return (
    <div style={{ height: "100%", display: "grid", gridTemplateRows: "102px 1fr", color: c.ink }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.18fr .82fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 14 }}>
        <div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.ochre, marginBottom: 8 }}>BRANDING TIMELINE · 2017—2018</div><h1 style={{ fontFamily: Fd, fontSize: 41, fontWeight: 500, lineHeight: .96, margin: 0 }}>Graycious Photography</h1></div>
        <p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>An early identity system moving from logo development into merchandise and direct client communication.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 13, paddingTop: 16, minHeight: 0 }}>
        {milestones.map((item, index) => <article key={item.title} style={{ display: "grid", gridTemplateRows: "24px 1fr 92px", minHeight: 0, borderTop: `3px solid ${index === 2 ? c.brown : c.ochre}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", paddingBottom: 5, fontFamily: Fm, fontSize: 7, letterSpacing: ".12em" }}><span>{item.year}</span><span>0{index + 1}</span></div>
          <div style={{ minHeight: 0, overflow: "hidden", background: "#fff", border: `1px solid ${c.rule}` }}><img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
          <div style={{ paddingTop: 10 }}><h2 style={{ fontFamily: Fd, fontSize: 18, fontWeight: 500, margin: "0 0 5px" }}>{item.title}</h2><p style={{ fontFamily: Fb, fontSize: 7.6, lineHeight: 1.42, color: c.mid, margin: 0 }}>{item.note}</p></div>
        </article>)}
      </div>
    </div>
  );
}

function NoveltiesRaffiaProcessPage() {
  const works = [
    { src: noveltiesRaffiaVesselProcess, number: "01", title: "Wrapped Glass Vessel", note: "A compact glass container is wrapped by hand, testing material tension, proportion and the visual contrast between transparent glass and natural fibre." },
    { src: noveltiesRaffiaHeartStudy, number: "02", title: "Woven Heart Study", note: "A small-form weaving experiment explores repetition, directional wrapping and how raffia can hold a recognisable sculptural silhouette." },
  ];
  return <div style={{ height: "100%", display: "grid", gridTemplateRows: "104px 1fr" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", alignItems: "end", borderBottom: `1px solid ${c.ink}`, paddingBottom: 14 }}><div><div style={{ fontFamily: Fm, fontSize: 8, letterSpacing: ".18em", color: c.ochre, marginBottom: 8 }}>GRAY'S NOVELTIES · PROCESS STUDIES</div><h1 style={{ fontFamily: Fd, fontSize: 41, fontWeight: 500, lineHeight: .96, margin: 0 }}>Raffia, Form & Handwork</h1></div><p style={{ fontFamily: Fb, fontSize: 9.5, lineHeight: 1.5, margin: 0, color: c.mid }}>Small material experiments documenting how wrapping and weaving develop into decorative, functional craft objects.</p></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, paddingTop: 16, minHeight: 0 }}>
      {works.map(work => <figure key={work.title} style={{ margin: 0, display: "grid", gridTemplateRows: "1fr 98px", minHeight: 0 }}><div style={{ minHeight: 0, overflow: "hidden", background: c.grey }}><img src={work.src} alt={work.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div><figcaption style={{ display: "grid", gridTemplateColumns: "35px 1fr", gap: 10, paddingTop: 11, borderTop: `1px solid ${c.rule}` }}><div style={{ fontFamily: Fm, fontSize: 8, color: c.ochre }}>{work.number}</div><div><h2 style={{ fontFamily: Fd, fontSize: 19, fontWeight: 500, margin: "0 0 5px" }}>{work.title}</h2><p style={{ fontFamily: Fb, fontSize: 7.8, lineHeight: 1.42, color: c.mid, margin: 0 }}>{work.note}</p></div></figcaption></figure>)}
    </div>
  </div>;
}

interface PageEntry { id: string; title: string; section: string; render: () => React.ReactNode; }
interface DisplayPage extends PageEntry { pdfId?: string; isImported?: boolean; }

const buildDisplayPages = (pdfPages: PdfPage[]): DisplayPage[] => {
  const pages: DisplayPage[] = [];
  const placed = new Set<string>();
  const asDisplayPage = (pdf: PdfPage): DisplayPage => {
    const isKeynote = pdf.kind === "Keynote";
    const slideNumber = Number(pdf.id.split("-").pop()) || 1;
    const editableData = (editableKeynoteSlides as Record<string, EditableSlideData>)[String(slideNumber)];
    const displayTitle = isKeynote ? `Portfolio Slide ${slideNumber}` : pdf.title;
    return {
      id: pdf.id,
      title: displayTitle,
      section: pdf.section,
      pdfId: isKeynote ? undefined : pdf.id,
      isImported: !isKeynote,
      render: () => isKeynote
        ? editableData
          ? <EditableTextSlidePage slideNumber={slideNumber} section={pdf.section} data={editableData} />
          : <KeynoteSlidePage dataUrl={pdf.dataUrl} title={displayTitle} section={pdf.section} slideNumber={slideNumber} />
        : <PDFSlidePage dataUrl={pdf.dataUrl} title={pdf.title} section={pdf.section} />,
    };
  };

  // The original Keynote is the portfolio's source of truth. Its editable
  // reconstruction must not be combined with the separate hand-built page
  // manifest, which repeats the same projects and caused duplicate slides.
  const keynotePages = pdfPages
    .filter(pdf => pdf.kind === "Keynote")
    .sort((a, b) => (Number(a.id.split("-").pop()) || 0) - (Number(b.id.split("-").pop()) || 0));
  if (keynotePages.length > 0) {
    const seenSlides = new Set<number>();
    const originalPages = keynotePages.flatMap(pdf => {
      const slideNumber = Number(pdf.id.split("-").pop()) || 0;
      if (!slideNumber || seenSlides.has(slideNumber)) return [];
      seenSlides.add(slideNumber);
      return [asDisplayPage(pdf)];
    });
    return [...originalPages, ...PAGES.filter(page => page.id.startsWith("gold-rush-") || page.id.startsWith("painting-") || page.id.startsWith("drawing-") || page.id.startsWith("accessories-") || page.id.startsWith("branding-timeline-"))];
  }

  // Keep each Keynote-informed campaign slide intact, but gather the related
  // slides into one continuous art-direction chapter for navigation and review.
  const campaignPages = PAGES
    .filter(page => page.section === ART_DIRECTION_CAMPAIGNS)
    .sort((a, b) => {
      const campaignOrder = (page: PageEntry) => {
        if (page.id === "p4-art-direction") return 0;
        if (page.id.startsWith("ge-") || page.id.startsWith("gauta-") || page.id === "svg-148" || page.id === "svg-149") return 1;
        return 2;
      };
      return campaignOrder(a) - campaignOrder(b);
    });
  const orderedPages = PAGES.flatMap(page => {
    if (page.id === "p4-art-direction") return campaignPages;
    if (page.section === ART_DIRECTION_CAMPAIGNS) return [];
    return [page];
  });

  orderedPages.forEach((page, index) => {
    pages.push(page);
    const nextSection = orderedPages[index + 1]?.section;
    if (nextSection !== page.section) {
      pdfPages
        .filter(pdf => pdf.section === page.section && !placed.has(pdf.id))
        .forEach(pdf => {
          placed.add(pdf.id);
          pages.push(asDisplayPage(pdf));
        });
    }
  });

  pdfPages.filter(pdf => !placed.has(pdf.id)).forEach(pdf => {
    pages.push(asDisplayPage(pdf));
  });

  return pages;
};

const PAGES: PageEntry[] = [
  { id: "branding-timeline-graycious", title: "Branding Timeline — Graycious Photography", section: "Part 03 — Branding", render: () => <GrayciousBrandingTimelinePage /> },
  { id: "accessories-gallery", title: "Accessories Craft — Selected Works", section: "Part 03 — Accessories Craft", render: () => <AccessoriesCraftGalleryPage /> },
  { id: "accessories-process", title: "Accessories Craft — Process", section: "Part 03 — Accessories Craft", render: () => <AccessoriesCraftProcessPage /> },
  { id: "accessories-novelties-objects", title: "Gray's Novelties — Decorative Objects", section: "Part 03 — Accessories Craft", render: () => <NoveltiesObjectsPage /> },
  { id: "accessories-novelties-keyrings", title: "Gray's Novelties — Keyring Series", section: "Part 03 — Accessories Craft", render: () => <NoveltiesKeyringsPage /> },
  { id: "accessories-novelties-packaging", title: "Gray's Novelties — Packaging", section: "Part 03 — Accessories Craft", render: () => <NoveltiesPackagingPage /> },
  { id: "accessories-novelties-raffia-process", title: "Gray's Novelties — Raffia Process", section: "Part 03 — Accessories Craft", render: () => <NoveltiesRaffiaProcessPage /> },
  { id: "drawing-portraits", title: "Drawing Gallery — Portrait Studies", section: "Part 03 — Drawing", render: () => <DrawingGallerySlide title="Portrait Studies" subtitle="Rapid and sustained portrait drawings use coloured pencil and oil pastel to test proportion, expression, contour and likeness." page="DRAWING · 01" works={[{src:drawing01,label:"Crayon portrait study"},{src:drawing02,label:"Tonal portrait study"},{src:drawing03,label:"Observed portrait"},{src:drawing04,label:"Colour portrait"},{src:drawing05,label:"Completed colour study"},{src:drawing13,label:"Expressive portrait"}]} /> },
  { id: "drawing-development", title: "Drawing Gallery — Colour Development", section: "Part 03 — Drawing", render: () => <DrawingGallerySlide title="Colour & Character" subtitle="Layered colour is used structurally: cool construction lines establish form before warmer hues develop volume, personality and visual emphasis." page="DRAWING · 02" accent={c.brown} works={[{src:drawing06,label:"Blue construction"},{src:drawing07,label:"Early colour block-in"},{src:drawing08,label:"Tonal build-up"},{src:drawing09,label:"Resolved hat portrait"},{src:drawing11,label:"Dual portrait study"},{src:drawing12,label:"Colour development"}]} /> },
  { id: "drawing-line-charcoal", title: "Drawing Gallery — Line & Charcoal", section: "Part 03 — Drawing", render: () => <DrawingGallerySlide title="Line, Gesture & Charcoal" subtitle="These studies shift between economical contour, expressive coloured line and dense charcoal, showing range across controlled observation and more instinctive mark-making." page="DRAWING · 03" accent={c.olive} works={[{src:drawing10,label:"Facial structure"},{src:drawing14,label:"Charcoal figure"},{src:drawing15,label:"Charcoal study"},{src:drawing16,label:"Recent drawing study"},{src:drawingGraphitePortrait,label:"Graphite portrait construction"},{src:drawingCharcoalPortrait,label:"Charcoal tonal portrait"}]} /> },
  { id: "drawing-motion", title: "Drawing Gallery — Animated Process", section: "Part 03 — Drawing", render: () => <DrawingMotionSlide /> },
  { id: "painting-gallery", title: "Painting Gallery — Selected Works", section: "Part 03 — Painting", render: () => <PaintingGalleryPage /> },
  { id: "painting-process", title: "Painting Gallery — Portrait Process", section: "Part 03 — Painting", render: () => <PaintingProcessPage /> },
  { id: "gold-rush-cover", title: "The Gold Rush — From Waste to Wealth", section: "Featured Case Study — The Gold Rush", render: () => <GoldRushCover /> },
  { id: "gold-rush-profile", title: "The Gold Rush — Maker Profile", section: "Featured Case Study — The Gold Rush", render: () => <GoldRushProfile /> },
  { id: "gold-rush-impact", title: "The Gold Rush — Product & Impact", section: "Featured Case Study — The Gold Rush", render: () => <GoldRushImpact /> },
  // ── FRONT MATTER ─────────────────────────────────────────────────────────
  { id: "cover",      title: "Cover",                 section: "Front Matter", render: () => <Cover /> },
  { id: "title",      title: "Title Page",            section: "Front Matter", render: () => <TitlePage /> },
  { id: "toc",        title: "Table of Contents",     section: "Front Matter", render: () => <TableOfContents /> },
  { id: "coverltr",   title: "Cover Letter",          section: "Front Matter", render: () => <CoverLetter /> },
  { id: "execsum",    title: "Executive Summary",          section: "Front Matter", render: () => <ExecutiveSummary /> },
  { id: "prog-framework", title: "Programme Framework — B8CD2Q", section: "Front Matter", render: () => <ProgrammeFramework /> },
  { id: "cv",         title: "Curriculum Vitae",           section: "Front Matter", render: () => <CurriculumVitae /> },

  // ── PART ONE — DESIGNER ───────────────────────────────────────────────────
  { id: "p1div", title: "Part One — Designer", section: "Part 01 — Designer",
    render: () => <PartOpener partNum="01" partTitle={"Part One —\nDesigner"} subtitle="Qualification Outcomes · Designer" quote="Design is the architecture of lived meaning — every decision a deliberate act of communication." sections={["01 Professional Profile","02 Design Philosophy","03 My Strengths ×10","04 Reflective Learning Statement"]} /> },
  { id: "p1-profile",    title: "Biography & Professional Profile", section: "Part 01 — Designer",  render: () => <ProfessionalProfile /> },
  { id: "p1-strengths",  title: "My Strengths Overview",          section: "Part 01 — Designer",  render: () => <MyStrengths /> },
  { id: "p1-reflective", title: "Reflective Learning Statement",  section: "Part 01 — Designer",  render: () => <ReflectiveLearning /> },

  // ── PART TWO — EVIDENCE ───────────────────────────────────────────────────
  { id: "p2div", title: "Part Two — Evidence of Learning", section: "Part 02 — Evidence",
    render: () => <PartOpener partNum="02" partTitle={"Part Two —\nEvidence"} subtitle="Evidence of Learning" accent={c.olive} quote="Evidence is not merely documentation — it is proof that learning has occurred through sustained, purposeful practice." sections={["Qualification Outcome Mapping","Evidence Matrix"]} /> },
  { id: "p2-outcomes", title: "Qualification Outcome Mapping", section: "Part 02 — Evidence", render: () => <OutcomeMapping /> },
  { id: "p2-matrix",   title: "Evidence Matrix",               section: "Part 02 — Evidence", render: () => <EvidenceMatrix /> },

  // ── PART THREE — DESIGN PORTFOLIO ────────────────────────────────────────
  { id: "p3div", title: "Part Three — Design Portfolio", section: "Part 03 — Portfolio",
    render: () => <PartOpener partNum="03" partTitle={"Part Three —\nPortfolio"} subtitle="Design Portfolio · 12 Disciplines" accent={c.ochre} quote="Projects organised by discipline, not chronology — demonstrating breadth, depth, and sustained creative development across 12 practice areas." sections={["Brand Identity","Packaging Design","Editorial Design","Typography","Poster Design","Advertising","Photography","Illustration","Digital Design","Motion Design","Three-Dimensional","Research"]} /> },
  { id: "p3-overview",  title: "Portfolio Overview",              section: "Part 03 — Portfolio", render: () => <PortfolioOverview /> },
  { id: "p3-template",  title: "Standard Project Template",       section: "Part 03 — Portfolio", render: () => <StandardProjectTemplate /> },
  ...PROJECT_RATIONALES.map((project, index) => ({
    id: `project-rationale-${project.id}`,
    title: `${project.title} — Rationale`,
    section: "Part 03 — Project Rationales",
    render: () => <ProjectRationalePage project={project} index={index} />,
  })),
  { id: "p3-brand",     title: "Brand Identity",                  section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Brand Identity" section="PART THREE · 01 BRAND IDENTITY" page="P. 22" description="Brand identity practice spans logo design, visual identity systems, brand strategy, and comprehensive brand guidelines. Projects demonstrate ability to translate complex organisational values into cohesive, multi-touchpoint visual systems that communicate with precision and cultural sensitivity." subItems={["Logo Design","Identity Systems","Brand Strategy","Brand Guidelines","Corporate Identity"]} imgUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop&auto=format" note='"Ukuvuselela — cultural heritage brand identity demonstrating African-centred identity design at its most rigorous."' /> },
  { id: "gal-brand",    title: "Brand Identity — Gallery",        section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Brand Identity" section="PART THREE · 01 BRAND IDENTITY" page="P. 24" items={GALLERIES.brand} accent={c.ochre} /> },
  { id: "svg-157", title: "Fig. 157 — Personal Brand Project", section: "Part 03 — Personal Brand", render: () => <SVGPage src={svgFigs157} figNum={157} label="PART THREE · 01 PERSONAL BRAND EVIDENCE" /> },
  { id: "gray-photography-logo", title: "Gray Photography Logo", section: "Part 03 — Personal Brand",
    render: () => <ImageEvidencePage src={grayPhotographyLogoImg} title="Gray Photography Logo" section="PART THREE · 01 PERSONAL BRAND" page="P. 25" caption="Personal photography identity mark using tall condensed letterforms, monochrome contrast, and a minimal wordmark lockup for professional image delivery." label="Personal Brand Evidence" category="Photography Identity" evidence="Logo design, wordmark system, monochrome brand application, photography-facing identity, and personal brand development." accent={c.ochre} /> },
  { id: "qg-visuals-logo", title: "QG Visuals Watermark", section: "Part 03 — Personal Brand",
    render: () => <ImageEvidencePage src={qgVisualsLogoImg} title="QG Visuals Watermark" section="PART THREE · 01 PERSONAL BRAND" page="P. 26" caption="QG Visuals watermark identity designed for image protection, portfolio presentation, and consistent visual authorship across photography and design work." label="Personal Brand Evidence" category="Visual Identity" evidence="Watermark design, initials-based mark, personal visual system, brand consistency, and image authorship application." accent={c.ochre} /> },
  { id: "menzi-impazamo-logo-design", title: "Menzi Impazamo Logo Design", section: "Part 03 — Personal Brand",
    render: () => <ImageEvidencePage src={menziImpazamoVinylPackagingPosterImg} title="Menzi Impazamo Logo Design" section="PART THREE · 01 PERSONAL BRAND" page="P. 27" caption="Logo and wordmark direction for Menzi Impazamo, using striped geometric letterforms, red-and-white contrast, and a dark music identity system that can move between release artwork, sleeve packaging, and promotional brand surfaces." label="Personal Brand Evidence" category="Logo Design" evidence="Logo design, wordmark construction, music identity, typographic brand system, release branding, and personal visual direction." accent={c.ochre} /> },

  { id: "p3-packaging", title: "Packaging Design",                section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Packaging Design" section="PART THREE · 02 PACKAGING DESIGN" page="P. 36" description="Packaging design practice encompasses consumer packaging, food packaging, sustainable packaging concepts, and high-fidelity product mock-ups. Work demonstrates ability to solve structural, visual, and commercial communication challenges simultaneously." subItems={["Consumer Packaging","Food Packaging","Sustainable Packaging","Structural Packaging","Product Mock-ups"]} imgUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=700&fit=crop&auto=format" accent={c.olive} /> },
  { id: "gal-packaging","title": "Packaging Design — Gallery",    section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Packaging Design" section="PART THREE · 02 PACKAGING DESIGN" page="P. 38" items={GALLERIES.packaging} accent={c.olive} /> },
  { id: "impi-black-t-packaging", title: "Impi Black T Product Mockup", section: "Part 03 — Packaging Design",
    render: () => <ImageEvidencePage src={impiBlackTPackagingImg} title="Impi Black T Product Mockup" section="PART THREE · 02 PACKAGING DESIGN" page="P. 39" caption="Black T-shirt merchandise mockup showing the Impi graphic applied as a high-contrast product surface, extending the visual identity into wearable packaging and retail presentation." label="Packaging Evidence" category="Merchandise Mockup" evidence="Product mockup, apparel packaging, brand extension, surface application, black-and-white graphic system, and retail-ready presentation." accent={c.olive} /> },
  { id: "menzi-vinyl-sleeve-packaging", title: "Menzi Impazamo Vinyl Sleeve Packaging", section: "Part 03 — Packaging Design",
    render: () => <ImageEvidencePage src={menziVinylSleevePackagingImg} title="Menzi Impazamo Vinyl Sleeve Packaging" section="PART THREE · 02 PACKAGING DESIGN" page="P. 40" caption="Vinyl sleeve packaging artwork for Menzi Impazamo, combining track-list information, record imagery, monochrome texture, and bold red typographic contrast across the printed sleeve layout." label="Packaging Evidence" category="Vinyl Sleeve" evidence="Music packaging, vinyl sleeve design, cover typography, back-cover track listing, monochrome image treatment, print layout, and brand presentation." accent={c.olive} /> },
  { id: "menzi-impazamo-vinyl-packaging-poster", title: "Menzi Impazamo Vinyl Packaging Artwork", section: "Part 03 — Packaging Design",
    render: () => <ImageEvidencePage src={menziImpazamoVinylPackagingPosterImg} title="Menzi Impazamo Vinyl Packaging Artwork" section="PART THREE · 02 PACKAGING DESIGN" page="P. 41" caption="Final vinyl packaging artwork for Menzi Impazamo, pairing a dark record-texture visual system with track-list hierarchy, release messaging, label marks, and high-contrast red-and-white typography." label="Packaging Evidence" category="Vinyl Release Artwork" evidence="Vinyl packaging, album artwork, music release design, track-list hierarchy, typographic identity, monochrome texture, and promotional packaging presentation." accent={c.olive} /> },
  { id: "menzi-album-artwork-line-illustration", title: "Menzi Album Artwork — Line Illustration", section: "Part 03 — Packaging Design",
    render: () => <ImageEvidencePage src={menziAlbumArtworkLineImg} title="Menzi Album Artwork — Line Illustration" section="PART THREE · 02 PACKAGING DESIGN" page="P. 42" caption="Album artwork development for the Menzi vinyl sleeve, using a clean black-line illustration as a graphic asset for the music packaging and brand system." label="Packaging Brand Evidence" category="Album Artwork" evidence="Album artwork, line illustration, vinyl sleeve graphic asset, packaging brand development, music identity, and cover art exploration." accent={c.olive} /> },
  { id: "gracious-center-label-design-source", title: "Center Label Design Source", section: "Part 03 — Packaging Design",
    render: () => <FileReferencePage title="Center Label Design Source" section="PART THREE · 02 PACKAGING DESIGN" page="P. 43" fileName="Gracious Mkhonto CENTER LABEL Design2.pdf" fileType="PDF Source File" caption="Center-label design source connected to the vinyl packaging system. The original PDF is listed as source evidence; macOS blocked direct file rendering from iCloud during this update." category="Vinyl Label Design" evidence="Center label design, vinyl packaging component, record label artwork, music packaging system, and production-ready PDF source." accent={c.olive} /> },
  { id: "p3-cd-cover", title: "CD Cover Design", section: "Part 03 — CD Cover Design",
    render: () => <PartOpener partNum="03.02" partTitle={"CD Cover\nDesign"} subtitle="Part Three — Portfolio" accent={c.olive} quote="Record label artwork demonstrates visual translation across format, mood, typography, image treatment, and packaging context." sections={["Record Label Cover","Music Packaging","Sleeve Layout","Cover Typography"]} /> },

  { id: "p3-editorial", title: "Editorial Design",                section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Editorial Design" section="PART THREE · 03 EDITORIAL DESIGN" page="P. 44" description="Editorial design practice spans magazine layouts, print publications, book design, grid systems, and publication systems. Key projects include Communication Arts magazine and Ghost in the Grid — a self-initiated typographic investigation." subItems={["Communication Arts","Ghost in the Grid","Magazine Design","Book Design","Publication Systems"]} imgUrl="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=700&fit=crop&auto=format" accent={c.brown} /> },
  { id: "gal-editorial","title": "Editorial Design — Gallery",    section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Editorial Design" section="PART THREE · 03 EDITORIAL DESIGN" page="P. 46" items={GALLERIES.editorial} accent={c.brown} /> },
  { id: "editorial-first-things-first", title: "First Things First 2020 Manifesto", section: "Part 03 — Editorial Design",
    render: () => <ImageEvidencePage src={editorialManifestoImg} title="First Things First 2020 Manifesto" section="PART THREE · 03 EDITORIAL DESIGN" page="P. 47" caption="Editorial layout study showing a manifesto publication system across cover, spread, contact, and typographic information pages." /> },
  { id: "editorial-folded-manifesto-mockup", title: "First Things First Folded Mockup", section: "Part 03 — Editorial Design",
    render: () => <ImageEvidencePage src={editorialFoldedManifestoMockupImg} title="First Things First Folded Mockup" section="PART THREE · 03 EDITORIAL DESIGN" page="P. 48" caption="Folded brochure mockup showing the manifesto layout applied to a physical editorial format, demonstrating panel sequencing, typography, hierarchy, and print presentation." label="Editorial Mockup" category="Folded Brochure" evidence="Editorial mockup, folded print layout, typographic hierarchy, manifesto publication system, physical format testing, and print presentation." accent={c.brown} /> },

  { id: "p3-typography","title": "Typography",                    section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Typography" section="PART THREE · 04 TYPOGRAPHY" page="P. 52" description="Typography practice encompasses editorial typography, grid systems, publication design, and experimental typographic investigation. The Zulu Fractal display typeface demonstrates mastery of type design within an African-centred geometric framework." subItems={["Editorial Typography","Grid Systems","Publication Design","Experimental Typography","Zulu Fractal Typeface"]} imgUrl="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=700&fit=crop&auto=format" /> },
  { id: "gal-typography","title": "Typography — Gallery",         section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Typography" section="PART THREE · 04 TYPOGRAPHY" page="P. 54" items={GALLERIES.typography} accent={c.ochre} /> },

  { id: "p3-poster",    title: "Poster Design",                   section: "Part 03 — Poster Design",
    render: () => <DisciplinePage title="Poster Design" section="PART THREE · 05 POSTER DESIGN" page="P. 60" description="Poster design practice spans social impact communication, abstract experimental work, campaign posters, and illustrative poster design. The poster is the purest test of typographic and compositional intelligence — a single surface, a single moment of attention." subItems={["Social Impact Posters","Abstract Experimental","Campaign Posters","Illustrative Posters","Typographic Posters"]} imgUrl="https://images.unsplash.com/photo-1544982503-9f984c14501a?w=600&h=700&fit=crop&auto=format" accent={c.olive} /> },
  { id: "gal-poster",   title: "Poster Design — Gallery",         section: "Part 03 — Poster Design",
    render: () => <GalleryGrid title="Poster Design" section="PART THREE · 05 POSTER DESIGN" page="P. 62" items={GALLERIES.poster} accent={c.olive} /> },
  { id: "abstract-poster-construction", title: "Abstract Poster — Relief Construction", section: "Part 03 — Poster Design",
    render: () => <ImageEvidencePage src={abstractPosterConstructionImg} title="Abstract Poster — Relief Construction" section="PART THREE · 05 POSTER DESIGN" page="P. 63" caption="Physical construction stage for an abstract poster study, using raised geometry, sticks, texture, and a central sculptural form to build tactile composition before colour application." label="Abstract Poster Evidence" category="Process Model" evidence="Abstract composition, relief construction, tactile poster process, geometric structure, and material experimentation." accent={c.olive} /> },
  { id: "abstract-poster-painted", title: "Abstract Poster — Painted Relief", section: "Part 03 — Poster Design",
    render: () => <ImageEvidencePage src={abstractPosterPaintedImg} title="Abstract Poster — Painted Relief" section="PART THREE · 05 POSTER DESIGN" page="P. 64" caption="Finished painted abstract poster relief using red, yellow, blue, black, and white geometric panels to test rhythm, contrast, dimensionality, and visual hierarchy." label="Abstract Poster Evidence" category="Finished Relief Poster" evidence="Colour blocking, abstract poster design, dimensional composition, pattern rhythm, contrast, and handcrafted visual experimentation." accent={c.olive} /> },
  { id: "abstract-poster-keynote-concepts", title: "Abstract Poster — Keynote Concepts", section: "Part 03 — Poster Design",
    render: () => <FileReferencePage title="Abstract Poster — Keynote Concepts" section="PART THREE · 05 POSTER DESIGN" page="P. 65" fileName="Gracious Mkhonto Product Photography concepts.key" fileType="Keynote Source File" caption="Keynote concept deck added as a safe source reference for the abstract poster section. The raw file is preserved outside the browser bundle until selected slides are exported as PDF or image pages." category="Abstract Poster Evidence" evidence="Concept presentation source, poster ideation, visual direction, layout experimentation, abstract composition planning, and editable Keynote workflow." accent={c.olive} /> },
  { id: "ukuvuselela-fractal-poster-series", title: "Ukuvuselela Fractal Poster Series", section: "Part 03 — Poster Design",
    render: () => <PosterSeriesPage images={[{ src: ukuvuselelaFractalPoster01, label: "Poster 01" }, { src: ukuvuselelaFractalPoster02, label: "Poster 02" }, { src: ukuvuselelaFractalPoster03, label: "Poster 03" }]} title="Ukuvuselela Fractal Poster Series" section="PART THREE · 05 POSTER DESIGN" page="P. 66" caption="Three-poster fractal design system for Ukuvuselela, exploring cultural pattern repetition, decay, renewal, and campaign identity through bold colour fields and modular symbolic geometry." label="Poster Series" category="Fractal Poster Design" evidence="Poster system, fractal pattern design, campaign typography, modular cultural symbol, colour variation, and visual identity extension." accent={c.olive} /> },
  { id: "ukuvuselela-group-concept", title: "Ukuvuselela — The Group Concept", section: "Part 03 — Poster Design", render: () => <UkuvuselelaGroupConceptPage /> },
  { id: "ukuvuselela-practice-change", title: "Ukuvuselela — The Project That Changed My Practice", section: "Part 03 — Poster Design", render: () => <UkuvuselelaPracticeChangePage /> },
  { id: "ukuvuselela-design-drives-culture-video", title: "Ukuvuselela — Design Drives Culture Video", section: "Part 03 — Poster Design",
    render: () => <FileReferencePage title="Ukuvuselela — Design Drives Culture Video" section="PART THREE · 05 POSTER DESIGN" page="P. 67" fileName="Ukuvuselela_ Group1_Design Drives Culture_10P.mp4" fileType="MP4 Campaign Source" caption="Campaign video source connected to the Ukuvuselela poster system. Kept as a source reference so the portfolio can document the motion/campaign context without bloating the printable poster spread." category="Poster Campaign Evidence" evidence="Campaign presentation video, poster system context, design culture narrative, motion-supported poster identity, and group project documentation." accent={c.olive} /> },
  { id: "uku-fractal-design-video", title: "Ukuvuselela Fractal Design Video", section: "Part 03 — Poster Design",
    render: () => <VideoEvidencePage src={ukuvuselelaFractalVideo} title="Ukuvuselela Fractal Motion" section="PART THREE · 05 POSTER DESIGN" page="P. 67B" caption="A motion extension of the Ukuvuselela fractal system, translating repeated cultural geometry, rhythm, renewal, and the campaign's modular visual language into moving image." label="Motion Study" category="Fractal Motion Design" evidence="Embedded campaign motion, fractal pattern animation, poster-to-motion extension, rhythmic visual sequencing, modular identity behaviour, and digital presentation." accent={c.olive} /> },

  { id: "p3-advertising","title": "Advertising",                  section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Advertising" section="PART THREE · 06 ADVERTISING" page="P. 68" description="Advertising practice encompasses illustrative print advertising, campaign development, art direction, and visual storytelling. Advertising work is conceptually rather than commercially driven — campaigns designed to change minds, shift behaviour, or celebrate culture." subItems={["Illustrative Print Advertising","Campaign Development","Art Direction","Visual Storytelling","Promotional Design"]} imgUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=700&fit=crop&auto=format" accent={c.brown} /> },
  { id: "gal-advertising","title": "Advertising — Gallery",       section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Advertising" section="PART THREE · 06 ADVERTISING" page="P. 70" items={GALLERIES.advertising} accent={c.brown} /> },
  { id: "svg-124", title: "Fig. 124 — Advertising Work",  section: "Part 03 — Advertising", render: () => <SVGPage src={svgFigs124} figNum={124} label="PART THREE · 06 ADVERTISING EVIDENCE" /> },
  { id: "svg-125", title: "Fig. 125 — Advertising Work",  section: "Part 03 — Advertising", render: () => <SVGPage src={svgFigs125} figNum={125} label="PART THREE · 06 ADVERTISING EVIDENCE" /> },
  { id: "char-profile",  title: "Character Profile — Lucky Star",  section: ART_DIRECTION_CAMPAIGNS,
    render: () => (
      <EPage section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 72" navActive="ARCHIVE">
        <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>

          {/* Left — character sheet */}
          <div style={{ background: c.white, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, borderRight: `0.5px solid ${c.rule}` }}>
            <ImageWithFallback
              src={characterSketch}
              alt="Lucky Star character development sketches — fish superhero concept art"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          {/* Right — character brief */}
          <div style={{ padding: `28px ${M}px`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <CapLabel color={c.brown}>Character Profile</CapLabel>
              <div style={{ fontFamily: Fd, fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: c.ink, marginBottom: 10 }}>
                Lucky Star<br/>Character Development
              </div>
              <div style={{ fontFamily: Fd, fontSize: 16, fontStyle: "italic", color: c.brown, marginBottom: 20 }}>
                Illustrative Print Advertising — Concept Art
              </div>
              <HR color={c.rule} mb={20} />
              <p style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.8, color: c.ink, marginBottom: 18 }}>
                The Lucky Star campaign required a central character that could personify the brand's heritage while communicating confidence, adventure, and South African cultural pride. The character brief called for a fish protagonist — referencing the product directly — elevated into a superhero archetype recognisable to the target audience.
              </p>
              <p style={{ fontFamily: Fb, fontSize: 12, lineHeight: 1.8, color: c.ink, marginBottom: 24 }}>
                These concept sketches explore the character in multiple poses and action sequences, testing silhouette strength, gesture expressiveness, and costume legibility at print reproduction sizes. The shield motif references both protective imagery and the circular Lucky Star tin lid.
              </p>

              {/* Character notes */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Character Type", value: "Anthropomorphic fish protagonist" },
                  { label: "Archetype", value: "Superhero — strength and courage" },
                  { label: "Key Prop", value: "Shield — tin lid motif" },
                  { label: "Poses Explored", value: "Standing, action, flying, heroic" },
                  { label: "Technique", value: "Pencil line — scanned and refined" },
                  { label: "Campaign", value: "Lucky Star — print & packaging" },
                ].map(({ label, value }, i) => (
                  <div key={i} style={{ borderTop: `0.5px solid ${c.rule}`, paddingTop: 8 }}>
                    <div style={{ fontFamily: Fm, fontSize: 7.5, color: c.mid, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: Fb, fontSize: 11, color: c.ink }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process note */}
            <div style={{ background: c.grey, padding: "14px 18px", borderLeft: `3px solid ${c.brown}` }}>
              <CapLabel color={c.brown}>Process Note</CapLabel>
              <p style={{ fontFamily: Fb, fontSize: 11.5, lineHeight: 1.75, color: c.brown, marginTop: 8 }}>
                Character development began with analogue pencil sketching — iterating quickly through silhouette variations before committing to digital refinement. The hand-drawn quality was intentionally preserved in the final campaign to reinforce the illustrative aesthetic and distinguish the campaign from photographic competitors.
              </p>
            </div>
          </div>
        </div>
      </EPage>
    ),
  },
  { id: "character-design-sheet", title: "Character Design Sheet — Lucky Star", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <CharacterDesignSheetPortfolio /> },

  { id: "p3-photography","title": "Photography",                  section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Photography" section="PART THREE · 07 PHOTOGRAPHY" page="P. 76" description="Photography practice spans 14 years (2012–2026) of documentary, portrait, architectural, environmental, and product photography. Photography functions as both a professional service and a research methodology — primary source material for authentic visual communication." subItems={["Portrait Photography","Architectural Photography","Environmental Photography","Product Photography","Documentary Photography"]} imgUrl="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=700&fit=crop&auto=format" /> },
  { id: "gal-photography","title": "Photography — Gallery",       section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Photography" section="PART THREE · 07 PHOTOGRAPHY" page="P. 78" items={GALLERIES.photography} accent={c.ochre} columns={3} /> },
  { id: "svg-108", title: "Fig. 108 — Photography Work",  section: "Part 03 — Photography", render: () => <SVGPage src={svgFigs108} figNum={108} label="PART THREE · 07 PHOTOGRAPHY EVIDENCE" /> },
  { id: "svg-109", title: "Fig. 109 — Photography Work",  section: "Part 03 — Photography", render: () => <SVGPage src={svgFigs109} figNum={109} label="PART THREE · 07 PHOTOGRAPHY EVIDENCE" /> },
  { id: "svg-111", title: "Fig. 111 — Photography Work",  section: "Part 03 — Photography", render: () => <SVGPage src={svgFigs111} figNum={111} label="PART THREE · 07 PHOTOGRAPHY EVIDENCE" /> },
  { id: "qg-visuals-photography-banner", title: "QG Visuals Photography Banner", section: "Part 03 — Photography",
    render: () => <ImageEvidencePage src={qgVisualsPhotographyBannerImg} title="QG Visuals Photography Banner" section="PART THREE · 07 PHOTOGRAPHY" page="P. 82" caption="QG Visuals photography banner presenting wedding-detail images as a branded service collage, combining product-style detail photography, event storytelling, and personal visual identity." label="Photography Evidence" category="Branded Photography Banner" evidence="Wedding detail photography, branded photo collage, service banner, personal photography identity, product-style event details, and image-led brand presentation." accent={c.ochre} /> },

  { id: "p3-illustration","title": "Illustration",               section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Illustration" section="PART THREE · 08 ILLUSTRATION" page="P. 84" description="Illustration practice spans analogue image making, digital illustration, mixed media, and experimental visual communication. Illustration is where practice becomes most personal — investigating visual ideas through mark-making that later informs design work." subItems={["Analogue Image Making","Digital Illustration","Mixed Media","Experimental Practice","Editorial Illustration"]} imgUrl="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=700&fit=crop&auto=format" accent={c.olive} /> },
  { id: "gal-illustration","title": "Illustration — Gallery",    section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Illustration" section="PART THREE · 08 ILLUSTRATION" page="P. 86" items={GALLERIES.illustration} accent={c.olive} /> },
  { id: "framed-net-abstract-illustration", title: "Framed Net Abstract Illustration", section: "Part 03 — Illustration",
    render: () => <ImageEvidencePage src={framedNetAbstractIllustrationImg} title="Framed Net Abstract Illustration" section="PART THREE · 08 ILLUSTRATION" page="P. 88" caption="Framed black-and-white abstract illustration using net-like texture, layered line movement, and gallery-style presentation as mixed-media visual evidence." label="Illustration Evidence" category="Mixed Media Illustration" evidence="Abstract illustration, framed artwork, net texture, monochrome composition, line movement, mixed-media presentation, and gallery mockup." accent={c.olive} /> },
  { id: "drawing-lucky-star-fire-can", title: "Drawing — Lucky Star Fire Can", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={drawingLuckyStarFireCanImg} title="Drawing — Lucky Star Fire Can" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 89" caption="Digital drawing study for the Lucky Star campaign, showing a fish emerging from a hot sauce can with flame, smoke, and expressive sketch marks." label="Art Direction Evidence" category="Digital Drawing" evidence="Digital illustration, campaign drawing, character concept, food packaging reference, flame effects, expressive mark making, and visual development." accent={c.olive} /> },
  { id: "drawing-lucky-star-fire-study", title: "Drawing — Lucky Star Fire Study", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={drawingLuckyStarFireStudyImg} title="Drawing — Lucky Star Fire Study" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 90" caption="Process drawing for the Lucky Star fire-can concept, testing composition, flame treatment, fish posture, and the relationship between product packaging and character illustration." label="Art Direction Evidence" category="Process Drawing" evidence="Concept drawing, visual development, campaign illustration process, character staging, packaging-to-image translation, and digital painting study." accent={c.olive} /> },

  { id: "p3-digital",   title: "Digital Design",                  section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Digital Design" section="PART THREE · 09 DIGITAL DESIGN" page="P. 92" description="Digital design practice spans UX/UI design, web design, responsive design, and interface concepts. The UX Pilot project demonstrates competency in user research, information architecture, wireframing, and prototyping for a mobile-first platform context." subItems={["UX/UI Design","Web Design","Responsive Design","Interface Concepts","User Research"]} imgUrl="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=700&fit=crop&auto=format" accent={c.brown} /> },
  { id: "gal-digital",  title: "Digital Design — Gallery",        section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Digital Design" section="PART THREE · 09 DIGITAL DESIGN" page="P. 94" items={GALLERIES.digital} accent={c.brown} /> },
  { id: "web-double-up-wireframe", title: "Double Up Wireframe", section: "Part 03 — Web Design",
    render: () => <ImageEvidencePage src={webWireframeImg} title="Double Up Wireframe" section="PART THREE · 09 WEB DESIGN" page="P. 95" caption="Responsive web design evidence showing desktop and mobile layouts for the Bob Ross/Double Up experience, including home page and portfolio page systems." label="Web Design Evidence" category="Web Design" evidence="Wireframing, responsive layout, UI structure, navigation, portfolio grid, mobile adaptation, and visual hierarchy." accent={c.brown} /> },
  { id: "webframe-logo-design", title: "Logo Design — Webframe Identity", section: "Part 03 — Web Design",
    render: () => <ImageEvidencePage src={webframeLogoDesignImg} title="Logo Design — Webframe Identity" section="PART THREE · 09 WEB DESIGN" page="P. 96" caption="Logo design source rendered from the Illustrator/PDF artwork and placed with the webframe design evidence to show the identity element supporting the interface system." label="Web Design Evidence" category="Logo Design" evidence="Logo design, Illustrator source artwork, identity-to-interface translation, webframe branding, and visual system support for digital design." accent={c.brown} /> },
  { id: "bob-ross-web-logo-black", title: "Bob Ross Web Logo — Dark", section: "Part 03 — Web Design",
    render: () => <ImageEvidencePage src={bobRossLogoBlackWebImg} title="Bob Ross Web Logo — Dark" section="PART THREE · 09 WEB DESIGN" page="P. 97" caption="Dark-theme Bob Ross identity mark prepared as a web-design branding asset for digital interface and portfolio presentation." label="Web Design Evidence" category="Branding Asset" evidence="Web branding, logo application, dark-mode identity, digital presentation asset, and interface-ready mark system." accent={c.brown} /> },
  { id: "bob-ross-web-logo-white", title: "Bob Ross Web Logo — Light", section: "Part 03 — Web Design",
    render: () => <ImageEvidencePage src={bobRossLogoWhiteWebImg} title="Bob Ross Web Logo — Light" section="PART THREE · 09 WEB DESIGN" page="P. 98" caption="Light-theme Bob Ross logo application showing the identity mark on a clean white field for responsive web and interface contexts." label="Web Design Evidence" category="Logo System" evidence="Logo design, responsive web branding, light-mode identity, mark lockup, and digital visual system." accent={c.brown} /> },
  { id: "bob-ross-webdesign-branding", title: "Bob Ross Web Design Branding", section: "Part 03 — Web Design",
    render: () => <ImageEvidencePage src={bobRossWebBrandingImg} title="Bob Ross Web Design Branding" section="PART THREE · 09 WEB DESIGN" page="P. 99" caption="Web design branding board applying the Bob Ross identity across art tools, paint packaging, palette, brush handles, and product surfaces." label="Web Design Evidence" category="Brand Application" evidence="Web design branding, product mockup, logo application, visual identity system, UI brand asset direction, and cross-surface consistency." accent={c.brown} /> },
  { id: "lucky-copy-site-overview", title: "Lucky Copy Website — Overview", section: "Part 03 — Web Design",
    render: () => <LuckyCopySiteSlides variant="overview" /> },
  { id: "lucky-copy-site-responsive", title: "Lucky Copy Website — Responsive Flow", section: "Part 03 — Web Design",
    render: () => <LuckyCopySiteSlides variant="responsive" /> },
  { id: "lucky-copy-site-content", title: "Lucky Copy Website — Copy System", section: "Part 03 — Web Design",
    render: () => <LuckyCopySiteSlides variant="content" /> },
  { id: "lucky-copy-site-system", title: "Lucky Copy Website — Visual System", section: "Part 03 — Web Design",
    render: () => <LuckyCopySiteSlides variant="system" /> },

  { id: "p3-motion",    title: "Motion & 3D Design",              section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Motion & 3D Design" section="PART THREE · 10–11 MOTION · 3D" page="P. 100" description="Motion design practice spans animation, motion graphics, identity animation, and emblem animation. The Zulu Fractal project combines typeface design with kinetic identity — revealing the typeface's geometric construction through motion. Three-dimensional practice investigates experimental sculptural forms and material exploration." subItems={["Animation","Motion Graphics","Identity Animation","Emblem Animation","Sculptural Explorations","Experimental Objects"]} imgUrl="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=700&fit=crop&auto=format" /> },
  { id: "gal-motion",   title: "Motion & 3D — Gallery",           section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Motion & 3D Design" section="PART THREE · 10–11 MOTION · 3D" page="P. 102" items={GALLERIES.motion} accent={c.ochre} /> },
  { id: "svg-128", title: "Fig. 128 — Motion & 3D Work",  section: "Part 03 — Motion & 3D", render: () => <SVGPage src={svgFigs128} figNum={128} label="PART THREE · 10–11 MOTION · 3D EVIDENCE" /> },
  { id: "svg-129", title: "Fig. 129 — Motion & 3D Work",  section: "Part 03 — Motion & 3D", render: () => <SVGPage src={svgFigs129} figNum={129} label="PART THREE · 10–11 MOTION · 3D EVIDENCE" /> },
  { id: "motion-design-sketches-route-character", title: "Motion Design — Route & Character Sketches", section: "Part 03 — Motion & 3D",
    render: () => <ImageEvidencePage src={motionDesignSketches01Img} title="Motion Design — Route & Character Sketches" section="PART THREE · 10–11 MOTION DESIGN" page="P. 103A" caption="Motion design planning sketches for the Cupcake Driver concept, including route planning, character exploration, vehicle cues, and rough scene composition." label="Motion Design Evidence" category="Concept Sketches" evidence="Motion planning, character sketching, route diagram, storyboard thinking, scene ideation, and animation pre-production." accent={c.ochre} /> },
  { id: "motion-design-sketches-sound-notes", title: "Motion Design — Sound & Action Notes", section: "Part 03 — Motion & 3D",
    render: () => <ImageEvidencePage src={motionDesignSketches02Img} title="Motion Design — Sound & Action Notes" section="PART THREE · 10–11 MOTION DESIGN" page="P. 103B" caption="Motion-design notes documenting sound cues, repeated action beats, dance-challenge logic, and character behaviour for the animation sequence." label="Motion Design Evidence" category="Sound + Action Planning" evidence="Sound planning, action notes, motion sequence logic, character behaviour, dance-challenge concept, and animation ideation." accent={c.ochre} /> },
  { id: "wire-sculpture-fish", title: "Wire Sculpture — Fish Study", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={wireSculptureFishImg} title="Wire Sculpture — Fish Study" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 104" caption="Three-dimensional wire study exploring line, contour, and skeletal structure through a fish form connected to the Lucky Star visual development process." label="Art Direction Evidence" category="Wire Sculpture" evidence="Material experimentation, sculptural contour, object construction, silhouette development, and three-dimensional visual thinking." accent={c.ochre} /> },
  { id: "wire-sculpture-can", title: "Wire Sculpture — Can Study", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={wireSculptureCanImg} title="Wire Sculpture — Can Study" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 105" caption="Wire sculpture prototype translating packaging and character elements into a spatial object, testing volume through minimal linear construction." label="Art Direction Evidence" category="Wire Sculpture" evidence="Object prototyping, packaging form exploration, wire construction, spatial composition, and handmade model development." accent={c.ochre} /> },
  { id: "wire-sculpture-composition", title: "Wire Sculpture — Object Composition", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={wireSculptureCompositionImg} title="Wire Sculpture — Object Composition" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 106" caption="Combined wire sculpture composition showing the fish and can forms together as physical campaign objects for 3D exploration and art direction." label="Art Direction Evidence" category="Wire Sculpture" evidence="Campaign object making, physical composition, material process, sculptural storytelling, and dimensional art direction." accent={c.ochre} /> },
  { id: "lucky-star-3d-modelling-combined", title: "3D Modelling — Fish Texture & Process", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <DualImageEvidencePage leftSrc={luckyStar3dCloseupImg} rightSrc={luckyStar3dProcessImg} title="3D Modelling — Fish Texture & Process" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 107–108" caption="Combined modelling evidence showing the tactile fish texture study alongside the product-referenced process image. Together they link hands-on material development to the Lucky Star campaign context." label="Art Direction Evidence" category="Material Model + Campaign Prototype" evidence="Physical modelling, relief texture, colour blocking, reference-to-object development, packaging context, scale study, and three-dimensional form refinement." leftLabel="Texture Study" rightLabel="Process Context" accent={c.ochre} /> },
  { id: "abstract-relief-3d-combined", title: "3D Modelling — Abstract Relief Process", section: "Part 03 — Motion & 3D",
    render: () => <DualImageEvidencePage leftSrc={abstractPosterConstructionImg} rightSrc={abstractPosterPaintedImg} title="3D Modelling — Abstract Relief Process" section="PART THREE · 10–11 MOTION · 3D" page="P. 108A–108B" caption="Combined modelling evidence showing the unpainted construction stage beside the finished painted relief model. Together they document material build-up, raised geometry, colour blocking, and dimensional poster-to-object translation on one slide." label="3D Modelling Evidence" category="Relief Process + Finished Model" evidence="Relief modelling, material construction, painted model making, dimensional abstraction, colour blocking, tactile composition, and three-dimensional visual experimentation." leftLabel="108A Construction" rightLabel="108B Painted Model" accent={c.ochre} /> },
  { id: "lucky-star-3d-final-render", title: "Lucky Star 3D Character Render", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={luckyStar3dFinalImg} title="Lucky Star 3D Character Render" section="PART FOUR · ART DIRECTION · LUCKY STAR" page="P. 109" caption="Final 3D character presentation showing multiple render angles of the Lucky Star hero fish, shield, star structure, and polished campaign object treatment." label="Art Direction Evidence" category="Character Model" evidence="Finished 3D render, character modelling, product-inspired shield motif, campaign object styling, and multi-angle presentation." accent={c.ochre} /> },
  { id: "lucky-star-3d-campaign-gallery", title: "Lucky Star 3D Campaign Render Set", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <LuckyStar3DCampaignGallery /> },

  { id: "p3-research",  title: "Research",                        section: "Part 03 — Portfolio",
    render: () => <DisciplinePage title="Research" section="PART THREE · 12 RESEARCH" page="P. 108" description="Research is the foundation of every project — not a preliminary step but an ongoing practice that informs visual decisions throughout the design process. Research outputs include literature reviews, visual audits, case studies, mood boards, personas, journey maps, design thinking documentation, and reflective research journals." subItems={["Literature Reviews","Visual Audits","Case Studies","Mood Boards","Personas","Journey Maps","Design Thinking","Research Journals"]} imgUrl="https://images.unsplash.com/photo-1497366754035-f200968a334d?w=600&h=700&fit=crop&auto=format" accent={c.olive} /> },
  { id: "gal-research", title: "Research — Gallery",              section: "Part 03 — Portfolio",
    render: () => <GalleryGrid title="Research" section="PART THREE · 12 RESEARCH" page="P. 110" items={GALLERIES.research} accent={c.olive} /> },

  // Portfolio work evidence — actual spread pages in figure-number order
  { id: "svg-126", title: "Fig. 126 — Portfolio Work",  section: "Part 03 — Portfolio", render: () => <SVGPage src={svgFigs126} figNum={126} label="PART THREE · PORTFOLIO EVIDENCE" /> },
  { id: "svg-130", title: "Fig. 130 — Portfolio Work",  section: "Part 03 — Portfolio", render: () => <SVGPage src={svgFigs130} figNum={130} label="PART THREE · PORTFOLIO EVIDENCE" /> },

  // ── FEATURED CASE STUDIES ─────────────────────────────────────────────────
  { id: "csDiv", title: "Featured Case Studies", section: "Featured Case Studies",
    render: () => <PartOpener partNum="CS" partTitle={"Featured\nCase Studies"} subtitle="Extended Case Study Chapters" accent={c.brown} quote="Large projects receive expanded chapters — each a sustained investigation into design thinking, research methodology, and creative resolution." sections={["Ghost in the Grid","Communication Arts Magazine","Lucky Star Campaign","Ukuvuselela"]} /> },
  { id: "cs-ghost","title": "Ghost in the Grid",          section: "Featured Case Studies", render: () => <GhostInGrid /> },
  { id: "svg-151", title: "Fig. 151 — Case Study Documentation",  section: "Featured Case Studies", render: () => <SVGPage src={svgFigs151} figNum={151} label="FEATURED CASE STUDIES" /> },

  // ── QG RPL PROG PLACEHOLDERS ─────────────────────────────────────────────
  ...SUBMISSION_PLACEHOLDERS.map((item, index) => ({
    id: `submission-placeholder-${index + 1}`,
    title: item.title,
    section: "QG RPL Prog Placeholders",
    render: () => <SubmissionPlaceholderPage item={item} index={index} />,
  })),

  // ── PART FOUR — PROFESSIONAL PRACTICE ────────────────────────────────────
  { id: "p4div", title: "Part Four — Professional Practice", section: "Part 04 — Practice",
    render: () => <PartOpener partNum="04" partTitle={"Professional\nPractice"} subtitle="Part Four — Practice" quote="Professional practice is not incidental to design education — it is the primary site where design thinking is tested, refined, and proven in real-world conditions." sections={["Professional Workflow","Art Direction","Client Communication","Presentations","Creative Process","Time Management","Photography Practice","Behance Portfolio","Project Management","Leadership & Knowledge Sharing"]} /> },
  { id: "p4-practice", title: "Professional Workflow & Leadership", section: "Part 04 — Practice", render: () => <ProfessionalPractice /> },
  { id: "p4-art-direction", title: "Art Direction — Campaign Systems", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <PartOpener partNum="04.02" partTitle={"Art Direction\nCampaign Systems"} subtitle="Part Four — Professional Practice" accent={c.brown} quote="Gauta Eteng and Lucky Star demonstrate art-direction capability through extensive communication campaign systems — carrying a coherent idea across image, character, typography, material, motion, packaging, and applied touchpoints." sections={["Gauta Eteng — Behaviour-Change Campaign System","Lucky Star — Character-Led Campaign System","Identity & Visual Language","Illustration, Motion & 3D","Applied Communication Touchpoints"]} /> },
  { id: "ge-22",   title: "Gauta Eteng — Core Identity", section: ART_DIRECTION_CAMPAIGNS, render: () => <GautaEtengCore /> },
  { id: "ge-23",   title: "Gauta Eteng — Mood Board",    section: ART_DIRECTION_CAMPAIGNS, render: () => <GautaEtengMood /> },
  { id: "ge-24",   title: "Tactile Manifestation",       section: ART_DIRECTION_CAMPAIGNS, render: () => <TactileManifest /> },
  { id: "ge-25",   title: "Reflection & Critique",       section: ART_DIRECTION_CAMPAIGNS, render: () => <ReflectionCritique /> },
  { id: "ge-26",   title: "Applied Touchpoints",         section: ART_DIRECTION_CAMPAIGNS, render: () => <AppliedTouchpoints /> },
  { id: "svg-148", title: "Fig. 148 — Gauta Eteng Mood Board", section: ART_DIRECTION_CAMPAIGNS, render: () => <SVGPage src={svgFigs148} figNum={148} label="PART FOUR · ART DIRECTION · GAUTA ETENG" /> },
  { id: "svg-149", title: "Fig. 149 — Gauta Eteng Mood Board", section: ART_DIRECTION_CAMPAIGNS, render: () => <SVGPage src={svgFigs149} figNum={149} label="PART FOUR · ART DIRECTION · GAUTA ETENG" /> },
  { id: "gauta-eteng-types-of-waste", title: "Gauta Eteng — Types of Waste", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={gautaEtengTypesOfWasteImg} title="Gauta Eteng — Types of Waste" section="PART FOUR · ART DIRECTION · GAUTA ETENG" page="P. 142" caption="Campaign infographic direction for Gauta Eteng, using kraft-paper texture, map-based storytelling, waste-category icons, percentage callouts, and educational layout structure." label="Art Direction Evidence" category="Waste Education Infographic" evidence="Campaign art direction, infographic layout, environmental communication, icon system, map narrative, waste education, and textured visual language." accent={c.brown} /> },
  { id: "gauta-eteng-household-waste-map", title: "Gauta Eteng — Household Waste Map", section: ART_DIRECTION_CAMPAIGNS,
    render: () => <ImageEvidencePage src={gautaEtengHouseholdWasteMapImg} title="Gauta Eteng — Household Waste Map" section="PART FOUR · ART DIRECTION · GAUTA ETENG" page="P. 143" caption="Household waste-mapping concept for Gauta Eteng, translating sustainable behaviour into a simple room-by-room visual system with icon categories, architectural plan language, and campaign messaging." label="Art Direction Evidence" category="Household Waste Mapping" evidence="Art direction, campaign touchpoint, household waste mapping, icon taxonomy, environmental behaviour design, and sustainable communication system." accent={c.brown} /> },
  { id: "gauta-eteng-campaign-reflection", title: "Gauta Eteng — Campaign Reflection", section: ART_DIRECTION_CAMPAIGNS, render: () => <GautaEtengCampaignReflectionPage /> },

  // ── PART FIVE — RESEARCH AND WRITING ─────────────────────────────────────
  { id: "p5div", title: "Part Five — Research & Writing", section: "Part 05 — Research",
    render: () => <PartOpener partNum="05" partTitle={"Research &\nWriting"} subtitle="Part Five — Academic Practice" accent={c.ochre} quote="Academic writing and research practice demonstrate the theoretical grounding that underpins every visual decision — the invisible architecture of informed design." sections={["Academic Essays","Literature Reviews","Critical Reflection","APA Referencing","Design Theory","Research Process","Communication Arts Articles"]} /> },
  { id: "p5-writing", title: "Research & Writing", section: "Part 05 — Research", render: () => <ResearchWriting /> },

  // ── PART SIX — AWARDS ─────────────────────────────────────────────────────
  { id: "p6div", title: "Part Six — Awards", section: "Part 06 — Awards",
    render: () => <PartOpener partNum="06" partTitle={"Awards &\nRecognition"} subtitle="Part Six — Recognition" quote="Awards are not the measure of practice — but they are evidence that the work has been recognised by the professional community as achieving distinction." sections={["Africa International Design Award","Design South Africa Awards","Loerie Awards Commendation","Certificates","Project Documentation","Media Coverage"]} /> },
  { id: "p6-awards", title: "Awards & Recognition",                        section: "Part 06 — Awards", render: () => <AwardsPage /> },
  { id: "p6-aida",   title: "AIDA Winner 2026 — Ukuvuselela",              section: "Part 06 — Awards", render: () => <UkuvuselalaAwardSpread /> },

  // ── PART SEVEN — SUPPORTING DOCUMENTS ────────────────────────────────────
  { id: "p7div", title: "Part Seven — Supporting Documents", section: "Part 07 — Supporting",
    render: () => <PartOpener partNum="07" partTitle={"Supporting\nDocuments"} subtitle="Part Seven — Supporting" quote="Supporting documents provide the evidentiary foundation — verifying the professional credentials, formal qualifications, and community relationships that underpin this submission." sections={["Curriculum Vitae","Academic Transcripts","Certificates","Recommendation Letters","Workshop Attendance","Behance Portfolio","LinkedIn Profile","Adobe Experience"]} /> },
  { id: "svg-159", title: "Fig. 159 — Supporting Docs & Declaration", section: "Part 07 — Supporting", render: () => <SVGPage src={svgFigs159} figNum={159} label="SECTION 22 & 23 · SUPPORTING DOCUMENTS & DECLARATION" /> },
  { id: "p7-docs", title: "Supporting Documents & Declaration",      section: "Part 07 — Supporting", render: () => <SupportingDocuments /> },

  // ── BACK MATTER ───────────────────────────────────────────────────────────
  { id: "references",  title: "Reference List",              section: "Back Matter", render: () => <ReferenceList /> },
  { id: "african-literature", title: "My Design Reading List", section: "Back Matter", render: () => <AfricanLiteratureResearch /> },
  { id: "rationale",   title: "Design Rationale",             section: "Back Matter", render: () => <DesignRationale /> },
  { id: "processidx",  title: "Process Index",                section: "Back Matter", render: () => <ProcessIndex /> },
  { id: "back",        title: "Back Cover & Colophon",        section: "Back Matter", render: () => <BackCover /> },
];

// ─── Section accent colours ────────────────────────────────────────────────
const SECTION_ACCENTS: Record<string, string> = {
  "Front Matter":           c.ochre,
  "Part 01 — Designer":     c.ochre,
  "Part 02 — Evidence":     c.olive,
  "Part 03 — Portfolio":    c.ochre,
  "Part 03 — CD Cover Design": c.olive,
  "Part 03 — Packaging Design": c.olive,
  "Part 03 — Editorial Design": c.brown,
  "Part 03 — Poster Design": c.olive,
  "Part 03 — Photography":  c.ochre,
  "Part 03 — Advertising":  c.brown,
  "Part 03 — Web Design":   c.brown,
  "Part 03 — Motion & 3D":  c.ochre,
  "Part 03 — Personal Brand": c.ochre,
  "Featured Case Studies":  c.brown,
  "QG RPL Prog Placeholders": c.olive,
  "Part 04 — Practice":     c.mid,
  [ART_DIRECTION_CAMPAIGNS]: c.brown,
  "Part 05 — Research":     c.ochre,
  "Part 06 — Awards":       c.mid,
  "Part 07 — Supporting":   c.mid,
  "Back Matter":            c.mid,
  "PDF Slides":             c.ochre,
  "Created Book":           c.ochre,
  "Created Brochure":       c.olive,
  "Created Behance":        c.brown,
};

// ─── Print CSS ────────────────────────────────────────────────────────────────
const PRINT_CSS = `
  @media print {
    @page { size: 297mm 210mm; margin: 0; }
    html, body { margin: 0 !important; padding: 0 !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    #rpl-app-shell { display: none !important; }
    #rpl-print-container { display: block !important; }
  }
  #rpl-print-container { display: none; }
`;

const SAFE_UPLOAD_MIMES = new Set(["application/pdf", "image/png", "image/jpeg", "image/webp"]);
const SAFE_UPLOAD_EXTENSIONS = /\.(pdf|png|jpe?g|webp)$/i;
const BLOCKED_UPLOAD_EXTENSIONS = /\.(ppt|pptx|pptm|pps|ppsx|ppsm|pot|potx|potm|doc|docx|docm|xls|xlsx|xlsm|html?|xml|svg|js|jsx|ts|tsx|json|zip|rar|7z|dmg|pkg|app|command|sh|bash|zsh|ps1|exe|msi)$/i;

const validateSafeUpload = (file: File) => {
  const lowerName = file.name.toLowerCase();
  if (BLOCKED_UPLOAD_EXTENSIONS.test(lowerName)) {
    return "Blocked for safety. This app only imports rendered PDFs and raster images, not PowerPoint, macro files, scripts, SVG, archives, or installers.";
  }
  if (!SAFE_UPLOAD_EXTENSIONS.test(lowerName) || (file.type && !SAFE_UPLOAD_MIMES.has(file.type))) {
    return "Unsupported file type. Use PDF, PNG, JPG, or WebP so the app can render a safe visual copy.";
  }
  return "";
};

const svgToDataUrl = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const createScaffoldArtwork = (title: string, section: string, mode: "book" | "brochure" | "behance", index: number): PdfPage => {
  const accent = mode === "book" ? c.ochre : mode === "brochure" ? c.olive : c.brown;
  const titleSafe = title.replace(/&/g, "&amp;");
  const sectionSafe = section.toUpperCase().replace(/&/g, "&amp;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PW}" height="${PH}" viewBox="0 0 ${PW} ${PH}"><rect width="100%" height="100%" fill="${c.bg}"/><rect x="56" y="48" width="${PW - 112}" height="${PH - 96}" fill="${c.white}" stroke="${c.rule}"/><rect x="94" y="92" width="6" height="${PH - 184}" fill="${accent}"/><text x="128" y="134" font-family="Playfair Display, Georgia, serif" font-size="44" fill="${c.ink}" font-weight="700">${titleSafe}</text><text x="128" y="176" font-family="Inter, Arial, sans-serif" font-size="14" fill="${accent}" letter-spacing="5">${sectionSafe}</text><rect x="128" y="230" width="410" height="290" fill="${c.grey}"/><rect x="578" y="230" width="360" height="38" fill="${accent}" opacity="0.9"/><rect x="578" y="296" width="330" height="10" fill="${c.mid}" opacity="0.55"/><rect x="578" y="326" width="300" height="10" fill="${c.mid}" opacity="0.4"/><rect x="578" y="356" width="342" height="10" fill="${c.mid}" opacity="0.3"/><text x="128" y="594" font-family="Inter, Arial, sans-serif" font-size="17" fill="${c.brown}">Replace this placeholder with imported work, captions, and editable notes.</text><text x="${PW - 118}" y="${PH - 74}" font-family="DM Mono, Courier New, monospace" font-size="12" fill="${c.mid}" text-anchor="end">Template ${String(index).padStart(2, "0")}</text></svg>`;
  return {
    id: `created-${mode}-${Date.now()}-${index}`,
    title,
    section,
    dataUrl: svgToDataUrl(svg),
    kind: "Image",
  };
};

interface KeynoteBox { id: string; text: string; x: number; y: number; w: number; h: number; fontSize: number; }
type KeynoteEdits = Record<string, KeynoteBox[]>;
type AutoLayoutDirection = "vertical" | "horizontal";
type AutoLayoutAlign = "start" | "center" | "end" | "stretch";
interface AutoLayoutSettings {
  direction: AutoLayoutDirection;
  align: AutoLayoutAlign;
  gap: number;
  padding: number;
  frameWidth: number;
}

const DEFAULT_AUTO_LAYOUT: AutoLayoutSettings = {
  direction: "vertical",
  align: "start",
  gap: 12,
  padding: 24,
  frameWidth: 360,
};

function KeynoteEditLayer({ pageId, boxes, editMode, onUpdate, onRemove }: {
  pageId: string;
  boxes: KeynoteBox[];
  editMode: boolean;
  onUpdate: (pageId: string, boxId: string, patch: Partial<KeynoteBox>) => void;
  onRemove: (pageId: string, boxId: string) => void;
}) {
  const dragRef = useRef<{ id: string; startX: number; startY: number; x: number; y: number } | null>(null);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: editMode ? "auto" : "none", zIndex: 5 }}>
      {boxes.map(box => (
        <div
          key={box.id}
          onPointerDown={e => {
            if (!editMode || (e.target as HTMLElement).isContentEditable) return;
            dragRef.current = { id: box.id, startX: e.clientX, startY: e.clientY, x: box.x, y: box.y };
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          }}
          onPointerMove={e => {
            if (!dragRef.current || dragRef.current.id !== box.id) return;
            const scaleNode = e.currentTarget.closest("[data-page-scale]") as HTMLElement | null;
            const pageScale = Math.max(0.1, Number(scaleNode?.dataset.pageScale || 1));
            const dx = (e.clientX - dragRef.current.startX) / pageScale;
            const dy = (e.clientY - dragRef.current.startY) / pageScale;
            onUpdate(pageId, box.id, { x: Math.max(0, dragRef.current.x + dx), y: Math.max(0, dragRef.current.y + dy) });
          }}
          onPointerUp={() => { dragRef.current = null; }}
          style={{
            position: "absolute",
            left: box.x,
            top: box.y,
            width: box.w,
            minHeight: box.h,
            padding: "8px 10px",
            background: editMode ? "rgba(250,250,250,0.88)" : "transparent",
            border: editMode ? `1px solid ${c.ochre}` : "1px solid transparent",
            boxShadow: editMode ? "0 4px 12px rgba(26,24,21,0.12)" : "none",
            cursor: editMode ? "move" : "default",
            color: c.ink,
            fontFamily: Fb,
            fontSize: box.fontSize,
            lineHeight: 1.45,
          }}
        >
          {editMode && (
            <button
              onPointerDown={e => e.stopPropagation()}
              onClick={() => onRemove(pageId, box.id)}
              style={{ position: "absolute", top: -10, right: -10, width: 20, height: 20, borderRadius: 10, border: "none", background: c.dark, color: c.white, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <X size={10} />
            </button>
          )}
          <div
            contentEditable={editMode}
            spellCheck={editMode}
            lang="en"
            suppressContentEditableWarning
            onBlur={e => onUpdate(pageId, box.id, { text: e.currentTarget.innerText })}
            style={{ outline: "none", cursor: editMode ? "text" : "default", whiteSpace: "pre-wrap" }}
          >
            {box.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function AutoLayoutPanel({ settings, boxCount, onChange, onApply }: {
  settings: AutoLayoutSettings;
  boxCount: number;
  onChange: (patch: Partial<AutoLayoutSettings>) => void;
  onApply: () => void;
}) {
  const inputStyle = {
    height: 24,
    border: `0.5px solid ${c.rule}`,
    background: c.white,
    color: c.ink,
    fontFamily: Fm,
    fontSize: 8,
    padding: "0 7px",
  };
  const labelStyle = {
    fontFamily: Fb,
    fontSize: 7,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: c.mid,
    marginBottom: 5,
  };

  return (
    <div style={{ position: "absolute", top: 50, right: 18, zIndex: 20, width: 278, background: "rgba(250,250,250,0.96)", border: `0.5px solid ${c.rule}`, boxShadow: "0 12px 32px rgba(26,24,21,0.16)", padding: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ fontFamily: Fd, fontSize: 17, color: c.ink }}>Auto Layout</div>
        <div style={{ fontFamily: Fb, fontSize: 7, color: c.mid, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>{boxCount} layers</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div>
          <div style={labelStyle}>Direction</div>
          <select value={settings.direction} onChange={e => onChange({ direction: e.currentTarget.value as AutoLayoutDirection })} style={{ ...inputStyle, width: "100%" }}>
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
          </select>
        </div>
        <div>
          <div style={labelStyle}>Align</div>
          <select value={settings.align} onChange={e => onChange({ align: e.currentTarget.value as AutoLayoutAlign })} style={{ ...inputStyle, width: "100%" }}>
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
        <div>
          <div style={labelStyle}>Gap</div>
          <input type="number" min={0} max={96} value={settings.gap} onChange={e => onChange({ gap: Number(e.currentTarget.value) })} style={{ ...inputStyle, width: "100%" }} />
        </div>
        <div>
          <div style={labelStyle}>Padding</div>
          <input type="number" min={0} max={160} value={settings.padding} onChange={e => onChange({ padding: Number(e.currentTarget.value) })} style={{ ...inputStyle, width: "100%" }} />
        </div>
        <div style={{ gridColumn: "1 / span 2" }}>
          <div style={labelStyle}>Frame Width</div>
          <input type="range" min={180} max={760} step={10} value={settings.frameWidth} onChange={e => onChange({ frameWidth: Number(e.currentTarget.value) })} style={{ width: "100%" }} />
          <div style={{ fontFamily: Fm, fontSize: 8, color: c.mid }}>{settings.frameWidth}px</div>
        </div>
      </div>
      <button onClick={onApply} disabled={boxCount === 0} style={{ width: "100%", height: 28, marginTop: 10, background: boxCount === 0 ? c.grey : c.dark, color: boxCount === 0 ? c.mid : c.white, border: "none", cursor: boxCount === 0 ? "default" : "pointer", fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
        Apply to Current Page
      </button>
    </div>
  );
}

const intelligenceSuggestions = (prompt: string, page: DisplayPage) => {
  const ask = prompt.trim();
  const request = ask || "Suggest improvements for this page.";
  const lower = request.toLowerCase();
  const sectionTone = page.section.includes("Research") ? "academic and reflective" :
    page.section.includes("Portfolio") ? "visual, evidence-led, and practice-focused" :
    page.section.includes("Awards") ? "confident and achievement-focused" :
    page.section.includes("Supporting") ? "clear, formal, and document-led" :
    "professional and concise";

  if (lower.includes("caption")) {
    return `Caption draft for ${page.title}\n\n${page.title} demonstrates ${sectionTone} development within ${page.section}. The work should be captioned with the project aim, method, medium, and learning outcome so the evidence reads as intentional practice rather than decoration.\n\nSuggested caption:\n${page.title} — selected evidence showing process, visual decision-making, and resolved communication outcomes within ${page.section}.`;
  }

  if (lower.includes("reflection") || lower.includes("rationale")) {
    return `Reflection draft for ${page.title}\n\nThis page should explain what was learned, why the design decisions matter, and how the evidence connects to RPL outcomes. Keep the voice first-person but professional.\n\nSuggested reflection:\nThrough this work, I demonstrate the ability to connect research, concept development, and visual execution. The page evidences my capacity to make deliberate design choices, evaluate outcomes critically, and translate learning into a resolved communication artefact.`;
  }

  if (lower.includes("section") || lower.includes("where") || lower.includes("place")) {
    return `Section placement guidance\n\nCurrent destination: ${page.section}\nCurrent page: ${page.title}\n\nUse ${page.section} when the evidence supports the same learning area as the surrounding pages. If the file is process-heavy, place it near Evidence or Portfolio. If it is essay/research material, place it in Part 05. If it is certificates, letters, or formal proof, place it in Part 07.`;
  }

  if (lower.includes("rewrite") || lower.includes("improve")) {
    return `Rewrite direction for ${page.title}\n\nUse a tighter structure:\n1. What the work is.\n2. What problem it responds to.\n3. What methods or tools were used.\n4. What learning outcome it proves.\n\nPolished wording:\n${page.title} presents selected evidence from ${page.section}, showing the relationship between research, visual development, and resolved communication. The page can be strengthened by naming the design problem, the process followed, and the specific competency demonstrated.`;
  }

  return `Portfolio intelligence for ${page.title}\n\nPrompt: ${request}\n\nContext: ${page.section}\nTone: ${sectionTone}\n\nSuggested next move:\nClarify the evidence value of this page. Add one sentence for the project purpose, one sentence for the method, and one sentence for the learning outcome. This will make the page easier to assess and stronger as RPL evidence.`;
};

function IntelligencePanel({ page, prompt, response, onPromptChange, onGenerate, onAddComment, onClose }: {
  page: DisplayPage;
  prompt: string;
  response: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
  onAddComment: () => void;
  onClose: () => void;
}) {
  return (
    <div style={{ position: "absolute", top: 50, right: 18, width: 330, maxHeight: "calc(100vh - 76px)", background: c.bg, border: `0.5px solid ${c.rule}`, boxShadow: "0 8px 30px rgba(26,24,21,0.22)", zIndex: 20, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 38, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", borderBottom: `0.5px solid ${c.rule}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Sparkles size={13} color={c.ochre} />
          <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ink }}>GPT Intelligence</span>
        </div>
        <button onClick={onClose} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: c.mid }}>
          <X size={12} />
        </button>
      </div>
      <div style={{ padding: 14, overflowY: "auto" }}>
        <div style={{ fontFamily: Fm, fontSize: 8, color: c.mid, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6 }}>{page.section}</div>
        <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, lineHeight: 1.05, marginBottom: 12 }}>{page.title}</div>
        <textarea
          value={prompt}
          onChange={e => onPromptChange(e.target.value)}
          spellCheck
          lang="en"
          placeholder="Ask for a caption, rationale, reflection, rewrite, or section placement advice."
          style={{ width: "100%", minHeight: 84, resize: "vertical", boxSizing: "border-box", background: c.white, border: `0.5px solid ${c.rule}`, padding: 10, fontFamily: Fb, fontSize: 10.5, lineHeight: 1.5, color: c.ink, marginBottom: 10 }}
        />
        <button onClick={onGenerate} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", height: 28, background: c.ochre, color: c.white, border: "none", cursor: "pointer", fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 12 }}>
          <Sparkles size={11} />Generate
        </button>
        <div style={{ background: c.white, borderLeft: `2px solid ${c.ochre}`, padding: 12, whiteSpace: "pre-wrap", fontFamily: Fb, fontSize: 10.5, lineHeight: 1.6, color: c.brown }}>
          {response || "Choose the current page, type what you need, then generate guidance."}
        </div>
        <button
          onClick={onAddComment}
          disabled={!response.trim()}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", height: 28, marginTop: 10, background: response.trim() ? c.dark : c.grey, color: response.trim() ? c.white : c.mid, border: "none", cursor: response.trim() ? "pointer" : "default", fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const }}
        >
          <Plus size={11} />Add as Text Comment
        </button>
      </div>
    </div>
  );
}

function CreativeImagePanel({ page, prompt, isImported, onPromptChange, onGenerateImage, onUpscale, onClose }: {
  page: DisplayPage;
  prompt: string;
  isImported: boolean;
  onPromptChange: (value: string) => void;
  onGenerateImage: () => void;
  onUpscale: () => void;
  onClose: () => void;
}) {
  return (
    <div style={{ position: "absolute", top: 50, right: 18, width: 330, maxHeight: "calc(100vh - 76px)", background: c.bg, border: `0.5px solid ${c.rule}`, boxShadow: "0 8px 30px rgba(26,24,21,0.22)", zIndex: 21, display: "flex", flexDirection: "column" }}>
      <div style={{ height: 38, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", borderBottom: `0.5px solid ${c.rule}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Sparkles size={13} color={c.ochre} />
          <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ink }}>Image Intelligence</span>
        </div>
        <button onClick={onClose} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: c.mid }}>
          <X size={12} />
        </button>
      </div>
      <div style={{ padding: 14, overflowY: "auto" }}>
        <div style={{ fontFamily: Fm, fontSize: 8, color: c.mid, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6 }}>{page.section}</div>
        <div style={{ fontFamily: Fd, fontSize: 22, color: c.ink, lineHeight: 1.05, marginBottom: 12 }}>{page.title}</div>
        <textarea
          value={prompt}
          onChange={e => onPromptChange(e.target.value)}
          spellCheck
          lang="en"
          placeholder="Describe an image to generate for this portfolio section."
          style={{ width: "100%", minHeight: 84, resize: "vertical", boxSizing: "border-box", background: c.white, border: `0.5px solid ${c.rule}`, padding: 10, fontFamily: Fb, fontSize: 10.5, lineHeight: 1.5, color: c.ink, marginBottom: 10 }}
        />
        <button onClick={onGenerateImage} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", height: 28, background: c.ochre, color: c.white, border: "none", cursor: "pointer", fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 8 }}>
          <Sparkles size={11} />Generate Image
        </button>
        <button onClick={onUpscale} disabled={!isImported} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", height: 28, background: isImported ? c.dark : c.grey, color: isImported ? c.white : c.mid, border: "none", cursor: isImported ? "pointer" : "default", fontFamily: Fb, fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
          Upscale Current Asset
        </button>
        <div style={{ marginTop: 12, padding: 10, background: c.white, borderLeft: `2px solid ${c.ochre}`, fontFamily: Fb, fontSize: 9.5, lineHeight: 1.55, color: c.brown }}>
          Generates local editable placeholders. Upscale works on uploaded asset pages by rebuilding the image at a higher canvas resolution.
        </div>
      </div>
    </div>
  );
}

function CreatorPanel({ onCreate, onClose }: {
  onCreate: (mode: "book" | "brochure" | "behance") => void;
  onClose: () => void;
}) {
  const options: Array<{ mode: "book" | "brochure" | "behance"; title: string; detail: string; icon: React.ReactNode }> = [
    { mode: "book", title: "Create Book", detail: "Cover, contents, project spread, reflection, and back matter placeholders.", icon: <BookOpen size={13} /> },
    { mode: "brochure", title: "Create Brochure", detail: "Tri-fold style panels for offer, evidence, process, and contact notes.", icon: <LayoutTemplate size={13} /> },
    { mode: "behance", title: "Behance Project", detail: "Hero, context, process, mockups, and outcome presentation pages.", icon: <Sparkles size={13} /> },
  ];

  return (
    <div style={{ height: 164, background: c.bg, borderBottom: `0.5px solid ${c.rule}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ height: 34, padding: "0 14px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `0.5px solid ${c.rule}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <LayoutTemplate size={13} color={c.ochre} />
          <span style={{ fontFamily: Fb, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ink }}>Create Layout</span>
        </div>
        <button onClick={onClose} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: c.mid }}>
          <X size={12} />
        </button>
      </div>
      <div style={{ padding: 12, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
        {options.map(option => (
          <button key={option.mode} onClick={() => onCreate(option.mode)} style={{ minHeight: 104, textAlign: "left", background: c.white, border: `0.5px solid ${c.rule}`, cursor: "pointer", padding: 12, display: "flex", flexDirection: "column", gap: 8, color: c.ink }}>
            <span style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: option.mode === "book" ? c.ochre : option.mode === "brochure" ? c.olive : c.brown, color: c.white }}>{option.icon}</span>
            <span style={{ fontFamily: Fb, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const, fontWeight: 700 }}>{option.title}</span>
            <span style={{ fontFamily: Fb, fontSize: 9, lineHeight: 1.35, color: c.mid }}>{option.detail}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({ current, onSelect, total, displayPages, onAssetImport, pdfLoading, onRemovePdf, currentSection, viewOnly, uploadStatus }: {
  current: number; onSelect: (i: number) => void; total: number;
  displayPages: DisplayPage[]; onAssetImport: (file: File, section: string) => void;
  pdfLoading: boolean; onRemovePdf: (id: string) => void; currentSection: string;
  viewOnly: boolean; uploadStatus: string;
}) {
  const sections = [...new Set(displayPages.map(p => p.section))];
  const importSections = [...new Set(PAGES.map(p => p.section))];
  const [importSection, setImportSection] = useState(currentSection);
  const [navQuery, setNavQuery] = useState("");
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set([currentSection]));
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (importSections.includes(currentSection)) setImportSection(currentSection);
    setOpenSections(previous => {
      const next = new Set(previous);
      next.add(currentSection);
      return next;
    });
  }, [currentSection]);

  return (
    <aside className="portfolio-sidebar" aria-label="Portfolio slide navigation" style={{ width: 252, flexShrink: 0, height: "100vh", background: c.bg, borderRight: `0.5px solid ${c.rule}`, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ padding: "16px 18px 12px", borderBottom: `0.5px solid ${c.rule}` }}>
        <div style={{ fontFamily: Fb, fontSize: 8.5, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: c.ink, fontWeight: 600, marginBottom: 3 }}>RPL PORTFOLIO</div>
        <div style={{ fontFamily: Fb, fontSize: 8, color: c.mid, letterSpacing: "0.1em", marginBottom: 10 }}>Qinisile G. Mkhonto · Vol. 1 — 2026</div>
        <input
          value={navQuery}
          onChange={event => setNavQuery(event.currentTarget.value)}
          placeholder="Find a slide"
          aria-label="Find a slide"
          style={{ width: "100%", height: 28, boxSizing: "border-box", background: c.white, border: `0.5px solid ${c.rule}`, padding: "0 9px", fontFamily: Fb, fontSize: 9, color: c.ink, outline: "none" }}
        />
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {sections.map(sec => {
          const accent = SECTION_ACCENTS[sec] || c.mid;
          const query = navQuery.trim().toLowerCase();
          const pagesInSec = displayPages
            .map((p, i) => ({ ...p, index: i }))
            .filter(p => p.section === sec && (!query || `${p.title} ${p.section}`.toLowerCase().includes(query)));
          if (pagesInSec.length === 0) return null;
          const isPartDiv = pagesInSec.length > 0 && pagesInSec[0].id.endsWith("div");
          const isOpen = Boolean(query) || openSections.has(sec);
          return (
            <div key={sec} style={{ borderTop: isPartDiv ? `0.5px solid ${c.rule}` : "none" }}>
              <button
                onClick={() => setOpenSections(previous => {
                  const next = new Set(previous);
                  if (next.has(sec)) next.delete(sec); else next.add(sec);
                  return next;
                })}
                style={{ width: "100%", minHeight: 34, padding: "8px 16px 7px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, background: isOpen ? accent + "0D" : "transparent", border: "none", borderBottom: `0.5px solid ${c.rule}`, cursor: "pointer", fontFamily: Fb, fontSize: 7, letterSpacing: "0.13em", textTransform: "uppercase" as const, color: accent, textAlign: "left" }}
              >
                <span>{sec}</span>
                <span style={{ flexShrink: 0, fontFamily: Fm, fontSize: 7, letterSpacing: 0, color: c.mid }}>{String(pagesInSec.length).padStart(2, "0")} {isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && pagesInSec.map(p => (
                <div key={p.id} style={{ display: "flex", alignItems: "center" }}>
                  <button title={p.isImported ? `Asset · ${p.title}` : p.title} onClick={() => onSelect(p.index)} style={{
                    flex: 1, width: "100%", minHeight: p.id.endsWith("div") ? 26 : 24, textAlign: "left", padding: p.id.endsWith("div") ? "5px 18px" : "5px 8px 5px 28px",
                    fontFamily: Fb, fontSize: p.id.endsWith("div") ? 10.5 : 10,
                    fontWeight: p.id.endsWith("div") ? 600 : 400,
                    color: p.index === current ? accent : p.id.endsWith("div") ? c.ink : c.mid,
                    background: p.index === current ? accent + "14" : "transparent",
                    border: "none", cursor: "pointer", lineHeight: 1.3,
                    borderLeft: `2px solid ${p.index === current ? accent : "transparent"}`,
                    transition: "all 0.12s",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                  }}>{p.isImported ? `Asset · ${p.title}` : p.title}</button>
                  {p.pdfId && !viewOnly && (
                    <button onClick={() => onRemovePdf(p.pdfId!)} style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: c.mid, flexShrink: 0, marginRight: 4 }}>
                      <X size={10} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div style={{ padding: "10px 16px", borderTop: `0.5px solid ${c.rule}` }}>
        {!viewOnly && (
          <>
            <select
              value={importSection}
              onChange={e => setImportSection(e.target.value)}
              style={{ width: "100%", height: 26, marginBottom: 7, background: c.white, border: `0.5px solid ${c.rule}`, color: c.ink, fontFamily: Fb, fontSize: 9, padding: "0 8px" }}
            >
              {importSections.map(sec => <option key={sec} value={sec}>{sec}</option>)}
            </select>
            <input ref={fileRef} type="file" accept="application/pdf,image/png,image/jpeg,image/webp" style={{ display: "none" }}
              onChange={async e => {
                const f = e.target.files?.[0]; if (!f) return;
                e.target.value = "";
                onAssetImport(f, importSection);
              }} />
            <button onClick={() => fileRef.current?.click()} disabled={pdfLoading}
              style={{ display: "flex", alignItems: "center", gap: 5, width: "100%", height: 24, padding: "0 10px", background: pdfLoading ? c.grey : c.brown, border: "none", cursor: pdfLoading ? "default" : "pointer", color: pdfLoading ? c.mid : c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 7 }}>
              <FileUp size={9} />
              {pdfLoading ? "Loading…" : "Upload Asset"}
            </button>
            <div style={{ display: "flex", gap: 6, alignItems: "flex-start", fontFamily: Fb, fontSize: 7.2, lineHeight: 1.35, color: uploadStatus.includes("Blocked") ? "#9F2D20" : c.mid, marginBottom: 7 }}>
              <ShieldCheck size={10} style={{ flexShrink: 0, marginTop: 1 }} />
              <span>{uploadStatus || "Safe upload: PDF, PNG, JPG, and WebP only. Risky PowerPoint, macro, script, SVG, archive, and installer files are blocked."}</span>
            </div>
          </>
        )}
        {viewOnly && (
          <div style={{ display: "flex", gap: 6, alignItems: "flex-start", fontFamily: Fb, fontSize: 7.2, lineHeight: 1.35, color: c.mid, marginBottom: 7 }}>
            <Eye size={10} style={{ flexShrink: 0, marginTop: 1 }} />
            <span>View-only link. Editing, uploading, deleting, and exporting are hidden in this mode.</span>
          </div>
        )}
        <div style={{ fontFamily: Fb, fontSize: 7, color: c.mid, marginBottom: 4 }}>Slide {current + 1} of {total}</div>
        <div style={{ height: 1.5, background: c.rule }}>
          <div style={{ height: "100%", width: `${((current + 1) / total) * 100}%`, background: c.ochre, transition: "width 0.3s" }} />
        </div>
      </div>
    </aside>
  );
}

type PublicCaseStudy = {
  slug: string;
  title: string;
  discipline: string;
  year: string;
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  research: string;
  insight: string;
  strategy: string;
  outcome: string;
  reflection: string;
  skills: string[];
};

const PUBLIC_CASE_STUDIES: PublicCaseStudy[] = [
  {
    slug: "gauta-eteng",
    title: "Gauta Eteng",
    discipline: "Art Direction · Social Impact Campaign",
    year: "2024",
    image: gautaEtengGoldRushLandingImg,
    imageAlt: "Gauta Eteng Gold Rush newspaper campaign system",
    summary: "A communication system shaped from local waste behaviour, material culture and SDG 12 research.",
    problem: "The brief required a campaign that could make sustainable behaviour feel local, specific and usable rather than generic or imported.",
    research: "The work begins with observed urban texture, household waste categories, behavioural friction and visual references already present in Gauteng environments.",
    insight: "The strongest identity was not invented from a style reference; it emerged from materials, colours and systems the audience could already recognise.",
    strategy: "Build an African-centred visual language using mapped waste types, muted civic colour, direct messaging and modular information design.",
    outcome: "The final system resolves research, campaign hierarchy and visual identity into a set of print and digital touchpoints.",
    reflection: "The project demonstrates the portfolio philosophy most clearly: context led the medium, and research determined the visual system.",
    skills: ["Research", "Campaign strategy", "Information design", "Art direction", "Systems thinking"],
  },
  {
    slug: "ukuvuselela",
    title: "Ukuvuselela",
    discipline: "Poster Design · Motion · Awarded Work",
    year: "2026",
    image: ukuvuselelaFractalPoster03,
    imageAlt: "Yellow Ukuvuselela fractal poster design outcome",
    summary: "An awarded visual system using fractal structure, cultural renewal and poster rhythm.",
    problem: "The challenge was to create a contemporary communication piece that could carry cultural memory without becoming decorative.",
    research: "The process investigated pattern, repetition, renewal, African visual systems and the expressive potential of motion from a static poster base.",
    insight: "A fractal structure allowed the work to communicate regeneration through both image logic and composition.",
    strategy: "Use disciplined repetition, high-contrast form and restrained colour movement to connect cultural symbolism with contemporary poster language.",
    outcome: "The project became a resolved poster and motion system recognised by the Africa International Design Awards.",
    reflection: "The award evidence strengthens professional credibility, but the design value sits in how research becomes form.",
    skills: ["Poster design", "Motion design", "Cultural research", "Visual systems", "Professional presentation"],
  },
  {
    slug: "lucky-star",
    title: "Lucky Star Campaign",
    discipline: "Advertising · Illustration · 3D",
    year: "2024",
    image: luckyStar3dCampaign01,
    imageAlt: "Lucky Star campaign character-led 3D advertising application",
    summary: "A character-led advertising system extending a familiar South African product into illustration, packaging and 3D.",
    problem: "A familiar consumer product needed a more memorable campaign world without losing recognition or shelf-level clarity.",
    research: "The process explored product cues, character archetypes, flame motifs, shield symbolism, sketch iterations and model development.",
    insight: "The product could become a narrative character if its existing brand recognition was treated as a story asset.",
    strategy: "Develop a fish-superhero system with repeatable poses, product colours and campaign applications across flat and dimensional media.",
    outcome: "The final campaign demonstrates integrated art direction across illustration, 3D modelling, poster language and consumer touchpoints.",
    reflection: "The project shows iteration at scale: one core idea tested through drawing, object-making, rendering and campaign layout.",
    skills: ["Advertising", "Character design", "3D modelling", "Packaging thinking", "Campaign systems"],
  },
  {
    slug: "ghost-grid",
    title: "Ghost in the Grid",
    discipline: "Editorial Design · Research",
    year: "2022",
    image: ghostInGridMagazineLandingImg,
    imageAlt: "Ghost in the Grid eight-page premium in-house magazine overview",
    summary: "A publication-led investigation into grid ideology, typographic hierarchy and African visual systems.",
    problem: "The work needed to question the grid while still using the grid with discipline and clarity.",
    research: "The project connects modernist grid theory, editorial pacing, African pattern systems and critical design writing.",
    insight: "A grid is never neutral: it carries assumptions about order, hierarchy, authority and legibility.",
    strategy: "Use a disciplined publication system with moments of rupture, contrast and typographic interruption.",
    outcome: "The result is an editorial sequence where structure becomes both the subject and the method.",
    reflection: "This is key RPL evidence for design theory, research, writing, typography and independent learning.",
    skills: ["Editorial design", "Typography", "Critical writing", "Grid systems", "Independent research"],
  },
];

const METHOD_STEPS = [
  ["Problem", "Define the communication challenge before selecting a medium."],
  ["Research", "Investigate audience, context, material culture, visual references and constraints."],
  ["Insights", "Translate findings into a precise design opportunity."],
  ["Strategy", "Choose the visual system, touchpoints and hierarchy that the evidence supports."],
  ["Iterations", "Test composition, type, colour, image and production decisions."],
  ["Outcome", "Resolve the work into a clear, professional communication system."],
  ["Reflection", "Assess what changed, what worked, what failed and what the project proves."],
];

const RPL_EVIDENCE = [
  ["Critical thinking", "Design theory, reflection, cultural context and problem framing across case studies."],
  ["Independent learning", "Self-directed research in typography, UX/UI, motion, photography and African-centred visual systems."],
  ["Professional practice", "Client communication, project management, production delivery, presentation and stakeholder work."],
  ["Research methodology", "Mood boards, visual audits, audience/context studies, experimentation and documented rationale."],
  ["Systems thinking", "Identity, campaign, editorial and packaging systems developed from repeatable visual rules."],
  ["Iterative process", "Sketches, prototypes, grids, process photography, rejected routes and final refinements."],
];

function PublicPortfolio({ onOpenDossier }: { onOpenDossier: () => void }) {
  const currentYear = new Date().getFullYear();

  return (
    <main id="main-content" className="public-portfolio" tabIndex={-1}>
      <header className="public-nav" aria-label="Portfolio navigation">
        <a className="public-brand" href="#top" aria-label="Gray Mkhonto portfolio home">Gray Mkhonto</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#methodology">Methodology</a>
          <a href="#rpl">RPL Evidence</a>
          <a href="#contact">Contact</a>
          <button type="button" onClick={onOpenDossier}>RPL Dossier</button>
        </nav>
      </header>

      <section id="top" className="public-hero" aria-labelledby="portfolio-title">
        <div className="public-hero__copy">
          <p className="public-eyebrow">Communication Design · Research · Systems · South Africa</p>
          <h1 id="portfolio-title">Research-led communication design with an editorial eye.</h1>
          <p className="public-hero__statement">I investigate communication systems first and allow the appropriate visual system to emerge through research rather than selecting a medium first.</p>
          <div className="public-actions" aria-label="Primary portfolio actions">
            <a href="#work">View selected work <ChevronRight aria-hidden="true" size={16} /></a>
            <button type="button" onClick={onOpenDossier}>Open RPL dossier <BookOpen aria-hidden="true" size={16} /></button>
          </div>
        </div>
        <figure className="public-hero__image">
          <ImageWithFallback src={portraitImg} alt="Gray Mkhonto, communication designer" />
          <figcaption>Qinisile Gracious Mkhonto · Communication Designer</figcaption>
        </figure>
      </section>

      <section id="work" className="public-section" aria-labelledby="work-title">
        <div className="public-section__heading">
          <p className="public-kicker">Selected Work</p>
          <h2 id="work-title">Case studies structured by problem, research, strategy and reflection.</h2>
        </div>
        <div className="case-study-list">
          {PUBLIC_CASE_STUDIES.map((study, index) => (
            <article className="case-study-card" id={study.slug} key={study.slug}>
              <div className="case-study-card__media" data-project={study.slug}>
                <ImageWithFallback src={study.image} alt={study.imageAlt} />
              </div>
              <div className="case-study-card__content">
                <p className="public-kicker">{String(index + 1).padStart(2, "0")} · {study.year} · {study.discipline}</p>
                <h3>{study.title}</h3>
                <p className="case-study-card__summary">{study.summary}</p>
                <dl className="case-study-narrative">
                  <div><dt>Problem</dt><dd>{study.problem}</dd></div>
                  <div><dt>Research</dt><dd>{study.research}</dd></div>
                  <div><dt>Insights</dt><dd>{study.insight}</dd></div>
                  <div><dt>Strategy</dt><dd>{study.strategy}</dd></div>
                  <div><dt>Final Outcome</dt><dd>{study.outcome}</dd></div>
                  <div><dt>Reflection</dt><dd>{study.reflection}</dd></div>
                </dl>
                <ul className="skill-tags" aria-label={`${study.title} skills demonstrated`}>
                  {study.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="methodology" className="public-section public-method" aria-labelledby="method-title">
        <div>
          <p className="public-kicker">Methodology</p>
          <h2 id="method-title">A consistent narrative for every project.</h2>
          <p>The structure makes your philosophy assessable: research produces insight, insight produces strategy, and strategy determines the visual system.</p>
        </div>
        <ol className="method-list">
          {METHOD_STEPS.map(([title, text]) => (
            <li key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="rpl" className="public-section" aria-labelledby="rpl-title">
        <div className="public-section__heading">
          <p className="public-kicker">RPL Assessment Readiness</p>
          <h2 id="rpl-title">Evidence mapped to Bachelor of Design communication-design competencies.</h2>
        </div>
        <div className="evidence-grid">
          {RPL_EVIDENCE.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="public-contact" aria-labelledby="contact-title">
        <div>
          <p className="public-kicker">Contact</p>
          <h2 id="contact-title">Available for communication design, editorial systems, campaign identity and research-led visual strategy.</h2>
        </div>
        <div className="public-contact__links">
          <a href="https://www.linkedin.com/in/graciousgraymkhonto" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/graymkhonto1" target="_blank" rel="noreferrer">Behance</a>
          <button type="button" onClick={onOpenDossier}>Review RPL dossier</button>
        </div>
      </section>

      <footer className="public-footer">
        <span>Qinisile Gracious Mkhonto · Communication Design Portfolio</span>
        <span>{currentYear}</span>
      </footer>
    </main>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [publicMode, setPublicMode] = useState(() => IS_PUBLIC_VIEWER && new URLSearchParams(window.location.search).get("dossier") !== "true");
  const [current, setCurrent] = useState(0);
  const [scale, setScale]     = useState(1);
  const [visible, setVisible] = useState(true);
  const [printing, setPrinting] = useState(false);
  const [pdfPages, setPdfPages] = useState<PdfPage[]>(() =>
    Object.keys(editableKeynoteSlides)
      .map(Number)
      .sort((a, b) => a - b)
      .map(slideNumber => ({
        id: `keynote-${slideNumber}`,
        title: `Portfolio Slide ${slideNumber}`,
        section: keynoteSectionForPage(slideNumber),
        dataUrl: "",
        kind: "Keynote" as const,
      }))
  );
  const [pdfLoading, setPdfLoading] = useState(false);
  const [artworkLoaded, setArtworkLoaded] = useState(false);
  const [intelligenceOpen, setIntelligenceOpen] = useState(false);
  const [intelligencePrompt, setIntelligencePrompt] = useState("");
  const [intelligenceResponse, setIntelligenceResponse] = useState("");
  const [imageIntelligenceOpen, setImageIntelligenceOpen] = useState(false);
  const [imagePrompt, setImagePrompt] = useState("");
  const [keynoteMode, setKeynoteMode] = useState(false);
  const [flipbookMode, setFlipbookMode] = useState(false);
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [viewOnly] = useState(() => IS_PUBLIC_VIEWER || new URLSearchParams(window.location.search).get("view") === "share");
  const [keynoteEdits, setKeynoteEdits] = useState<KeynoteEdits>(() => {
    try {
      return JSON.parse(localStorage.getItem("qg-keynote-edits") || "{}") as KeynoteEdits;
    } catch {
      return {};
    }
  });
  const [autoLayoutOpen, setAutoLayoutOpen] = useState(false);
  const [autoLayoutSettings, setAutoLayoutSettings] = useState<AutoLayoutSettings>(() => {
    try {
      return { ...DEFAULT_AUTO_LAYOUT, ...JSON.parse(localStorage.getItem("qg-auto-layout") || "{}") };
    } catch {
      return DEFAULT_AUTO_LAYOUT;
    }
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const displayPages = buildDisplayPages(pdfPages);
  const totalPages = displayPages.length;

  useEffect(() => {
    const el = document.createElement("style"); el.textContent = PRINT_CSS;
    document.head.appendChild(el); return () => el.remove();
  }, []);

  useEffect(() => {
    const improveImages = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLImageElement>("img").forEach((image) => {
        if (!image.hasAttribute("loading")) image.loading = "lazy";
        if (!image.hasAttribute("decoding")) image.decoding = "async";
        if (!image.hasAttribute("alt")) {
          const caption = image.closest("figure")?.querySelector("figcaption")?.textContent?.trim();
          image.alt = caption || "Gray Mkhonto portfolio artwork";
        }
      });
    };
    improveImages();
    const observer = new MutationObserver((records) => records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) improveImages(node);
      });
    }));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (viewOnly) return;
    localStorage.setItem("qg-keynote-edits", JSON.stringify(keynoteEdits));
  }, [keynoteEdits, viewOnly]);

  useEffect(() => {
    if (viewOnly) return;
    localStorage.setItem("qg-auto-layout", JSON.stringify(autoLayoutSettings));
  }, [autoLayoutSettings, viewOnly]);

  // ── Auto-load all uploaded PDFs as artwork slides on mount ─────────────────
  useEffect(() => {
    if (publicMode || artworkLoaded) return;
    setArtworkLoaded(true);

    const renderPdf = async (url: string, baseTitle: string, section: string): Promise<PdfPage[]> => {
      try {
        const pdfjsLib = await getPdfRuntime();
        const pdf = await pdfjsLib.getDocument({ url: url as string }).promise;
        const pages: PdfPage[] = [];
        const isKeynote = baseTitle === "Complete Keynote Portfolio";
        const renderDensity = isKeynote ? 2.5 : 2.25;
        const jpegQuality = isKeynote ? 0.98 : 0.96;
        for (let i = 1; i <= pdf.numPages; i++) {
          const pg = await pdf.getPage(i);
          const bvp = pg.getViewport({ scale: 1 });
          const vp = pg.getViewport({ scale: (PW / bvp.width) * renderDensity });
          const canvas = document.createElement("canvas");
          canvas.width = vp.width; canvas.height = vp.height;
          await pg.render({ canvasContext: canvas.getContext("2d")!, viewport: vp }).promise;
          const title = pdf.numPages === 1 ? baseTitle : `${baseTitle} — p${i}`;
          pages.push({
            id: `upload-${baseTitle}-${i}`,
            title,
            section: isKeynote ? keynoteSectionForPage(i) : section,
            dataUrl: canvas.toDataURL("image/jpeg", jpegQuality),
            kind: isKeynote ? "Keynote" : "PDF",
          });
        }
        return pages;
      } catch (err) {
        console.warn(`Skipping "${baseTitle}" — ${(err as Error).message}`);
        return [];
      }
    };

    (async () => {
      const allPages: PdfPage[] = [];
      for (const { url, title, section } of UPLOADED_PDFS) {
        const pages = await renderPdf(url as string, title, section);
        allPages.push(...pages);
      }
      setPdfPages(prev => {
        // Prepend artwork before any manually imported PDFs
        const manual = prev.filter(p => !p.id.startsWith("upload-"));
        return [...allPages, ...manual];
      });
    })();
  }, [artworkLoaded, publicMode]);

  useEffect(() => {
    if (publicMode) return;
    const update = () => {
      if (!stageRef.current) return;
      const { width, height } = stageRef.current.getBoundingClientRect();
      const stageStyles = window.getComputedStyle(stageRef.current);
      const availableWidth = width - parseFloat(stageStyles.paddingLeft) - parseFloat(stageStyles.paddingRight);
      const availableHeight = height - parseFloat(stageStyles.paddingTop) - parseFloat(stageStyles.paddingBottom);
      const presentationWidth = flipbookMode ? PW * 2 + 24 : PW;
      setScale(Math.max(0.18, Math.min(availableWidth / presentationWidth, availableHeight / PH, 1)));
    };
    update();
    const ro = new ResizeObserver(update);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [flipbookMode, publicMode]);

  const goToIdx = (i: number) => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 140); };
  const go = (dir: number) => { const n = Math.max(0, Math.min(totalPages - 1, current + dir)); if (n !== current) goToIdx(n); };
  const goTo = (i: number) => { if (i !== current) goToIdx(i); };

  useEffect(() => {
    if (publicMode) return;
    const h = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.matches("input, textarea, select, [contenteditable='true']")) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(-1);
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(totalPages - 1);
    };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [current, publicMode, totalPages]);

  const handleAssetImport = async (file: File, section: string) => {
    if (viewOnly) {
      setUploadStatus("This published portfolio is view-only.");
      return;
    }
    const validationMessage = validateSafeUpload(file);
    if (validationMessage) {
      setUploadStatus(validationMessage);
      return;
    }
    setPdfLoading(true);
    setUploadStatus(`Scanning ${file.name} before import...`);
    try {
      const base = file.name.replace(/\.(pdf|png|jpe?g|webp)$/i, "");
      let pages: PdfPage[] = [];

      if (file.type === "application/pdf" || /\.pdf$/i.test(file.name)) {
        const buffer = await file.arrayBuffer();
        const pdfjsLib = await getPdfRuntime();
        const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const pg = await pdf.getPage(i);
          const bvp = pg.getViewport({ scale: 1 });
          const vp = pg.getViewport({ scale: (PW / bvp.width) * 2.25 });
          const canvas = document.createElement("canvas");
          canvas.width = vp.width; canvas.height = vp.height;
          await pg.render({ canvasContext: canvas.getContext("2d")!, viewport: vp }).promise;
          pages.push({ id: `pdf-${Date.now()}-${i}`, title: `${base} — p${i}`, section, dataUrl: canvas.toDataURL("image/jpeg", 0.96), kind: "PDF" });
        }
      } else if (file.type.startsWith("image/")) {
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
        pages = [{ id: `asset-${Date.now()}`, title: base, section, dataUrl, kind: "Image" }];
      } else {
        throw new Error("Unsupported asset type. Use PDF, PNG, JPG, or WebP.");
      }

      setPdfPages(prev => {
        const next = [...prev, ...pages];
        setTimeout(() => {
          const nextDisplayPages = buildDisplayPages(next);
          const firstImportedIndex = nextDisplayPages.findIndex(page => page.id === pages[0]?.id);
          goToIdx(firstImportedIndex >= 0 ? firstImportedIndex : nextDisplayPages.length - 1);
        }, 100);
        return next;
      });
      setUploadStatus(`Imported a safe rendered copy of ${file.name}. Original file was not modified.`);
    } catch (err) {
      const message = `Asset import skipped: ${(err as Error).message}`;
      setUploadStatus(message);
      console.warn("Asset import skipped:", (err as Error).message);
    }
    finally { setPdfLoading(false); }
  };

  const handleRemovePdf = (id: string) => {
    if (viewOnly) return;
    setPdfPages(prev => {
      const next = prev.filter(p => p.id !== id);
      const nextTotal = buildDisplayPages(next).length;
      if (current >= nextTotal) setCurrent(Math.max(0, nextTotal - 1));
      return next;
    });
  };

  const handleExportPDF = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      const restore = () => { setPrinting(false); window.removeEventListener("afterprint", restore); };
      window.addEventListener("afterprint", restore);
      setTimeout(() => setPrinting(false), 3000);
    }, 600);
  };

  const handleExportPPTX = async () => {
    if (viewOnly) return;
    const toPptxOverlays = (pageId: string) => (keynoteEdits[pageId] || []).map(box => ({
      text: box.text,
      x: (box.x / PW) * 13.333,
      y: (box.y / PH) * 7.5,
      w: (box.w / PW) * 13.333,
      h: (box.h / PH) * 7.5,
      fontSize: box.fontSize,
    }));

    const { exportEditablePptx } = await import("@/app/pptxExport");
    exportEditablePptx(
      [
        ...displayPages
          .filter(({ id }) => !id.startsWith("submission-placeholder-"))
          .map(({ id, title, section }) => ({ title, section, overlays: toPptxOverlays(id) })),
        ...SUBMISSION_PLACEHOLDERS
      ],
      []
    );
  };

  const activePage = displayPages[current] || displayPages[0];
  const label = activePage ? `${activePage.section} · ${activePage.title}` : "";
  const spreadPages = flipbookMode ? ([activePage, displayPages[current + 1]].filter(Boolean) as DisplayPage[]) : [];

  const handleShareLink = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("view", "share");
    try {
      await navigator.clipboard.writeText(url.toString());
      setShareStatus("View-only link copied");
    } catch {
      setShareStatus(url.toString());
    }
    window.setTimeout(() => setShareStatus(""), 2800);
  };

  const createLayoutSet = (mode: "book" | "brochure" | "behance") => {
    const labels = mode === "book"
      ? ["Book Cover", "Contents", "Featured Project Spread", "Reflection Page", "Back Cover"]
      : mode === "brochure"
        ? ["Brochure Front", "Inside Panels", "Project Highlights", "Contact Panel"]
        : ["Behance Hero", "Project Context", "Process Gallery", "Mockup Presentation", "Outcome & Credits"];
    const section = mode === "book" ? "Created Book" : mode === "brochure" ? "Created Brochure" : "Created Behance";
    const pages = labels.map((title, index) => createScaffoldArtwork(title, section, mode, index + 1));
    setPdfPages(prev => {
      const next = [...prev, ...pages];
      setTimeout(() => {
        const nextDisplayPages = buildDisplayPages(next);
        const firstCreatedIndex = nextDisplayPages.findIndex(page => page.id === pages[0]?.id);
        if (firstCreatedIndex >= 0) goToIdx(firstCreatedIndex);
      }, 100);
      return next;
    });
    setCreatorOpen(false);
  };

  const handleGenerateIntelligence = () => {
    if (!activePage) return;
    setIntelligenceResponse(intelligenceSuggestions(intelligencePrompt, activePage));
  };

  const addIntelligenceComment = () => {
    if (!activePage || !intelligenceResponse.trim()) return;
    const existing = keynoteEdits[activePage.id] || [];
    const offset = Math.min(existing.length * 18, 90);
    const nextBox: KeynoteBox = {
      id: `gpt-comment-${Date.now()}`,
      text: intelligenceResponse.trim(),
      x: 84 + offset,
      y: 96 + offset,
      w: 390,
      h: 132,
      fontSize: 13,
    };
    setKeynoteEdits(prev => ({
      ...prev,
      [activePage.id]: [...(prev[activePage.id] || []), nextBox],
    }));
    setKeynoteMode(true);
  };

  const generateLocalImage = () => {
    if (!activePage) return;
    const prompt = imagePrompt.trim() || `${activePage.title} ${activePage.section} portfolio image`;
    const seed = [...prompt].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const palette = [
      ["#1A1815", "#C49A45", "#EDEAE5"],
      ["#4A3B32", "#6B705C", "#FAFAFA"],
      ["#121212", "#E34234", "#F7F5F0"],
      ["#263238", "#C49A45", "#D4D0CA"],
    ][seed % 4];
    const words = prompt.split(/\s+/).filter(Boolean).slice(0, 7).join(" ");
    const shapes = Array.from({ length: 10 }, (_, i) => {
      const x = (seed * (i + 3) * 17) % 1123;
      const y = (seed * (i + 5) * 23) % 794;
      const size = 42 + ((seed + i * 19) % 118);
      const color = palette[i % palette.length];
      return `<rect x="${x}" y="${y}" width="${size * 1.6}" height="${size}" rx="0" fill="${color}" opacity="${0.12 + (i % 4) * 0.08}" transform="rotate(${(seed + i * 11) % 18 - 9} ${x} ${y})"/>`;
    }).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PW}" height="${PH}" viewBox="0 0 ${PW} ${PH}"><rect width="100%" height="100%" fill="${palette[2]}"/><rect x="72" y="70" width="4" height="560" fill="${palette[1]}"/><rect x="0" y="${PH - 150}" width="${PW}" height="150" fill="${palette[0]}"/><g>${shapes}</g><text x="118" y="126" fill="${palette[0]}" font-family="Playfair Display, Georgia, serif" font-size="52" font-weight="700">${activePage.title.replace(/&/g, "&amp;")}</text><text x="118" y="178" fill="${palette[1]}" font-family="Inter, Arial, sans-serif" font-size="20" letter-spacing="4">${activePage.section.toUpperCase().replace(/&/g, "&amp;")}</text><text x="118" y="${PH - 82}" fill="#FAFAFA" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700">${words.replace(/&/g, "&amp;")}</text><text x="118" y="${PH - 44}" fill="${palette[1]}" font-family="DM Mono, Courier New, monospace" font-size="15" letter-spacing="3">GENERATED PORTFOLIO PLACEHOLDER</text></svg>`;
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const nextPage: PdfPage = {
      id: `generated-image-${Date.now()}`,
      title: `Generated Image — ${activePage.title}`,
      section: activePage.section,
      dataUrl,
      kind: "Image",
    };
    setPdfPages(prev => {
      const next = [...prev, nextPage];
      setTimeout(() => {
        const nextDisplayPages = buildDisplayPages(next);
        const generatedIndex = nextDisplayPages.findIndex(page => page.id === nextPage.id);
        if (generatedIndex >= 0) goToIdx(generatedIndex);
      }, 100);
      return next;
    });
  };

  const upscaleCurrentAsset = async () => {
    if (!activePage?.pdfId) return;
    const target = pdfPages.find(page => page.id === activePage.pdfId);
    if (!target) return;
    const img = new Image();
    img.src = target.dataUrl;
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Could not load asset for upscale."));
    });
    const maxSide = 3200;
    const factor = Math.min(2, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * factor));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * factor));
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const upscaled: PdfPage = {
      ...target,
      id: `upscaled-${Date.now()}`,
      title: `${target.title} — Upscaled`,
      dataUrl: canvas.toDataURL("image/png"),
      kind: "Image",
    };
    setPdfPages(prev => [...prev, upscaled]);
    setTimeout(() => {
      const nextDisplayPages = buildDisplayPages([...pdfPages, upscaled]);
      const upscaledIndex = nextDisplayPages.findIndex(page => page.id === upscaled.id);
      if (upscaledIndex >= 0) goToIdx(upscaledIndex);
    }, 100);
  };

  const updateKeynoteBox = (pageId: string, boxId: string, patch: Partial<KeynoteBox>) => {
    setKeynoteEdits(prev => ({
      ...prev,
      [pageId]: (prev[pageId] || []).map(box => box.id === boxId ? { ...box, ...patch } : box),
    }));
  };

  const removeKeynoteBox = (pageId: string, boxId: string) => {
    setKeynoteEdits(prev => ({
      ...prev,
      [pageId]: (prev[pageId] || []).filter(box => box.id !== boxId),
    }));
  };

  const addKeynoteBox = () => {
    if (!activePage) return;
    const nextBox: KeynoteBox = {
      id: `keynote-${Date.now()}`,
      text: "Click to edit this note.",
      x: 92,
      y: 116,
      w: 280,
      h: 64,
      fontSize: 18,
    };
    setKeynoteEdits(prev => ({
      ...prev,
      [activePage.id]: [...(prev[activePage.id] || []), nextBox],
    }));
    setKeynoteMode(true);
  };

  const reapplyTemplate = () => {
    if (!activePage) return;
    const templateBoxes: KeynoteBox[] = [
      {
        id: `${activePage.id}-template-caption`,
        text: `${activePage.title}\nProject caption: describe the brief, medium, and final outcome.`,
        x: 72,
        y: 72,
        w: 360,
        h: 76,
        fontSize: 14,
      },
      {
        id: `${activePage.id}-template-evidence`,
        text: `Evidence value\nExplain which competency this page proves and how it connects to ${activePage.section}.`,
        x: 72,
        y: 164,
        w: 360,
        h: 92,
        fontSize: 12,
      },
      {
        id: `${activePage.id}-template-reflection`,
        text: "Reflection\nAdd what you learned, what design decisions mattered, and what you would refine next.",
        x: 72,
        y: 272,
        w: 360,
        h: 104,
        fontSize: 12,
      },
    ];
    const templateIds = new Set(templateBoxes.map(box => box.id));
    setKeynoteEdits(prev => {
      const customBoxes = (prev[activePage.id] || []).filter(box => !templateIds.has(box.id));
      return { ...prev, [activePage.id]: [...templateBoxes, ...customBoxes] };
    });
    setKeynoteMode(true);
  };

  const applyAutoLayout = () => {
    if (!activePage) return;
    const currentBoxes = keynoteEdits[activePage.id] || [];
    if (!currentBoxes.length) return;

    const { direction, align, gap, padding, frameWidth } = autoLayoutSettings;
    const sorted = [...currentBoxes].sort((a, b) => direction === "vertical" ? a.y - b.y || a.x - b.x : a.x - b.x || a.y - b.y);
    const startX = Math.max(0, Math.min(PW - frameWidth - padding, padding));
    const startY = padding;
    const frameInnerWidth = Math.max(80, frameWidth - padding * 2);
    let cursor = direction === "vertical" ? startY : startX;

    const arranged = sorted.map(box => {
      const next: KeynoteBox = { ...box };
      if (direction === "vertical") {
        const width = align === "stretch" ? frameInnerWidth : Math.min(box.w, frameInnerWidth);
        next.w = width;
        next.x = align === "center" ? startX + padding + (frameInnerWidth - width) / 2 :
          align === "end" ? startX + padding + frameInnerWidth - width :
          startX + padding;
        next.y = cursor;
        cursor += Math.max(box.h, 32) + gap;
      } else {
        next.x = cursor;
        next.y = align === "center" ? (PH - Math.max(box.h, 32)) / 2 :
          align === "end" ? PH - padding - Math.max(box.h, 32) :
          startY;
        if (align === "stretch") next.h = Math.max(box.h, PH - padding * 2);
        cursor += box.w + gap;
      }
      next.x = Math.max(0, Math.min(PW - next.w, next.x));
      next.y = Math.max(0, Math.min(PH - Math.max(next.h, 32), next.y));
      return next;
    });

    setKeynoteEdits(prev => ({ ...prev, [activePage.id]: arranged }));
  };

  const renderPageWithKeynote = (page: DisplayPage, editable: boolean) => (
    <div className="portfolio-page-shell" data-page-id={page.id} data-page-section={page.section} style={{ width: PW, height: PH, position: "relative", overflow: "hidden" }}>
      {page.render()}
      <KeynoteEditLayer
        pageId={page.id}
        boxes={keynoteEdits[page.id] || []}
        editMode={editable}
        onUpdate={updateKeynoteBox}
        onRemove={removeKeynoteBox}
      />
    </div>
  );

  if (publicMode) {
    return <PublicPortfolio onOpenDossier={() => setPublicMode(false)} />;
  }

  return (
    <>
      <div id="rpl-print-container">
        {printing && <>
          {displayPages.map(p => (<div key={p.id} style={{ width: PW, height: PH, overflow: "hidden", pageBreakAfter: "always", breakAfter: "page" }}>{renderPageWithKeynote(p, false)}</div>))}
        </>}
      </div>

      <main id="main-content" tabIndex={-1} style={{ display: "flex", height: "100vh", width: "100vw", background: "#D4D0CA", overflow: "hidden" }}>
        <Sidebar current={current} onSelect={goTo} total={totalPages} displayPages={displayPages} onAssetImport={handleAssetImport} pdfLoading={pdfLoading} onRemovePdf={handleRemovePdf} currentSection={activePage?.section || "Part 03 — Portfolio"} viewOnly={viewOnly} uploadStatus={uploadStatus} />
        <div ref={containerRef} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ minHeight: 42, background: c.bg, borderBottom: `0.5px solid ${c.rule}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "7px 18px", flexShrink: 0 }}>
            <span title={viewOnly ? `VIEW ONLY · ${label}` : label} style={{ flex: "1 1 auto", minWidth: 120, maxWidth: "min(44vw, 560px)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: c.mid }}>{viewOnly ? `VIEW ONLY · ${label}` : label}</span>
            <div style={{ flex: "0 1 auto", minWidth: 0, display: "flex", gap: 5, alignItems: "center", justifyContent: "flex-end", overflowX: "auto", overflowY: "hidden", paddingBottom: 1 }}>
              {IS_PUBLIC_VIEWER && (
                <button onClick={() => setPublicMode(true)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.dark, border: "none", cursor: "pointer", color: c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                  Portfolio
                </button>
              )}
              {!viewOnly && (
                <>
                  <button onClick={() => setKeynoteMode(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: keynoteMode ? c.ochre : c.brown, border: "none", cursor: "pointer", color: c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <Pencil size={9} />Keynote
                  </button>
                  {keynoteMode && (
                    <>
                      <button onClick={addKeynoteBox} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.white, border: `0.5px solid ${c.rule}`, cursor: "pointer", color: c.ink, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                        <Plus size={9} />Text
                      </button>
                      <button onClick={reapplyTemplate} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.white, border: `0.5px solid ${c.rule}`, cursor: "pointer", color: c.ink, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                        Template
                      </button>
                      <button onClick={() => setAutoLayoutOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: autoLayoutOpen ? c.dark : c.white, border: `0.5px solid ${autoLayoutOpen ? c.dark : c.rule}`, cursor: "pointer", color: autoLayoutOpen ? c.white : c.ink, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                        Auto Layout
                      </button>
                    </>
                  )}
                  <button onClick={() => setCreatorOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: creatorOpen ? c.ochre : c.white, border: `0.5px solid ${creatorOpen ? c.ochre : c.rule}`, cursor: "pointer", color: creatorOpen ? c.white : c.ink, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <LayoutTemplate size={9} />Create
                  </button>
                </>
              )}
              <button onClick={() => setFlipbookMode(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: flipbookMode ? c.ochre : c.white, border: `0.5px solid ${flipbookMode ? c.ochre : c.rule}`, cursor: "pointer", color: flipbookMode ? c.white : c.ink, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                <BookOpen size={9} />Flipbook
              </button>
              <a href="https://www.linkedin.com/in/graciousgraymkhonto" target="_blank" rel="noreferrer" aria-label="Open Gracious Gray Mkhonto's LinkedIn profile" style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", boxSizing: "border-box", background: c.white, border: `0.5px solid ${c.rule}`, color: c.ink, textDecoration: "none", fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, flexShrink: 0 }}>
                <Linkedin size={9} />LinkedIn
              </a>
              <a href="https://www.behance.net/graymkhonto1" target="_blank" rel="noreferrer" aria-label="Open Gracious Gray Mkhonto's Behance profile" style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", boxSizing: "border-box", background: c.white, border: `0.5px solid ${c.rule}`, color: c.ink, textDecoration: "none", fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, flexShrink: 0 }}>
                Bē Behance
              </a>
              {!viewOnly && (
                <>
                  <button onClick={() => setIntelligenceOpen(true)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.dark, border: "none", cursor: "pointer", color: c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <Sparkles size={9} />GPT
                  </button>
                  <button onClick={() => setImageIntelligenceOpen(true)} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.olive, border: "none", cursor: "pointer", color: c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <Sparkles size={9} />Image AI
                  </button>
                  <button onClick={handleShareLink} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.white, border: `0.5px solid ${c.rule}`, cursor: "pointer", color: c.ink, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <Eye size={9} />{shareStatus || "Share"}
                  </button>
                  <button onClick={handleExportPDF} disabled={printing} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: printing ? c.grey : c.brown, border: "none", cursor: printing ? "default" : "pointer", color: printing ? c.mid : c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <Download size={9} />{printing ? "Preparing…" : "Export PDF"}
                  </button>
                  <button onClick={handleExportPPTX} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", background: c.ochre, border: "none", cursor: "pointer", color: c.white, fontFamily: Fb, fontSize: 7.5, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                    <FileText size={9} />Export PPTX
                  </button>
                </>
              )}
              <button aria-label="Previous slide" onClick={() => go(-1)} disabled={current === 0} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: `0.5px solid ${current === 0 ? c.rule : c.mid}`, cursor: current === 0 ? "default" : "pointer", color: current === 0 ? c.rule : c.mid }}>
                <ChevronLeft size={11} />
              </button>
              <span style={{ fontFamily: Fm, fontSize: 8, color: c.mid, minWidth: 44, textAlign: "center" }}>{current + 1}/{totalPages}</span>
              <button aria-label="Next slide" onClick={() => go(1)} disabled={current === totalPages - 1} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: `0.5px solid ${current === totalPages - 1 ? c.rule : c.mid}`, cursor: current === totalPages - 1 ? "default" : "pointer", color: current === totalPages - 1 ? c.rule : c.mid }}>
                <ChevronRight size={11} />
              </button>
            </div>
          </div>
          {intelligenceOpen && activePage && (
            <IntelligencePanel
              page={activePage}
              prompt={intelligencePrompt}
              response={intelligenceResponse}
              onPromptChange={setIntelligencePrompt}
              onGenerate={handleGenerateIntelligence}
              onAddComment={addIntelligenceComment}
              onClose={() => setIntelligenceOpen(false)}
            />
          )}
          {imageIntelligenceOpen && activePage && (
            <CreativeImagePanel
              page={activePage}
              prompt={imagePrompt}
              isImported={Boolean(activePage.pdfId)}
              onPromptChange={setImagePrompt}
              onGenerateImage={generateLocalImage}
              onUpscale={upscaleCurrentAsset}
              onClose={() => setImageIntelligenceOpen(false)}
            />
          )}
          {!viewOnly && creatorOpen && (
            <CreatorPanel
              onCreate={createLayoutSet}
              onClose={() => setCreatorOpen(false)}
            />
          )}
          {!viewOnly && keynoteMode && autoLayoutOpen && activePage && (
            <AutoLayoutPanel
              settings={autoLayoutSettings}
              boxCount={(keynoteEdits[activePage.id] || []).length}
              onChange={patch => setAutoLayoutSettings(prev => ({ ...prev, ...patch }))}
              onApply={applyAutoLayout}
            />
          )}
          <section ref={stageRef} className="portfolio-stage" aria-label={activePage ? `Current slide: ${activePage.title}` : "Portfolio slide"} style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 28, overflow: "hidden" }}>
            {flipbookMode ? (
              <div style={{ position: "relative", width: (PW * 2 + 24) * scale, height: PH * scale, flexShrink: 0 }}>
                <div className="portfolio-page-spread" data-page-scale={scale} style={{ width: PW * 2 + 24, height: PH, transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0, opacity: visible ? 1 : 0, transition: "opacity 0.14s ease", display: "flex", gap: 24 }}>
                  {spreadPages.map(page => (
                    <div key={page.id} style={{ width: PW, height: PH, boxShadow: "0 2px 32px rgba(26,24,21,0.22)", background: c.bg, flexShrink: 0 }}>
                      {renderPageWithKeynote(page, false)}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ position: "relative", width: PW * scale, height: PH * scale, flexShrink: 0 }}>
                <div className="portfolio-page-presentation" data-page-scale={scale} style={{ width: PW, height: PH, transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0, opacity: visible ? 1 : 0, transition: "opacity 0.14s ease", boxShadow: "0 2px 32px rgba(26,24,21,0.22)" }}>
                  {activePage ? renderPageWithKeynote(activePage, keynoteMode && !viewOnly) : null}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
