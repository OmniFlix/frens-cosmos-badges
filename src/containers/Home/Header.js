import variables from '../../utils/variables';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <h2>{variables[props.lang].frens_collection}</h2>
            <p>{variables[props.lang].frens_content}</p>
        </div>
    );
};

Header.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(Header);
