import { useState } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import ProductInput from "../PracticaT1P2/components/ProductInput";
import ListItem from "../PracticaT1P2/components/ListItem";
import { v4 as uuidv4 } from "uuid";

export default function App() {
    const [products, setProducts] = useState([]);
    const addProductHandler = (productName, productQuantity, productType) => {
        const newProduct = {
            id: uuidv4(),
            name: productName,
            quantity: productQuantity,
            bought: false,
            type: productType,
        };

        setProducts(() => [...products, newProduct]);
    };
    return (
        <View style={styles.container}>
            <ProductInput onProductAdd={addProductHandler} />
            <ScrollView style={styles.productList}>
                {products.length === 0 ? (
                    <Text style={styles.noProducts}>Aún no hay productos</Text>
                ) : (
                    products.map((product, idx) => (
                        <ListItem
                            key={product.id}
                            id={product.id}
                            productBought={product.bought}
                            productName={product.name}
                            productQuantity={product.quantity}
                            productType={product.type}
                        />
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007A3E",
        justifyContent: "flex-start",
    },
    productList: {
        flex: 5,
        width: "90%",
        marginTop: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
    },
    noProducts: {
        fontSize: 30,
        textAlign: "center",
    },
});
