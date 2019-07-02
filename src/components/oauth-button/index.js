import { connect } from 'react-redux';
import { setUser, setSession } from '../../actions/root.actions';

import OAuthButton from './oauth-button.component';

const mapStateToProps = state => ({
    user: state.root.user
});

const mapDispatchToProps = {
  setUser,
  setSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuthButton);