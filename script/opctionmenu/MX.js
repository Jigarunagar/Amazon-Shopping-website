
//////////
let currentSlide = 0;
const wrapper = document.getElementById("carouselWrapper");
const totalSlides = wrapper.children.length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const offset = -currentSlide * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
}
setInterval(() => moveSlide(1), 3000);

//////// Data array
const continueWatchingData = [
  {
    title: "Girlfiend",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/3f2015773f9da2215fcd98b491bb3389f46042ea4dede2a7950f59a0ad26f9dc.__SX495__SY279__QL60__._TTW_.png",
  },
  {
    title: "crimes aaj kal",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f190176d200da9f627a43a170f4f8c9a9ffd8fb9dd98b645ffdea03ffd3928a7.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "jamapaar",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/7f80d52741de8c288db96b5d3c9006c3e852a507b5c8050e333528f41f435209.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "sisterhood",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/e3149bbb29ceccfa3efa54c470f21614178537eabed99bfe0b49db3fdcfad668.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "miss lucky go!",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/854918c54199eacc290b8744f0f738997c7a393f52f569e6cfa901d486cb9f7c.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "namacool",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/cd7f439e5a2ce1dcddf2322e9a032668b7649741ae6c075b8f998c9d3bf3bed1.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "campus and beats",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/6ea25eaf530d214c6a717c52ac23e54eb20e7840417ffb37510bcd483eb44cca.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "amber girls school",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/73fa2a0d8f99ee449b9c91652c11495d98c086115c137fb0cf2aef973cdfe01c.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "school friends season one",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ee5a31fb2cbcf41159c41d6d93af2164a1ae524230e2563136a146e0732390bb.__SX495__SY279__QL60__._TTW_.jpg",
  },
];

