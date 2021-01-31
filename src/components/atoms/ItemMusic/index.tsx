import { ImageMusicDefault } from '@assets/images';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'
import MusicControl, { Command } from 'react-native-music-control'
import Sound from 'react-native-sound'
import ControlMusic from '../ControlMusic';
import { useSelector, useDispatch } from 'react-redux';
import { addItemMusicEdit, removeItemMusicEdit, setCurrentSound, setSound, setSoundStatus, showMusicControl } from '@services/redux/actions';
import { useNavigation } from '@react-navigation/native';
import { PLAYMUSIC } from '@config/constrans';


const ItemMusic = (item: any) => {
    const navigation = useNavigation();
    const editMode = useSelector((state: any) => state?.editMode)
    const [select, setSelect] = useState(false);
    const dispatch = useDispatch();
    const soundTask = useSelector((state: any) => state?.soundTask)

    useEffect(() => {
        if (select) {
            dispatch(addItemMusicEdit(item.data))
        }
        else {
            dispatch(removeItemMusicEdit(item.data))
        }
    }, [select])

    return (
        <TouchableOpacity
            style={[styles.constain]} activeOpacity={0.5}
            onPress={() => {
                if (editMode) {
                    setSelect(!select)
                }
                else {
                    let sound = new Sound(item.data.path, Sound.MAIN_BUNDLE, (error) => {
                        if (error) {
                            console.log('failed to load the sound', error);
                            return;
                        }
                        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
                    })
                    dispatch(setSound(sound))
                    dispatch(showMusicControl(true))
                    dispatch(setSoundStatus(true))
                    dispatch(setCurrentSound(item))
                    navigation.navigate(PLAYMUSIC, { data: item });
                }
            }}
        >
            {editMode ? (<View style={{ height: 62 }} >
                <CheckBox
                    containerStyle={{ padding: 0, justifyContent: 'center', alignItems: "center", flex: 1 }}
                    iconRight
                    size={20}
                    uncheckedColor={color.CHECKBOX_UNCHECK}
                    checkedColor={color.CHECKBOX_CHECK}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={select}
                    onPress={() => {
                        if (editMode) {
                            setSelect(!select)
                        }
                    }}
                />
            </View>) : null}
            <View
                style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', flex: 1, borderColor: color.LINE }}
            >
                <View style={styles.image}>
                    <Image
                        style={styles.image}
                        source={(item?.data.thumbnail != '') ? { uri: item?.data.thumbnail } : ImageMusicDefault}
                    />
                </View>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.title}
                >{item.data.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    constain: {
        height: 68,
        width: metric.DEVICE_WIDTH,
        flexDirection: 'row',

    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.TITLE,
        marginLeft: 12,
        marginRight: 80
    }
})

export default ItemMusic;