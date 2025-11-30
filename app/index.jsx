import { useState } from 'react';
import { View, Text, Image, TextInput, Button, Alert, FlatList } from 'react-native';


export default function Home() {
  const [hobby, setHobby] = useState([])
  const [targetVal, setTargetVal] = useState()
  
  const addHobby = (value) =>{
    if (value == null || value === ''){
      Alert.alert("The form is blank!")
      return
    }
    const formVal = value;
    setHobby(prev => [...prev, value])
    Alert.alert(`${formVal} has been added!`)
  }

  const deleteHobby = (value) => {
    setHobby(prev => prev.filter( item => item !== value))
  }

  return (
    <View className='mx-8'>

      {/* profile image and name section */}
      <View className='mx-auto mt-5 flex flex-col justify-center items-center gap-3'>
        <Image source={require('../assets/images/profile-picture.jpg')} className='rounded-full w-48 h-48'/>
        <Text className='text-center font-bold text-2xl mt-2'>Asif Mahmud</Text>
        <Text className='text-center text-gray-500 text-lg'>App developer with a passion for {"\n"} learning and serving Allah</Text>
      </View>
      
      {/* Hobby section */}
      <View className='mt-9 flex flex-col justify-center gap-4'>
        <Text className='text-xl font-bold'>Hobbies</Text>
        <View className='flex flex-row gap-2'>
          <TextInput
          placeholder='Add a hobby'
          value={targetVal}
          className='border px-2 py-3 mb-3 rounded-md text-md flex-1'
          // value=
          onChangeText={setTargetVal}
          />
          <View className=''>
            <Button 
              title='Add' 
              color='black'
              onPress={() => addHobby(targetVal)}
            />
          </View>
        </View>

        {/* Hobby list */}
        { hobby.length > 0 ?
          <FlatList
          data={hobby}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => (
            <View className='flex flex-row justify-between'>
              <View className='pb-5 flex flex-row items-center gap-4'>
                <Image
                  source={require('../assets/images/stop.png')}
                  className='w-6 h-6'
                />
                <Text className='text-2xl'>{item}</Text>
              </View>
              <View>
                <Button
                  title='Delete'
                  onPress={()=>deleteHobby(item)}
                />
              </View>
            </View>

          )}
        />
        :
        <Text className='text-black text-center'>Add your hobbies here {"\n"} so you can remember who you are!</Text>
        }
      </View>

      
    </View>
  );
}

