function getCharValue(char: number) {
  switch (true) {
    case char >= 65 && char <= 90: // from A to Z
      return (char - 64) * 2
    case char >= 97 && char <= 122: // from a to z
      return char - 96
    case char >= 48 && char <= 57: // from 0 to 9
      return char - 48

    default:
      return 0
  }
}

function lettersToNumbers(s: string) {
  return Array.from(s).reduce((acc, curr) => {
    return acc + getCharValue(curr.charCodeAt(0))
  }, 0)
}

const res = 'I Love You'
console.log(lettersToNumbers(res))
