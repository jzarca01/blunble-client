import { connect } from 'react-redux';
//import { getMutedList, blockThem, unblockThem } from '../../actions/root.actions';

import Dashboard from './dashboard.component'

const mapStateToProps = state => ({
    user: state.root.user
});

const mapDispatchToProps = {
  /*getMutedList,
  blockThem,
  unblockThem,*/
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);