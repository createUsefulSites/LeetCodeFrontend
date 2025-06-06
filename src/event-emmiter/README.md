# Event Emitter

_In this task, you are required to design an EventEmitter class similar, yet distinct, from those used in Node.js and DOM's EventTarget interface. The primary purpose of this class is to facilitate the subscribing and emitting of events._

Subscribe: Users should be able to register interest in specific events by subscribing to them. Each subscription can involve multiple listeners and the responses should be managed in the order they were initially registered.
Emit: This function should enable the actual firing of an event, optionally passing arguments to the subscribed callbacks. If no subscriptions exist for an event, an empty response should be given.
This setup involves a straightforward interaction model where events can have multiple independent listeners, and upon triggering an event, every listener receives the appropriate data in a predictable sequence.

### Examples (input --> output):

Example 1

```
const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], no callback are subscribed yet
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
```

Example 2

```
Note that the emit method should be able to accept an OPTIONAL array of arguments.
const emitter = new EventEmitter();
emitter.subscribe("firstEvent, function cb1(...args) { return args.join(','); });
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]
```

Example 3

```
const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
sub.unsubscribe(); // undefined
emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions
```

Example 4

```
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [7]
```

## Constraints

```
1 <= actions.length <= 10
values.length === actions.length
All test cases are valid, e.g. you don't need to handle scenarios when unsubscribing from a non-existing subscription.
There are only 4 different actions: EventEmitter, emit, subscribe, and unsubscribe.
The EventEmitter action doesn't take any arguments.
The emit action takes between either 1 or 2 arguments. The first argument is the name of the event we want to emit, and the 2nd argument is passed to the callback functions.
The subscribe action takes 2 arguments, where the first one is the event name and the second is the callback function.
The unsubscribe action takes one argument, which is the 0-indexed order of the subscription made before.
```
