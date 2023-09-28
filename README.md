# String.prototype.removePrefix / String.prototype.removeSuffix

ECMAScript proposal, specification, and reference implementation for `String.prototype.remove{Prefix,Suffix}`.

## Status

**Author(s)**: @hyperupcall

**Champion(s)**: TBD

**Stage:** 0

## Motivation

The lack of a built-in way to remove a prefix substring or a suffix substring from a string is a great inconvenience and incompleteness of JavaScript. Fixing this paper-cut will bring JavaScript more in line with the conveniences of other modern-day languages.

Current alternatives to a native method are too slow, verbose, and hard-to-read.

Commonly, [`.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) used:

```js
// removePrefix
let str = 'greninja'
str.slice('gren'.length - 1)
// => ninja

// removeSuffix
let str = 'charizard'
str.slice(0, str.length - 'izard'.length)
// => char
```

This approach is difficult to read (especially when nested/repeated) and not semantic.

Sometimes, regular expressions are used:

```js
let str = 'mudkip'
str.replace(/kip$/, '')
```

This isn't performant [jsPerf](https://jsperf.app/haxumu) and requires knowledge of regular expressions.

## Proposed Solution

We propose adding `String.prototype.removePrefix` and `String.prototype.removeSuffix` to the String prototype.

```js
'greninja'.removePrefix('gren')
// => ninja

'charizard'.removeSuffix('izard')
// => char
```

Fixing this paper-cut will bring JavaScript more in line with the conveniences of other modern-day languages.

## High-level API

The proposed signature is:

```js
String.prototype.removePrefix(prefix: string): string
```

```js
String.prototype.removeSuffix(suffix: string): string
```

## Naming

## Comparison to other languages

- Ruby (since v2.5) has [`.delete_prefix`](https://ruby-doc.org/current/String.html#method-i-delete_prefix) and [`.delete_suffix`](https://ruby-doc.org/current/String.html#method-i-delete_suffix)
- Python (since v3.9) has [`.removeprefix`](https://docs.python.org/3/library/stdtypes.html#str.removeprefix) and [`.removesuffix`](https://docs.python.org/3/library/stdtypes.html#str.removesuffix)
- Rust (since v1.45.0) has [`.strip_prefix`](https://doc.rust-lang.org/std/string/struct.String.html#method.strip_prefix) and [`.strip_suffix`](https://doc.rust-lang.org/std/string/struct.String.html#method.strip_suffix)
- Go (since v1.1) has [`strings.TrimPrefix`](https://pkg.go.dev/strings#TrimPrefix) and [`strings.TrimSuffix`](https://pkg.go.dev/strings#TrimSuffix)

## Credit

[proposal-string-replaceall](https://github.com/tc39/proposal-string-replaceall) and [proposal-string-pad-start-end](https://github.com/tc39/proposal-string-pad-start-end).

## Before creating a proposal

Please ensure the following:
  1. You have read the [process document](https://tc39.github.io/process-document/)
  1. You have reviewed the [existing proposals](https://github.com/tc39/proposals/)
  1. You are aware that your proposal requires being a member of TC39, or locating a TC39 delegate to “champion” your proposal

## Create your proposal repo

Follow these steps:
  1. Go to your repo settings page:
      1. Under the “Pages” section on the left sidebar, and set the source to “deploy from a branch” and check “Enforce HTTPS”
      1. Under the “Actions” section on the left sidebar, under “General”, select “Read and write permissions” under “Workflow permissions” and click “Save”
  1. [“How to write a good explainer”][explainer] explains how to make a good first impression.

      > Each TC39 proposal should have a `README.md` file which explains the purpose
      > of the proposal and its shape at a high level.
      >
      > ...
      >
      > The rest of this page can be used as a template ...

      Your explainer can point readers to the `index.html` generated from `spec.emu`
      via markdown like

      ```markdown
      You can browse the [ecmarkup output](https://ACCOUNT.github.io/PROJECT/)
      or browse the [source](https://github.com/ACCOUNT/PROJECT/blob/HEAD/spec.emu).
      ```

      where *ACCOUNT* and *PROJECT* are the first two path elements in your project's Github URL.
      For example, for github.com/**tc39**/**template-for-proposals**, *ACCOUNT* is “tc39”
      and *PROJECT* is “template-for-proposals”.


## Maintain your proposal repo

  1. Make your changes to `spec.emu` (ecmarkup uses HTML syntax, but is not HTML, so I strongly suggest not naming it “.html”)
  1. Any commit that makes meaningful changes to the spec, should run `npm run build` to verify that the build will succeed and the output looks as expected.
  1. Whenever you update `ecmarkup`, run `npm run build` to verify that the build will succeed and the output looks as expected.

  [explainer]: https://github.com/tc39/how-we-work/blob/HEAD/explainer.md
