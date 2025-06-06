type TEvent = {
  [key in string]: Function[]
}

class EventEmitter {
  subscribers: TEvent[] = []

  subscribe(event: string, fn: Function) {
    if (!this.subscribers.length) {
      this.subscribers.push({ [event]: [fn] })
      return this
    }

    this.subscribers.map((subscriber) => {
      if (Object.keys(subscriber)[0] === event) {
        subscriber[event].push(fn)
        return
      }

      this.subscribers.push({ [event]: [fn] })
    })

    return this
  }

  emit<T>(event: string, ...args: T[]) {
    const outputs: T[] = []

    this.subscribers.forEach((sub) => {
      if (!(Object.keys(sub)[0] === event)) return

      sub[event].forEach((fn) => outputs.push(fn(...args)))
    })

    return outputs
  }

  unsubscribe() {
    const lastSub = this.subscribers[this.subscribers.length - 1]

    if (lastSub) {
      if (lastSub[Object.keys(lastSub)[0]].length === 1) {
        this.subscribers.pop()
        return this
      }

      lastSub[Object.keys(lastSub)[0]].pop()
      this.subscribers[this.subscribers.length - 1] = lastSub

      return this
    }
  }

  getSubsribers() {
    return this.subscribers
  }
}

const emitter = new EventEmitter()
emitter.emit('firstEvent') // [], no callback are subscribed yet
emitter.subscribe('firstEvent', function cb1() {
  return 5
})
emitter.subscribe('firstEvent', function cb2() {
  return 6
})
emitter.subscribe('secEvent', function cb1(...args: number[]) {
  return args.join(',')
})
console.log(emitter.emit('secEvent', [1, 2, 3])) // ["1,2,3"]
console.log(emitter.emit('secEvent', [3, 4, 6])) // ["3,4,6"]

console.log(emitter.emit('firstEvent')) // [5, 6], returns the output of cb1 and cb2
