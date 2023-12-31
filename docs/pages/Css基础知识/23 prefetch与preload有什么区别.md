---
title: prefetch与preload有什么区别
date: 2023-06-24 18:37:10
permalink: /pages/d6081d/
categories:
  - 全部分类
  - Css基础知识
tags:
  - css
author: 
  name: Clare
  link: https://github.com/mayaohan/document-web-vuepress
---
> prefetch 和 preload 都用于在浏览器空闲时提前加载资源，以提高性能和用户体验。然而，它们的具体功能略有不同

<!-- more -->

## prefetch 和 preload区别

功能：`prefetch` 和 `preload` 都用于在浏览器空闲时提前加载资源，以提高性能和用户体验。然而，它们的具体功能略有不同。

## prefetch
`prefetch` 用于在浏览器空闲时提前加载将来可能会用到的资源。它会在浏览器完成当前页面的加载和渲染后，利用剩余的带宽和资源进行预加载。这意味着 `prefetch` 并不会阻塞当前页面的加载和渲染过程，而是在后台默默地进行资源的加载。

## preload
`preload` 则是一种更强制的预加载方式，它用于指定需要立即加载的资源，以及需要优先级加载的资源。通过使用 `preload`，开发者可以显式地指示浏览器在加载当前页面时立即开始加载所需的关键资源。这可以加速当前页面的加载速度。

## 触发时机
`prefetch` 和 `preload` 的触发时机也存在差异。

- `prefetch`：`prefetch` 在浏览器空闲时自动触发，无需特殊处理。浏览器会根据对资源的分析和预测来确定哪些资源可能是将来需要加载的，然后进行预加载。

- `preload`：相比之下，`preload` 需要开发者显式声明，通过在 `HTML` 中添加 `<link> `或 `<script> `标签来指定需要预加载的资源。这样，在浏览器解析到预加载资源的标签时，会立即开始加载这些资源。

**加载优先级**：`preload` 允许设置资源的加载优先级，而 `prefetch` 则没有这个功能。

- `preload`：通过指定 as 属性，可以将资源分为不同的类型（例如 `image、font、style` 等），并为每种类型设置不同的优先级，以确保关键资源尽快加载。

- `prefetch`：`prefetch` 并不关心资源的具体类型和优先级，它只会根据浏览器的预测来选择可能用到的资源进行加载。

## 总结
`prefetch`  **主要用于后台预加载未来可能需要的资源，而 `preload` 则用于显式地指示浏览器立即加载当前页面所需的关键资源，并且可以设置加载优先级。具体使用哪种预加载技术取决于开发者的需求和场景**。