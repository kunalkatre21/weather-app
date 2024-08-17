# Weather App

A simple weather application that allows users to check the current weather conditions for any city.

## Features

- Search for weather information by city name
- Display current temperature, weather description, and city name
- Responsive design for various screen sizes

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/kunalkatre21/weather-app.git
   cd weather-app
   ```

2. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).

3. Create a `config.js` file in the project root:
   ```javascript
   const config = {
     apiKey: 'YOUR_API_KEY_HERE'
   };
   ```
   Replace `'YOUR_API_KEY_HERE'` with your actual OpenWeatherMap API key.

4. Add `config.js` to your `.gitignore` file to prevent it from being tracked by Git:
   ```
   echo "config.js" >> .gitignore
   ```

5. Open `index.html` in your web browser or set up a local server to run the application.

## Usage

1. Enter a city name in the search box.
2. Click the "Search" button or press Enter.
3. The current weather information for the specified city will be displayed.

## Important Notes

- The `config.js` file containing your API key should never be committed to version control or shared publicly.
- For production deployment, consider using environment variables or server-side configuration to securely manage your API key.
- This project is for educational purposes. In a production environment, implement proper security measures to protect your API key.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
