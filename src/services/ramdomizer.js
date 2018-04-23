export function getRandomColor() {
  const hexBase = '0123456789ABCDEF';  
  const hexColor = [...Array(6)]
    .map(() => hexBase[Math.floor(Math.random() * hexBase.length)])
    .join('');
  return `#${hexColor}`;
}

export function fontColorFor(hexBgColor) {
  return hexBgColor.replace('#','0x') > (0xffffff/2) 
    ? '#333'
    : '#fff'
}