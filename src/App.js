
import React, { useState, useEffect } from 'react';
import { Button, Container, Header, List, Input, Segment, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quoteId, setQuoteId] = useState('');

  // Charger une citation aléatoire au démarrage de l'application
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Fonction pour charger toutes les citations
  const fetchAllQuotes = () => {
    fetch('http://localhost:5000/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error('Error fetching all quotes:', error));
  };

  // Fonction pour effacer toutes les citations affichées
  const clearAllQuotes = () => {
    setQuotes([]);
  };

  // Fonction pour charger une nouvelle citation aléatoire
  const fetchRandomQuote = () => {
    fetch('http://localhost:5000/quotes/random')
      .then(response => response.json())
      .then(data => setRandomQuote(data))
      .catch(error => console.error('Error fetching random quote:', error));
  };

  // Fonction pour obtenir une citation par ID
  const fetchQuoteById = () => {
    fetch(`http://localhost:5000/quotes/${quoteId}`)
      .then(response => response.json())
      .then(data => setSelectedQuote(data))
      .catch(error => console.error('Error fetching quote by id:', error));
  };

  return (
    <Container>
      <Header as='h1' textAlign='center' style={{ margin: '20px 0' }}>Citations</Header>
      <Segment>
        <Header as='h2'>Toutes les Citations</Header>
        <Button onClick={fetchAllQuotes} primary>Charger Toutes les Citations</Button>
        <Button onClick={clearAllQuotes} color='red'>Effacer Toutes les Citations</Button>
        <List>
          {quotes.map((quote, index) => (
            <List.Item key={index}>
              <List.Content>
                <List.Header>{quote.quote}</List.Header>
                <List.Description>{quote.author}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>

      <Segment>
        <Header as='h2'>Citation Aléatoire</Header>
        <Button onClick={fetchRandomQuote} secondary>Charger une Nouvelle Citation Aléatoire</Button>
        <Segment>
          {randomQuote ? `${randomQuote.quote} - ${randomQuote.author}` : "Chargement..."}
        </Segment>
      </Segment>

      <Segment>
        <Header as='h2'>Chercher Citation par ID</Header>
        <Input
          type="text"
          value={quoteId}
          onChange={(e) => setQuoteId(e.target.value)}
          placeholder="Entrez un ID"
          style={{ marginRight: '10px' }}
        />
        <Button onClick={fetchQuoteById} color='green'>Chercher</Button>
        <Segment>
          {selectedQuote ? `${selectedQuote.quote} - ${selectedQuote.author}` : ''}
        </Segment>
      </Segment>
    </Container>
  );
}

export default App;


/*
import React, { useState, useEffect } from 'react';
import { Button, Container, Header, List, Input, Segment, Grid, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quoteId, setQuoteId] = useState('');

  // Charger une citation aléatoire au démarrage de l'application
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Fonction pour charger toutes les citations
  const fetchAllQuotes = () => {
    fetch('http://localhost:5000/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error('Error fetching all quotes:', error));
  };

  // Fonction pour effacer toutes les citations affichées
  const clearAllQuotes = () => {
    setQuotes([]);
  };

  // Fonction pour charger une nouvelle citation aléatoire
  const fetchRandomQuote = () => {
    fetch('http://localhost:5000/quotes/random')
      .then(response => response.json())
      .then(data => setRandomQuote(data))
      .catch(error => console.error('Error fetching random quote:', error));
  };

  // Fonction pour obtenir une citation par ID
  const fetchQuoteById = () => {
    fetch(`http://localhost:5000/quotes/${quoteId}`)
      .then(response => response.json())
      .then(data => setSelectedQuote(data))
      .catch(error => console.error('Error fetching quote by id:', error));
  };

  return (
    <Container>
      <Header as='h1' textAlign='center' style={{ margin: '20px 0', fontSize: '2.5em' }}>Citations</Header>
      <Segment>
        <Header as='h2'>Toutes les Citations</Header>
        <Button onClick={fetchAllQuotes} primary size='huge' style={{ margin: '10px' }}>Charger Toutes les Citations</Button>
        <Button onClick={clearAllQuotes} color='red' size='huge' style={{ margin: '10px' }}>Effacer Toutes les Citations</Button>
        <List>
          {quotes.map((quote, index) => (
            <List.Item key={index}>
              <List.Content>
                <List.Header as='h3'>{quote.quote}</List.Header>
                <List.Description>{quote.author}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>

      <Segment>
        <Header as='h2'>Citation Aléatoire</Header>
        <Button onClick={fetchRandomQuote} secondary size='huge' style={{ margin: '10px' }}>Charger une Nouvelle Citation Aléatoire</Button>
        <Segment padded>
          {randomQuote ? `${randomQuote.quote} - ${randomQuote.author}` : "Chargement..."}
        </Segment>
      </Segment>

      <Segment>
        <Header as='h2'>Chercher Citation par ID</Header>
        <Input
          type="text"
          value={quoteId}
          onChange={(e) => setQuoteId(e.target.value)}
          placeholder="Entrez un ID"
          style={{ marginRight: '10px', width: 'auto' }}
        />
        <Button onClick={fetchQuoteById} color='green' size='huge' style={{ margin: '10px' }}>Chercher</Button>
        <Segment padded>
          {selectedQuote ? `${selectedQuote.quote} - ${selectedQuote.author}` : ''}
        </Segment>
      </Segment>
    </Container>
  );
}

export default App;

*/