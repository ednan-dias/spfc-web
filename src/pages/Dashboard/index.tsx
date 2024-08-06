import { useCallback, useEffect, useState } from 'react';
import { Center, Container, Title } from './styles';

const words = [
  'São Paulo Futebol Clube',
  'Tricolor Paulista',
  'Campeão de Tudo',
  'O Mais Popular',
];

export function Dashboard() {
  const [currentWord, setCurrentWord] = useState(words[0]);

  const sortWord = useCallback(() => {
    setTimeout(() => {
      const index = words.findIndex((word) => word === currentWord);

      if (index + 1 <= words.length) {
        if (words[index + 1]) {
          setCurrentWord(words[index + 1]);
        } else {
          setCurrentWord(words[0]);
        }
      }
    }, 3000);
  }, [currentWord]);

  useEffect(() => {
    sortWord();
  }, [sortWord]);

  return (
    <Container>
      <Center>
        <Title>{currentWord}</Title>
      </Center>
    </Container>
  );
}
