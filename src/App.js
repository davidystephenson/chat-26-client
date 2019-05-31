import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from './actions'

class App extends React.Component {
  state = {
    message: ''
  }

  onChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  onSend = (event) => {
    event.preventDefault()

    console.log('onSend test!')
    this.props.sendMessage(this.state.message)

    this.setState({ message: '' })
  }

  render () {
    const paragraphs = this
      .props
      .messages
      .map((message, index) => <p key={index}>{message}</p>)

    return (
      <main>
        <h1>Messages:</h1>

        {paragraphs}

        <form onSubmit={this.onSend}>
          <input
            type='text'
            onChange={this.onChange}
            value={this.state.message}
          />
          <button>send</button>
          { this.props.sent && 'checkmark' }
        </form>
      </main>
    )
  }
}

function mapStateToProps (state) {
  console.log('state test:', state)
  return {
    messages: state.messages,
    sent: state.sent
  }
}

const mapDispatchToProps = {
  sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
