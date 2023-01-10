import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';
import { showTradeDialog } from '../../actions/home';

const Section2 = (props) => {
    return (
        <div className="cards_section section2">
            <div className="card">
                <div className="img_section">
                    <img
                        alt=""
                        src="https://imagedelivery.net/-N7cPU9vJaN2bV17tdfWHA/7750c3eb-941a-4991-184b-e7d59db56900/medium" />
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
                    <img
                        alt=""
                        src="https://imagedelivery.net/-N7cPU9vJaN2bV17tdfWHA/fc869eb6-ec99-448c-746d-82999590eb00/medium" />
                </div>
                <div className="details actions">
                    <Button className="claim" onClick={props.showTradeDialog}>
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
    showTradeDialog: PropTypes.func.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

const actionToProps = {
    showTradeDialog,
};

export default connect(stateToProps, actionToProps)(Section2);
