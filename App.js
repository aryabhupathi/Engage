import React from 'react'
import './App.css'
class App extends React.Component {
    state = {
        name: "circle"
    }
    rotation = () => {
        this.setState({
            name: "circle spin"
        });
        setTimeout(() => {
            this.setState({
                name: "circle spin stop"
            });
        }, Math.floor(Math.random() * 10000) + 1);
    }
    render() {
        return (
            <div>
                <h1> TEST YOUR LUCK </h1>
                <br></br>
                <div className='box'>
                <div className='arrow'></div>
                <ul className={this.state.name}>
                    <li>
                        <div className='text'>ZOMATO</div>
                    </li>
                    <li>
                        <div className='text'>EATSURE</div>
                    </li>
                    <li>
                        <div className='text'>GRAB</div>
                    </li>
                    <li>
                        <div className='text'>DUNZO</div>
                    </li>
                    <li>
                        <div className='text'>SWIGGY</div>
                    </li>
                    <li>
                        <div className='text'>PANDA</div>
                    </li>
                    <li>
                        <div className='text'>ZEPTO</div>
                    </li>
                    <li>
                        <div className='text'>BOX8</div>
                    </li>
                </ul>
                <h2>* Pointer gives you a coupon for the respective</h2>
                <button className='started' onClick={this.rotation}>SPIN</button>
                </div>
            </div >
        )
    }
}

export default App