// Client-side helper to lazily load the mammoth browser build from a CDN
// We use a remote ESM script to avoid Next.js bundler issues with the UMD file.
// The script adds a global `mammoth` object. We cache the promise so we only load once.

let cached: Promise<any> | null = null;

export function loadMammoth(): Promise<any> {
  if (typeof window === 'undefined') {
    throw new Error('mammoth can only be loaded in the browser');
  }
  if (cached) return cached;
  cached = new Promise(async (resolve, reject) => {
    try {
      if ((window as any).mammoth) {
        resolve((window as any).mammoth);
        return;
      }
      // @ts-ignore
      await import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/mammoth@1.9.1/mammoth.browser.min.js');
      if ((window as any).mammoth) {
        resolve((window as any).mammoth);
      } else {
        reject(new Error('Failed to load mammoth'));
      }
    } catch (err) {
      reject(err);
    }
  });
  return cached;
}
