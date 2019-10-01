import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider, trackEvent, track } from 'losen';

import Intro from './pages/Intro';
import store from './store';
import wizard from './api/wizard.json';

export default class App extends Component {
  static trackIntro() {
		track(wizard.meta.name, 'intro', 'DigiTEK Bolig');
	}

  state = {
    intro: true,
  }

  closeIntro = () => {
		this.setState({ intro: false });
		window.scrollTo(0, 0);
		trackEvent('close-intro');
	}

	showIntro = () => {
		this.setState({ intro: true });
		window.scrollTo(0, 0);
	}

  render() {
    if (this.state.intro) {
			App.trackIntro();
      
      return (
				<Provider store={store}>
					<StyleProvider>
						<Intro close={this.closeIntro} />
					</StyleProvider>
				</Provider>
			);
    }
    
    return (
			<Provider store={store}>
				<Wizard wizard={wizard} showIntro={this.showIntro} />
			</Provider>
		);
  }
}
