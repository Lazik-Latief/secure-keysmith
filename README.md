# 🔐 Password Generator (React)

A simple and secure **Password Generator** built using **React + Tailwind CSS**.  
This project was built **from scratch without following any tutorial or lecture**, as part of **Day 3 of #LetsCode**.

---
## “Built independently from scratch”

##  Project Overview
This app generates a random password based on user-selected options like:
- Password length
- Including numbers
- Including special characters

It also shows **password strength** (Weak / Moderate / Strong) and allows users to **copy the password** with one click.

---

##  How I Built This Project
I started this project from a **blank React setup** and built everything step by step:

1. Created basic UI structure using JSX
2. Added password generation logic using JavaScript
3. Connected UI controls (slider & checkboxes) to state
4. Used React hooks to manage logic and re-renders
5. Styled the full UI using **Tailwind CSS**
6. Improved UX and added password strength feature

No lecture, no copy-paste — fully built by **logic and practice**.

---

##  Features
- ✅ Random password generation
- ✅ Custom password length
- ✅ Include numbers
- ✅ Include special characters
- ✅ Copy password to clipboard
- ✅ Password strength indicator
- ✅ Modern glassmorphism UI (Tailwind CSS)

---

##  Feature Updates

###  Password Strength Checker
I added a strength system based on:
- Password length (>= 8)
- Numbers included
- Special characters included

**Strength Levels:**
- Weak
- Moderate
- Strong
This feature updates automatically whenever options change.

---

##  React Hooks Used

### `useState`
Used to manage:
- Password value
- Length
- Options (numbers & characters)
- Strength score and strength text

---

### `useEffect`
Used to:
- Regenerate password when settings change
- Recalculate password strength automatically

---

### `useCallback`
Used to:
- Optimize password generation function
- Optimize copy-to-clipboard function

---

### `useRef`
Used to:
- Select password input field
- Copy password directly to clipboard
---

##  Tech Stack
- React (Vite)
- Tailwind CSS
- JavaScript (ES6)

---

##  Future Improvements
- Password strength progress bar
- Copy success toast message
- Dark / Light mode
- Save password history

---

##  Author

**Lazik Latief**  
Frontend Developer (Learning & Building)

---

##  Final Note
This project represents my **hands-on learning approach** where I focus on:
> *Understanding logic → building → improving UI → adding features*

Day 3 of **#LetsCode** done ✅
