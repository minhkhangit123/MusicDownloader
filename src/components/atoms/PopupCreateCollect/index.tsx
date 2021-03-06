import { IconClose } from '@assets/svg';
import color from '@config/colors';
import metric from '@config/metrics';
import React, { Component, useState } from 'react';
import { View, Modal, StyleSheet, Alert, Text, TouchableOpacity, TextInput } from 'react-native';

interface PopupConfig {
    visiable: boolean
}

const PopupCreateCollect = (props: PopupConfig) => {
    const [visiable, setVisiable] = useState(props.visiable)

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visiable}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.constrainOpacity}></View>
            <TouchableOpacity
                style={styles.centeredView}
                onPress={() => { setVisiable(false) }}
                activeOpacity={1}
            >
                <View style={styles.modalView}>
                    <View style={{ height: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.title}>Create Collection</Text>
                    </View>
                    <View style={{ height: 20, flexDirection: 'row', marginTop: 12, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#8c8c8c" }}>Please enter the name:</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="New Name"
                        placeholderTextColor={color.PLACEHOLDER}
                        selectionColor={color.PLACEHOLDER}
                        multiline={false}
                        numberOfLines={1}
                    />
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: color.BG_CARD }]}
                            onPress={() => { setVisiable(false) }}
                        >
                            <Text style={{ fontSize: 16, color: color.TITLE }}>Cancle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontSize: 16, color: color.TITLE }}>Done</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: metric.DEVICE_WIDTH - 66,
        height: 200,
        backgroundColor: color.BG_CARD,
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    title: {
        textAlign: "center",
        color: color.TITLE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: color.BG_INPUT,
        marginTop: 16,
        borderRadius: 20,
        paddingHorizontal: 16,
        height: 40,
        fontSize: 16,
        color: color.TITLE
    },
    button: {
        height: 40,
        width: 96,
        marginTop: 16,
        borderRadius: 20,
        backgroundColor: color.BUTTON_SHUFFLE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    constrainOpacity: {
        backgroundColor: '#000',
        opacity: 0.85,
        position: 'absolute',
        top: 0,
        left: 0,
        height: metric.DEVICE_HEIGHT,
        width: metric.DEVICE_WIDTH
    }
});

export default PopupCreateCollect;