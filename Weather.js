import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient: ["#5D4157", "#A8CABA"],
        title:"HAZE",
        subtitle:"Take a good rest for a day like today.",

    },
    Mist:{
        iconName:"weather-fog",
        gradient:["#215f00","#e4e4d9"],
        title:"MIST",
        subtitle:"Drive Safely",

    },
    Thunderstrom:{
        iconName: "weather-lightning-rainy",
        gradient:["#283048","#859398"],
        title:"THUNDERSTORM",
        subtitle:"It's dangerous to get out",
    },
    Fog:{
        iconName: "weather-fog",
        gradient: ["#9bc5c3", "#616161"],
        title:"FOG",
        subtitle:"The weather today is as stuffy as life.",
    },
    Drizzle:{
        iconName:"water",
        gradient:["#1CD8D2","#93EDC7"],
        title:"DRIZZLE",
        subtitle:"How about a pancake today?",
    },
    Rain:{
        iconName: "weather-rainy",
        gradient:["#085078","#85D8CE"],
        title:"RAIN",
        subtitle:"How about a pacake today?",
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#2BC0E4","#EAECC6"],
        title:"SNOW",
        subtitle:"Go out and make a snowman.",
    },
    Atmosphere:{
        iconName: "weather-sunset-up",
        gradient:["#4776E6","#8E54E9"],
        title:"ATMOSPHERE",
        subtitle:"Eat some meat.",
    },
    Clear:{
        iconName: "weather-sunny",
        gradient:["#FF8008","#FFC837"],
        title:"CLEAR",
        subtitle:"Have a happy day as the weather.",
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient:["#1488CC","#2B32B2"],
        title:"CLOUDS",
        subtitle:"Get a good night's sleep today.",
    },
    Smoke:{
        iconName:"smog",
        gradient:["#16222A","#3A6073"],
        title:"SMOKE",
        subtitle:"How about reading a book?",
    },
    Dust:{
        iconName:"weather-fog",
        gradient:["#614385","#516395"],
        title:"HAZE",
        subtitle:"You'll get sick when you go out.",
    },
    Ash:{
        iconName: "weather-fog",
        gradient:["#1F1C2C","#928DAB"],
        title:"ASH",
        subtitle:"You'll get sick when you go out.",
    },
    Squall:{
        iconName: "weather-windy-variant",
        gradient:["#1A2980","#26D0CE"],
        title:"SQUALL",
        subtitle:"Just stay home.",
    },
    Tornado:{
        iconName: "weather-hurricane",
        gradient:["#0F2027","#203A43","#2C5364"],
        title:"TORNADO",
        subtitle:"Just stay home.",
    },
    Sand:{
        iconName:"weather-fog",
        gradient:["#603813","#b29f94"],
        title:"SAND",
        subtitle:"Just stay home.",

    }
}
export default function Weather({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstrom", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere",
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Ash",
        "Squall",
        "Tornado",
        "Sand"
    ]).isRequired,
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize: 42,
        color:"white",
    },
    title:{
        color:"white",
        fontSize:34,
        fontWeight: "300",
        marginBottom:10,
        textAlign: "left",
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24,
        textAlign: "left"
    },
    textContainer:{
        paddingHorizontal: 40,
        alignItems: "flex-start".gradient,
        justifyContent: "center",
        flex:1
    }
})

