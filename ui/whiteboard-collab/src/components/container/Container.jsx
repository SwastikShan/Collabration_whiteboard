import React from 'react';
import Board from '../board/Board';
import {clearAll} from '../board/Board';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }
    pickEraser(){
        this.setState({
            color:'#FFFFFF'
        })
    }

    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 20 </option>
                            <option> 50 </option>
                            <option> 100 </option>
                        </select>
                    </div>
                    <div className="eraser-container">
                        <button onClick={()=>{
                             alert("Eraser Selected!");
                            this.pickEraser();
                        }}>Select Eraser </button>

                        <button onClick={()=>{
                            clearAll(); 
                            alert("Cleared!");
                             }}>Clear All</button>

                    </div>
                </div>
                
                <div className="board-container">
                    <Board color={this.state.color} size={this.state.size} eraser={this.state.color}></Board>
                </div>
            </div>
        )
    }
}

export default Container