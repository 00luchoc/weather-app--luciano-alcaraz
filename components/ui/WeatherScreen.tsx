import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import CurrentWeather from './CurrentWeather';
import CitySearchList from './CitySearchList';
import { fetchWeather } from '../../services/weatherService';

export default function WeatherScreen() {
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleAddCity = async (city: string) => {
    const data = await fetchWeather(city);
    
    if (data) {
      setWeatherData(data); 
    } else {
      Alert.alert("Error", "No se pudo encontrar la ciudad.");
    }
  };

  useEffect(() => {
    handleAddCity('Buenos Aires');
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} testID="weather-screen">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* PASAMOS EL OBJETO COMPLETO COMO ESPERA EL COMPONENTE */}
        <CurrentWeather weatherData={weatherData} />

        {/* PASAMOS SOLO LA FUNCIÓN, QUITAMOS savedCities SI NO SE USA */}
        <CitySearchList onAddCity={handleAddCity} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white' },
  scrollContainer: { flexGrow: 1 }
});