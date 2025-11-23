# blog.jnapolitano.io

Welcome to **blog.jnapolitano.io**, a personal blogging platform built using Gatsby and the official Gatsby blog theme. This site is designed to showcase well-researched publications, combining modern web technologies with a clean, responsive design.

---

## Features

- Powered by [Gatsby](https://www.gatsbyjs.com), a fast React-based static site generator.
- Uses the official [Gatsby blog theme](https://www.npmjs.com/package/gatsby-theme-blog) for a streamlined blogging experience.
- Supports Markdown and MDX posts, including Jupyter Notebook rendering via `gatsby-transformer-ipynb`.
- Responsive iframe embedding for notebooks and other content.
- Site metadata and social links configured for easy customization.
- Automated build and deployment pipeline using Python scripts.

---

## Tech Stack

- **Framework:** Gatsby (React-based static site generator)
- **Languages:** JavaScript (React), Python (build scripts), HTML
- **Styling:** Emotion, Styled Components, Theme UI
- **Plugins:**
  - `gatsby-theme-blog`
  - `gatsby-transformer-ipynb` for Jupyter Notebook integration
  - `gatsby-transformer-remark` with responsive iframe support
  - `gatsby-plugin-manifest` for PWA features
- **Build tooling:** Node.js, npm

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)
- npm (comes with Node.js)
- Python 3.x (for build automation scripts)

### Installation

Clone the repository:

```bash
git clone https://github.com/justin-napolitano/blog.jnapolitano.io.git
cd blog.jnapolitano.io
```

Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the Gatsby development server:

```bash
npm run develop
```

Open your browser and navigate to [http://localhost:8000](http://localhost:8000) to see the site.

### Building for Production

To create a production build:

```bash
npm run build
```

You can also use the included Python script `python-build.py` to automate cleaning, building, committing, and pushing the site.

---

## Project Structure

```text
blog.jnapolitano.io
├── content/               # Markdown and notebook posts
│   └── posts/             # Blog post files
├── src/                   # Source code for components and pages
│   ├── gatsby-theme-blog/ # Theme components
│   └── pages/             # Site pages
├── static/                # Static assets like icons
├── gatsby-config.js       # Gatsby configuration
├── package.json           # npm dependencies and scripts
├── python-build.py        # Python build automation script
├── README.md              # This file
└── LICENSE                # License file
```

---

## Future Work / Roadmap

- Add more detailed author bio and social media integration.
- Enhance notebook rendering with interactive features.
- Integrate comments or discussion platform.
- Automate deployment to Gatsby Cloud or other hosting providers.
- Expand styling customization and theming options.

---

Feel free to explore the code and contribute!

---

© Justin Napolitano

---

---

