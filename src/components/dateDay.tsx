import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// Define your topics
const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];

const DateDayWithTopics = () => {
  return (
    <View style={styles.container}>
      <DateDay />
      <TopicButtons topics={topics} />
    </View>
  );
};

const DateDay = () => {
  // Sample data, you can make this dynamic
  const date = '01/25/2024';
  const day = 'Thursday';

  return (
    <View style={styles.dateDayContainer}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.dayText}>{day}</Text>
    </View>
  );
};

const TopicButtons = ({ topics }: { topics: string[] }) => {
  return (
    <ScrollView style={styles.topicsContainer} horizontal={true}>
      {topics.map((topic, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button title={topic} onPress={() => console.log(`${topic} pressed`)} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  dateDayContainer: {
    flexDirection: 'column',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 16,
    color: 'grey',
  },
  topicsContainer: {
    // Styles for the scroll view containing the buttons
  },
  buttonContainer: {
    marginHorizontal: 5,
    // Additional styles for the button container if needed
  },
});

export default DateDayWithTopics;
