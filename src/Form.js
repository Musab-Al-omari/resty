
import React from 'react';
import './Form.scss';
class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            urlField: '',
            routes: '',
            body: ''
        }
    }



    handleURLChange = e => {
        const URL = e.target.value;
        const newState = { ...this.state, urlField: URL };
        this.setState(newState);
    }
    handlerBody = e => {
        let body = e.target.value;
        // console.log('text',text);
        const newState = { ...this.state, body: body };
        console.log(newState);
        this.setState(newState);
    }



    handleBtnClick = e => {
        const reversed = e.target.innerText
        const newState = { ...this.state, routes: reversed };
        this.setState(newState);
    }



    goHandler = async e => {
        e.preventDefault()
        try {
            if (this.state.routes === '') {
                this.state.routes = 'GET'
            }


            let myFetchObj = { method: `${this.state.routes}` }

            if (this.state.routes === 'POST' || this.state.routes === 'PUT') {
                let bodyData = this.state.body
                myFetchObj = {
                    method: this.state.routes,
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: bodyData,
                }
            }

            let raw = await fetch(this.state.urlField, myFetchObj)
            let data = await raw.json()
            const count = data.count;

            console.log('data', raw);

            const headersObj = {}
            for (let h of raw.headers) {
                console.log('hhhhhh', h[0], h[1])
                headersObj[h[0]] = h[1];
            }
            if (!(raw.status === 500 || raw.status === 404)) {

                let prevLocalStorage = JSON.parse(localStorage.getItem('myHeader'))

                if (prevLocalStorage) {
                    localStorage.setItem('myHeader', JSON.stringify([...prevLocalStorage, { method: this.state.routes, urlField: this.state.urlField }]))
                } else {
                    localStorage.setItem('myHeader', JSON.stringify([{ method: this.state.routes, urlField: this.state.urlField }]))
                }
            };

            this.props.handler(data, count, headersObj);


        } catch (error) {
            console.error(error);
        }


    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="theUrl">The URL:</label>
                    <input onChange={this.handleURLChange} />
                    <textarea onChange={this.handlerBody} type="text"></textarea>
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

export default Form;









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
// export default Form;