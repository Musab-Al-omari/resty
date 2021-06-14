
import React from 'react';
import './Main.scss';
class Main extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            urlField: '',
            routes: ''
        }
    }
    handleURLChange = e => {
        const URL = e.target.value;
        const newState = { ...this.state, urlField: URL };
        this.setState(newState);
    }

    handleBtnClick = e => {
        // let myBot = document.querySelector(".bot")
        // console.log(myBot);
        // if (myBot.style.backgroundColor==="rgb(" + 196 + "," + 196 + "," + 196 + ")") {
        //     myBot.style.backgroundColor="rgb(" + 196 + "," + 196 + "," + 196 + ")"
        // } else {
        //     myBot.style.backgroundColor="rgb(" + 196 + "," + 100 + "," + 196 + ")"
        // }
        
        const reversed = e.target.innerText
        const newState = { ...this.state, routes: reversed };
        this.setState(newState);
    }



    goHandler = async e => {
        e.preventDefault()
       
        let raw = await fetch(`${this.state.urlField}`)
        let data = await raw.json()
        //    let  jsonData=JSON.stringify(data)
        // console.log('data',JSON.stringify(data));
       
        const count = data.count;
        const result = data.results;
        this.props.handler(data, result, count);
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="theUrl">The URL:</label>
                    <input onChange={this.handleURLChange} />
                    <button onClick={this.goHandler} >GO!</button>
                </form>
                <br />
                <div id="buttons">
                    <button className="bot" onClick={this.handleBtnClick}>GET</button>
                    <button className="bot" onClick={this.handleBtnClick}>POST</button>
                    <button className="bot" onClick={this.handleBtnClick}>PUT</button >
                    <button className="bot" onClick={this.handleBtnClick}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default Main;









//     render(){
//         return(
            // <div>
            //     <form>
            //         <input type="url" >url field</input>
            //     </form>

            // </div>
//         )

//     }


// }
// export default Main;