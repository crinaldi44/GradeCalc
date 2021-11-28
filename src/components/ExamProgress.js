import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import ProgressCircle from "rn-animated-progress-circle";
// import {Slider} from "@miblanchard/react-native-slider";
import MultiSlider from "@ptomasroos/react-native-multi-slider";


/**
 * ExamProgress is a card view that incorporates an adjustable
 * slider that will sync with a circular progress bar.
 * @param props [color, label], color is the color of the progress, label is the text label to use
 * @constructor
 */
const ExamProgress = (props) => {

    //MARK: State variables.
    const [grade, setGrade] = useState(0)

    return(
        <View style={styles.background}>
            <View style={styles.progressSection}>
                <ProgressCircle
                    size={70}
                    thickness={10}
                    color={props.color}
                    unfilledColor="#DED8EF"
                    value={grade[0]}
                    animationMethod='bounce'
                    >
                    <Text style={styles.progressLabel}>
                        {Math.round(grade * 100)}%
                    </Text>
                </ProgressCircle>
            </View>
            <View style={styles.sliderSection}>
                <Text style={styles.sliderLabel}>{props.label}</Text>
                <MultiSlider
                    step={0.01}
                    trackStyle={{height: 10, borderRadius: 30}}
                    markerStyle={{width: 25, height: 25, backgroundColor: '#ffffff', shadowOpacity: 0}}
                    pressedMarkerStyle={{width: 25, height: 25, backgroundColor: '#ffffff'}}
                    selectedStyle={{backgroundColor: props.color}}
                    unselectedStyle={{backgroundColor: '#EDEAF5'}}
                    markerOffsetY={3}
                    min={0}
                    max={1.01}
                    sliderLength={200}
                    onValuesChange={(value) => {
                        setGrade(value);
                        props.onChange(value);
                    }}
                    />
            </View>
        </View>
    )
}

/**
 * Represents the StyleSheet for this component.
 * @type {{progressSection: {alignItems: string, flex: number, justifyContent: string}, background: {backgroundColor: string, borderRadius: number, flexDirection: string, width: number, height: number}, sliderLabel: {letterSpacing: number, fontWeight: string}, progressLabel: {color: string, fontWeight: string}, sliderSection: {flex: number, justifyContent: string}}}
 */
const styles = StyleSheet.create(
    {
        background: {
            backgroundColor: '#F6F3FC',
            width: '85%',
            height: 85,
            borderRadius: 10,
            flexDirection: 'row',
        },
        progressSection: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        progressLabel: {
            fontWeight: 'bold',
            color: '#646262',
        },
        sliderSection: {
            flex: 3,
            justifyContent: 'center',
            paddingLeft: 10,
        },
        sliderLabel: {
            fontWeight: 'bold',
            letterSpacing: 1
        }
    }
)

export default ExamProgress