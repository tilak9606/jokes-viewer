## Jokes Viewer

A React-based jokes viewer interface using the Random Jokes API.

**Live Demo:** https://jokes-viewer-theta.vercel.app/

**GitHub Repo:** https://github.com/tilak9606/jokes-viewer

---

### Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Lucide React

---

### API Endpoint
https://api.freeapi.app/api/v1/public/randomjokes

---

### Features

- Fetches jokes with pagination (10 per page, 1465 total)
- Clean card-based layout with quote styling
- Category tags for explicit/filtered content
- Pagination with page numbers and navigation
- Loading states and error handling with retry
- Refresh button to reload current page
- Staggered card animations

---

### Getting Started

```bash
git clone git@github.com:tilak9606/jokes-viewer.git
cd jokes-viewer
npm install
npm run dev