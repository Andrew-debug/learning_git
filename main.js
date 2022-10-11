const data = [3, 2, 1];

function sorted(arr) {
  const tmp = [...arr];
  tmp.sort();
  console.log(tmp, arr);
  return tmp;
}

console.log(sorted(data));
