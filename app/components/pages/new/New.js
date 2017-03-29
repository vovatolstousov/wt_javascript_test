//@flow
import React, { PropTypes as pt } from 'react'
import { browserHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container } from './NewStyle'

const New = React.createClass({
  propTypes: {
    companies: pt.arrayOf(pt.object).isRequired,
    setCompanies: pt.func.isRequired
  },

  getInitialState() {
    return {
      textFieldValue: '',
      errorText: ''
    }
  },

  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    }
  },

  handleClick() {
    if (this.state.textFieldValue.length > 2) {
      const updatedCompanies = [...this.props.companies]
      updatedCompanies.push({id: this.props.companies.length, name: this.state.textFieldValue})
      this.props.setCompanies({
        companies: updatedCompanies
      })
      browserHistory.push('/companies')
    } else {
      this.setState({ errorText: 'The name must be at least 3 characters long' })
    }
  },

  handleTextFieldChange(e: Object) {
    this.setState({
      textFieldValue: e.target.value
    })
  },

  render() {
    return <Container>
      <div>
        <TextField
          floatingLabelText='Company Name'
          style={{marginRight: '20px'}}
          value={this.state.textFieldValue}
          onChange={this.handleTextFieldChange}
          errorText={this.state.errorText} />
      </div>
      <div style={{marginTop: '30px'}}>
        <RaisedButton
          label='Add'
          primary
          onClick={this.handleClick} />
      </div>
    </Container>
  }
})

New.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default New
