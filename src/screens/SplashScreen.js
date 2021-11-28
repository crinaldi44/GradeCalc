import React, {useRef, useState, useEffect} from "react";
import {View, Text, StyleSheet, ImageBackground, Dimensions, Image, Animated} from "react-native";
import PagerView from "react-native-pager-view";
import Button from "../components/Button";

/**
 * Represents the first component displayed upon app entry.
 * @constructor
 */
const SplashScreen = ({navigation}) => {

    /**
     * Mark: Properties.
     */
    const [currPage, setCurrPage] = useState(0);
    const pager = useRef(PagerView)

    const translateHero = useRef(new Animated.Value(1000)).current
    const visibilityHero = useRef(new Animated.Value(0)).current

    const translateInfo = useRef(new Animated.Value(40)).current
    const opacityInfo = useRef(new Animated.Value(0)).current

    useEffect(() => {
        fadeInUp()
    }, [])

    /**
     * Animates the component by fading in and up.
     */
    const fadeInUp = () => {

        const anim1 = Animated.timing(translateHero, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        })
        
        const anim2 = Animated.timing(visibilityHero, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        })

        const animateHero = Animated.stagger(1000, [anim1, anim2])

        const animInfo1 = Animated.timing(translateInfo, {
            to: 0,
            duration: 1000,
            useNativeDriver: true
        })

        const animInfo2 = Animated.timing(opacityInfo, {
            to: 1,
            duration: 500,
            useNativeDriver: true
        })
        
        const animateInfo = Animated.stagger(200, [animInfo1, animInfo2])

        Animated.stagger(1750, [animateHero, animateInfo]).start()
    }


    /**
     * Represents action taken when the user presses the continue button.
     */
    function didPressContinue() {
        if (currPage === 3) {
            //TODO: Add navigation.
            return
        } else {
            setCurrPage(currPage + 1);
        }
        pager.current.setPage(currPage)
    }

    return(
        <ImageBackground style={styles.background} source={require('../../assets/bg-base.png')}>
            <PagerView style={styles.pagerSection}
                       ref={pager}
                       initialPage={0}
                       scrollEnabled={true}
                       showPageIndicator={true}
                       overdrag={true}

            >
                <View key='1'>
                    <Animated.View style={{
                        flex: 2,
                        alignItems: 'center',
                        overflow: 'hidden',
                        opacity: visibilityHero,
                        transform: [{translateY: translateHero}],
                    }}>
                        <Image style={styles.splashHeroImage} source={require('../../assets/splash/getting-started.png')}
                               resizeMode='contain'/>
                    </Animated.View>
                    <Animated.View style={{
                        flex: 1.2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: opacityInfo,
                        transform: [{translateX: translateInfo}]
                    }}>
                        <Text style={styles.splashInfoHeader}>Getting Started</Text>
                        <Text style={styles.splashInfoParagraph}>Use GradeCalc as a way to calculate your grade in Statistics! The total grade will be appropriated as a percentage of 100!</Text>
                    </Animated.View>
                </View>
                <View key='2'>
                    <View style={styles.splashHero}>
                        <Image style={styles.splashHeroImage} source={require('../../assets/splash/lowest.png')}
                               resizeMode='contain'/>
                    </View>
                    <View style={styles.splashInfo}>
                        <Text style={styles.splashInfoHeader}>Lowest Exams</Text>
                        <Text style={styles.splashInfoParagraph}>The lowest of the 3 exams is calculated as approximately 15% of your total grade. Because of this, in theory - one could still pass the class with a total of 3 exams!</Text>
                    </View>
                </View>
                <View key='3'>
                    <View style={styles.splashHero}>
                        <Image style={styles.splashHeroImage} source={require('../../assets/splash/middle.png')}
                               resizeMode='contain'/>
                    </View>
                    <View style={styles.splashInfo}>
                        <Text style={styles.splashInfoHeader}>The middle.</Text>
                        <Text style={styles.splashInfoParagraph}>The middle of the 3 exams is calculated as approximately 37% of your grade! This exam will be pivotal in determining your success in the class.</Text>
                    </View>
                </View>
                <View key='4'>
                    <View style={styles.splashHero}>
                        <Image style={styles.splashHeroImage} source={require('../../assets/splash/highest.png')}
                               resizeMode='contain'/>
                    </View>
                    <View style={styles.splashInfo}>
                        <Text style={styles.splashInfoHeader}>Highest exams are 47%</Text>
                        <Text style={styles.splashInfoParagraph}>The remaining of the 3 exams (the highest), will be counted as 48% of the total grade. Hurray! This means that only your best work will truly make an impact.</Text>
                    </View>
                </View>
            </PagerView>
            <View style={styles.splashFooter}>
                <Button
                    label='CONTINUE'
                    color='#937AFA'
                    onTap={() => {navigation.navigate('Main')}}/>
            </View>
        </ImageBackground>
    )
}

const dimensions = Dimensions.get('screen')

/**
 * Represents the StyleSheet for this component.
 * @type {{}}
 */
const styles = StyleSheet.create(
    {
        background: {
            flex: 1,
        },
        pagerSection: {
            // backgroundColor: '#ff00ff',
            width: dimensions.width,
            flex: 4
        },
        splashHero: {
            flex: 2,
            alignItems: 'center',
            overflow: 'hidden',
        },
        splashInfo: {
            flex: 1.2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        splashHeroImage: {
            maxWidth: '90%',
            maxHeight: '100%'
        },
        splashInfoHeader: {
            fontSize: 23,
            fontWeight: 'bold',
            color: '#191C50',
            paddingVertical: 20,
            // backgroundColor: 'purple',
        },
        splashInfoParagraph: {
            fontSize: 18,
            color: '#7E7E7E',
            textAlign: 'center',
            lineHeight: 30,
            maxWidth: '92%',
            height: '50%',
            // backgroundColor: 'white'
        },
        splashFooter: {
            // backgroundColor: '#e7e7e7',
            flex: 0.75,
            justifyContent: 'center',
            alignItems: 'center'
        }

    }
)

export default SplashScreen