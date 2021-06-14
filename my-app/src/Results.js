import React from 'react';
import ReactJson from 'react-json-view'
class Results extends React.Component {

    render() {
        //    let myObject=JSON.stringify(this.props.results)
        let myObject = this.props.results
        return (
            <>
                <div id="outerDiv">
                    <div id="outPut">
                        <ReactJson src={myObject} />
                    </div>
                </div>


            </>
        )
    }
}

export default Results;