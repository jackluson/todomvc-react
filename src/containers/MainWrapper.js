import { connect } from 'react-redux'
import MainWrapper from '../components/MainWrapper'
import { setVisibilityFilter } from '../store/visible-filter/action'
const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: (filterVal) => dispatch(setVisibilityFilter(filterVal))
})

export default connect(
  null,
  mapDispatchToProps
)(MainWrapper)