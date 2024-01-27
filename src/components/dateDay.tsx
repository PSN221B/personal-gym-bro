import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { format } from 'date-fns';

// Define your topics
const exercises = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];

const DateDayWithExercises = ({date}) => {
  return (
    <View style={styles.container}>
      <DateDay date={date}/>
      <Exercises exercises={exercises} />
    </View>
  );
}


const DateDay = ({ date }) => {
  return (
    <View style={styles.dateDayContainer}>
      <Text style={styles.dateText}>{format(date, "do MMM yyyy")}</Text>
      <Text style={styles.dayText}>{format(date, "E")}</Text>
    </View>
  );
}

const Exercises = ({ exercises }: { exercises: string[] }) => {
  return (
    <View style={styles.exercisesContainer}>
      {
      exercises.map((exercise, index) => {
        return (    
            <View key={index} style={styles.exerciseView}>
                <Text>
                    {exercise}
                </Text>
            </View>
        );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderBlockColor: 'black',
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
  exercisesContainer: {
    flexDirection: 'column',
  },
  exerciseView: {
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
  }
});

export default DateDayWithExercises;
