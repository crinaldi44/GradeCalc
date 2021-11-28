import React, {useRef, useState} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, Dimensions} from 'react-native'
import ExamProgress from "../components/ExamProgress";
import Button from "../components/Button";

/**
 * The MainScreen is the interactive component displayed
 * after the user has navigated thru the splash screen.
 * @constructor
 */
const MainScreen = ({navigation}) => {

    const [exam1, setExam1] = useState(0);
    const [exam2, setExam2] = useState(0);
    const [exam3, setExam3] = useState(0);

    /**
     * Calculates the Exam grade based upon the three grades entered. Returned value should
     * be passed into the Route parameters.
     *
     * Calculated as follows:
     * Find the lowest of the three grades - array? Compare values, sort into
     * highest, middle, lowest.
     *
     * Once we found the highest, middle, lowest, multiply those numbers by 15,
     * 37, and 48 respectively to find out how many points are "counted" for that
     * particular exam.
     */
    function calculateExamGrade() {
        const sortedExams = [exam1, exam2, exam3].sort((a, b) => {
            if (a < b) return -1;
            if (a === b) return 0;
            else return 1;
        });

        const lowestPoints = sortedExams[0] * 15;
        const middlePoints = sortedExams[1] * 37;
        const highestPoints = sortedExams[2] * 48;

        return lowestPoints + middlePoints + highestPoints;

    }

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.branding} source={require('../../assets/bg-main.png')}>
                <View>
                    <Image
                        style={{width: 65, height: 65, overflow: 'visible'}}
                        resizeMode='contain'
                        source={require('../../assets/logo-main.png')}/>
                    <Text style={styles.brandingText}>Grades</Text>
                </View>
            </ImageBackground>
            <View style={styles.bottomScreen}>
                <View style={styles.modal}>

                    <View style={styles.modalText}>
                        <Text style={styles.modalHeader}>Let's get started.</Text>
                        <Text style={styles.modalParagraph}>Don’t worry! Your scores are protected and not stored.</Text>
                    </View>
                    <View style={styles.gradesSection}>
                        <ExamProgress color='#F15B83' label='Exam 1 Grade'
                                    onChange={(value) => {
                                        setExam1(value);
                                    }}/>
                        <ExamProgress color='#73C9E0' label='Exam 2 Grade'
                                    onChange={(value) => {
                                        setExam2(value);
                                    }}/>
                        <ExamProgress color='#A573E0' label='Exam 3 Grade'
                                      onChange={(value) => {
                                        setExam3(value);
                                      }}/>
                    </View>
                    <View style={styles.footer}>
                        <Button label='NEXT' color='#97D9B3' onTap={() => {
                            const totalGrade = calculateExamGrade();
                            console.log(`Calculated total grade: ${totalGrade}`)
                            navigation.navigate('Results', {examGrade: totalGrade});
                        }}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

/**
 * Represents the StyleSheet for this component.
 * @type {{}}
 */
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ffffff'
        },
        branding: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        brandingText: {
            fontSize: 20,
            color: '#ffffff',
            fontWeight: 'bold',
        },
        bottomScreen: {
            flex: 3.2,
        },
        modal: {
            position: 'absolute',
            bottom: 25,
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            backgroundColor: '#ffffff',
            width: '100%',
            height: '100%',
            shadowColor: '#000000',
            shadowOpacity: 0.3,
            shadowRadius: 10,
        },
        modalText: {
          // backgroundColor: '#ff00ff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            flex: 1.2
        },
        gradesSection: {
            // backgroundColor: '#ff0000',
            height: '50%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 3,
        },
        modalHeader: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#191C50',
        },
        modalParagraph: {
            fontSize: 16,
            color: '#7E7E7E',
            textAlign: 'center'
        },
        footer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)

export default MainScreen