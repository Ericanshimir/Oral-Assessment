import React, { Component } from 'react';

interface TemperatureConverterProps {}
interface TemperatureConverterState {
  fahrenheit: string;
  celsius: string;
}

class TemperatureConverter extends Component<TemperatureConverterProps, TemperatureConverterState> {
  constructor(props: TemperatureConverterProps) {
    super(props);
    this.state = {
      fahrenheit: '',
      celsius: ''
    };
  }

  // Handle Fahrenheit input change and update Celsius
  handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = event.target.value;
    const celsius = fahrenheit ? ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2) : '';
    this.setState({ fahrenheit, celsius });
  };

  // Handle Celsius input change and update Fahrenheit
  handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = event.target.value;
    const fahrenheit = celsius ? ((parseFloat(celsius) * 9 / 5) + 32).toFixed(2) : '';
    this.setState({ celsius, fahrenheit });
  };

  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={this.state.fahrenheit}
            onChange={this.handleFahrenheitChange}
          />
        </label>
        <br />
        <label>
          Celsius:
          <input
            type="number"
            value={this.state.celsius}
            onChange={this.handleCelsiusChange}
          />
        </label>
      </div>
    );
  }
}

export default TemperatureConverter;