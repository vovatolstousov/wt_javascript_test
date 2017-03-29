//@flow
import { connect } from 'react-redux'
import New from '~/app/components/pages/new/New'
import { createAction } from 'redux-actions'
import { SET_COMPANIES, SAGA_GET_COMPANIES } from '~/app/reducers/Company'

export const mapStateToProps = (_state: Object): Object => ({
  companies: _state.company.companies
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({
  setCompanies: (updatedCompanies) => _dispatch(createAction(SET_COMPANIES)(updatedCompanies)),
  getCompanies: () => _dispatch(createAction(SAGA_GET_COMPANIES)())
})

export default connect(mapStateToProps, mapDispatchToProps)(New)
