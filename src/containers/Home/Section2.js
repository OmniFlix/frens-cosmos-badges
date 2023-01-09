import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';

const Section2 = (props) => {
    return (
        <div className="cards_section section2">
            <div className="card">
                <div className="img_section">

                </div>
                <div className="details actions">
                    <Button className="claim">
                        {variables[props.lang].claim}
                    </Button>
                    <Button className="purchase">
                        {variables[props.lang].purchase}
                    </Button>
                </div>
            </div>
            <div className="card">
                <div className="img_section">

                </div>
                <div className="details actions">
                    <Button className="claim">
                        {variables[props.lang].claim}
                    </Button>
                    <Button className="purchase">
                        {variables[props.lang].purchase}
                    </Button>
                </div>
            </div>
        </div>
    );
};

Section2.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(Section2);
