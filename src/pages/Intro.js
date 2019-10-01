import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data: { $computed, ...data } }) {
  if (Object.keys(data).length > 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Skal du bruke gamle byggevarer på nytt?</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
        Denne veiviseren hjelper deg med å finne kravene for å kunne omsette en gammel byggevare som skal brukes på nytt. Svar på spørsmålene for å finne ut om dokumentasjonen er i orden, eller om det er noe som mangler. 
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.Lead>
        <h3>Før du begynner</h3> 
        Før du begynner denne veiviseren bør du tenke igjennom: 
        <ul>
          <li>Hvor gammel er byggevaren? Hvis du vet noe om hvor gammelt byggverket er, så kan det også være en indikator på hvor gammelt produktet er.</li>
          <li>Har du opplysninger om behandlingen av byggevaren fra rivingsprosessen?</li>
          <li>Har du dokumentasjon av byggevaren fra når den først ble omsatt? For eksempel produktdokumentasjon, sertifisering eller godkjenning. FDV-dokumentasjonen kan også si noe om produktets opprinnelse</li>
        </ul>
        <h3>Skillet mellom omsetning og bruk av byggevaren</h3> 
        Når vi snakker om kravene til byggevarer skiller vi mellom kravene til omsetning og salg av byggevarene og kravene til bruk av byggevarer i byggverk. 
        <p><img src="https://dibk.no/globalassets/5.-nye-sider-om-byggevarer/byggevarer---hovedside/bildeom.jpg"/></p>
        

        </Primitives.Paragraphs.Lead>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
