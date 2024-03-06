import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from "@rneui/base";


export default function ImageDesc({ route }) {
  const { image, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.image}
      />
      <View style={styles.likes}>
        <Text style={{ fontSize: 18, marginRight: 8 }}>15</Text>
        <Icon name="thumb-up-outline" type="material-community" size={25} color="black" />
        <Icon name='send' type='material-community' size={25} color="black" style={{ marginLeft: '67%' }}></Icon>
        <Icon name='arrow-left-top' type='material-community' size={28} color="black"></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '12%',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  description: {
    textAlign: 'center',
    marginBottom: '5%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  likes: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '4%',
  }
});