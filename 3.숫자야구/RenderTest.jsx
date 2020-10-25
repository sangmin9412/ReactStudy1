import React, { PureComponent } from 'react';
// import React, { Component } from 'react';

class RenderTest extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // }

    onClick = () => {
        this.setState({
            array: []
        });
    }

    render() {
        console.log('랜더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default RenderTest;