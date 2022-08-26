/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.png",
    "revision": "e0baab9f6abec6cc8d13e0bc2a23e39d"
  },
  {
    "url": "10.png",
    "revision": "1da310aba8d212ce7bcfaa30b267e964"
  },
  {
    "url": "11.png",
    "revision": "5c0a1cc3be1800c9e20a755d1d773a2a"
  },
  {
    "url": "2.png",
    "revision": "d34172c8b8bf503aa8483d0ae6649e0c"
  },
  {
    "url": "404.html",
    "revision": "85c14a6583e9e273850cc379429abcf3"
  },
  {
    "url": "5.png",
    "revision": "61c3f9b55db88450eb29b008ff327431"
  },
  {
    "url": "6.png",
    "revision": "942362dc321339199748ffcda91d25c1"
  },
  {
    "url": "7.png",
    "revision": "1662ce4bce72525b024609339a919ba8"
  },
  {
    "url": "8.png",
    "revision": "15af02129dac5f37d27fd9e2f4b980f9"
  },
  {
    "url": "9 .png",
    "revision": "a21f86aff07f17faf588c18ac7087915"
  },
  {
    "url": "assets/css/0.styles.f0b2e11c.css",
    "revision": "05491d6b70b0ca1551c62f1d7cbd0aba"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/background.4c27653a.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.42fdcd80.js",
    "revision": "b2b7f240c2e0d754aedd5a5deb8cdc27"
  },
  {
    "url": "assets/js/10.19a119e0.js",
    "revision": "146d801f4f6e8cea01ce975ca0aae9e9"
  },
  {
    "url": "assets/js/11.a82cd05d.js",
    "revision": "4b395a83b32d7862686db9fd21a11d33"
  },
  {
    "url": "assets/js/12.3dcbe7b9.js",
    "revision": "f1a3b876d219163fd5adc5826bc3eaa2"
  },
  {
    "url": "assets/js/13.e9470778.js",
    "revision": "c977d90a46e54efcf75fdfc6e297fc39"
  },
  {
    "url": "assets/js/14.d2f5c45f.js",
    "revision": "bd3a2d3a917318d8b99d696b329c27e0"
  },
  {
    "url": "assets/js/15.c51096e6.js",
    "revision": "aa75b23665f008d5df1a85cc54a5ada0"
  },
  {
    "url": "assets/js/16.b64ef3ae.js",
    "revision": "794dcf5fd6bac877ecaba83581815d23"
  },
  {
    "url": "assets/js/17.87c9ea6f.js",
    "revision": "dddb7be94a3e9e954589b7b42a4b3b3a"
  },
  {
    "url": "assets/js/18.8743bc1e.js",
    "revision": "44fa5c359d78293eaeed2a445d0dde64"
  },
  {
    "url": "assets/js/19.d55182d0.js",
    "revision": "ad935bd69b322a08427aa54f83b8950d"
  },
  {
    "url": "assets/js/20.f2aeefac.js",
    "revision": "2e07e4063ffc926639cb58cd0622e9c3"
  },
  {
    "url": "assets/js/21.0079c525.js",
    "revision": "a904af02dd972d14ab7f65024061dc58"
  },
  {
    "url": "assets/js/22.ce3c2a79.js",
    "revision": "2f8b5ae9ecf02a1496d3afd26db6ac80"
  },
  {
    "url": "assets/js/23.e5379373.js",
    "revision": "9db76032bb3b2861f47b7e8fa43643c8"
  },
  {
    "url": "assets/js/24.e99ba3ac.js",
    "revision": "f5883a445b8e558c055b91689ab810e2"
  },
  {
    "url": "assets/js/25.c2c0c719.js",
    "revision": "74e46959e722e2e4d17b6ada35d7ffca"
  },
  {
    "url": "assets/js/26.e6bf56d8.js",
    "revision": "cf9fe5c6c677439ec6545eeba9fe7551"
  },
  {
    "url": "assets/js/27.f9fa86c1.js",
    "revision": "39a9bc561a024d6709217a1496c6818e"
  },
  {
    "url": "assets/js/28.ea01d32b.js",
    "revision": "70e595d56683eaefcd341cb6def34c73"
  },
  {
    "url": "assets/js/29.9d758af8.js",
    "revision": "f30965bcbc33ee978c17b41a1ce9a95a"
  },
  {
    "url": "assets/js/30.b0e54023.js",
    "revision": "f1f64e3fa8ab04cc4e0143aaed5466fa"
  },
  {
    "url": "assets/js/31.48c1a65c.js",
    "revision": "48557ba9b395ba1833fadd38083850ca"
  },
  {
    "url": "assets/js/32.f6d1e052.js",
    "revision": "1ad73ceb8404bddeaa402c0c71def45a"
  },
  {
    "url": "assets/js/33.a0298ac7.js",
    "revision": "6c5a52c91c6397e52d66c70142f3247f"
  },
  {
    "url": "assets/js/34.1aa666bf.js",
    "revision": "566bfdf742690dbaa2e366e9c9f944fe"
  },
  {
    "url": "assets/js/35.8d47b666.js",
    "revision": "37d78e687cb3208e4d6c56d604110717"
  },
  {
    "url": "assets/js/36.afa04c1f.js",
    "revision": "10a42c64e9c0eb832b51e0990cdfede5"
  },
  {
    "url": "assets/js/37.3b0e1d80.js",
    "revision": "d55bbb811fefbffa3eaa00a86cc6f80d"
  },
  {
    "url": "assets/js/38.99551a38.js",
    "revision": "5cfeeef4b519eb8f40dbebdcff3066c1"
  },
  {
    "url": "assets/js/39.f40bae08.js",
    "revision": "498a2a486d3f10111179decf839d5dcc"
  },
  {
    "url": "assets/js/4.fa80183b.js",
    "revision": "b552b938b5e1c0e327aec43b9d9b1877"
  },
  {
    "url": "assets/js/40.3022c8a0.js",
    "revision": "5a0c6a9156942b98ca29e71f67f95107"
  },
  {
    "url": "assets/js/41.a5712a4d.js",
    "revision": "e3f11eb7a4784449d1a4fdf0f3f8cde6"
  },
  {
    "url": "assets/js/42.009c9e66.js",
    "revision": "16d2678dab9bb48c0288ffc0f3e53faf"
  },
  {
    "url": "assets/js/43.3d7ccc69.js",
    "revision": "24f387b9506eed516e45ae06de29593a"
  },
  {
    "url": "assets/js/44.4873a8ea.js",
    "revision": "ea41e5345f4b5d80809008980a4468fe"
  },
  {
    "url": "assets/js/45.9a417db4.js",
    "revision": "31a52e39b7abae38d72f05a26a12e965"
  },
  {
    "url": "assets/js/46.3235d91e.js",
    "revision": "cf6fceb2ffce6e4712783eea75600b1f"
  },
  {
    "url": "assets/js/47.ddd7c9bb.js",
    "revision": "63ae9a18e744e000d40978f72a1a3517"
  },
  {
    "url": "assets/js/48.7f0182d3.js",
    "revision": "e46b1d031f93d248be1d94cae8d7f382"
  },
  {
    "url": "assets/js/49.621f4924.js",
    "revision": "808023632686549104eeaef8f5c67175"
  },
  {
    "url": "assets/js/5.99e3a66e.js",
    "revision": "5a0ad4a4b68a1c9a80d98099a2fc12b3"
  },
  {
    "url": "assets/js/50.28649ca1.js",
    "revision": "619dc379b7ef8f49b73ac87624d15729"
  },
  {
    "url": "assets/js/51.9eeba4fb.js",
    "revision": "239aad0684a0e65e7f6858aebe6bbf7b"
  },
  {
    "url": "assets/js/52.d46f73fb.js",
    "revision": "3f9448ef9239f17dea92a85f5d8c8ed1"
  },
  {
    "url": "assets/js/53.96d3b459.js",
    "revision": "29beb626f5748a64c41970aa25eaeafa"
  },
  {
    "url": "assets/js/54.cd9def88.js",
    "revision": "badbc941a557c7e039099454a75b40a1"
  },
  {
    "url": "assets/js/55.6c74bb36.js",
    "revision": "75ed72408c08106bb0930594ca47a04e"
  },
  {
    "url": "assets/js/56.74b47e74.js",
    "revision": "690d41e47937dcc3b16d905d0904594b"
  },
  {
    "url": "assets/js/57.8b4ba316.js",
    "revision": "278275a1ba144870a16d4082d2ea323e"
  },
  {
    "url": "assets/js/58.fc612d1e.js",
    "revision": "5886498261e4fbfd48cf6ce593b3152a"
  },
  {
    "url": "assets/js/59.27bfa17c.js",
    "revision": "600ff0cdccf80797b146c83146c87da8"
  },
  {
    "url": "assets/js/6.fb454b4b.js",
    "revision": "1fbd589ba622df95aea820af89d7a5b5"
  },
  {
    "url": "assets/js/60.2527e843.js",
    "revision": "04711ab6bd04d2f70abdd5206750c2c9"
  },
  {
    "url": "assets/js/61.cefce2b3.js",
    "revision": "524b66ea63853227d3995e46b8a82121"
  },
  {
    "url": "assets/js/62.15a1f8dc.js",
    "revision": "505abb2a4b1b09494f3faac0ecf3864b"
  },
  {
    "url": "assets/js/63.c15cd64b.js",
    "revision": "a4a32d3c5ee9b85fa27a147dece05666"
  },
  {
    "url": "assets/js/64.25adcc04.js",
    "revision": "c12958227e38f0ee801d03e11dbc581b"
  },
  {
    "url": "assets/js/65.663c1a0a.js",
    "revision": "263d6e87a26496a405dab51d293dc1f5"
  },
  {
    "url": "assets/js/66.fa65c8c2.js",
    "revision": "ff526c1741ef060265c23a0758bd39a4"
  },
  {
    "url": "assets/js/7.940bda82.js",
    "revision": "0172377e4d55b3e196f2ff331064625e"
  },
  {
    "url": "assets/js/8.af1684b4.js",
    "revision": "ec9e01ded866e4474fb858ef0510e455"
  },
  {
    "url": "assets/js/9.7cee2d00.js",
    "revision": "6fef9a833c8f3aecadb05d8768f29d86"
  },
  {
    "url": "assets/js/app.0fba1593.js",
    "revision": "14967815a2bd8b5aa2847adb29cea258"
  },
  {
    "url": "assets/js/vendors~flowchart.f381ee63.js",
    "revision": "8798cab438462e2f067578d6d6f93937"
  },
  {
    "url": "background.gif",
    "revision": "4c27653a95ba9b9adf147fd9290fadd7"
  },
  {
    "url": "blog/Javaweb/javaweb.html",
    "revision": "453abfc9207a3112367591ee268e0b3a"
  },
  {
    "url": "blog/数据结构与算法/数据结构.html",
    "revision": "c670ff1a1f0364ac2e856be237f968ae"
  },
  {
    "url": "blog/设计模式/设计模式.html",
    "revision": "9860bd12f0c45b67c34d8d53a6d6af7b"
  },
  {
    "url": "categories/index.html",
    "revision": "719f24e396b8a24fd1046e6775bf8744"
  },
  {
    "url": "categories/javaweb/index.html",
    "revision": "6c75f811c671322e5d1a915465405310"
  },
  {
    "url": "categories/基础笔记/index.html",
    "revision": "78ebf1420a8ccf791e7a1ba07e19145c"
  },
  {
    "url": "categories/基础笔记/page/2/index.html",
    "revision": "c8e3f7a8e63e82374178bcdb173fa1d1"
  },
  {
    "url": "categories/数据结构/index.html",
    "revision": "6a69daa02837ce7e6bd18cbb138888c4"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "d58413280a153a3afd92cd1f63270dc5"
  },
  {
    "url": "docs/IO流/01.html",
    "revision": "20a9809068c674be819b0c743973e621"
  },
  {
    "url": "docs/IO流/index.html",
    "revision": "e03f50423406278c6660c0ad3e0bc76d"
  },
  {
    "url": "docs/Java基础/01.html",
    "revision": "6702fa5c6b1c13120cff316e707494ae"
  },
  {
    "url": "docs/Java基础/02.html",
    "revision": "008785831118a8f773f48641774ff826"
  },
  {
    "url": "docs/Java基础/03.html",
    "revision": "774ef01171710569d0ae249e52f4f5f0"
  },
  {
    "url": "docs/Java基础/04.html",
    "revision": "bab93fc1ee8fd57d4f64b14cd2e90a46"
  },
  {
    "url": "docs/Java基础/05.html",
    "revision": "b45672169c79e55c99e0e64d4179df1d"
  },
  {
    "url": "docs/Java基础/index.html",
    "revision": "e8e33fe112a044119859a79d83080924"
  },
  {
    "url": "docs/JDBC和数据库连接池/01.html",
    "revision": "30bd82154e761c2140536b221d9220a3"
  },
  {
    "url": "docs/JDBC和数据库连接池/index.html",
    "revision": "93107cc0419202d99594bfd113c0ce69"
  },
  {
    "url": "docs/MySQL/01.html",
    "revision": "97080502fd2c91da5769ad586041acfb"
  },
  {
    "url": "docs/MySQL/index.html",
    "revision": "60d1e8bc333db388f41abda118303750"
  },
  {
    "url": "docs/反射/01.html",
    "revision": "9fbf72afa5d0f672c4b63b03342393e9"
  },
  {
    "url": "docs/反射/index.html",
    "revision": "545cc1787c4810abb10b58585e111866"
  },
  {
    "url": "docs/坦克大战1.0/01.html",
    "revision": "0b048c3b06f70fc05f6c422daff462a7"
  },
  {
    "url": "docs/坦克大战1.0/index.html",
    "revision": "278d87c521bf66796dac5b954bac0c39"
  },
  {
    "url": "docs/坦克大战2.0/01.html",
    "revision": "1de00364444193e70ddb89ae488b5f6c"
  },
  {
    "url": "docs/坦克大战2.0/index.html",
    "revision": "1c8111245ddbf671fa6e5091c15ac7a3"
  },
  {
    "url": "docs/坦克大战3.0/01.html",
    "revision": "cac570f4c871271563c8f926d3a97422"
  },
  {
    "url": "docs/坦克大战3.0/index.html",
    "revision": "ebab7b4e92007f9eb3167b8885173578"
  },
  {
    "url": "docs/多用户通信系统/01.html",
    "revision": "a3dac10bfe3bf304a021b27e6e4866a4"
  },
  {
    "url": "docs/多用户通信系统/index.html",
    "revision": "5e39d928ef061988086218a2c1144d48"
  },
  {
    "url": "docs/常用类/01.html",
    "revision": "1cd2dadb238d2c2312e779de242c6d84"
  },
  {
    "url": "docs/常用类/index.html",
    "revision": "e1444ba7f201ddaae383119f6a5fac28"
  },
  {
    "url": "docs/异常-Exception/01.html",
    "revision": "9087df2f26bccc3b75cf7cb9a8134e4d"
  },
  {
    "url": "docs/异常-Exception/index.html",
    "revision": "67ce5df8bec728e581874734c505a997"
  },
  {
    "url": "docs/枚举和注解/01.html",
    "revision": "280f5f6da5ffd63f49ba5d49eacf43e7"
  },
  {
    "url": "docs/枚举和注解/index.html",
    "revision": "2be2c0b28ff8e7ab74a1a14a8c69a2a2"
  },
  {
    "url": "docs/正则表达式/01.html",
    "revision": "fe9aae34aa722454017ae34c381ca33a"
  },
  {
    "url": "docs/正则表达式/index.html",
    "revision": "3df68d291fd50714a7f90486026808af"
  },
  {
    "url": "docs/泛型/01.html",
    "revision": "91ed9a19fe27f083a2edcb73a00bfe43"
  },
  {
    "url": "docs/泛型/index.html",
    "revision": "decbd87fbd216461eff41c10501f5ea3"
  },
  {
    "url": "docs/满汉楼/01.html",
    "revision": "c28cb6e05a9d785e61d8e4a1e12e3881"
  },
  {
    "url": "docs/满汉楼/index.html",
    "revision": "7d51700783f6a6792ccb9a738522d3a9"
  },
  {
    "url": "docs/线程/1.html",
    "revision": "1d4459b01cc07f0504f168cd9dca37f8"
  },
  {
    "url": "docs/线程/2.html",
    "revision": "f8986034a954702a20ed986ca71fb989"
  },
  {
    "url": "docs/线程/index.html",
    "revision": "8543b7bc8a986caa5b259a239d433bf9"
  },
  {
    "url": "docs/网络编程/01.html",
    "revision": "53ac19ba51f023040f479fdb1fad703b"
  },
  {
    "url": "docs/网络编程/index.html",
    "revision": "ab255ab2436a5b3a3e591b4e6d5e1281"
  },
  {
    "url": "docs/集合/01.html",
    "revision": "d332aa3ff5d1f5e45a168a9cb98741c3"
  },
  {
    "url": "docs/集合/index.html",
    "revision": "dc8deb31e052dfe7c8f32232b1fb2382"
  },
  {
    "url": "docs/面向对象编程基础/01.html",
    "revision": "b9409bdfcc26db886db307a07698a49b"
  },
  {
    "url": "docs/面向对象编程基础/02.html",
    "revision": "8a06528152139167d32ce82b4832799e"
  },
  {
    "url": "docs/面向对象编程基础/03.html",
    "revision": "0f99b4eba1974350d28f43210085a1a1"
  },
  {
    "url": "docs/面向对象编程基础/04.html",
    "revision": "b450b3b487ae5eb97e098a73a11e158d"
  },
  {
    "url": "docs/面向对象编程基础/index.html",
    "revision": "c6f8f86cb219b769d806ddb7b37e6748"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "57d149405cea284ea85cf23770c74be0"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "2cea42595de39d0241983b373a4da99b"
  },
  {
    "url": "live2d_models/chitose/assets/moc/chitose.2048/texture_00.png",
    "revision": "792d7ce14129275aa940798f3fcad987"
  },
  {
    "url": "live2d_models/epsilon2_1/assets/moc/Epsilon2.1.2048/texture_00.png",
    "revision": "abee4cdeb8018032163ffdc0a16020b0"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_00.png",
    "revision": "636278314f542d55077de8f0ad411cb8"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_01.png",
    "revision": "12e07b8f6448dd55f38460ff43971a06"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_02.png",
    "revision": "42adca6365574e3d39baf00364427a3a"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_03.png",
    "revision": "3d567322e41164927b8b537ef158e5b0"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_04.png",
    "revision": "421faf5d4e2a5e5e6efc73a2f121b65b"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_05.png",
    "revision": "3f0da7f456691c8ca86d8085887f0df7"
  },
  {
    "url": "live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_06.png",
    "revision": "575df42ce5be86765eba21f5a44864e1"
  },
  {
    "url": "live2d_models/haru/01/assets/moc/haru01.1024/texture_00.png",
    "revision": "4685fe8c12b19e64bf29cb81c0f01af1"
  },
  {
    "url": "live2d_models/haru/01/assets/moc/haru01.1024/texture_01.png",
    "revision": "49c7928d79f4bf012a203d0c4d6fa0b9"
  },
  {
    "url": "live2d_models/haru/01/assets/moc/haru01.1024/texture_02.png",
    "revision": "aeaefa34e3a53d542fde03907813db7d"
  },
  {
    "url": "live2d_models/haru/02/assets/moc/haru02.1024/texture_00.png",
    "revision": "4685fe8c12b19e64bf29cb81c0f01af1"
  },
  {
    "url": "live2d_models/haru/02/assets/moc/haru02.1024/texture_01.png",
    "revision": "49c7928d79f4bf012a203d0c4d6fa0b9"
  },
  {
    "url": "live2d_models/haru/02/assets/moc/haru02.1024/texture_02.png",
    "revision": "80241fbfdd9010bf4bb19e031f0ccb2e"
  },
  {
    "url": "live2d_models/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "56ff69b411abfc80cb68d0b1267959c5"
  },
  {
    "url": "live2d_models/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "live2d_models/hijiki/assets/moc/hijiki.2048/texture_00.png",
    "revision": "817ca52e35fef3ef3a452127d1c88f43"
  },
  {
    "url": "live2d_models/izumi/assets/moc/izumi_illust.1024/texture_00.png",
    "revision": "a6af8249dc4e2913450035ea3fc72851"
  },
  {
    "url": "live2d_models/izumi/assets/moc/izumi_illust.1024/texture_01.png",
    "revision": "37f1c233cc5ad4bf0434c6f96d7f2ab3"
  },
  {
    "url": "live2d_models/izumi/assets/moc/izumi_illust.1024/texture_02.png",
    "revision": "ac9b0f0ed28504c93fd9651c3eacbcbc"
  },
  {
    "url": "live2d_models/izumi/assets/moc/izumi_illust.1024/texture_03.png",
    "revision": "19183e4b8dbebdb3365461f3b91dde6f"
  },
  {
    "url": "live2d_models/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "live2d_models/miku/assets/moc/miku.2048/texture_00.png",
    "revision": "f69191e3aa1aa64d66bef43d38bb45e8"
  },
  {
    "url": "live2d_models/ni-j/assets/moc/ni-j.2048/texture_00.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d_models/ni-j/assets/moc/ni-j.2048/texture_01.png",
    "revision": "1754d11829dfe75cf86405d5a98ca537"
  },
  {
    "url": "live2d_models/nico/assets/moc/nico.2048/texture_00.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d_models/nico/assets/moc/nico.2048/texture_01.png",
    "revision": "720a22559bb19baa113d3f8ec700ac74"
  },
  {
    "url": "live2d_models/nico/assets/moc/nico.2048/texture_02.png",
    "revision": "873344a63dbc0bc515d086ffb4403c27"
  },
  {
    "url": "live2d_models/nietzsche/assets/moc/nietzsche.2048/texture_00.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d_models/nietzsche/assets/moc/nietzsche.2048/texture_01.png",
    "revision": "6624477ba499bedd2e3f8d651ba9a5f9"
  },
  {
    "url": "live2d_models/nietzsche/assets/moc/nietzsche.2048/texture_02.png",
    "revision": "ad8d8105dab424eab4cda0404163c736"
  },
  {
    "url": "live2d_models/nipsilon/assets/moc/nipsilon.2048/texture_00.png",
    "revision": "89816949aed4dc3734d894598844c34d"
  },
  {
    "url": "live2d_models/nipsilon/assets/moc/nipsilon.2048/texture_01.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d_models/nipsilon/assets/moc/nipsilon.2048/texture_02.png",
    "revision": "cc219978974dc916c80f5bf13ede8204"
  },
  {
    "url": "live2d_models/nito/assets/moc/nito.2048/texture_00.png",
    "revision": "89816949aed4dc3734d894598844c34d"
  },
  {
    "url": "live2d_models/nito/assets/moc/nito.2048/texture_01.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d_models/shizuku/assets/moc/shizuku.1024/texture_00.png",
    "revision": "ca0698ca5a3bf2400e5cf8a1f456a61c"
  },
  {
    "url": "live2d_models/shizuku/assets/moc/shizuku.1024/texture_01.png",
    "revision": "c960c28ee3f0353023d9498d2362d23c"
  },
  {
    "url": "live2d_models/shizuku/assets/moc/shizuku.1024/texture_02.png",
    "revision": "efb0515bcaee933f8c38e750d2c4bd3b"
  },
  {
    "url": "live2d_models/shizuku/assets/moc/shizuku.1024/texture_03.png",
    "revision": "f735487e72e73a0ea528975041548a14"
  },
  {
    "url": "live2d_models/shizuku/assets/moc/shizuku.1024/texture_04.png",
    "revision": "5b282aa9f7d4fa68cc24c946c0556b87"
  },
  {
    "url": "live2d_models/shizuku/assets/moc/shizuku.1024/texture_05.png",
    "revision": "16f7b74f1e61bf2b21d91ea5c3ee71de"
  },
  {
    "url": "live2d_models/tororo/assets/moc/tororo.2048/texture_00.png",
    "revision": "9bd791736cfc91b62670dee5f7fbd45c"
  },
  {
    "url": "live2d_models/tsumiki/assets/moc/tsumiki.2048/texture_00.png",
    "revision": "4dc9823d5f8eea307d8fa112f0eb7dff"
  },
  {
    "url": "live2d_models/tsumiki/assets/moc/tsumiki.2048/texture_01.png",
    "revision": "d40508d025d2f2c699bb22affdf1b136"
  },
  {
    "url": "live2d_models/unitychan/assets/moc/unitychan.2048/texture_00.png",
    "revision": "d2016f474e091b863d35dac6f12bd801"
  },
  {
    "url": "live2d_models/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "live2d_models/z16/assets/moc/z16.1024/texture_00.png",
    "revision": "0a1969e9c0d0f1509604bb2b19de0783"
  },
  {
    "url": "live2d_models/z16/assets/moc/z16.256/texture_00.png",
    "revision": "b925d20a4fdfe8a65b09199a1224e581"
  },
  {
    "url": "live2d_models/z16/assets/moc/z16.512/texture_00.png",
    "revision": "96f5efb6dd9e3c69de8424b142214452"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "log1.png",
    "revision": "50a3df175c246519aa3baa6ddd20fb3a"
  },
  {
    "url": "logo.png",
    "revision": "0a0576f4736318a4b843baea4eeec54d"
  },
  {
    "url": "logo2.png",
    "revision": "481d22afa669fba08c8558ea1883f4d4"
  },
  {
    "url": "message/index.html",
    "revision": "f6a794872a359e0b234cf97daed59742"
  },
  {
    "url": "tag/index.html",
    "revision": "bc2ee9fbf43c998455182d8efd679e84"
  },
  {
    "url": "tag/javaweb/index.html",
    "revision": "a71187919b9163371864fa0da12e137a"
  },
  {
    "url": "tag/基础笔记/index.html",
    "revision": "76acba8fc9fc335f3d3fd4e105645608"
  },
  {
    "url": "tag/基础笔记/page/2/index.html",
    "revision": "e5de053eb67c643bca6c2a7acc1d3fee"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "088407da3b50404edac662c4426fba18"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "91d141fa3743f119dff453e83991be6c"
  },
  {
    "url": "test.png",
    "revision": "f36e11e2eea8527e119eb957c2d2a421"
  },
  {
    "url": "timeline/index.html",
    "revision": "abd94e1c4de92ceaaac0f97c99434735"
  },
  {
    "url": "图片1.png",
    "revision": "54115e06b798d9fdab98463c3945f11f"
  },
  {
    "url": "图片2.png",
    "revision": "1d7a55b5bd683dc4803c167cc8a0f6c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
