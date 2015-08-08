import React from 'react/addons';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './interactive';

const images = {
  city: require('./city.jpg'),
  kat: require('./kat.png'),
  logo: require('./formidable-logo.svg')
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={800}>
        <Slide bgColor='primary'>
          <Heading size={1} fit caps textColor='black'>
            Electron
          </Heading>
          <Heading size={4} caps textColor='black'>
            What if your desktop appplication were a browser?
          </Heading>
        </Slide>
        <Slide bgColor='black' notes='You can even put notes on your slide. How awesome is that?'>
          <Image src={images.kat.replace('/', '')} margin='0px auto 40px' height='293px'/>
          <Heading size={1} fit textColor='primary' textFont='secondary'>
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
          <CodePane
            lang='javascript'
            source={require('raw!./code/1.example')}
            margin='20px auto'/>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
          <Appear fid='1'>
            <Heading size={1} caps fit textColor='primary'>
              Full Width
            </Heading>
          </Appear>
          <Appear fid='2'>
            <Heading size={1} caps fit textColor='tertiary'>
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid='3'>
            <Heading size={1} caps fit textColor='primary'>
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor='black'>
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor='primary'>
          <Heading caps fit size={1} textColor='tertiary'>
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor='secondary'>
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <List>
            <ListItem><Appear fid='1'>Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid='2'>Autofit text</Appear></ListItem>
            <ListItem><Appear fid='3'>Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid='4'>React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid='5'>PDF export</Appear></ListItem>
            <ListItem><Appear fid='6'>And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={1} caps fit textColor='tertiary'>
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor='tertiary'>
          <Heading size={1} caps fit textColor='primary'>
            Made with love in Seattle by
          </Heading>
          <Link href='http://www.formidablelabs.com'><Image width='100%' src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
