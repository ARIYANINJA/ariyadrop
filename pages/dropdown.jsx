import React from 'react';
import Option from './components/option'
class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aimguud: [],
            sumduud : [], 
            baguud : [],    
            selectedAimag : '',
            selectedSum : '',
            selectedBag : '',
            result: 'Та газaрaa сонгоно уу '
        };
        this.changeAimag = this.changeAimag.bind(this);
        this.changeSum = this.changeSum.bind(this);
        this.changeBag = this.changeBag.bind(this);
        this.getResult = this.getResult.bind(this);
    }
   
    componentDidMount() { 
        this.setState({
            aimguud : [
                    { name: 'Архангай', sumduud: [ 
                    {name: 'Батцэнгэл', baguud: ['Батцэнбаг1', 'Батцэнбаг2', 'Батцэнбаг3']},
                    {name: 'Булган', baguud: ['Булбаг1', 'Булбаг2', 'Булбаг3']},
                    {name: 'Жаргалант', baguud: ['Жарбаг1', 'Жарбаг2', 'Жарбаг3']},
                    {name: 'Ихтамир', baguud: ['Ихбаг1', 'Ихбаг2', 'Ихбаг3']},
                    {name: 'Өлзийт', baguud: ['Өлзийбаг1', 'Өлзийбаг2', 'Өлзийбаг3']}
                ]},
                    { name: 'Завхан', sumduud: [ 
                    {name: 'Асгат', baguud: ['Асгабаг1', 'Асганбаг2', 'Асгабаг3']},
                    {name: 'Баянтэс', baguud: ['Баянбаг1', 'Баянбаг2', 'Баянбаг3']},
                    {name: 'Идэр', baguud: ['Идэрбаг1', 'Идэрбаг2', 'Идэрбаг3']},
                    {name: 'Отгон', baguud: ['Отгобаг1', 'Отгонбаг2', 'Отгонбаг3']},
                    {name: 'Яруу', baguud: ['Яруубаг1', 'Яруубаг2', 'Яруубаг3']}
                ]},
                    { name: 'Өвөрхангай', sumduud: [ 
                    {name: 'Богд', baguud: ['Богдбаг1', 'Богдбаг2', 'Богдбаг3']},
                    {name: 'Бүрд', baguud: ['Бүрдбаг1', 'Бүрдбаг2', 'Бүрдбаг3']},
                    {name: 'Сант', baguud: ['Сантбаг1', 'Сантбаг2', 'Сантбаг3']},
                    {name: 'Төгрөг', baguud: ['Төгрөгбаг1', 'Төгрөгбаг2', 'Төгрөгбаг3']},
                    {name: 'Уянга', baguud: ['Уянгабаг1', 'Уянгабаг2', 'Уянгабаг3']}
                ]},
                    {name: 'Сэлэнгэ', sumduud: [ 
                    {name: 'Баянгол', baguud: ['Баянбаг1', 'Баянбаг2', 'Баянбаг3']},
                    {name: 'Ерөө', baguud: ['Ерөөбаг1', 'Ерөөбаг2', 'Ерөөбаг3']},
                    {name: 'Мандал', baguud: ['Мандалбаг1', 'Мандалбаг2', 'Мандалбаг3']},
                    {name: 'Сайхан', baguud: ['Сайханбаг1', 'Сайханбаг2', 'Сайханбаг3']},
                    {name: 'Хүдэр', baguud: ['Хүдэрбаг1', 'Хүдэрбаг2', 'Хүдэрбаг3']}
                ]},
                    { name: 'Ховд', sumduud: [ 
                    {name: 'Дуут', baguud: ['Дуутбаг1', 'Дуутбаг2', 'Дуутбаг3']},
                    {name: 'Мөст', baguud: ['Мөстбаг1', 'Мөстбаг2', 'Мөстбаг3']},
                    {name: 'Үенч', baguud: ['Үенчбаг1', 'Үенчбаг2', 'Үенчбаг3']},
                    {name: 'Цэцэг', baguud: ['Цэцэгбаг1', 'Цэцэгбаг2', 'Цэцэгбаг3']},
                    {name: 'Буянт', baguud: ['Буянтбаг1', 'Буянтбаг2', 'Буянтбаг3']}
                ]},
            ]
        });
    }
   
    changeAimag(event) {
        this.setState({selectedAimag: event.target.value});
        this.setState({sumduud : this.state.aimguud.find(x => x.name === event.target.value).sumduud});
    }
 
    changeSum(event) {
        this.setState({selectedSum: event.target.value});
        const stats = this.state.aimguud.find(x => x.name === this.state.selectedAimag).sumduud;
        this.setState({baguud : stats.find(y => y.name === event.target.value).baguud});
    }
    changeBag(event){
        this.setState({selectedBag: event.target.value});
    }
    getResult(){
         this.setState({result: ' Taны сонголт бол ' + this.state.selectedAimag + " аймгийн " + this.state.selectedSum + ' сумын ' + this.state.selectedBag + ' гэх газрыг сонгосон байна.'})
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{margin: "20vh"}}>
                <h2>ARYNINJA'S DROPDOWN </h2>
                <Option nameOfAimag="Аймаг" selectedAimag={this.state.selectedAimag} changeAimag = {this.changeAimag} aimguud = {this.state.aimguud} />
                <Option nameOfAimag="Сум" selectedAimag={this.state.selectedSum} changeAimag = {this.changeSum} aimguud = {this.state.sumduud}/>

                <div className="form-group">
                    <label style={styles.lbl}>Баг</label>
                    <select className="form-select" onChange={this.changeBag}>
                        {this.state.baguud.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                <button onClick={this.getResult} type="submit" className="btn btn-success" style={styles.btn}>Илгээх</button>
                <h1 style = {{marginTop:"5vh", color:"#256D85"}}>{this.state.result}</h1>
                </div>
                
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