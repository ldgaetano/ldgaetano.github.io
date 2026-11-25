---
title: "Writing posts in Markdown"
description: "A quick tour of the formatting you can use in a blog post."
pubDate: 2026-11-18
---

Every post starts with a small header — `title`, an optional `description`,
and `pubDate` — followed by normal Markdown.

## Text

You can write **bold**, *italic*, and `inline code`. Links look like
[this one](https://docs.astro.build).

> Blockquotes work too — handy for short asides.

## Lists

1. Ordered lists
2. Just like this one

- And unordered lists
- With more items

## Code

```js
// Fenced code blocks are highlighted automatically at build time.
export function greet(name) {
  return `Hello, ${name}!`;
}
```

## Math, images, and more

Images can be dropped into `public/` and embedded with
`![alt text](/my-image.png)`.

That's the tour — happy writing.
