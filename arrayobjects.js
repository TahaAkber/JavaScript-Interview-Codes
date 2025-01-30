let array = [
  { key: 2, name: "Taha2" },
  { key: 3, name: "Taha3" },
  { key: 5, name: "Taha5" },
  { key: 6, name: "Taha6" },
  { key: 7, name: "Taha7" },
  { key: 8, name: "Taha8" },
  { key: 9, name: "Taha9" },
  { key: 10, name: "Taha10" },
  { key: 1, name: "Taha1" },
];

console.log(array.sort((a, b) => a.key - b.key));
