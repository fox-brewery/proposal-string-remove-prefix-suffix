# String.prototype.removePrefix / String.prototype.removeSuffix

ECMAScript proposal, specification, and reference implementation for `String.prototype.remove{Prefix,Suffix}`.

## Status

**Author(s)**: @hyperupcall

**Champion(s)**: TBD

**Stage:** 0

## Motivation

The lack of a built-in way to remove a prefix substring or a suffix substring from a string is an inconvenience and incompleteness of JavaScript. Fixing this paper-cut will bring JavaScript more in line with the conveniences of other modern-day languages.

Commonly, [`.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) is used, but it's both verbose and not semantic.

```js
// removePrefix
let str = 'greninja'
let substr = 'gre'
if (str.startsWith(substr)) {
  str.slice(substr.length)
  // => ninja
}


// removeSuffix
let str = 'charizard'
let substr = 'izard'
if (str.endsWith(substr)) {
  str.slice(0, str.length - substr.length)
  // => char
}
```

Sometimes, regular expressions are used, but it has suboptimal performance ([jsPerf](https://jsperf.app/haxumu/2)) and requires knowledge of regular expressions.

```js
let str = 'mudkip'
str.replace(/kip$/, '')
// => mud
```

## Proposed Solution

We propose adding `String.prototype.removePrefix` and `String.prototype.removeSuffix` to the String prototype.

```js
'greninja'.removePrefix('gre')
// => ninja

'charizard'.removeSuffix('izard')
// => char
```

## High-level API

The proposed signatures are:

```js
String.prototype.removePrefix(prefix: string): string
String.prototype.removeSuffix(suffix: string): string
```

See [polyfill.js](./polyfill.js) for details.

## Comparison to other languages

- Python (since v3.9) has [`.removeprefix`](https://docs.python.org/3/library/stdtypes.html#str.removeprefix) and [`.removesuffix`](https://docs.python.org/3/library/stdtypes.html#str.removesuffix)
- Ruby (since v2.5) has [`.delete_prefix`](https://ruby-doc.org/current/String.html#method-i-delete_prefix) and [`.delete_suffix`](https://ruby-doc.org/current/String.html#method-i-delete_suffix)
- Rust (since v1.45.0) has [`.strip_prefix`](https://doc.rust-lang.org/std/string/struct.String.html#method.strip_prefix) and [`.strip_suffix`](https://doc.rust-lang.org/std/string/struct.String.html#method.strip_suffix)
- Go (since v1.1) has [`strings.TrimPrefix`](https://pkg.go.dev/strings#TrimPrefix) and [`strings.TrimSuffix`](https://pkg.go.dev/strings#TrimSuffix)

## Naming

The naming parallels Python's `.remove{prefix,suffix}` function. A quick peruse of [Mootools](https://mootools.net) and [Sugar](https://sugarjs.com/docs/#/String) revealed no obvious naming collisions.
