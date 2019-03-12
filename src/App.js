import React from 'react';
import Titles from '../src/components/Titles';
import Form from '../src/components/Form';
import Weather from '../src/components/Weather';

const API_KEY = '46dee3d9d1cfe687af7f002fe4977aa4';


class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        error: undefined        
    }

    getWeather = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                desc: data.weather[0].description,
                error: ""
            });
        }else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                desc: undefined,
                error: "Please enter values..."
            });
        }
    }

    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 title-container">
                                    <Titles/>
                                </div>
                                <div className="col-md-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        desc={this.state.desc}
                                        error={this.state.error} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;