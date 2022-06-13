import React from "react";


export class Basket extends React.Component {
    constructor(){
        super()
        this.state = JSON.parse(window.localStorage.getItem('Products')) || {
            Iphone: 0,
            Ipad: 0,
            MacBook: 0,
            Watch: 0
            
        }
    }

    increaseCount = () => {
        window.localStorage.setItem("Products", JSON.stringify({...this.state, Iphone: this.state.Iphone + 1, Ipad: this.state.Ipad + 1,
        MacBook: this.state.MacBook + 1, Watch: this.state.Watch + 1}))
        super.setState()
    }

    clearBasket = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    render() {
        return (
            <div className="App">
                <h1> Iphone {this.state.Iphone} </h1>
                <h1> Ipad {this.state.Ipad} </h1>
                <h1> Macbook {this.state.MacBook} </h1>
                <h1> Watch {this.state.Watch} </h1>
                <button class="btn btn-primary" onClick={this.clearBasket}>Remove all</button>
            </div>
        )
    }
}