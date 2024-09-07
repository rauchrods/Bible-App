import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'BookPage'>;

const BookPage: React.FC<Props> = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {chapters, name} = route.params;

  // console.log(chapters);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={styles.pageContainer}>
        {chapters.map((chapter, chapterIndex) => {
          return (
            <TouchableOpacity
              key={chapterIndex}
              style={styles.chapterContainer}
              onPress={() => {
                navigation.navigate('ChapterPage', {
                  book: name,
                  chapter: chapter,
                  chapterName: chapterIndex + 1
                });
              }}>
              <Text style={styles.heading}>Chapter {chapterIndex + 1}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BookPage;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 12,
    paddingHorizontal: 18,
  },
  chapterContainer: {
    paddingVertical: 16,
    display: 'flex',
    rowGap: 6,
  },
  heading: {
    fontSize: 24,
  },
  verse: {
    fontSize: 18,
  },
});
