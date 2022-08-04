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
            selectedCity : 'Баг',
            result: 'Газар сонгоно уу '
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.getResult = this.getResult.bind(this);
    }
   
    componentDidMount() { 
        this.setState({
            countries : [
                    { name: 'Архангай', states: [ 
                    {name: 'Батцэнгэл', cities: ['Батцэнбаг1', 'Батцэнбаг2', 'Батцэнбаг3']},
                    {name: 'Булган', cities: ['Булбаг1', 'Булбаг2', 'Булбаг3']},
                    {name: 'Жаргалант', cities: ['Жарбаг1', 'Жарбаг2', 'Жарбаг3']},
                    {name: 'Ихтамир', cities: ['Ихбаг1', 'Ихбаг2', 'Ихбаг3']},
                    {name: 'Өлзийт', cities: ['Өлзийбаг1', 'Өлзийбаг2', 'Өлзийбаг3']}
                ]},
                    { name: 'Завхан', states: [ 
                    {name: 'Асгат', cities: ['Асгабаг1', 'Асганбаг2', 'Асгабаг3']},
                    {name: 'Баянтэс', cities: ['Баянбаг1', 'Баянбаг2', 'Баянбаг3']},
                    {name: 'Идэр', cities: ['Идэрбаг1', 'Идэрбаг2', 'Идэрбаг3']},
                    {name: 'Отгон', cities: ['Отгобаг1', 'Отгонбаг2', 'Отгонбаг3']},
                    {name: 'Яруу', cities: ['Яруубаг1', 'Яруубаг2', 'Яруубаг3']}
                ]},
                    { name: 'Өвөрхангай', states: [ 
                    {name: 'Богд', cities: ['Богдбаг1', 'Богдбаг2', 'Богдбаг3']},
                    {name: 'Бүрд', cities: ['Бүрдбаг1', 'Бүрдбаг2', 'Бүрдбаг3']},
                    {name: 'Сант', cities: ['Сантбаг1', 'Сантбаг2', 'Сантбаг3']},
                    {name: 'Төгрөг', cities: ['Төгрөгбаг1', 'Төгрөгбаг2', 'Төгрөгбаг3']},
                    {name: 'Уянга', cities: ['Уянгабаг1', 'Уянгабаг2', 'Уянгабаг3']}
                ]},
                    { name: 'Сэлэнгэ', states: [ 
                    {name: 'Баянгол', cities: ['Баянбаг1', 'Баянбаг2', 'Баянбаг3']},
                    {name: 'Ерөө', cities: ['Ерөөбаг1', 'Ерөөбаг2', 'Ерөөбаг3']},
                    {name: 'Мандал', cities: ['Мандалбаг1', 'Мандалбаг2', 'Мандалбаг3']},
                    {name: 'Сайхан', cities: ['Сайханбаг1', 'Сайханбаг2', 'Сайханбаг3']},
                    {name: 'Хүдэр', cities: ['Хүдэрбаг1', 'Хүдэрбаг2', 'Хүдэрбаг3']}
                ]},
                    { name: 'Ховд', states: [ 
                    {name: 'Дуут', cities: ['Дуутбаг1', 'Дуутбаг2', 'Дуутбаг3']},
                    {name: 'Мөст', cities: ['Мөстбаг1', 'Мөстбаг2', 'Мөстбаг3']},
                    {name: 'Үенч', cities: ['Үенчбаг1', 'Үенчбаг2', 'Үенчбаг3']},
                    {name: 'Цэцэг', cities: ['Цэцэгбаг1', 'Цэцэгбаг2', 'Цэцэгбаг3']},
                    {name: 'Буянт', cities: ['Буянтбаг1', 'Буянтбаг2', 'Буянтбаг3']}
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
    getResult(){
         this.setState({result: ' Taны сонголт бол ' + this.state.selectedCountry + " аймгийн " + this.state.selectedState + ' сумын ' + this.state.selectedCity + ' гэх газрыг сонгосон байна.'})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <h2>ARYNINJA'S COUNTRY DROPDOWN web-app version:1.1</h2>
     
                <div className="form-group">
                    <label style={styles.lbl}>Аймаг</label>
                    <select className="form-select" placeholder="Аймаг" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>Аймаг</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="form-group">
                    <label style={styles.lbl}>Сум</label>
                    <select className="form-select" placeholder="Сум" value={this.state.selectedState} onChange={this.changeState}>
                        <option>Сум</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                <div className="form-group">
                    <label style={styles.lbl}>Баг</label>
                    <select className="form-select" placeholder="Баг" onChange={this.changeCity}>
                        <option>Баг</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                <button onClick={this.getResult} type="submit" className="btn btn-success" style={styles.btn}>Submit</button>
                </div>
                <h1>{this.state.result}</h1>
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