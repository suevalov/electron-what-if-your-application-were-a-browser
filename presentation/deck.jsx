import React from 'react/addons';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, ListItem, List, Quote, Slide
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './components/interactive';
import Suevalov from './components/suevalov';

const images = {
  thanks: require('./ironman-thanks.gif'),
  kat: require('./kat.png'),
  logo: require('./electron-logo.png'),
  me: require('./me.png')
};

preloader([images.me, images.kat, images.logo, images.thanks]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={800}>
        <Slide bgColor='primary'>
          <Layout>
            <Fill>
              <Image src={images.logo} width='450px' />
            </Fill>
            <Fill>
                <div style={{ 'margin-top': '100px'}}>
                  <Heading size={1} caps fits textColor='darkPrimary'>
                    Electron
                  </Heading>
                  <Heading size={6} textColor='darkPrimary'>
                    What if your desktop appplication were a browser?
                  </Heading>
                </div>
            </Fill>
          </Layout>
          <Suevalov photo={images.me} />
        </Slide>
        <Slide bgColor='black' notes='You can even put notes on your slide. How awesome is that?'>
          <Image src={images.kat.replace('/', '')} margin='0px auto 40px' height='293px'/>
          <Heading size={1} fit textColor='primary' textFont='secondary'>
            Wait what?
          </Heading>
        </Slide>
        <Slide bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
          <CodePane
            lang='javascript'
            source={require('raw!./code/1.example')}
            margin='20px auto'/>
        </Slide>
        <Slide bgColor='black'>
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <List>
            <ListItem><Appear fid='1'>Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid='2'>Autofit text</Appear></ListItem>
            <ListItem><Appear fid='3'>Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid='4'>React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid='5'>PDF export</Appear></ListItem>
            <ListItem><Appear fid='6'>And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary'>
          <Heading size={1} caps fit textColor='tertiary'>
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide bgImage={images.thanks.replace('/', '')} bgDarken={0.6} align='left left'>
            <div className='thanksSlide'>
              <Heading size={2} textColor='primary'>Thanks</Heading>
              <div className='thanksSlide__links'>
                <a href="http://suevalov.com/" target="__blank">Alexander Suevalov</a>
                <a href="mailto:suevalov.me@gmail.com">suevalov.me@gmail.com</a>
                <a href="https://github.com/suevalov" target="__blank" className="github">http://github.com/suevalov</a>
                <a href="https://twitter.com/Suevalov" target="__blank" className="twitter">http://twitter.com/Suevalov</a>
              </div>
            </div>
        </Slide>
      </Deck>
    );
  }
}
