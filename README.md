# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 目次

-   [概要](#概要)
    -   [チャレンジ](#チャレンジ)
    -   [スクリーンショット](#スクリーンショット)
    -   [リンク](#リンク)
-   [プロセス](#プロセス)
    -   [使用したスキル](#使用したスキル)
    -   [学んだこと](#学んだこと)
    -   [役に立ったリソース](#役に立ったリソース)

## 概要

### チャレンジ

ユーザーができること:

-   ユーザーの画面サイズによって最適なレイアウトが表示される。
-   マウス/トラックパッドもしくはキーボードを使ってスライダーを操作できる

### スクリーンショット

![](./screenshot-mobile.jpg)

<!-- ![](./screenshot.png) -->

### リンク

-   Live Site URL: [リンク](https://kaji1127.github.io/Testimonials-Slider/)

## プロセス

### 使用したスキル

-   CSS カスタムプロパティ
-   Flexbox
-   CSS Grid
-   Sass
-   JavaScript
-   モバイルファースト

### 学んだこと

スライダーの作り方について学ぶことができた。

```js
const goToSlide = (slide) => {
	slides.forEach((el, i) => {
		el.style.transform = `translate(${100 * (i - slide)}%, -50%)`;
	});
};

const nextSlide = () => {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	goToSlide(curSlide);
};

nextBtn.forEach((btn) => {
	btn.addEventListener('click', nextSlide);
});
```

### 役に立ったリソース

-   [リソース 1](https://www.udemy.com) - Jonas Schmedtmann さんの『The Complete JavaScript Course 2021: From Zero to Expert!』でスライダーの作り方を学んだ。
