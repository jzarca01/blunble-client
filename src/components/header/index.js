import { connect } from 'react-redux';
import { logout } from '../../actions/root.actions';

import Header from './header.component';

const mapStateToProps = state => ({
    user: state.root.user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);