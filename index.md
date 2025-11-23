---
slug: "github-blog.jnapolitano.io"
title: "blog.jnapolitano.io"
repo: "justin-napolitano/blog.jnapolitano.io"
githubUrl: "https://github.com/justin-napolitano/blog.jnapolitano.io"
generatedAt: "2025-11-23T08:18:48.121981Z"
source: "github-auto"
---


# Building blog.jnapolitano.io: A Gatsby-Powered Personal Blog

Hey there! I’m Justin Napolitano, and I want to share a bit about the project behind my personal blog: [blog.jnapolitano.io](https://blog.jnapolitano.io). This site is where I publish my well-researched articles and analyses on topics ranging from political science to legal studies. If you’re curious about how it’s built and why I chose this approach, read on!

## Motivation

I’ve always been passionate about sharing knowledge, especially in complex fields like law and international relations. However, I wanted a platform that was both modern and flexible enough to handle different content types — from traditional blog posts to interactive Jupyter notebooks. At the same time, I needed something that was easy to maintain and fast to load.

## The Problem

Many blogging platforms are either too rigid or require a lot of setup to support advanced content like notebooks. I needed a solution that could:

- Render Markdown and MDX posts seamlessly.
- Integrate Jupyter notebooks directly into posts.
- Provide a clean, responsive design out of the box.
- Allow me to automate builds and deployments.

## How It’s Built

I chose Gatsby, a React-based static site generator, for its speed and flexibility. Specifically, I used the official [Gatsby blog theme](https://www.npmjs.com/package/gatsby-theme-blog), which provides a solid foundation for blogging with minimal setup.

### Key Components

- **Gatsby Theme Blog:** This theme handles the core blog structure, styling, and routing.
- **gatsby-transformer-ipynb:** A plugin that transforms Jupyter Notebook files (`.ipynb`) into HTML, allowing me to embed notebooks directly in my posts.
- **React Components for IFrames:** Custom React components like `IFrame` and `jupyIframe` help embed notebooks and other external content responsively.
- **Python Build Script:** To streamline the build process, I wrote a Python script (`python-build.py`) that automates cleaning old builds, building the site, and pushing changes. This helps keep deployment smooth and consistent.

### Site Metadata and Social Links

The `gatsby-config.js` file configures site metadata such as the title, author, description, and social links like Twitter and GitHub. This makes it easy to update personal info and maintain consistent branding.

### Styling

For styling, I use Emotion, Styled Components, and Theme UI. These libraries provide powerful CSS-in-JS capabilities, allowing me to customize the look and feel without leaving my JavaScript code.

## Interesting Implementation Details

- **Notebook Rendering:** The integration of Jupyter notebooks is a standout feature. Using the `gatsby-transformer-ipynb` plugin, notebooks are converted and embedded as interactive content. This is especially useful for sharing data analyses and visualizations.

- **Responsive IFrames:** The custom React `IFrame` component includes logic to handle loading states and resizing, ensuring embedded notebooks and content look great on all devices.

- **Automated Build Pipeline:** The Python script orchestrates the build lifecycle, running Gatsby commands like `clean` and `build`, and even handling Git commits and pushes. This automation reduces manual errors and speeds up deployment.

## Why this project matters for my career

Building this blog has been a fantastic exercise in combining my interests in technology and research. It’s not just a website; it’s a platform where I can publish rigorous analyses and experiment with new content formats like notebooks. From a career perspective, it showcases my ability to:

- Work with modern web technologies like React and Gatsby.
- Integrate diverse content types, including data-driven notebooks.
- Automate workflows using scripting languages like Python.
- Manage open-source projects and documentation.

This project serves as a living portfolio piece that reflects both my technical skills and my commitment to thoughtful, well-researched content. It’s a bridge between my analytical work and the tech world, opening doors to collaborations, consulting, or roles that blend policy and technology.

---

Thanks for reading! If you’re interested in the code or want to contribute, check out the [GitHub repository](https://github.com/justin-napolitano/blog.jnapolitano.io). Happy blogging!
