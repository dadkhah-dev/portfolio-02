export function chunkArray(arr: object[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export function uniqueArray(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
