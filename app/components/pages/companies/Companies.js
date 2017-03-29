//@flow
import React, { PropTypes as pt } from 'react'
import { browserHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Header, Company } from './CompaniesStyle'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired
  },

  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    }
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  handleClick() {
    browserHistory.push('/companies/new')
  },

  render() {
    const { companies } = this.props

    return <Container>
      <Header>Companies</Header>
      <div style={{textAlign: 'center'}}>
        <RaisedButton
          label='Add Company'
          primary
          onClick={this.handleClick} />
      </div>

      {companies.map(c =>
        <Company key={c.id}>{c.name}</Company>
      )}
    </Container>
  }
})

Companies.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default Companies
