import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function FlatList(props) {
  const { image, description } = props;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ImageDesc", {
      image,
      description,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.list}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 8,
  },
  image: {
    borderRadius: 8,
    width: 110,
    height: 110,
  },
});
