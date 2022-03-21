import React from 'react';

import {StyleSheet,Image,ScrollView,TouchableOpacity,View} from 'react-native';

//styles
import {Search, Title, TitleHeader } from './styles';

//icons
import {MaterialIcons} from '@expo/vector-icons';

//components
import Block from '../../components/Block';
import MusicCard from '../../components/MusicCard';


const Home = ({navigation}) => {

    return(
        <ScrollView style={styles.homeContainer}>
                
            <View style={styles.header}>

                <TitleHeader>EJCMúsica</TitleHeader>

                <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
                    <Image 
                        source={require('../../assets/images/dojaProfile.png')} 
                        style={styles.profile}/>            
                </TouchableOpacity>

            </View>

            <View style={styles.searchContainer}>
                <MaterialIcons name='search' size={30}/>
                <Search placeholder='Artistas, músicas ou álbuns'/>
            </View>
            
            <View>
                <Title>Navegar por todas as seções</Title>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles.secao}>
                        
                        <Block blockTitle={'MPB'} />
                        <Block blockTitle={'KPOP'} />
                        <Block blockTitle={'FUNK'} />
                        <Block blockTitle={'ROCK'} />
                        <Block blockTitle={'SAMBA'} />
                        <Block blockTitle={'PAGODE'}/>

                    </View>    

                </ScrollView>
            </View>

            <Title>Tocado recentemente</Title>
            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumBillie.png')} 
                        style={styles.album}/>
                <MusicCard title={'Happier Than Ever'} singer={'Billie Eilish'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumJorge.png')} 
                        style={styles.album}/>
                <MusicCard title={'Amiga da minha mulher'} singer={'Seu Jorge'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumAnimals.png')} 
                        style={styles.album}/>
                <MusicCard title={'Life Itself'} singer={'Glass Animals'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumIu.png')} 
                        style={styles.album}/>
                <MusicCard title={'Ending Scene'} singer={'IU'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumMilton.png')} 
                        style={styles.album}/>
                <MusicCard title={'O que será?'} singer={'Milton Nascimento'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumWings.png')} 
                        style={styles.album}/>
                <MusicCard title={'Reflection'} singer={'BTS'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumTroye.png')} 
                        style={styles.album}/>
                <MusicCard title={'Talk Me Down'} singer={'Troye Sivan'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumQueen.png')} 
                        style={styles.album}/>
                <MusicCard title={'Under Pressure'} singer={'Queen, David Bowie'}/>
            </View>
            
            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumShinee.png')} 
                        style={styles.album}/>
                <MusicCard title={'Replay'} singer={'SHInee'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumAurora.png')} 
                        style={styles.album}/>
                <MusicCard title={'A different kind of human'} singer={'AURORA'}/>
            </View>

            <View style={styles.albumContainer}>
                <Image 
                        source={require('../../assets/images/albumSleeping.png')} 
                        style={styles.album}/>
                <MusicCard title={'Sun'} singer={'Sleeping At Last'}/>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        paddingHorizontal:'4%',
        paddingVertical:'4%'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
    },
    profile: {
        height: 55,
        width: 55,
        borderRadius: 30,
    },
    searchContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:'white',
        paddingVertical: 6,
        borderRadius:10,
        marginTop:10,
    },
    secao:{
        flexDirection: 'row',
        flex: 1,
        marginVertical: 5,
        marginTop:10,
    },
    albumContainer:{
        paddingTop:10,
        flexDirection:'row',
    },    
    album:{
        width: 60,
        height: 60,
    },
})

export default Home;