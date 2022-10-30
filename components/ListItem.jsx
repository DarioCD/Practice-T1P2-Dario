import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const ListItem = ({
    id,
    productBought,
    productName,
    productQuantity,
    productType,
    onProductRemove,
}) => {
    let photo = "";
    if (productType === "fruit") {
        photo = require("../assets/fruta_Goyo.png");
    } else if (productType === "vegetable") {
        photo = require("../assets/vegetable_Goyo.png");
    } else if (productType === "bakery") {
        photo = require("../assets/bakery_Goyo.png");
    } else if (productType === "fish") {
        photo = require("../assets/fish_Goyo.png");
    } else if (productType === "meat") {
        photo = require("../assets/meat_Goyo.png");
    }

    return (
        <Pressable onPress={() => onProductRemove(id)}>
            {productBought ? (
                <View style={styles.listItem} backgroundColor="grey">
                    <Image style={styles.productImage} source={photo} />
                    <Text style={styles.compraBought}>
                        {productQuantity} x {productName}
                    </Text>
                </View>
            ) : (
                <View style={styles.listItem} backgroundColor="#FFAE3B">
                    <Image style={styles.productImage} source={photo} />
                    <Text style={styles.compra}>
                        {productQuantity} x {productName}
                    </Text>
                </View>
            )}
        </Pressable>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        padding: 4,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#FFAE3B",
        shadowOffset: { width: -1, height: 5 },
        shadowColor: "#171717",
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    productImage: {
        width: 50,
        height: 50,
    },
    compra: {
        marginRight: 20,
        fontSize: 30,
    },
    compraBought: {
        marginRight: 20,
        fontSize: 30,
        textDecorationLine: "line-through",
    },
});
