import React, {useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform,
} from 'react-native';
import {VictoryPie} from 'victory-native';

import {Svg} from 'react-native-svg';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const Home = () => {
    function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignContent: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        width: 50,
                    }}
                    onPress={() => console.log('Back')}>
                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.primary,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        width: 50,
                    }}
                    onPress={() => console.log('More')}>
                    <Image
                        source={icons.more}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.primary,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderHeader() {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}>
                <View>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>My Expenses</Text>
                    <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>Sumary (private)</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center'}}>
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: COLORS.lightGray,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue,
                            }}
                        />
                    </View>
                    <View style={{marginLeft: SIZES.padding}}>
                        <Text style={{color: COLORS.primary, ...FONTS.h3}}>4 March, 2024</Text>
                        <Text style={{...FONTS.body3, color: COLORS.darkgray}}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
            {/* navbar section */}
            {renderNavBar()}

            {/* header section */}
            {renderHeader()}
        </View>
    );
};

export default Home;
