---
slug: github-blog-jnapolitano-io-note-technical-overview
id: github-blog-jnapolitano-io-note-technical-overview
title: blog.jnapolitano.io Overview
repo: justin-napolitano/blog.jnapolitano.io
githubUrl: https://github.com/justin-napolitano/blog.jnapolitano.io
generatedAt: '2025-11-24T18:31:43.465Z'
source: github-auto
summary: >-
  This repo is a personal blogging platform built with Gatsby. It leverages the
  official Gatsby blog theme, allowing me to publish well-researched content
  easily. Key features include:
tags: []
seoPrimaryKeyword: ''
seoSecondaryKeywords: []
seoOptimized: false
topicFamily: null
topicFamilyConfidence: null
kind: note
entryLayout: note
showInProjects: false
showInNotes: true
showInWriting: false
showInLogs: false
---

This repo is a personal blogging platform built with Gatsby. It leverages the official Gatsby blog theme, allowing me to publish well-researched content easily. Key features include:

- Static site generated for speed
- Markdown and MDX post support, including Jupyter Notebooks via `gatsby-transformer-ipynb`
- Responsive iframe support

## Quick Start

To get up and running:

1. Clone the repo:
   ```bash
   git clone https://github.com/justin-napolitano/blog.jnapolitano.io.git
   cd blog.jnapolitano.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run develop
   ```
   Open [http://localhost:8000](http://localhost:8000) to see your site.

### Gotchas

Ensure you have Node.js (v14+) and Python 3.x installed. Use the `python-build.py` script for automating builds and deployments.
