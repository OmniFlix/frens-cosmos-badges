import React from 'react';
import './index.css';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/nav_logo.svg';
import { Button } from '@mui/material';
import variables from '../../utils/variables';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <Logo />
            <div className="nav_actions">
                <Button>
                    {variables[props.lang].connect}
                </Button>
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
