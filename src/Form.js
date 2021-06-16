
import React from 'react';
import './Form.scss';
class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
    }



    handleURLChange = e => {
        const URL = e.target.value;
        // const newState = { ...this.state, urlField: URL };
        // this.setState(newState);
        this.props.changeUrl(URL)
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
        // const newState = { ...this.state, routes: reversed };
        // this.setState(newState);
        this.props.methodHandler(reversed)
    }



    goHandler = async e => {
        e.preventDefault()
        try {
            if (this.props.method === '') {
                this.props.method = 'GET'
            }


            let myFetchObj = { method: `${this.props.method}` }

            if (this.props.method === 'POST' || this.props.method === 'PUT') {
                let bodyData = this.state.body
                myFetchObj = {
                    method: this.props.method,
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: bodyData,
                }
            }

            let raw = await fetch(this.props.url, myFetchObj)
            let data = await raw.json()
            const count = data.count;


            const headersObj = {}
            for (let h of raw.headers) {
                console.log('hhhhhh', h[0], h[1])
                headersObj[h[0]] = h[1];
            }
            if (!(raw.status === 500 || raw.status === 404)) {

                let prevLocalStorage = JSON.parse(localStorage.getItem('myHeader'))

                if (prevLocalStorage) {
                    localStorage.setItem('myHeader', JSON.stringify([...prevLocalStorage, { method: this.props.method, urlField: this.props.url }]))
                } else {
                    localStorage.setItem('myHeader', JSON.stringify([{ method: this.props.method, urlField: this.props.url }]))
                }
            };

            this.props.handler(data, count, headersObj,raw.status);


        } catch (error) {
            console.error(error);
        }


    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="theUrl">The URL:</label>
                    <input value={this.props.url} onChange={this.handleURLChange} />
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