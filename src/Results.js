import React from 'react';
import ReactJson from 'react-json-view'
class Results extends React.Component {

    render() {
        //    let myObject=JSON.stringify(this.props.results)
        let myObject = this.props.body
        let myHeaderObject = this.props.header
        return (
            <>
                <div id="outerDiv">
                    <div id="outPut">

                        <ReactJson name="header" src={myHeaderObject} />
                        <ReactJson name="response" src={myObject} />
                    </div>
                </div>


            </>
        )
    }
}

export default Results;