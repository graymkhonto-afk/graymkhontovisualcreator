let runtimePromise: Promise<typeof import("pdfjs-dist")> | undefined;

export function getPdfRuntime() {
  runtimePromise ??= Promise.all([
    import("pdfjs-dist"),
    import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
  ]).then(([pdfjs, worker]) => {
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
    return pdfjs;
  });

  return runtimePromise;
}
