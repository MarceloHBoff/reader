import React, { useCallback, useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

import Select from './components/Select';
import { Container, TextArea, Configs, Player } from './styles';
import GlobalStyle from './styles/global';

const utterance = new SpeechSynthesisUtterance();

const App: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [text, setText] = useState('');
  const [lang, setLang] = useState('BR');
  const [speed, setSpeed] = useState('1x');

  const start = useCallback(() => {
    if (playing) {
      speechSynthesis.cancel();
    } else {
      utterance.lang = lang === 'BR' ? 'pt-BR' : 'en-US';
      utterance.rate = Number(speed.slice(0, -1));
      utterance.text = text;
      utterance.addEventListener('end', () => setPlaying(false));
      speechSynthesis.speak(utterance);
    }

    setPlaying(!playing);
  }, [text, playing, lang, speed]);

  return (
    <Container>
      <Configs>
        <Player type="button" onClick={start}>
          {playing ? <FaStop /> : <FaPlay />}
        </Player>
        <Select
          legend="Lang"
          options={['EN', 'BR']}
          getSelected={setLang}
          default="BR"
        />
        <Select
          legend="Speed"
          options={[
            '0.25x',
            '0.50x',
            '0.75x',
            '1x',
            '1.25x',
            '1.50x',
            '1.75x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
          ]}
          getSelected={setSpeed}
          default="1x"
        />
      </Configs>
      <TextArea
        placeholder="Paste your text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <GlobalStyle />
    </Container>
  );
};

export default App;
