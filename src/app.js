import React from "react";
import style from './css/app.module.css';
import AppAPI from './components/APIs/appAPI.js';

class App extends React.Component {
    constructor (props){
        super(props); 
        this.state = {fullLoading:true , text: "Loading your data for you"};
    }
    
    stopFullLoading = ()=>{
        this.setState({fullLoading:false});
    }
    
    render() {
      var fullLoading = <div className={style.fullLoading}> <div className={style.loader}></div> <AppAPI stopFullLoading={this.stopFullLoading} /> </div>
           ;
      return (
          <div>
          {this.state.fullLoading ? fullLoading : null}
          </div> 
        );   
    }
    
    
}

export default App;
