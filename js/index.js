// // 1 misol
// function Birnima(arr) {
//   return [...new Set(arr)];
// }
// let arr = [6, 7, 8, 9, 10, 8, 7];
// let noyobqiymat = Birnima(arr);
// console.log(noyobqiymat);

// 3 misol
// function Birnima(arr) {
//   if (new Set(arr).size === 1) {
//     return arr[0];
//   } else {
//     return [...new Set(arr)];
//   }
// }
// console.log(Birnima([1, 1, 1]));
// console.log(Birnima([1, 13, 6, 0, 7]));

// 4 misol
// function Birnima(arr1, arr2) {
//   let set1 = new Set(arr1);
//   let set2 = new Set(arr2);
//   let Son1 = new Set([...set1, ...set2]);
//   return Array.from(Son1);
// }
// console.log(Birnima([1, 2, 3], [12, 7, 4, 9]));

// 5 misol
// function Birnima(str) {
//   let soz = str.split(" ");
//   let map = new Map();
//   soz.forEach((word) => {
//     if (!map.has(word)) {
//       map.set(word, 1);
//     } else {
//       map.set(word, map.get(word) + 1);
//     }
//   });

//   return map;
// }
// console.log(Birnima("Hello world"));

// // 6 misol
// function Dublniochirish(arr) {
//   return [...new Set(arr)];
// }
// console.log(Dublniochirish([1, 44, 2, 1, 5, 2, 7]));

// 10 misol
// function Birlashma(map1, map2) {
//   let birlashtirish = new Map([...map1, ...map2]);
//   return birlashtirish;
// }
// let map1 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// let map2 = new Map([
//   ["b", 2],
//   ["c", 3],
// ]);
// console.log(Birlashma(map1, map2));

// 8 misol
// function Birnima(str1, str2) {
//   let set1 = new Set(str1);
//   let set2 = new Set(str2);
//   let birlashma = new Set([...set1].filter((char) => set2.has(char)));
//   return [...birlashma].join("");
// }
// let soz1 = "Uzbekistan";
// let soz2 = "Uzbek";
// console.log(Birnima(soz1, soz2));
