import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  icon: string;
  humidity?: number;
  wind?: number;
}

export default function CurrentWeather({ weatherData }: { weatherData: WeatherData }) {
  // Si no hay datos todavía, no renderizamos nada
  if (!weatherData) return null;

  return (
    <View style={styles.container} testID="current-weather-container">
      <View style={styles.headerDates}>
        <Text style={styles.dateSecondary}>22/04</Text>
        <Text style={styles.dateMain}>23/04</Text>
        <Text style={styles.dateSecondary}>24/04</Text>
      </View>

      <Text style={styles.city} testID="weather-city-name">
        {weatherData.city.toUpperCase()}
      </Text>
      
      <Image 
        source={{ uri: weatherData.icon }} 
        style={styles.icon} 
        testID="weather-icon" 
      />
      
      <Text style={styles.temp} testID="weather-temperature">
        {Math.round(weatherData.temp)}°
      </Text>

      <View style={styles.timeline}>
         <Text style={styles.timeLabel}>NOW</Text>
         <View style={styles.line} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: 'white', flex: 1, paddingTop: 40 },
  headerDates: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 40 },
  dateMain: { fontSize: 18, fontWeight: 'bold', borderBottomWidth: 2 },
  dateSecondary: { fontSize: 16, color: '#ccc' },
  city: { fontSize: 32, fontWeight: '900', letterSpacing: 4, marginBottom: 20 },
  icon: { width: 180, height: 180, tintColor: 'black' }, // Forzamos el color negro
  statsRow: { marginTop: 20, alignItems: 'flex-start', width: '40%' },
  statText: { fontSize: 16, fontWeight: '600', marginVertical: 2 },
  temp: { fontSize: 100, fontWeight: 'bold', marginTop: 20 },
  timeline: { width: '100%', alignItems: 'center', marginTop: 40 },
  timeLabel: { fontSize: 12, fontWeight: 'bold', letterSpacing: 2 },
  line: { width: '80%', height: 1, backgroundColor: 'black', marginTop: 10 }
});