const TrendingTopeten = [
  {
    title: "playground",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/39660298480c44c966a896724e490bd216c112ca32be5835c7cc22d951c8a422.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "our secret",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/eea40c4b11a95a3dcf5f7f5b275e1d121fe88b2980c417e14bd57ade61c954b5.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "dreams and realities",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b3f15167c9eeb17fbd0cedca5b54d59667b52205dd0f3b81807753f8a0861151.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "time to fall in love",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/88c781269f296e0204f6addcd1a06835c27ffaf2a48c0aa2a669566f4c572f78.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "loveme like i do",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b91963eb0728e25dab1cf1ae6ce91188e8a6c88804c6dfcc2b14ae0bb031f3f8.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "my lethal man",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/67853aee4d9a637ad80e80eaaabbfcda2a2b97f94a8b1472c99c842e4d31f50c.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "hi venus",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b70c06899bed9075b4df1b502782232b1bf2342732449e420f76571aced798f5.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "warm meet you",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/201d3e7c303f83b657af1ffa650b13c1ff8f208ce7cf053caed377fb14fbdf14.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "gen z",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/2a50fb427d728b7c593c5c3199c2122a63321fe469a09f72f7dab2633e3badcf.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "my deskmate",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/4a21d3bc6af9961272c7c453094fa86ff6cf6eca34182541fdb93ced8ac36274.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "miss lucky go!",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/854918c54199eacc290b8744f0f738997c7a393f52f569e6cfa901d486cb9f7c.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "don t be sky",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/c439e8b99cfa1d236bc0dc6316117f7ab5be98328f0156526b457170032a492d.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "when we meet",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/9327d270f9b0fdc3113cd3ac8b632aba69fd9e082efa1822a6926d7740a77ad1.__SX495__SY279__QL60__._TTW_.jpg",
  },
  {
    title: "i belonged to you world",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/139ab68d522f05c1156beb971f8d8216179f754f63db1e5626f23b2a276f66f2.__SX495__SY279__QL60__._TTW_.png",
  }
];
const PopularWebSeries = [
  {
    title: "Heartbeats pyaar aur armaan",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/63eafac1297d2f0b17082076825178675c04f54ac68f0bd3e49fc9ab447ff346.__SX306__SY172.5__QL60__._TTW_.png",
  },
  {
    title: "laakhon mein ek",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/a37de2878e0e6955b4edbbe0e83271562b3961b050af359364a1c424dabff2b9.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "gutar gu",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/1676b7f59e815c5b28209b10f6987b894ebd25960da0e384c9887d0904f61cfa.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "yeh meri family",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f1fc67605e6f7c938fb02067b273745a16e68f28e63737bc9f9dce400dd10abb.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "jamnapaar",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/7f80d52741de8c288db96b5d3c9006c3e852a507b5c8050e333528f41f435209.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "namacool",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/cd7f439e5a2ce1dcddf2322e9a032668b7649741ae6c075b8f998c9d3bf3bed1.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "campus and beats",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/6ea25eaf530d214c6a717c52ac23e54eb20e7840417ffb37510bcd483eb44cca.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "naam namak nishan",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/cd1f8230da0c64aec030831d5607ff3e4ebc045b6cd016ed210ba99203d987ce.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "amber girls school",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/73fa2a0d8f99ee449b9c91652c11495d98c086115c137fb0cf2aef973cdfe01c.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "sisterhood",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/e3149bbb29ceccfa3efa54c470f21614178537eabed99bfe0b49db3fdcfad668.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "rakshak indias braves",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/274f5ca1e83c8dad3e5dd389e0a43ba0484e42ad6710f839bcc83ef4d6d9a717.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "who's your gynac?",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/374608c6fa2032181ad1713ec3a74d35c8e8959975013d59c2e1905f7d0eb90d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "half ca",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/dc43ab2db5261d6ecfca452115896a465a624e7d2a40c4c8181a321b3de8819a.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "crushed",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b9ac5b6b77c174351162a3cc01c776289e7aafebb064f19ee7285dc83c223ff4.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "dil logical",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ea5cbde969dfbbb92b0ac905326ad08c664f197511f355d26252834bf090a80d.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];
const NewinDubbedSeries = [
  {
    title: "live-on",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/cabc55f5fd884f80594f69baa3758f898b77718c2973608b18b4d91b7ee0def6.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "youth",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b1a199b33830de222daaa4ac2970e6df91241303dbb194740e87e9ba759d6adf.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "sweet steawberries",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/6be4ac41d3752066cd59d7ce43f3972490efb0f9ba80bb9b8a16ff4b4aa86f2f.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "the time we were not in love",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/32191480dbdf9f41a45d3b4e95c70bc750d4fa449e91c62e9434645161429970.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "hear me",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/89a96d89604de0ae8f11cd8a9d09d1c9d6894ad3ed82d0a893dfc9ebd21b14be.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "pretty ugly",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/6ba2343cac9efe84c30b7c290e0ee46ace637b4cf41a0f06d0999a718c995a2a.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "my sassy girl",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/d8bc0bbcb62920053cf3f2a386516194822d30ee8b624cf83df13050cf24e8b1.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "wok of love",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ee2db76259dadd9363afe310776dfea0c23fe3dd319a1237af2b706edcf166b7.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "dreaming of you",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/dd5dd376f6a6857bd5a432eaa420efb0cd0f3ab1a81cba6801176262c64ea287.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "3 6 5 repeat the year",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/a3a99e13526d563dd6e72b00868ac542b2ffb8bbe982ec9433950b44bf49b30e.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "into the world again",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f19b2be1f3867bea610f78a4b48329918590445cec04b39042beb5640478e7f5.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "twoworlos apar",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/30c33771bf13315dd796aef2d8df2cbfed18f7875b98b8b58b43e5a4d8a0b484.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "happy ending",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/4993289f9aa3d7fef04ef135df89cb16f75a1e12b174f1cf8a2f10a0488ec95b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "my secret terrius",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/70c11cd29837824b0aa001d997c54456012c1f0d5a4e03340e664cca82e8b5e0.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "leap day",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/660cbfd5b16fe8bb54b746fcfe9f4e93ae83914e86f75302a8e5bcb9d4aaf163.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];
const HorrorThrillerandMystery = [
  {
    title: "hack crimes online",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/c83b74e1fa1edb3b882e27efa6d4636d55f110cdc63e11a573321c82fccc556d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "thank you doctor",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/8e9aaecddc0deab9f8f031a1556f63094bc9076c1d4e3aa9eb185c4b55b5fa18.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "tujpe main fida",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/d20ed6fc7edf9cc9b826c322daf818cf892e227d195bcd95eaa24c95d4a6bf75.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "missing 9",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/149d600b4a45898171c0f5ca22f583466fccc4536da93f5dc592f8fa11b0f1b5.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "dude2",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/da45684e5faa29fe1e82d703f3fc17f617f179566c6ae53a5f07c25ab2900702.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "hunter tootega mari.tooega",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ee51064253b634d7d60d766d7672159e37ab81d51597f5ee2be4dd6e30999c99.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "crimes aaj kal",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/df84ba7356f079494c9939f8de18a9b9672eebea86102c99d8afac69c33367b6.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "crimes aaj kal season 3",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f190176d200da9f627a43a170f4f8c9a9ffd8fb9dd98b645ffdea03ffd3928a7.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "tujhpe main fida season 2",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/a8833bceafa0e8a2d768b8a8ebdb7cc4448a122f4455420ea603fff7962b9f1c.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "doctor detective",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/3a8e2ddedc5845afddcc73bbb17a3d5fb277d7901b58bd23721364ebd502dbdb.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "house of the disappeared",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/3ff50f9cb622d3ea470878bd2646371281ef2631394feb2ea20dd8862b9c2593.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "badi heroine banti hai",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/66c1775a10bedd22bdc2508f0473f5386a72e3949b89f653246600085e7b4440.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "crimes aaj kal season 1",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/9614b34303ee59f2a0ed3915ec883372c4a3f335ee8eb17f3a9d021f3b4c31c7.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "heart surgeons",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/4eb6133c396c2eaefeb92ccc2d19053755c008054507f181fb1e448e66be3d79.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "the haunting ",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/469e4c0a1f21514d3979b21aa22bc6f794e4726ba6b13bf5044de7b5c328db9b.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];
const ChartToppingMoviesDubbedinHindi = [
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/47bf62ef4e1c30471a72c2134b9bc1827dd3373a88142db996d777a7fa39a902.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/e473abd3685cfcac41b4a688a111b7b246bc9685868500212b73cc344ada783c.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/cb63b2bf1e1e4df8aeb7912fb5029a8a8e82a36e0c28f512199975f7a62ae112.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b8bd1ef2a4b113253ea8bf289c4fea0625ad1522c1a49abfdac804928f98f484.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/40421ec9481a276b2551f624a5c757c65181de03a64aee46e6193677d76d32fd.__SX306__SY172.5__QL60__._TTW_.png",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/23e7b45fb65600aa5569c126341e11c6ae7b32eb5d04a1c1b4f5b9b655583d16.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/05df91ebfb398cea41408b1976c275e718b7c90801ef601ef9b64c79a7ea24bf.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ba856aec824022f51b6b730683582bc206cda9d6bec774b9349707a4cdcc2e78.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/fb23a26c8e7821fc6d134a89d0ff9f689d7badd5958a9820f48c10c8bcac16f7.__SX306__SY172.5__QL60__._TTW_.png",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/02951074c675c4206da7ee5c8bfe3952ffcbbfb18709767a2a8a7e881efc4ee1.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/6ed293338a37efa5ecd1231ac3165a8e7f9dc391132c1d02ffcb09e723eca14c.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b50c37a36da882e1af613fd4e343459ff7a2f646a28301563684930d6ae43f5d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ce047c7a94a340e01f18acd061d8c2944ba7a70af253b79b8b2f0fb292105d7a.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/8f8a08b57cf082df634841d77da6f30afcfec435e2e53850029f69d84b64b28d.__SX306__SY172.5__QL60__._TTW_.png",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/2bad9d3a522a5baa38834a2dcbfe94fb65e134e829c4fd28b343b05a2bd5e6fe.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];
const RomanticShowsandMovies = [
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/1676b7f59e815c5b28209b10f6987b894ebd25960da0e384c9887d0904f61cfa.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ee5a31fb2cbcf41159c41d6d93af2164a1ae524230e2563136a146e0732390bb.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/51e036da87058beeae8b72c0d9e0bec78a53cd73a45f79ab83d290fb410829fc.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/89a4d32d5dbaa0403ae4e3f3b72269571720483243320904fde5cf6b18e02e7f.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/cbc33afa995e97760c6705ba2be997b5757035b0c63d9ef1f2c565074110ce25.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/d20ed6fc7edf9cc9b826c322daf818cf892e227d195bcd95eaa24c95d4a6bf75.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/566cbad58abbeac5d6717cf3eb22705cfeaebfe057228362de4fb2675ca7e75b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/0214b9f3d98f9f28af8d6494b2b5e7b6e89a1d7e6fc32817905f845cfd40141b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/35910f4172dc2f406503c38b280820c9b69dfd2331b7b395bc4fe7dba7733fc7.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/a310e30171793b7f1c5c6d6279ef72232fcdc582ac5ad219d00ba7d4a418b963.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/fc4e8d54a3f300b509483120bfdcc582f8c83b294833dab17f7904a8e3f6ffd4.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/6ea25eaf530d214c6a717c52ac23e54eb20e7840417ffb37510bcd483eb44cca.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/174c1b78f7c3e6f60301ad46ea08a10454dd97a2b3a8221be436d6069c88a67a.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/8ae785401021db161b987b8e24d5dd33f5f32d2cc08390fabd94529a066ce630.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/974366fb5decd4611c57942e9cd45f005085aa279b7ff5a6989115db4e07ec7b.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];
const TrendinginDubbedSeries = [
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/e0d51ae811a1ad9af8fe44a85b03e7a7ecd04e02239362f915ec7d0e9f363d7e.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/201d3e7c303f83b657af1ffa650b13c1ff8f208ce7cf053caed377fb14fbdf14.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/2a50fb427d728b7c593c5c3199c2122a63321fe469a09f72f7dab2633e3badcf.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/88c781269f296e0204f6addcd1a06835c27ffaf2a48c0aa2a669566f4c572f78.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b91963eb0728e25dab1cf1ae6ce91188e8a6c88804c6dfcc2b14ae0bb031f3f8.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/eea40c4b11a95a3dcf5f7f5b275e1d121fe88b2980c417e14bd57ade61c954b5.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/67853aee4d9a637ad80e80eaaabbfcda2a2b97f94a8b1472c99c842e4d31f50c.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/c3605d3e8d677664d7afcab692e9de5780627fc3af87615837c0724c0f8e8aef.__SX306__SY172.5__QL60__._TTW_.png",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/7e812f577c90e65d347414d525ba1b47bb85eb4d9164812910c73064b2652412.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f19b2be1f3867bea610f78a4b48329918590445cec04b39042beb5640478e7f5.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/c439e8b99cfa1d236bc0dc6316117f7ab5be98328f0156526b457170032a492d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b70c06899bed9075b4df1b502782232b1bf2342732449e420f76571aced798f5.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/139ab68d522f05c1156beb971f8d8216179f754f63db1e5626f23b2a276f66f2.__SX306__SY172.5__QL60__._TTW_.png",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/42439fa7640251f812818884efb396c85401c22c15c601d3e1e56b9785852119.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/30c33771bf13315dd796aef2d8df2cbfed18f7875b98b8b58b43e5a4d8a0b484.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];
const NewinDubbedInternationalMovies = [
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f6874e214db2c00f944beb30442154a3a5e2cfbf8fc4f0f8cd3900619da62431.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/68ec24ebd473ae35e3868a53b5c5c54da4950d431235daf98195531002b536d9.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/212a81333712b7f9b13a97c4d579b872ed6da5895b8c20e87e68729fc7fec14b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/8b599958e23bf087269dd139496fc0fc49271a8e934f317e49bb3efadc3d33f7.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/3ade165b51e5d362032a5f0c27a4815fe563b406add8c0d3167453542bc42353.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/68c4ca60671651d49104622b7edefc496d634b23dba6bafb56d7a90c3417d945.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/045b276ca7fb332ccbb62650642ee70b01cdd8dd5e55695c9f68ab7fe70a9dd6.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f1605fa48d5fbccd906240f83f9ae1ac069b04e89d78764812649c0989164ea7.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/ba28297da08e86a9edc9c27878e53817f947a5e045377f3aa45b11df57584a8b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/836a90593a3a223a9572b146235644c8f0812741220854f8c84c9c0f9e8afda3.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/a4b123c7c7d9a07b6bc82135e277b475ac821697a96429b56a93446e3596ac68.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/d4dc3c9cb24bb626c4b7e9e81be38045a0bd523ea18879e25fdff16d45e2945d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/310643a734fd91f1f8561ddbda9e561c88998b4205a4bd4b7ae9f962ae4ef49a.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/d2de53b07ed9696256a72c448294d0eb6369b68d9f134e2958c6d7fa666cf397.__SX306__SY172.5__QL60__._TTW_.jpg",
  },

  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/1053ea3032f140f3091d8ec212b060cfd02bec33bddfd8ae434aa1d70cc93d0b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/8f40719c388dcce57927373923c1ad55c900a2b79f8f728af91dfe8b594f260d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f9e024cc534257f6e10fa44bae39b8548deab7101481cacea377ae58da8c8f93.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
];
const TVFOriginalshows = [
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f1fc67605e6f7c938fb02067b273745a16e68f28e63737bc9f9dce400dd10abb.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/dc43ab2db5261d6ecfca452115896a465a624e7d2a40c4c8181a321b3de8819a.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/4524df59b8e408fc35106fce1ddbc496fad69e47ac2f5110d4d61508c753c29e.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/e3149bbb29ceccfa3efa54c470f21614178537eabed99bfe0b49db3fdcfad668.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/a43fbf364b135b80e93c8f0cdf6e70dfdf7c3f23cda2b64e2ef933ad6bbf1ec8.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/e448b2d467279412530b08c4a31b4b59e1ba346c97450b12688db229e61046b3.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/1c553578a1f19f8fc16d75cbd1645e3bd0e88c1469b78cdfb3f3416704a2953e.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/79ce2d80dfcff47a6312a17a2a2ceb095688cfe2487da0aee19de9e58f95f8ee.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/974366fb5decd4611c57942e9cd45f005085aa279b7ff5a6989115db4e07ec7b.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/c0106d6e9dee7dde448c820bbf482d59cb261db4f156fe6077f8d57482e172c4.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
];
const DubbedMoviesandShowsinTamil = [
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/05a1b29f66aafe442dea9030933f2620f97c94dbc0bafe6e49baa11237ef7ed0.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/588dcc10ad0d368d48d85c68bde4f551c5065395811353827c81551bf4800693.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/866e43c13d5ca154f2ce99e148e744c057b9deeb61457b6ad1ff11d09afe8e87.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/f1593f51bcc99d3f64eb0ab1450616c537ca81e8fbf09edb2445054cd845313d.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/2e50fb97efba26b5f7028c750fa8d5f5c39262e9d208303ef9e66da986a842f1.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/aa2a90c4a8f90f7cbd9a93f73e5970e173e075b6d3b233e9eb616a72fee012cd.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/2a0ef5c31e986922be5ef839ed134f8b25956e7e95dd0dcacda4a6bb087b4411.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/c47e73a8ee169333a56fd3ed8ae2a133afa190e55075a6e8f92f26ce71e0f2f4.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/da62395722bf287e2d615d1a2c69d4bc7a40c0bf44c8163326bc1c5ac066bfbe.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/9ed52ac51f9eb4739edc341e0f93faeb54df0518fffd0699e6b003d27b638e23.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/d42e3246d7b3145f194f3ba635de770448e3e354b087364ca0c3969b827ee6d8.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/8d915b4ebb0b9f176aea7fb69042e89b33484c1f0eede02bd04578e7322ef609.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/b141246facd681199acf48adb05caa9e479023b45067b50e66df4e13544af7f9.__SX306__SY172.5__QL60__._TTW_.jpg",
  },
  {
    title: "",
    imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/0b50d442502cbc2e1469371ee37b966c51e0ee3f7ec4e95a973c28049f19f4ff.__SX306__SY172.5__QL60__._TTW_.jpg",
  }
];

function renderSliderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "slider-card";
    card.innerHTML = `<img src="${item.imgUrl}" alt="${item.title}">`;
    container.appendChild(card);
  });
}

function scrollSlider(containerId, value) {
  const container = document.getElementById(containerId);
  container.scrollBy({
    left: value,
    behavior: "smooth",
  });
}

renderSliderCards(continueWatchingData, "slider1");
renderSliderCards(TrendingTopeten, "slider2");
renderSliderCards(PopularWebSeries, "slider3");
renderSliderCards(NewinDubbedSeries, "slider4");
renderSliderCards(HorrorThrillerandMystery, "slider5");
renderSliderCards(ChartToppingMoviesDubbedinHindi, "slider6");
renderSliderCards(RomanticShowsandMovies, "slider7");
renderSliderCards(TrendinginDubbedSeries, "slider8");
renderSliderCards(NewinDubbedInternationalMovies, "slider9");
renderSliderCards(TVFOriginalshows, "slider10");
renderSliderCards(DubbedMoviesandShowsinTamil, "slider11");
