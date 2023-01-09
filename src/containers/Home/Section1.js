import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

const Section1 = () => {
    return (
        <div className="cards_section section1">
            <div className="card">
                <div className="img_section">

                </div>
                <div className="details">
                    <h2>nft title</h2>
                    <p>Criteria criteria criteria criteria criteria criteria</p>
                </div>
            </div>
            <div className="card">
                <div className="img_section">

                </div>
                <div className="details">
                    <h2>nft title</h2>
                    <p>Criteria criteria criteria criteria criteria criteria</p>
                </div>
            </div>
        </div>
    );
};

Section1.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(Section1);
