# Profile & Hobbies App 🎯

My first React Native project - a simple profile app where you can add and manage your hobbies. Built while learning React Native from the official docs.

## 📱 Features

- Display profile with image, name, and bio
- Add hobbies to your list
- Delete hobbies you no longer have
- Clean, modern UI with NativeWind (Tailwind CSS)
- Form validation with alerts

## 🛠️ Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **NativeWind** - Tailwind CSS for React Native
- **React Hooks** - useState for state management

## 📸 Screenshots

_[Add screenshots here when you take them]_

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Expo Go app on your phone (or Android/iOS emulator)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Asifmahmud436/my-profile.git
cd my-profile
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npx expo start
```

4. Scan the QR code with Expo Go (Android) or Camera app (iOS)

## 📝 What I Learned

- React Native core components (View, Text, Image, FlatList, TextInput, Button)
- State management with useState
- Handling user input and form validation
- List rendering with FlatList
- Conditional rendering
- Array manipulation (filter for delete functionality)
- Styling with NativeWind/Tailwind CSS
- **Important:** Never mutate state directly in React - always create new arrays/objects

## 🐛 Challenges I Faced

- Initially used `className` without proper NativeWind setup
- Learned about immutability - can't use `splice()` directly on state
- Had to fix `tailwind.config.js` content paths to scan the right directories
- Understanding the difference between `onChange` and `onChangeText`

## 🔜 Future Improvements

- [ ] Add AsyncStorage to persist hobbies
- [ ] Add edit functionality for hobbies
- [ ] Add hobby categories
- [ ] Add dark mode toggle
- [ ] Prevent duplicate hobbies
- [ ] Add swipe-to-delete gesture

## 🎓 Learning Journey

This is my first React Native project, built as part of my journey learning mobile development. Following the official React Native documentation and building practical projects to solidify concepts.

**Goal:** Learn React Native well enough to build apps without relying on AI assistance for coding.

## 📚 Resources Used

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)

## 👨‍💻 Author

**Asif Mahmud**
- Learning React Native
- Passionate about mobile development

---

_Built with 💪 and determination to learn without AI dependency_