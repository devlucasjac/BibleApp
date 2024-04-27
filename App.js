import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bible from "./screens/Bible/index";
import BibleSearch from "./screens/BibleSearch/index";
import Home from "./screens/Home";

import ScreenNavigator from "./components/ScreenNavigator";

import { useState } from "react";

import Books from "./context/Books";
import Theme from "./context/Theme";
import CurrentBook from "./context/CurrentBook";

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentBook, setCurrentBook] = useState({
    bible: "ARA",
    book: 1,
    chapter: 1,
  });
  const [books, setBooks] = useState({ allBooks: [], booksResults: [] });
  const [theme, setTheme] = useState({
    size: "large",
    bold: "bold",
    isLit: true,
  });

  return (
    <NavigationContainer>
      <CurrentBook.Provider value={{ currentBook, setCurrentBook }}>
        <Books.Provider value={{ books, setBooks }}>
          <Theme.Provider value={{ theme, setTheme }}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Bible" component={Bible} />
              <Stack.Screen name="BibleSearch" component={BibleSearch} />
            </Stack.Navigator>
              <ScreenNavigator />
          </Theme.Provider>
        </Books.Provider>
      </CurrentBook.Provider>
    </NavigationContainer>
  );
}
