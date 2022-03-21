import React from 'react';

import { View,Image,ScrollView, TouchableOpacity,StyleSheet } from 'react-native';

import { Title,TitleHeader,Name,Descript } from '../profile/styles';

//components
import Followers from '../../components/Followers';
import Playlists from '../../components/Playlists';

const Profile = ({navigation}) => {
    
    return(
        <ScrollView style={styles.profileContainer}>

            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/images/dojaProfile.png')} style={styles.profile}/>
                </TouchableOpacity>
               
                <View style={styles.description}>
                    <TitleHeader>PERFIL</TitleHeader>
                    <Name>Amanda</Name>
                    <Descript>5 seguidores</Descript>
               </View>   

            </View>

            <Title>Seguidores</Title>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <View style={styles.followerContainer}>
                    <Image source={require('../../assets/images/serenaProfile.png')} style={styles.profilePic}/>
                    <Followers name={'Serena'}/>
                </View>

                <View style={styles.followerContainer}>
                    <Image source={require('../../assets/images/charlieProfile.png')} style={styles.profilePic}/>
                    <Followers name={'Mário'}/>
                </View>

                <View style={styles.followerContainer}>
                    <Image source={require('../../assets/images/lorenaProfile.png')} style={styles.profilePic}/>
                    <Followers name={'Lorena'}/>
                </View>

                <View style={styles.followerContainer}>
                    <Image source={require('../../assets/images/juniorProfile.png')} style={styles.profilePic}/>
                    <Followers name={'Júnior'}/>
                </View>

                <View style={styles.followerContainer}>
                    <Image source={require('../../assets/images/robertaProfile.png')} style={styles.profilePic}/>
                    <Followers name={'Roberta'}/>
                </View>
                
            </ScrollView> 

            <Title>Playlists</Title>           
            <View style={styles.playlists}>
                <View style={styles.playlistsEach}>
                    <Image source={require('../../assets/images/playlistOld.png')} style={styles.photo}/>
                    <Playlists title={'Old'} user={'Amanda'}/>
                </View>

                <View style={styles.playlistsEach}>
                    <Image source={require('../../assets/images/playlistPop.png')} style={styles.photo}/>
                    <Playlists title={'Pop'} user={'Amanda'}/>
                </View>

                <View style={styles.playlistsEach}>
                    <Image source={require('../../assets/images/playlistRap.png')} style={styles.photo}/>
                    <Playlists title={'Rap'} user={'Amanda'}/>
                </View>

                <View style={styles.playlistsEach}>
                    <Image source={require('../../assets/images/playlistTwenty.png')} style={styles.photo}/>
                    <Playlists title={'21 One Pilots'} user={'Amanda'}/>
                </View>

                <View style={styles.playlistsEach}>
                    <Image source={require('../../assets/images/playlistMpb.png')} style={styles.photo}/>
                    <Playlists title={'MPB delícia'} user={'Amanda'}/>
                </View>

                <View style={styles.playlistsEach}>
                    <Image source={require('../../assets/images/playlistFrancesa.png')} style={styles.photo}/>
                    <Playlists title={'Francesinha'} user={'Amanda'}/>
                </View>
            </View>
        
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingHorizontal:'4%',
        paddingVertical:'4%',
        marginBottom: '4%'
    },
    header:{
        flexDirection:'row',
        marginTop: '3%',
        marginBottom: '3%'
    },
    profile: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    description:{
        marginLeft:'5%',
        marginTop:'6.5%',
    },
    followerContainer:{
        flexDirection:'row',
        width: 130,
        height: 60,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#DBDBDB',
        marginTop: 10,
        alignItems:'center'
    },
    profilePic:{
        height: 40,
        width: 40,
        borderRadius: 20,
        marginHorizontal:'5%',
    },
    playlists:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    playlistsEach:{
        borderRadius: 10,
        backgroundColor: '#DBDBDB',
        alignItems: 'center',
        width: 180,
        height: 250,
        marginTop: 15,
    },
    photo:{
        width: 150,
        height: 150,
        backgroundColor:'#AAC2D0',
        marginTop: 20,
        borderRadius: 10,
    }, 
})

export default Profile;