/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize<T>(fn: Function): Function {
  const cache = new Map()

  return function (...args: T[]) {
    const key = args.join(',')

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

let callCount = 0
const memoizedFn = memoize(function (a: number, b: number) {
  callCount += 1
  return a + b
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(3, 2))
console.log(callCount) // 1
