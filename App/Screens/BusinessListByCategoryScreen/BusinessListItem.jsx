import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


export default function BusinessListItem({business, booking}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} 
    onPress={()=>navigation.push('business-detail', 
    {
      business:business
    })
    }>
      <Image source={{uri:business?.images[0]?.url}} 
        style={styles.image}
      />
      <View style={styles.subContainer}>
          <Text style={{fontFamily: 'outfit', 
          color: Colors.GRAY, fontSize: 15}}>
            {business.contactPerson}</Text>
          <Text style={{fontFamily: 'outfit-bold', fontSize: 19}}>{business.name}</Text>
          
         {!booking?.id? <Text style={{fontFamily: 'outfit', color: Colors.GRAY, fontSize: 14}}>
          <Ionicons name="location-sharp" size={20} 
          color={Colors.PRIMARY}/>
          {business.address}</Text> 
          :
          <Text style={[{
            padding: 5, borderRadius: 5, fontSize: 13,
            alignSelf: 'flex-start'},
            booking?.bookingStatus=='Completed'?
            {backgroundColor:Colors.LIGHT_GREEN, color:Colors.GREEN}:
            booking.bookingStatus=='Canceled'?
            {backgroundColor:Colors.LIGHT_RED,color:Colors.RED}:
            {color:Colors.PRIMARY,
              backgroundColor:Colors.PRIMARY_LIGHT}]}> 
              {booking?.bookingStatus}</Text>
          }

          {booking?.id?
          <Text style={{fontFamily:'outfit',
            color:Colors.GRAY, fontSize:14}}>
            <AntDesign name="calendar" size={20} 
            color={Colors.PRIMARY} />
            {booking.date} at {booking.time} </Text>
            :null}

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },

  subContainer: {
    display: 'flex',
    gap: 8

  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  }
})