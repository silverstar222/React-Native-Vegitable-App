import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image,
    StatusBar
} from "react-native";
const { width, height } = Dimensions.get('window')
import image from "./../../config/image";
import styles from './styles';
import BottomTabBar from './../../components/BottomTabBar/BottomTabBar.js';
import ProgressCircle from 'react-native-progress-circle'
import Swiper from 'react-native-swiper';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View>
                    <ImageBackground
                        source={image.pattern}
                        style={{ width: "100%", height: 120, }}
                    >
                        <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Image source={image.profile} style={{ height: 25, width: 25, resizeMode: 'cover' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Image source={image.search} style={{ height: 25, width: 25, resizeMode: 'cover' }} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView>
                <StatusBar
    backgroundColor="#EEE0CB"
    barStyle="light-content"
  />
                    <View style={{ backgroundColor: '#FFFBF5', flex: 1, paddingBottom: 20 }}>
                        <View style={{ height: 150, width: '100%', }} >
                            <Swiper
                                style={{ backgroundColor: '#fff' }}
                                activeDotColor='transparent'
                                dotStyle={{ width: 0, height: 0, }}
                                showsButtons={true}
                                // loop={false}
                                buttonWrapperStyle={{ width: '76%', marginLeft: '12%' }}
                                nextButton={<Image source={image.backicon} style={{ width: 9, height: 15, resizeMode: 'contain', }} />}
                                prevButton={<Image source={image.back_icon} style={{ width: 9, height: 15, resizeMode: 'contain' }} />}

                            >

                                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }} >
                                    <View style={styles.slide1}>
                                        <Image source={image.calendar} style={{ paddingBottom: 6, width: 25, height: 25, resizeMode: 'contain' }} />
                                        <Text style={styles.text}>Today</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }} >
                                    <View style={styles.slide1}>
                                        <Image source={image.calendar} style={{ paddingBottom: 6, width: 25, height: 25, resizeMode: 'contain' }} />
                                        <Text style={styles.text}>Beautiful</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }} >
                                    <View style={styles.slide1}>
                                        <Image source={image.calendar} style={{ paddingBottom: 6, width: 25, height: 25, resizeMode: 'contain' }} />
                                        <Text style={styles.text}>Today</Text>
                                    </View>
                                </View>
                            </Swiper>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodayDetails'); }} style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Image source={image.cauliflower} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Dark Greens</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>5 Ingredients </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodayDetails'); }} style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    {/* <Image source={image.carrot} style={{ height: 50, width: 50, resizeMode: 'stretch' }} /> */}
                                    <Image source={image.carrot} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Vegetables</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>8 Ingredients</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodayDetails'); }} style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Image source={image.grapes} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Fruits</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>6 Ingredients</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodayDetails'); }} style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Image source={image.dish} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Protein</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>2 Ingredients </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodayDetails'); }} style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Image source={image.potatoes2} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Carbs</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>2 Ingredients </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TodayDetails'); }} style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Image source={image.avocado} style={{ height: 50, width: 25, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Fats</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>2 Ingredients </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ backgroundColor: '#EEE0CB', paddingVertical: 10, borderRadius: 7, flexDirection: 'row', marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Image source={image.water} style={{ height: 50, width: 25, resizeMode: 'stretch' }} />
                                </View>
                                <View style={{ marginRight: 10, justifyContent: 'center', flex: 0.6, }}>
                                    <Text style={{ fontSize: 17, flexWrap: 'wrap', fontFamily: 'Hind-Regular', color: '#E1A25B', letterSpacing: 2, }}>Water</Text>
                                    <Text style={{ fontSize: 12, color: '#BAA898', fontFamily: 'Hind-Regular', letterSpacing: 2, }}>2 lt</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.3, }}>
                                    <View>
                                        <ProgressCircle
                                            percent={80}
                                            radius={25}
                                            borderWidth={5}
                                            color="#BFD7EA"
                                            shadowColor="rgba(191, 215, 234, 0.30)"
                                            bgColor="#EEE0CB"
                                        >
                                            <Text style={{ fontSize: 9, color: '#BAA898', fontFamily: 'Hind-Medium', letterSpacing: 2, }}>{80}g</Text>
                                            {/* <Text style={{ fontSize: 14 }}> g </Text> */}
                                        </ProgressCircle>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Image source={image.backicon} style={{ height: 19, width: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <View>
                    <BottomTabBar {...this.props} title={'Chats'} />
                </View>
            </View>

        );
    }
}

