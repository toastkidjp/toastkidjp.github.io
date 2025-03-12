---
layout: page
title: What's Yobidashi4?
last_modified_at: 2025-02-05 00:00:00 +0900
---
# [Yobidashi4](https://github.com/toastkidjp/Yobidashi4): PC desktop app
[![GitHub release](https://img.shields.io/github/release/toastkidjp/Yobidashi4.svg)](https://github.com/toastkidjp/Yobidashi4/releases)
[![GitHub issues](https://img.shields.io/github/issues/toastkidjp/Yobidashi4.svg)](https://github.com/toastkidjp/Yobidashi4/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/toastkidjp/Yobidashi4.svg)](https://github.com/toastkidjp/Yobidashi4/issues?q=is%3Aissue+is%3Aclosed)

This app is editor for me. This app includes many useful functions.

<a href="{{ '/assets/image/yobidashi4/editor.png' }}"><img src="{{ '/assets/image/yobidashi4/editor.png' }}" alt="Tab markdown editor" width="50%" height="50%"></a>
<a href="{{ '/assets/image/yobidashi4/web-browser.png' }}"><img src="{{ '/assets/image/yobidashi4/web-browser.png' }}" alt="Web browsing" width="50%" height="50%"></a>
<a href="{{ '/assets/image/yobidashi4/loan.png' }}"><img src="{{ '/assets/image/yobidashi4/loan.png' }}" alt="Loan calculator" width="50%" height="50%"></a>


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

| | Coverage
|:---|:---
| Class | 98% (637/650)
| Method | 96.2% (2048/2129)
| Branch | 89.7% (2823/3148)
| Line | 99.2% (7841/7903)
| Instruction | 98.4% (69388/70529)

Calculated by Kover.

# Other

## Why does this app name contain "4"?

1. [(Deprecated) Yobidashi 1](https://github.com/toastkidjp/Yobidashi): This app had been written with Java and JavaFX(8).
2. [Yobidashi 2](https://github.com/toastkidjp/Yobidashi_kt): Android app
3. [(Deprecated) Yobidashi Compact](https://github.com/toastkidjp/yobidashi_compact): Simple tool for management my articles. This app has been written by Swing.
4. This app.

Generally in Japan, the number 4 is considered unlucky, but I don't think so.

