import React, { Component } from 'react';
class Option extends Component {
    state = {  } 
    render() { 
        return (
        <div className="form-group">
                    <label style={styles.lbl}>{this.props.nameOfAimag}</label>
                    <select className="form-select" value={this.props.selectedAimag} onChange={this.props.changeAimag} >              
                        {this.props.aimguud.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
        );
    }
}
 
export default Option;

const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  }, 
};