import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import weather_key from "./Config";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";

const API_KEY = weather_key;

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeater = async(latitude, longitude) =>{
    const {
      data: {
        main:{temp},
        weather,
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false, 
      condition: weather[0].main,
      temp: temp
    });
      
  };
  getLocation = async() => {
    try{  
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeater(latitude, longitude);
      
    }catch(error){
      Alert.alert("Can't find you", "So Sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  };
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
  
}
