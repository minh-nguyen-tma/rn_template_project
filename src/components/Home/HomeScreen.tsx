import React from 'react';
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationConstants } from "../../navigation/NavigationConstants";

export default function HomeScreen(props: any) {
   return (
      <SafeAreaView style={styles.container}>
         <Text>
            {NavigationConstants.Home}
         </Text>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   }
});