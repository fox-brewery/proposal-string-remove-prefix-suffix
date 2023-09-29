# String.prototype.removePrefix / String.prototype.removeSuffix

ECMAScript proposal and specification for `String.prototype.remove{Prefix,Suffix}`.

## Status

**Author(s)**: @hyperupcall

**Champion(s)**: TBD

**Stage:** 0

## Motivation

The lack of a built-in way to remove a prefix substring or a suffix substring from a string is an inconvenience and incompleteness of JavaScript. Removing prefix and suffix substrings is a common string manipulation operation and excluding this from ECMAScript means program authors must always write their own implementation or be left with verbose or slower alternatives. Fixing this paper-cut will bring JavaScript more in line with the conveniences of other modern-day languages.

Without native methods, this functionality is often written on-the-fly. For example, to remove a prefix substring, the target string is checked if it `startsWith` that substring. If so, a `.slice()` is performed on the string, effectively removing the substring; otherwise, the target string is used. Even when using the ternary conditional operator, this is verbose code that either requires assigning the substring to a variable, or duplicating the substring string literal twice.

```js
// removePrefix
const str = 'greninja'
const substr = 'gre'
if (str.startsWith(substr)) {
  result = str.slice(substr.length)
  // => ninja
}


// removeSuffix
let str = 'charizard'
let substr = 'izard'
let result = str.endsWith(substr) ? str.slice(0, str.length - substr.length) : result
result
// => char
```

Another common alternative is the use of regular expressions. Although the code is shorter, it is more cryptic (requires knowledge of regular expressions) and has [suboptimal performance](https://jsperf.app/haxumu/2).

```js
let str = 'mudkip'
str.replace(/kip$/, '')
// => mud
```

In both alternatives, the semantics aren't always obvious. Other [popular languages](#comparison-to-other-languages) have realized this and have implemented a built-in method to resolve this.

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

## Comparison to other languages

- Python (since v3.9) has [`.removeprefix`](https://docs.python.org/3/library/stdtypes.html#str.removeprefix) and [`.removesuffix`](https://docs.python.org/3/library/stdtypes.html#str.removesuffix)
- Ruby (since v2.5) has [`.delete_prefix`](https://ruby-doc.org/current/String.html#method-i-delete_prefix) and [`.delete_suffix`](https://ruby-doc.org/current/String.html#method-i-delete_suffix)
- Rust (since v1.45.0) has [`.strip_prefix`](https://doc.rust-lang.org/std/string/struct.String.html#method.strip_prefix) and [`.strip_suffix`](https://doc.rust-lang.org/std/string/struct.String.html#method.strip_suffix)
- Go (since v1.1) has [`strings.TrimPrefix`](https://pkg.go.dev/strings#TrimPrefix) and [`strings.TrimSuffix`](https://pkg.go.dev/strings#TrimSuffix)

## Naming

The naming parallels Python's `.remove{prefix,suffix}` function. A quick peruse of [Mootools](https://mootools.net) and [Sugar](https://sugarjs.com/docs/#/String) revealed no obvious naming collisions.
