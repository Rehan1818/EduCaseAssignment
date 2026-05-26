# PopX App

A React implementation of the PopX mobile app UI with 4 screens.

## Project Structure

```
src/
├── components/
│   ├── Avatar.jsx        # Profile avatar with camera badge
│   ├── Button.jsx        # Reusable button (primary / secondary / disabled)
│   ├── InputField.jsx    # Labeled input with purple label
│   ├── PhoneFrame.jsx    # Mobile phone wrapper shell
│   └── RadioGroup.jsx    # Custom radio button group
├── pages/
│   ├── Welcome.jsx           # Screen 1 – Welcome
│   ├── Login.jsx             # Screen 2 – Login
│   ├── CreateAccount.jsx     # Screen 3 – Register
│   └── AccountSettings.jsx   # Screen 4 – Profile
├── router/
│   └── AppRouter.jsx     # react-router-dom routes
├── styles/
│   ├── global.css        # Global resets & body styles
│   └── theme.js          # Design tokens (colors, etc.)
├── App.jsx               # Root app with layout wrapper
└── main.jsx              # ReactDOM entry point
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

## Routes

| Path        | Screen           |
|-------------|------------------|
| `/`         | Welcome          |
| `/login`    | Login            |
| `/register` | Create Account   |
| `/settings` | Account Settings |

## Tech Stack

- React 18
- React Router DOM v6
- Vite 5
- Plain inline styles + CSS (no CSS-in-JS lib needed)
