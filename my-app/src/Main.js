
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
        const reversed = e.target.innerText
        const newState = { ...this.state, routes: reversed };
        this.setState(newState);
    }



    goHandler = e => {
        e.preventDefault()
        let output = document.getElementById('outPut')
        // function spaces(x) {
        //     let res = '';
        //     while (x--) res += ' ';
        //     return res;
        // }
        // let x = spaces(10)
        output.innerText = `${this.state.routes} =>  ${this.state.urlField}`


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
                    <button onClick={this.handleBtnClick}>GET</button>
                    <button onClick={this.handleBtnClick}>POST</button>
                    <button onClick={this.handleBtnClick}>PUT</button>
                    <button onClick={this.handleBtnClick}>DELETE</button>
                </div>

                <div id="outerDiv">
                    <div id="outPut">

                    </div>
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