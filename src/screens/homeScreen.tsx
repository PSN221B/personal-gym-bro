import { format, subDays } from 'date-fns';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { AnimatedFAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateDayWithExercises from '../components/dateDay'
import AddExerciseFAB from '../components/addExeciseFAB'

function HomeScreen({navigation}): React.JSX.Element {
    // const [dates, setDates] = useState([])

    const [isVisible, setIsVisible] = useState(true)
    const [isExtended, setIsExtended] = useState(true)
    const today = new Date()
    const [loading, setLoading] = useState(false)
    // use eachDayOfInterval
    const [lastDate, setLastDate] = useState(7)
    const [dates, setDates] =  useState([
            subDays(today,0),
            subDays(today,1),
            subDays(today,2),
            subDays(today,3),
            subDays(today,4),
            subDays(today,5),
            subDays(today,6),
        ]);
    type ItemProps = {item: Date};

    
    const fetchNextPage = () => {
        if (loading){
            return;
        }
        setLoading(true)
        const newDates = [
            subDays(today, lastDate),
            subDays(today, lastDate+1),
            subDays(today, lastDate+2),
            subDays(today, lastDate+3),
            subDays(today, lastDate+4),
            subDays(today, lastDate+5),
            subDays(today, lastDate+6),
        ]
        setLastDate(lastDate+7)
        setDates([...dates, ...newDates])
        setLoading(false)
    }
    
    
    function getRenderItem({item}: ItemProps): React.JSX.Element {
        
        return (
            <DateDayWithExercises date={item} />


              


        );
        // <Text style={{    
        //                 padding: 20,
        //                 margin: 10,}}>
        //             {format(item, "E")}
        //         </Text>
        //         <Text style={{    
        //                 padding: 20,
        //                 margin: 10,}}>
        //             {format(item, "do MMM yyyy")}
        //         </Text>
        //         <Button
        //             title='Deadlift'
        //             onPress={() => navigation.navigate('Exercise', {name: 'Deadlift'})}
        //         />
        //         <Text>
        //             --------------------------------
        //         </Text> 
    }

    const onScroll = ({ nativeEvent }) => {
        const currentScrollPosition =
          Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
        setIsExtended(currentScrollPosition <= 0);
    }
    
    return (
        <SafeAreaView>
            <FlatList onScroll={onScroll}
                data={dates}
                renderItem={getRenderItem}
                inverted={true}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.8}
            />
            <AddExerciseFAB
                label={'Track Exercise'}
                extended={isExtended}
                visible={isVisible}
                animateFrom={'right'}
                navigation={navigation}
            />
            
        </SafeAreaView>
    );
} 

export default HomeScreen;
