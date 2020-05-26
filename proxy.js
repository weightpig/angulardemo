// // web api代理,可通过环境变量api_url修改默认值
// const target = process.env.api_url || 'http://dev.bbs.deepin.org';
// module.exports = {
//   '/api': {
//     target: target,
//     secure: false,
//     ws: true,
//     changeOrigin:true,
//   },
// };