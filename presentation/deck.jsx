import React from 'react/addons';

import {
  BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './components/interactive';
import Suevalov from './components/suevalov';
import Rectangle from './components/rectangle';

const images = {
  thanks: require('./images/ironman-thanks.gif'),
  logo: require('./images/electron-logo.png'),
  nwLogo: require('./images/nw-logo.png'),
  me: require('./images/me.png'),
  timBernens: require('./images/tim-bernens.jpg'),
  distribution: require('./images/distribution.png'),
  prefer: require('./images/prefer.jpg'),
  electronApps: require('./images/electron-apps.png')
};

preloader([images.me, images.timBernens, images.logo, images.thanks]);

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
        <Slide bgColor='black'>
            <Image src={images.timBernens.replace('/', '')} margin='0px auto 40px' height='293px'/>
            <BlockQuote>
              <Quote>The "Rule of Least Power" suggests choosing the least powerful language suitable for a given purpose</Quote>
              <Cite>Tim Berners-Lee</Cite>
            </BlockQuote>
        </Slide>
        <Slide bgColor='black'>
            <Heading size={3} textColor='tertiary' textFont='primary'>
                In other words...
            </Heading>
            <Heading size={5} textColor='primary' textFont='secondary'>
                Any application that can be written in JavaScript, will eventually be written in JavaScript.
            </Heading>
        </Slide>
        <Slide bgColor='primary' textColor='darkPrimary'>
            <Heading size={4} textColor='darkPrimary' textFont='primary'>
                The different aspects of JavaScript
            </Heading>
            <div style={{height: '40px'}}></div>
            <List>
                <ListItem>Front-end development</ListItem>
                <ListItem>Command line interface (CLI) applications</ListItem>
                <ListItem>Desktop (GUI) applications</ListItem>
                <ListItem>Mobile applications</ListItem>
                <ListItem>Back-end development</ListItem>
                <ListItem>IoT</ListItem>
                <ListItem>Any combination of the above</ListItem>
            </List>
        </Slide>
        <Slide bgColor='primary' textColor='darkPrimary'>
            <Heading size={4} textColor='darkPrimary' textFont='primary'>
                The different aspects of JavaScript
            </Heading>
            <div style={{height: '40px'}}></div>
            <List>
                <ListItem>Front-end development</ListItem>
                <ListItem>Command line interface (CLI) applications</ListItem>
                <ListItem><strong>Desktop (GUI) applications</strong></ListItem>
                <ListItem>Mobile applications</ListItem>
                <ListItem>Back-end development</ListItem>
                <ListItem>IoT</ListItem>
                <ListItem>Any combination of the above</ListItem>
            </List>
        </Slide>
        <Slide bgColor='primary'>
            <Image src={images.distribution} width='90%' />
        </Slide>
        <Slide bgColor='primary'>
            <Layout>
                <Fill>
                    <div style={{'margin-top': '130px'}}>
                        <Rectangle>
                            Shared code
                        </Rectangle>
                    </div>
                </Fill>
                <Fill>
                    <Rectangle>
                        Desktop code
                    </Rectangle>
                    <Rectangle>
                        Web code
                    </Rectangle>
                </Fill>
            </Layout>
        </Slide>
        <Slide bgColor='primary'>
            <Layout>
                <Fill>
                    <Image src={images.logo} width='200px' />
                    <a href='http://electron.atom.io' target='_blank'>
                        <Text textColor='darkPrimary'>Electron.js</Text>
                    </a>
                </Fill>
                <Fill>
                    <Image src={images.nwLogo} width='200px' />
                    <a href='http://nwjs.io/' target='_blank'>
                        <Text textColor='darkPrimary'>NW.js</Text>
                    </a>
                </Fill>
            </Layout>
            <a href='https://github.com/atom/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md' target='_blank' style={{ 'font-size': '10px', 'margin-top': '100px', 'display': 'block'}}>
                <Text textColor='darkPrimary'>Electron's tech differences to NW.js</Text>
            </a>

        </Slide>
        <Slide bgColor='white'>
            <Heading size={4} textColor='darkPrimary'>Notable applications</Heading>
            <Image src={images.electronApps} />
            <a href='https://github.com/nwjs/nw.js/wiki/List-of-apps-and-companies-using-nw.js' target='_blank' style={{ 'font-size': '10px', 'margin-top': '100px', 'display': 'block'}}>
                <Text textColor='darkPrimary'>NW.js apps list</Text>
            </a>
            <a href='https://github.com/sindresorhus/awesome-electron' target='_blank' style={{ 'font-size': '10px', 'margin-top': '10px', 'display': 'block'}}>
                <Text textColor='darkPrimary'>Electron apps list</Text>
            </a>
        </Slide>
        <Slide bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
          <CodePane
            lang='javascript'
            source={require('raw!./code/1.example')}
            margin='20px auto'/>
        </Slide>
        <Slide bgColor='primary'>
          <Heading size={1} caps fit textColor='tertiary'>
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide bgImage={images.thanks.replace('/', '')} bgDarken={0.6} align='left left'>
            <div className='thanksSlide'>
              <Heading size={4} caps fits textColor='primary'>Thanks</Heading>
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
