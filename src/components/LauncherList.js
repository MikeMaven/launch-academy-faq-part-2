import React, { Component } from 'react';

class LauncherList extends Component {
  constructor(props){
    super(props)
    this.state = {
      launchers: []
    }
  }

  componentDidMount(){
    
  }

  render(){
    let launcherList = this.state.launchers.map((launcher) => {
      return(
        <li key={launcher.id}>
          {launcher.name}
        </li>
      )
    })

    return(
      <div>
        <ul>
          {launcherList}
        </ul>
      </div>
    )
  }
}

export default LauncherList;
