import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    contact: {
        padding: 20
    }
})

const Row = props => (
    <View style={styles.contact}> 
	<Text>{props.name}</Text>
	<Text>{props.phone}</Text>
    </View>
)

export default Row
