import { StyleSheet } from "react-native";
import * as React from 'react';
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View} from "../components/Themed";
import { Button, Image } from 'react-native';
import { RootTabScreenProps } from "../types";
import colors from '../Themes/Colors';
import organizations from "../data/organizations.js";
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function OrgInfo({route}) {
    const navigation = useNavigation();

    const params = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.title_and_logo_section}>
                    <Text style={styles.title}>{params.name}</Text>
                    <Image style={styles.logo} source={params.logo}></Image>
                </View>

                <View style={styles.link_section}>
                    <View style={styles.link}></View>
                </View>

                <View style={styles.description_box}>
                    <Text style={styles.description_text}>{params.info}</Text>
                </View>

                <View style={styles.confirm_section}>
                    <Button 
                        title='CONFIRM'
                        onPress={() => (navigation.navigate('Root'))}
                        color={colors.darkgreen} />
                </View>
            </View>
        </View>
      
  );
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : colors.lightgreen,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    category_text: {
        fontSize: 20,
        paddingLeft: '10%',
        textAlign: 'left',
    },
    box: {
        backgroundColor: colors.background,
        maxWidth: '80%',
        maxHeight: '80%',
    },
    title_and_logo_section: {
        flex: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        flexWrap: 'wrap',
        flex: 2,
        paddingLeft: 10
    },
    logo: {
        resizeMode: 'contain',
        height: '100%',
        flex: 1,
        alignSelf: 'center',
    },
    link_section: {
        flex: 0.5,
        alignSelf: 'center',
        flexDirection: 'row',
        padding: '5%',
    },
    link: {
        alignSelf: 'flex-start',
        backgroundColor: colors.lightblue,
        borderRadius: 15,
        maxWidth: '20%'
    },
    description_box: {
        flex: 3,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    description_text: {
        textAlign: 'left',
        fontSize: 17,
        flexWrap: 'wrap',
        padding: 10
    },
    confirm_section: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: '5%'
    }

});
