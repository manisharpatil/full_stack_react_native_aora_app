import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native-web';
import { Link } from 'expo-router';


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
      <View className="w-full justify-center items-center
      h-full px-4">
        <Image 
        source={}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}