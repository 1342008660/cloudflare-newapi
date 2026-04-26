export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 设置要反代的域名
    if (url.pathname.startsWith('/')) {
      url.hostname = "your-target-domain.com"; // 替换为实际目标域名
      const newRequest = new Request(url, request);
      return fetch(newRequest);
    }
    
    // 其他请求返回静态资源
    return env.ASSETS.fetch(request);
  }
};
