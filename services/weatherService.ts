const API_KEY = '091c6f68c0f447b2b26224001262304'; 
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3&lang=es`
    );
    if (!response.ok) throw new Error('Ciudad no encontrada');
    
    const data = await response.json();
    
    // Retornamos solo lo que necesitamos para la UI
    return {
      city: data.location.name,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: `https:${data.current.condition.icon}`,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};