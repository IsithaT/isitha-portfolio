---
title: "Be Square - StormHacks Best AI Hack Winner"
image: "/images/BeSquareDoug.png"
description: "AI-enabled Adobe Express add-on for dynamically generating diagrams and images using canvas elements"
date: "2023-10-05"
slug: "Be-Square"
tags: ["GPT-4o", "ExpressJS", "NodeJS", "WebSockets", "Function Calling"]
---

## What is Be Square

Be Square was our entry to SFU Surge's StormHacks Hackathon.

Be Square is an AI-enabled Adobe Express add-on that helps users create diagrams and visuals using natural language commands.

It uses OpenAI's GPT-4o Model combined with [function calling](https://platform.openai.com/docs/guides/function-calling) to decide what needs to be done to complete the user's request. It can dynamically add, remove, and modify canvas elements and build up context. Users can communicate their prompts through a text box or through voice commands (which is done with OpenAI's whisper API).

As a small aside, we called our AI agent "Doug". There's no reason behind this, we just thought it
sounded fun. If you come up with something DOUG could be an initialism for, I'd love to hear it.

## Why We Made It

We were motivated to create this tool because of our frustration with the slow, tedious process of making diagrams in most canvas-editing programs. We wanted to explore whether AI could streamline this process. By leveraging OpenAI's function-calling capabilities, we enabled our app to add shapes, lines, and text dynamically on a canvas.

## Trees, Graphs, and So Much More!

What I love most about this project is the emergent functionality we discovered. With just a few simple drawing functions, our extension could generate binary trees, artistic designs, and even basic chemical structures—all from straightforward natural language prompts.

## Images

I like to think of Doug as the Picasso of AI art, not because it's particularly talented, but because the time constraints of the hackathon left it with quite a limited selection of shapes to work with. Nonetheless, Doug did impress.

> **Generating a Binary Tree**
>
> ![Binary tree with labeled nodes](/images/tree.png)
> "Create a binary tree"
> "Change the node colour to turquoise"
> "Label all the nodes with numbers to the right of the node itself."

> **Squares and Circles**
>
> It was asked to draw a grid of 9 multicoloured circles, add a black square above the middle one,
> and draw lines from the square to the green and blue circles
>
> This example shows it working in three separate commands, but it also works when given as one long command
>
> ![circles](/images/BeSquareCircles.png)
>
> ![add square](/images/blackSquare.png)
>
> ![lines](/images/lines.png)

> **Self Portrait**
>
> This was what it came up with when we told it to draw itself. Nothing too special, but I like the effort it made.
>
> ![Doug's attempt at drawing itself](/images/self-portrait-doug.png)
