import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
      data={[{ id: 1 }]}
      keyExtractor={(item) => item.$id}
      renderItem={( item ) => {
        <Text className="text-3xl">{item.id}</Text>
      }}
      ListHeaderComponent={() => (
        <View className="flex my-6 px-4 space-y-6">
          <View className="flex justify-between items-start flex-row mb-6">
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome Back
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                JSMastery
              </Text>
            </View>

            <View className="mt-1.5">
              <Image
                source={images.logoSmall}
                className="w-9 h-10"
                resizeMode="contain"
              />
            </View>
          </View>

          <SearchInput />

          <View className="w-full flex-1 pt-5 pb-8">
            <Text className="text-lg font-pregular text-gray-100 mb-3">
              Latest Videos
            </Text>

            <Trending posts={latestPosts ?? []} />
          </View>
        </View>
      )} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})