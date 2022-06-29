import React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


interface Props {
    iconName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const Fab = ({ iconName, onPress, style = {} }: Props) => {

    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Icon
                    name={iconName}
                    size={35}
                    color='#fff'
                    style={{ left: 1 }}
                />

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }

});