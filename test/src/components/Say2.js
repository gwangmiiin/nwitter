import React, { Component } from 'react'

export default class Say2 extends Component {
    state = {
      message : '초기값',
      colorcolor : {color : 'blue'}
    }
    handleColor = () => {
      this.setState({
        colorcolor :{color : 'red'}
      })
    }
    onClickEnter = () => {
      this.setState({
        message : '입장'
      })
    }
    onClickLeave = () => {
      this.setState({
        message : '퇴장'
      })
    }
    render(){
    return (
      <div>
        <h1 style={this.state.colorcolor}>{this.state.message}</h1>
        <button onClick={this.onClickEnter}>입장</button>
        <button onClick={this.onClickLeave}>퇴장</button>
        <button onClick={this.handleColor}>글자색 변경</button>
      </div>
    )
  }
  }

