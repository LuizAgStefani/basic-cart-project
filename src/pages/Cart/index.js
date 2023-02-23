import { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CardItem from "../../components/CardItem";
import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
        renderItem={({ item }) => (
          <CardItem
            removeAmount={() => removeItemCart(item)}
            addAmount={() => addItemCart(item)}
            data={item}
          />
        )}
        ListFooterComponent={() => (
          <Text style={styles.total}>Total R$ {total}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
