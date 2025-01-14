---
title: "Portfolio Site"
image: "/images/PortfolioSite.png"
description: "My current portfolio site. It utilizes markdown file parsing for managing articles."
date: "Dec 2023 - Present"
slug: "portfolio-site"
tags: [Next JS, Tailwind CSS, NodeJS, Typescript, React]
---

> ![portfolio site image](/images/PortfolioSite.png)

This is just a short article on my portfolio site —the site you are currently on!

## Tech stack

- Next JS
- Tailwind CSS
- NodeJS
- React + Typescript

#### Libraries

- gray-matter - Parsing front matter
- remark - Markdown parser
- rehype - HTML parser

## Layout

Overall this is a relatively straightforward website.

The article parsing is probably the most interesting component of the site so that's what I will focus most of this article on.

## Why Parse Markdown Files?

For me, parsing markdown files works because this site doesn't get updated very often.

I _could_ implement a full article editor directly on the website, but let's be honest —that's a lot of extra work for something I update just once every few weeks.

Markdown simplifies everything. I don't have to worry about formatting inconsistencies because my system ensures styling stays consistent across pages.

It also gives me the flexibility to write and format articles anywhere. Case in point: I'm writing this one on my commute to university!

## Future Site Plans

Maybe one day, I'll grow this site large enough that I'd benefit from a more "proper" article adding system. Until then I'm mostly happy with the site as-is. Save for a few things:

- Natural Language Linting.
  - I'd love to add some article linting to the CI/CD pipeline.
- Improved mobile experience (Currently in the works!)
