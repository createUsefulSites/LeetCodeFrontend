# Sentence Calculator

_Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:_

- Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
- Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
- Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
- Other characters: 0 value

## Tests

- [x] "I Love You", 170
- [x] "ILoveYou", 170
- [x] "ARE YOU HUNGRY?", 356
- [x] "oops, i did it again!", 152
- [x] "Give me 5!", 73
- [x] "Give me five!", 110

> [!NOTE]
> input will always be a string
