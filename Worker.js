export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "104.21.12.34";  // ← US IP (Cloudflare NY)
    url.port = "443";
    const modifiedRequest = new Request(url.toString(), request);
    return fetch(modifiedRequest);
  }
};
