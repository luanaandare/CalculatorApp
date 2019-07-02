import React, {Component} from 'react';

class resultadoComponent extends Component {


    render() {
        let {resultado} = this.props;
        return (
            <div className="result">
                <p>{resultado}</p>
            </div>
    )
        ;
    }
}


export default resultadoComponent;