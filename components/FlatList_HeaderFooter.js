import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";

const dummyArray = [
  { id: 1, title: "Button" },
  { id: 2, title: "Card" },
  { id: 3, title: "Input" },
  { id: 4, title: "Avatar" },
  { id: 5, title: "CheckBox" },
  { id: 6, title: "Header" },
  { id: 7, title: "Icon" },
  { id: 8, title: "Lists" },
  { id: 9, title: "Rating" },
  { id: 10, title: "Pricing" },
  { id: 11, title: "Avatar" },
  { id: 12, title: "CheckBox" },
  { id: 13, title: "Header" },
  { id: 14, title: "Icon" },
  { id: 15, title: "Lists" },
];


const EmpthyListMessage = ({item})=>{
    return(
        <Text style={styles.item} 
        onPress={() => getItem(item)}
        >
            No Data Found
        </Text>
    )
}

const FlatList_HeaderFooter = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    return (
      //Flatlist item

      <View>
        <Text style={styles.item} onPress={() => getItem(item)}>
          {item.id + '.' + item.title.toUpperCase()}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      //Flatlist Item Separator

      <View
        style={{
          height: 0.5,

          width: "100%",

          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };


  const ListHeader = ()=>{
    //View to set in Header
    return (
        <View style= {styles.headerFooterStyle}>
            <Text style={styles.textStyle}>
               React Native Component
            </Text>
        </View>
    )
  }

  
  const ListFooter = ()=>{
    //View to set in Header
    return (
        <View style= {styles.headerFooterStyle}>
            <Text style={styles.textStyle}>
                Thai-Nichi Institue Of Technlogy
            </Text>
        </View>
    )
  }

  const getItem = (item) => {
    //Function ofr click on item

    alert("ID : " + item.id + " title : " + item.title);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={(item) => item.id.toString()}

          //Header to show above listview
          ListHeaderComponent={ListHeader}
          //Footer to show above listview
          ListFooterComponent={ListFooter}

          ListEmptyComponent={EmpthyListMessage }

        />
      </View>
    </SafeAreaView>
  );
};

export default FlatList_HeaderFooter;

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  itemStyle: {
    padding: 10,
  },
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#606070",
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    padding: 7,
  },
});
