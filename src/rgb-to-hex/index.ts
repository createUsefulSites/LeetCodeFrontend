const mapper: { [keyof in number]: string } = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
}

function mapHexValue(value: number): string {
  if (value >= 10) {
    return mapper[value]
  }
  return value.toString()
}

function helper(decimalNumber: number): string {
  if (decimalNumber <= 0) {
    return '00'
  }
  if (decimalNumber >= 255) {
    return 'FF'
  }

  console.log(decimalNumber)

  let result: string = ''
  while (decimalNumber > 0) {
    result = mapHexValue(decimalNumber % 16) + result
    decimalNumber = Math.floor(decimalNumber / 16)
  }

  return result.length > 1 ? result : `0${result}`
}

function rgb(r: number, g: number, b: number) {
  return helper(r) + helper(g) + helper(b)
}

console.log(rgb(0, 0, 0))
