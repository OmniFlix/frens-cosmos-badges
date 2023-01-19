import React from 'react';
import './index.css';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/nav_logo.svg';
import KeplrButton from './KeplrButton';

const NavBar = () => {
    return (
        <div className="navbar">
            <Logo/>
            <div className="nav_actions">
                <KeplrButton/>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(NavBar);
