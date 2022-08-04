import React from 'react';
 
class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries : [],
            states : [],
            cities : [],
            selectedCountry : 'Аймаг',
            selectedState : 'Сум',
            selectedCity : 'Баг'
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }
   
    componentDidMount() { 
        this.setState({
            countries : [
                    { name: 'Philippines', states: [ 
                    {name: 'Central Luzon', cities: ['Angeles City', 'Olongapo', 'San Fernando']},
                    {name: 'NCR', cities: ['Pasay City', 'Makati', 'Marikina']}
                ]},
                    { name: 'United States of America', states: [ 
                    {name: 'California', cities: ['Sacramento', 'Los Angeles', 'Bakersfield', 'Carson']},
                    {name: 'Florida', cities: ['Tallahassee', 'Jacksonville']},
                    {name: 'Illinois', cities: ['Springfield', 'Chicago']},
                    {name: 'New Jersey', cities: ['Trenton', 'Newark']}
                ]},
            ]
        });
    }
   
    changeCountry(event) {
        this.setState({selectedCountry: event.target.value});
        this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    }
 
    changeState(event) {
        this.setState({selectedState: event.target.value});
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
    }
    changeCity(event){
        this.setState({selectedCity: event.target.value});
    }
     
    render() {
        const result  = "hello"
        return (
            <div className="container">
                <div className="row">
                <h2>ARYNINJA'S COUNTRY DROPDOWN web-app version:1.1</h2>
     
                <div className="form-group">
                    <label style={styles.lbl}>Country</label>
                    <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>Country</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="form-group">
                    <label style={styles.lbl}>State</label>
                    <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>State</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                <div className="form-group">
                    <label style={styles.lbl}>City</label>
                    <select className="form-select" placeholder="City" onChange={this.changeCity}>
                        <option>City</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                <button onClick={(() =>{
                    this.result = ' Taны сонголт бол ' + this.state.selectedCountry + " аймгийн " + this.state.selectedState + ' сумын ' + this.state.selectedCity + ' багыг сонгосон байна.'
                    console.log(this.result);
                })} type="submit" className="btn btn-success" style={styles.btn}>Submit</button>
                </div>
                <h1>{result}</h1>
            </div>
        )
    }
}
 
export default DropDown;

const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },  
  btn: {
    width:250,
    marginLeft:15,
    marginTop: 15,
  }
};