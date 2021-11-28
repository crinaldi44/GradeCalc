import React from "react";
import {View, ImageBackground, Image, StyleSheet, Dimensions, Text} from 'react-native'
import Button from "../components/Button";

const successIcon = require('../../assets/results/icon_success.png')
const failureIcon = require('../../assets/results/icon_failure.png')
const successLogo = require('../../assets/results/logo_success.png')
const failureLogo = require('../../assets/results/logo_failure.png')

/**
 * The results screen is displayed when the user has successfully
 * completed the previous screen. Parameters are passed regarding the user's
 * total score and displayed on screen. The appearance of the ResultsScreen
 * will depend solely upon the grade, which will animate onto the screen.
 *
 * If the calculated grade is higher than a 65, the user will be presented
 * with the 'Success' screen, otherwise they will be presented with the 'Failure'
 * screen.
 * @param route
 * @param navigation
 * @constructor
 */
const ResultsScreen = ({route, navigation}) => {

    /**
     * Represents whether the user has passed the exam or not. Passed to
     * navigation object via route parameters.
     * @type {boolean}
     */
    const passed = route.params.examGrade > 65;

    /**
     * Represents the text displayed when a student is project to pass and fail the course,
     * respectively.
     */
    const [passText, failText] = [
        "Based on the results, you are likely to pass! Great work! Keep pushing thru the semester and continuing to complete any homework and extra credit questions.",
        `Based on the results, it is unlikely you will be able to pass the class. Your projected score is a ${Math.round(route.params.examGrade)}. It is advisable that you speak with the instructor.`
    ]

    return(
        <View style={styles.container}>

            <ImageBackground style={styles.topResultsSection}
            source={passed ? require('../../assets/results/success-bg.png')
            : require('../../assets/results/failure-bg.png')}
            resizeMode='cover'>

                <View style={styles.topResultsHeader}>
                    <Image source={passed ? successLogo : failureLogo} 
                            style={{
                                width: 64,
                                height: 64,
                                overflow: 'visible'
                            }}
                            />
                    <Image source={passed ? successIcon : failureIcon}
                            style={{
                              width: 200,
                              height: 180,
                              overflow: 'visible'
                            }}/>

                </View>

                <View style={styles.topResultsDetails}>
                    <View style={styles.topResultsDetailsLabel}>
                        <Text style={
                            {
                                fontSize: 23,
                                fontWeight: 'bold',
                                color: passed ? '#6C63FF' : '#C36F6F',
                                paddingHorizontal: 40,
                                paddingVertical: 5
                            }
                        }>{passed ? 'Success!' : 'Failed!'}</Text>
                    </View>
                    <View>
                        <Text style={styles.topResultsDetailsHeader}>{passed ? 'Hooray!' : 'Uh oh!'}</Text>
                        <Text style={styles.topResultsDetailsParagraph}>{passed ? `You've got this - keep going!` : `A little help here.`}</Text>
                    </View>
                </View>

            </ImageBackground>

            <View style={
                {
                    flex: 1.2,
                    backgroundColor: passed ? '#F6F3FC' : '#FCF3F3',
                }
            }>
                <View style={styles.lowerText}>
                    <Text style={styles.lowerTextDetails}>
                        {passed ? passText : failText}
                    </Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Button label="Let's try again" color={passed ? '#979AD9' : '#C36F6F'}
                    onTap={navigation.goBack}/>
                </View>
            </View>
        </View>
    )
}

/**
 * Represents the StyleSheet for this component.
 * @type {{container: {flex: number}, topResultsSection: {}, bottomDescriptionSection: {}}}
 */
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        topResultsSection: {
            flex: 2.5,
            backgroundColor: '#ff00ff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        topResultsHeader: {
            // backgroundColor: '#ff00ff',
            width: Dimensions.get('screen').width,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            top: '10%'
        },
        topResultsDetails: {
            // backgroundColor: '#00ff00',
            width: Dimensions.get('screen').width,
            flex: 1,
            justifyContent: 'space-around'
        },
        topResultsDetailsLabel: {
            backgroundColor: '#ffffff',
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 15
        },
        topResultsDetailsHeader: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#ffffff',
            alignSelf: 'center',
            paddingBottom: 10,
        },
        topResultsDetailsParagraph: {
            fontSize: 23,
            fontWeight: 'bold',
            color: '#ffffff',
            alignSelf: 'center',
            marginBottom: 20,
        },
        lowerText: {
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '10%',
            marginBottom: '10%'
        },
        lowerTextDetails: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#7E7E7E',
            textAlign: 'center',
            paddingHorizontal: 20,
        }
    }
)

export default ResultsScreen