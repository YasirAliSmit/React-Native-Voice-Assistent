import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feature from '../components/feature';
import {dummyMessages} from '../constants';
import Voice from '@react-native-community/voice';
const HomeScreen = () => {
  const [messege, setMesseges] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [result,setResult] = useState('')
  const speechStartHandler = e => {
    console.log('speach Start Handler');
  };
  const speechEndHandler = e => {
    console.log('speach End Handler');
    setRecording(false);
  };

  const speechResultHandler = e => {
    console.log('speach Result Handler', e);
    const text = e.value[0]
    setResult(text)
  };
  const speechErrorHandler = e => {
    console.log('speach Error Handler', e);
  };
  const clear = () => {
    setMesseges([]);
  };
  const stopSpeaking = () => {
    setSpeaking(false);
  };
  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-GB');
    } catch (error) {
      console.log('this error from Voice Start', error);
    }
  };
  const stopRecording = async () => {
    
    try {
      await Voice.stop();
      setRecording(false)
    } catch (error) {
      console.log('this error from Voice Start', error);
    }
  };
  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultHandler;
    Voice.onSpeechError = speechErrorHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  console.log(result)
  return (
    <View className="flex-1 flex bg-white">
      <SafeAreaView className="flex flex-1 mx-5">
        <View className="flex-row justify-center ">
          <Image
            className="mt-4"
            source={require('../assets/images/bot.png')}
            style={{width: hp(15), height: hp(15)}}
          />
        </View>
        {/* feature messeges */}
        {messege.length > 0 ? (
          <View style=" flex-1 space-y-2 ">
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1">
              Assistant
            </Text>
            <View
              style={{height: hp(58)}}
              className="bg-neutral-200 rounded-2xl p-4">
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                className="spacing-y-4">
                {messege.map((messege, index) => {
                  if (messege.role == 'assistant') {
                    if (messege.content.includes('https')) {
                      return (
                        <View key={index} className="flex-row justify-start ">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image
                              style={{width: wp(60), height: wp(60)}}
                              resizeMode="contain"
                              className="rounded-2xl"
                              source={{uri: messege.content}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      //text response
                      return (
                        <View
                          key={index}
                          className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                          style={{width: wp(70)}}>
                          <Text className="my-1">{messege.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} className="flex-row my-1 justify-end">
                        <View
                          className="bg-white rounded-xl p-2 rounded-tr-none"
                          style={{width: wp(70)}}>
                          <Text className="my-1">{messege.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Feature />
        )}
      </SafeAreaView>
      <View className="flex  justify-center items-center">
        {recording ? (
          <TouchableOpacity onPress={stopRecording}>
            {/* {Recording  Stop button} */}
            <Image
              style={{width: hp(10), height: hp(10)}}
              className="rounded-full"
              source={require('../assets/images/voiceLoading.gif')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={startRecording}>
             {/* {Recording  Start button} */}
            <Image
              style={{width: hp(10), height: hp(10)}}
              className="rounded-full"
              source={require('../assets/images/recordingIcon.png')}
            />
          </TouchableOpacity>
        )}

        {messege.length > 0 && (
          <TouchableOpacity
            onPress={clear}
            className="bg-neutral-400 rounded-2xl p-2  absolute right-10">
            <Text className="text-white text-lg font-semibold">Clear</Text>
          </TouchableOpacity>
        )}

        {speaking && (
          <TouchableOpacity
            onPress={stopSpeaking}
            className="bg-red-400 rounded-2xl p-2  absolute left-10">
            <Text className="text-white text-lg font-semibold">Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
