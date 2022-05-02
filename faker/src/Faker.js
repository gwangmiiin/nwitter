import React, { Component } from 'react'
import faker from 'faker'



export default class Faker extends Component {
  state = {
    name : faker.name.findName(),
    image : faker.image.image(),
    email : faker.internet.email(),
  }
  render() {
    return (
    <>
      <h1>Faker Demo</h1>
      <p><img src = {this.data.image} alt = "#"/></p>
      <div>{this.state.name}</div>
      <div>{this.state.email}</div>
    </>
    )
  }
}
