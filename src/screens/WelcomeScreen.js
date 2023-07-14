import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
    const navigation =  useNavigation()
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white-500">
      <View className="space-y-2">
        <Text style={{fontSize:wp(10)}} className="text-center font-bold  text-gray-700">
          Jarvis
        </Text>
        <Text style={{fontSize:wp(5)}}  className="text-center tracking-wider text-gray-600 font-semibold">
          Future is here powered by AI
        </Text>
      </View>

      <View className="flex-row justify-center ">
        <Image
          source={require('../assets/images/welcome.png')}
          style={{width:wp(70),height:wp(70)}}
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text style={{fontSize:wp(5)}} className="text-white font-bold text-2xl text-center">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
