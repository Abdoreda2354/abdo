
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/abdo',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/abdo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4941, hash: 'b77162b10fca0d63394f3b8010ee80048420fdf509da8b744090235c87338baf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '0bf993691e6935ac8e01992929d9927d245576b1b4031f0e88abe24c0863b64f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23511, hash: '08bb19da82b278349aab82ea93acc6fdbc29fe32c1e0f654dab076e4d89241b4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
