---
layout: page
title: What's Yobidashi4?
last_modified_at: 2025-02-04 00:00:00 +0900
---
# [Yobidashi4](https://github.com/toastkidjp/Yobidashi4): PC desktop app
This app is editor for me. This app includes many useful functions.

{{ '/assets/image/yobidashi4/editor.png' | relative_url }} {{ '/assets/image/yobidashi4/loan.png' | relative_url }} {{ '/assets/image/yobidashi4/web-browser.png' | relative_url }}

- Tab editor (optimized for writing Markdown, enable to highlighing and preview)
- Tab web browsing (powered by Chromium embedded)
- Full-text search
- Aggregation
- Value converter tools (likes [this web app](https://toastkidjp.github.io/loan.html))
- Slideshow
- Calendar
- Loan calculator

## Runtime environment
Java 17 and over.

## Architecture
Layered architecture

This app contains 3 layer.

- domain
- presentaion: This layer cannot reference infrastructure directly.
- infrastructure: This layer contains implementation of domain code.


```
domain         presentation
  ↑                |
  ｜                |
infrastructure  ×←
```

And, presentation layer is written by MVVM pattern.

```
Composable function ---> ViewModel
```

ViewModel does not mean an AAC component. These just contains only states and logics.
It makes easier for writing unit test, and keeping simple UI code.

## Tech stack
- Kotlin
- [Jetpack Compose Multiplatform](https://github.com/JetBrains/compose-multiplatform)
- [Koin](https://insert-koin.io/): Lightweight and dynamic dependency injection framework for Kotlin
- [Kover](https://github.com/Kotlin/kotlinx-kover): Coverage calculation tool

## Unit test code coverage
Over 90%
