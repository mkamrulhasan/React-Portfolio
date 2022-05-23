import Section from '../UI/Section';
import TwoColumn from '../UI/TwoColumn';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact= props =>{
  return<Section secTitle="Let's talk." id='contact'>
    <TwoColumn>
      <Address />
      <ContactForm />
    </TwoColumn>
  </Section>
}

export default Contact;