import {Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Feature = () => {
  return (
    <View style={{height: wp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Feature
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            style={{width: wp(5), height: wp(5)}}
            source={require('../assets/images/chatgptIcon.png')}
          />
          <Text
            className="font-semibold text-gray-700"
            style={{fontSize: wp(4.8)}}>
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT is an AI language model developed by OpenAI. It text responses
          based on the input it receives. It uses a deep learning architecture
          called GPT-3.5 and has been trained on a vast amount of text data.
          ChatGPT can provide information
        </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            style={{width: wp(5), height: wp(5)}}
            source={require('../assets/images/dalleIcon.png')}
          />
          <Text
            className="font-semibold text-gray-700"
            style={{fontSize: wp(4.8)}}>
            DALL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
        DALL-E is an advanced AI model developed by OpenAI that combines the power of deep learning and generative algorithms to create unique images based on textual descriptions, pushing the boundaries of visual creativity and imagination.
        </Text>
      </View>
      <View className="bg-emerald-300 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            style={{width: wp(5), height: wp(5)}}
            source={require('../assets/images/smartaiIcon.png')}
          />
          <Text
            className="font-semibold text-gray-700"
            style={{fontSize: wp(4.8)}}>
            Smart Ai
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
        "Smart AI" is a term commonly used to describe artificial , such as problem-solving, learning, reasoning, and decision-making, enabling them to perform complex tasks and provide intelligent solutions in various domains
        </Text>
      </View>
    </View>
  );
};

export default Feature;
