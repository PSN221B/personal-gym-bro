import React from "react";
import { Text } from "react-native";

const Exercise = ({navigation, route}) => {
    return (
        <Text>
            {route.params.name}
        </Text>
    );
}


export default Exercise;