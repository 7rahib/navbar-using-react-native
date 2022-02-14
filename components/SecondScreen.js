import * as React from "react"
import { Text, View } from "react-native"

function SecondScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 30 }}>Second Screen</Text>
        </View>
    )
}

export default SecondScreen