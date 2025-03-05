
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
    'index.csr.html': {size: 4941, hash: '8aea7a0054796b43c895cd8f7e2187752e604a931d9a975a3a62d76ffd824f37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'a92324af373227c2b0a4196799f67e88613a2c495f3cb66e1b887378c79e2301', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11984, hash: 'd88840b74b588f1a3b660f7b4842238e5c314417dce7afe57ebfdcee9e63676f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
