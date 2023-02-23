import { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);

  const navigation = useNavigation();

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Coca cola",
      price: 19.9,
    },
    {
      id: "2",
      name: "Chocolate",
      price: 6.5,
    },
    {
      id: "3",
      name: "Queijo 500g",
      price: 15,
    },
    {
      id: "4",
      name: "Batata Frita",
      price: 23.9,
    },
    {
      id: "5",
      name: "Guaraná Lata",
      price: 6.0,
    },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.cartButton}
        >
          {cart.length > 0 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cart?.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product addToCart={() => handleAddCart(item)} data={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
});
