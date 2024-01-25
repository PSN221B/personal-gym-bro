import { format, subDays } from 'date-fns';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

function Home(): React.JSX.Element {
    // const [dates, setDates] = useState([])

    const today = Date()
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
            <>
                <Text style={{    
                        padding: 20,
                        margin: 10,}}>
                    {format(item, "E")}
                </Text>
                <Text style={{    
                        padding: 20,
                        margin: 10,}}>
                    {format(item, "do MMM yyyy")}
                </Text>
                <Text>
                    --------------------------------
                </Text>

            </>
        );
    }

    return (
    <View>
        <FlatList
            data={dates}
            renderItem={getRenderItem}
            inverted={true}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.8}
        />
        
    </View>
    );
} 

export default Home;