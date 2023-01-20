import React, { Component } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Header from './Header';
import FutureGroup from './FutureGroup';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import TradeDialog from '../TradeDialog';
import { ReactComponent as BackgroundIcon } from '../../assets/cards_bg.svg';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProjectsList, fetchNFT } from '../../actions/mint';
import { showMessage } from '../../actions/snackbar';

class Home extends Component {
    componentDidMount () {
        if (this.props.list && !this.props.list.length) {
            if (this.props.address) {
                this.props.fetchProjectsList(this.props.address, (result) => {
                    if (result && result.length) {
                        result.map((value) => {
                            if (value && value.nfts && value.nfts.length && value.nfts[0]) {
                                this.props.fetchNFT(value.nfts[0]);
                            }

                            return null;
                        });
                    }
                });

                return;
            }

            this.props.fetchProjectsList();
        }
    }

    componentDidUpdate (pp, ps, ss) {
        if (pp.address !== this.props.address) {
            this.props.fetchProjectsList(this.props.address, (result) => {
                if (result && result.length) {
                    result.map((value) => {
                        if (value && value.nfts && value.nfts.length && value.nfts[0]) {
                            this.props.fetchNFT(value.nfts[0]);
                        }

                        return null;
                    });
                }
            });
        }
    }

    render () {
        return (
            <div className="content_div home">
                <NavBar/>
                <Header/>
                <div className="cards">
                    <BackgroundIcon/>
                    <Section1/>
                    <Section2/>
                </div>
                <FutureGroup/>
                <Footer/>
                <TradeDialog/>
            </div>
        );
    }
}

Home.propTypes = {
    address: PropTypes.string.isRequired,
    fetchNFT: PropTypes.func.isRequired,
    fetchProjectsList: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    nfts: PropTypes.object.isRequired,
    showMessage: PropTypes.func.isRequired,
};

const stateToProps = (state) => {
    return {
        address: state.account.wallet.connection.address,
        inProgress: state.mint.projectsList.inProgress,
        lang: state.language,
        list: state.mint.projectsList.value,
        nfts: state.mint.nfts.value,
    };
};

const actionToProps = {
    fetchNFT,
    fetchProjectsList,
    showMessage,
};

export default connect(stateToProps, actionToProps)(Home);
