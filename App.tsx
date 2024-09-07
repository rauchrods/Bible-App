/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import {bookType} from './assets/bible_json/en_bbe';
import {chapterType} from './constants/types';
import ChapterPage from './pages/ChapterPage';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={{}}>
//       <Text>{title}</Text>
//     </View>
//   );
// }

export type RootStackParamList = {
  HomePage: undefined; // No parameters for HomeScreen
  BookPage: bookType;
  ChapterPage: chapterType; // parameters for BookScreen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d4af37',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: 'Bible'}}
        />
        <Stack.Screen
          name="BookPage"
          component={BookPage}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="ChapterPage"
          component={ChapterPage}
          options={({route}) => ({title: route.params.book})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
