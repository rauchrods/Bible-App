import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'ChapterPage'>;

const ChapterPage: React.FC<Props> = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {chapter, book, chapterName} = route.params;

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
      style={[backgroundStyle, styles.pageContainer]}>
      <View style={styles.chapterContainer}>
        <Text style={styles.heading}>Chapter {chapterName}</Text>
        {chapter.map((verse, verseIndex) => {
          return (
            <Text key={verseIndex} style={styles.verse}>
              {verse}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ChapterPage;

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
    fontSize: 28,
  },
  verse: {
    fontSize: 18,
  },
});
