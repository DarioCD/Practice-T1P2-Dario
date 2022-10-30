import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const changeTextHandlerName = (value) => {
        setProductName(value);
    }
    const [productQuantity, setProductQuantity] = useState('Cantidad:');
    const changeTextHandlerQuantity = (value) => {
        value = value.label
        setProductQuantity(value);
    }
    const [productType, setproductType] = useState('Típo:');
    const changeTextHandlerProduct = (value) => {
        value = value.label
        setproductType(value);
    }
    const addProductHandler = () => {
        const sanitizedName = productName.trim();
        const sanitizedQuantity = productQuantity.trim();
        const sanitizedType = productType.trim();
        if (sanitizedName.trim() !== '' && sanitizedQuantity.trim() !== 'Cantidad:' && sanitizedType.trim() !== 'Típo:') {
            onProductAdd(sanitizedName, sanitizedQuantity, sanitizedType);
        }
        setProductName('');
        setProductQuantity('Cantidad:');
        setproductType('Típo:');
        console.log(`\n-------------------\nPRODUCTO AÑDIDO:\nNOMBRE : ${sanitizedName}\nCANTIDAD : ${sanitizedQuantity}\nTIPO : ${sanitizedType}\n-------------------`);
    }
    const dataType = [
        { key: 1, section: true, label: 'Típo' },
        { key: 2, label: 'fruit' },
        { key: 3, label: 'vegetable' },
        { key: 4, label: 'bakery' },
        { key: 5, label: 'fish' },
        { key: 6, label: 'meat' },
    ];
    const dataQuantity = [
        { key: 1, section: true, label: 'Cantidad' },
        { key: 2, label: '1' },
        { key: 3, label: '2' },
        { key: 4, label: '3' },
        { key: 5, label: '4' },
        { key: 6, label: '5' },
        { key: 7, label: '6' },
        { key: 8, label: '7' },
        { key: 9, label: '8' },
        { key: 10, label: '9' },
        { key: 11, label: '10' }
    ];

    return (
        <View style={styles.productInput}>
            <View style={styles.productItems}>
                <TextInput style={styles.porductName} placeholderTextColor='lightgrey'
                    placeholder='Nombre del producto: '
                    color='lightgrey'
                    keyboardType="default"
                    onChangeText={changeTextHandlerName}
                    value={productName}>
                </TextInput>
                <ModalSelector style={styles.productQuantity}
                    data={dataQuantity}
                    initValue={productQuantity}
                    onChange={changeTextHandlerQuantity} />
            </View>
            <View style={styles.productItems}>
                <ModalSelector style={styles.ProductType}
                    data={dataType}
                    initValue={productType}
                    onChange={changeTextHandlerProduct} />
                <Button color="black"
                    title='Añadir'
                    onPress={addProductHandler}>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 120,
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        shadowOffset: { width: -1, height: 5 },
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 6,
        marginTop: 40,
        backgroundColor: '#FFAE3B'
    },
    productItems: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 80,
        borderRadius: 5,
    },
    porductName: {
        padding: 9,
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    productQuantity: {
        backgroundColor: 'black',
        borderRadius: 5,
    },
    ProductType: {
        backgroundColor: 'black',
        borderRadius: 5,
    }

})

export default ProductInput