import React, { Component } from 'react'
import {Button, ListItemText} from '@material-ui/core'
import axios from 'axios'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state={
      users : [{
        id:'',
        name: ''
      }]
    }
  }
  loadUser() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( response => {
      this.setState({
        users : response.data
      })
    })
  }
  componentDidMount(){
    this.loadUser()
  }
  render() {
    const userList = this.state.users.map(user=>{
      return <ListItemText primary={user.name} key={user.id} />
    })
    return (
      <div>
        <Button onClick={this.loadUser.bind(this)} variant='contained' color='primary'>Load</Button>
        <div>{userList}</div>
      </div>
    )
  }
}