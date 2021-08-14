import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'font-awesome/css/font-awesome.css';
import './styles/style.css';
import jsPDF from 'jspdf';

class App extends Component{

  constructor(){
    super();
    this.state = {
      name:'',
      maxsize:11.69,
      minsize:'08.27',
      filename:'Name.pdf'
    }
  }

  createPdf(e){
    e.preventDefault();

    var doc = new jsPDF({
      unit: 'in',
      format: [this.state.maxsize, this.state.minsize]
    })
    doc.text(`My Name is: ${this.state.name}`, 0.5, 1.1)
    doc.save(`${this.state.filename}`)
  };

render() {

    return (
      <div style={{margin:'20px', fontFamily:'Roboto'}}>

      <p style={{width:'100%'}}>Select PDF Size: &nbsp;
        <select className='select-pdfsize' ref="pdfsize" 
        onChange={(x)=>this.setState({
          maxsize: x.target.value[0]+x.target.value[1]+x.target.value[2]+x.target.value[3]+x.target.value[4],
          minsize: x.target.value[6]+x.target.value[7]+x.target.value[8]+x.target.value[9]+x.target.value[10]
        })}>
          <option value={[11.69,'08.27']}> A4 (210mm x 297mm) </option>
          <option value={[46.81,33.11]}> A0 (841mm x 1189mm) </option>
          <option value={[33.11,23.39]}> A1 (594mm x 841mm) </option>
          <option value={[23.39,16.54]}> A2 (420mm x 594mm) </option>
          <option value={[16.54,11.69]}> A3 (297mm x 420mm) </option>
          <option value={['08.27','05.83']}> A5 (148mm x 210mm) </option>
          <option value={['05.83','04.13']}> A6 (105mm x 148mm) </option>
          <option value={['04.13','02.91']}> A7 (74mm x 105mm) </option>
          <option value={['02.91','02.05']}> A8 (52mm x 74mm) </option>
          <option value={['02.05','01.46']}> A9 (37mm x 52mm) </option>
          <option value={['01.46','01.02']}> A10 (26mm x 37mm) </option>
        </select>
      </p>

        <span>
            <p>User's Name:
            <input className='name-box' type="text" size="30"
            placeholder="Enter your name here..."
            onChange={(x)=>this.setState({name: x.target.value})} />
            </p>
        </span>
        
        <center>
        <Button className='download-btn' onClick={this.createPdf.bind(this)}
        variant="contained" color="primary" >
          Download PDF
        </Button>
        </center>

      </div>    
    )
}
}
export default App;