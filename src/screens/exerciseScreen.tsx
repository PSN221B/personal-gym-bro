import React from "react";
import { Text } from "react-native";

const ExerciseScreen = ({navigation, route}) => {
    return (
        <Text>
            {route.params.name}
        </Text>
    );
}


export default ExerciseScreen;