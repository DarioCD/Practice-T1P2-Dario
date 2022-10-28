import { StyleSheet, Text, View, Image} from "react-native";

const ListItem = ({
    productName,
    productQuantity,
}) => {

    return (
        <View style={styles.listItem}>
            <Image style={styles.productImage} source={require("../assets/fruta_Goyo.png")} />
            <Text style={styles.compra}>
                {productQuantity} x {productName}
            </Text>
        </View>
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
    }
});
