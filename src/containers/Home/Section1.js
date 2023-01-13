import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import rhombusIcon from '../../assets/rombus.svg';

const Section1 = () => {
    return (
        <div className="cards_section section1">
            <div className="card">
                <div className="img_section">
                    <img
                        alt=""
                        src="https://imagedelivery.net/-N7cPU9vJaN2bV17tdfWHA/7750c3eb-941a-4991-184b-e7d59db56900/medium"/>
                </div>
                <div className="rhombus">
                    <img alt="rhombus" src={rhombusIcon}/>
                    <p>1</p>
                </div>
                <div className="details">
                    <h2 title="Frens Cheesecake (🍰,🤝)">Frens Cheesecake <span aria-label="cheesecake" role="img">(🍰,🤝)</span></h2>
                    <p title="Thank you for staking with us 🤝">Thank you for staking with us <span aria-label="staking" role="img">🤝</span></p>
                </div>
            </div>
            <div className="card">
                <div className="img_section">
                    <img
                        alt=""
                        src="https://imagedelivery.net/-N7cPU9vJaN2bV17tdfWHA/fc869eb6-ec99-448c-746d-82999590eb00/medium"/>
                </div>
                <div className="rhombus">
                    <img alt="rhombus" src={rhombusIcon}/>
                    <p>3</p>
                </div>
                <div className="details">
                    <h2 title="Bear Market Frens (🧸,🤝)">Bear Market Frens <span aria-label="Bear" role="img">(🧸,🤝)</span></h2>
                    <p title="We are all bear market frens">We are all bear market frens</p>
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
