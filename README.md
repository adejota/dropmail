# DropMail

Generates a temporary email address so that users can use online services that require email validation without exposing their real email.
Live demo at https://adejota-dropmail.netlify.app/.

## Running project

### 📋 Prerequisites

If you have CORS issues, go to https://cors-anywhere.herokuapp.com and "Request temporary access to the demo server".

### 🔧 Installation

Open the terminal, go to the directory where you usually leave your projects and execute the following commands:

```
$ git clone https://github.com/adejota/dropmail.git
$ cd dropmail
$ npm install
$ npm run dev
```

All setup, easy like that! You should see a message like this on your terminal:

```
App running at:
- Local:   http://localhost:5173/
```

## Built with

- [Vite](https://vitejs.dev/) - Generation Frontend Tooling
- [Vue](https://vuejs.org/) - Progressive JavaScript Framework
- [Vue Router](https://router.vuejs.org/) - The official router for Vue
- [Vuex](https://vuex.vuejs.org/) - Vue state-management-pattern library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js

## Tasks workflow

- Create a new Vue project and install dependencies
- Study REST API documentation
- Configure axios pointing to API
- Resolve CORS issues with [cors-anywhere](https://cors-anywhere.herokuapp.com)
- Create methods making first calls to API
- Configure vuex according to data from API
- Create HTML base structure following the mockup
- Style the elements and create mobile screen (responsive layout)
- Refine business logic methods
- Configure Notification API and "Enable notifications" button
- Configure vue-router
- Componentize the elements
- Review code, add validations and refactor business logic improvement points
- Create project README
- Publish project on [netlify](https://www.netlify.com/)

## ✒️ Author

[Ademir Diamente Júnior](https://github.com/adejota)

---

> This is a challenge by [Coodesh](https://coodesh.com/)
