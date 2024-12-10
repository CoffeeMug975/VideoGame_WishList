# Video Game Wishlist Application

## Description

The **Video Game Wishlist Application** is a Next.js-based web app that allows users to create and manage a video game wishlist. Users can search for games using the CheapShark API, add games to their wishlist, and remove them as needed. The application integrates authentication via GitHub to provide a personalized experience.

---

## Features

- **Search for Games:** Users can search for video games using the CheapShark API.
- **Wishlist Management:** Add games to a wishlist and remove them when no longer needed.
- **Authentication:** Secure GitHub login for personalized user sessions.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## Project Structure

```plaintext
Project/
├── .env.local                  # Environment variables
├── app/
│   ├── layout.js               # Root layout for the app
│   ├── page.js                 # Homepage of the app
│   ├── _components/
│   │   ├── GameList.js         # Component for displaying and searching games
│   │   ├── Wishlist.js         # Component for managing and displaying wishlist
│   │   ├── header.js           # Header component
│   │   ├── footer.js           # Footer component
│   ├── wishListApplication/
│       ├── _utils/
│       │   ├── auth-context.js # Context for authentication
│       │   ├── firebase.js     # Firebase setup
│       ├── protected/
│       │   ├── page.js         # Protected page displaying wishlist and games
│       ├── page.js             # Authentication page
│       ├── layout.js           # Layout for wishlist application
├── public/                     # Public assets (images, fonts, etc.)
├── styles/                     # Global CSS styles
