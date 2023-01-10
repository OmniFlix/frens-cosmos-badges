import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import variables from '../../utils/variables';

const FutureGroup = (props) => {
    return (
        <div className="future_group">
            <h2>{variables[props.lang].future_group}</h2>
            <p>{variables[props.lang].future_group_content}</p>
        </div>
    );
};

FutureGroup.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(FutureGroup);
