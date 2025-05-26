function returnUpperLetter(word: string, idx: number): string {
  return word
    .split('')
    .map((char, index) => (index === idx ? char.toUpperCase() : char))
    .join('')
}

function wave(str: string): string[] {
  let currUpperIdx: number = 0
  const res: string[] = []
  Array.from(str).forEach((char, idx) => {
    if (char == ' ') {
      currUpperIdx++
      return
    }

    res.push(returnUpperLetter(str, idx))
  })

  return res
}

console.log(wave(' hello '))
console.log(wave('codewars'))
