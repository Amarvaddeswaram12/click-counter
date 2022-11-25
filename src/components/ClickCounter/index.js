// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  Increament = () => {
    this.setState(pervState => ({
      count: pervState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been Clicked <br />
          <span className="zero">{count}</span> times
        </h1>
        <p>Click the button to increase count!</p>
        <button onClick={this.Increament} className="button" type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
