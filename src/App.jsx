import Card from "./components/Card.jsx";
import CardContainer from "./components/CardContainer.jsx";
import Nav from './components/Nav.jsx';

function App() {
  const description = [
    "this is the description of the card 1",
    "this is the description of the card 2",
    "this is the description of the card 3",
    "this is the description of the card 4",
    "this is the description of the card 5",
    "this is the description of the card 6",
  ];

  return (
    <>
      <Nav />
      <CardContainer>
        <Card
          titleName="Cute Doge 1"
          text={description[0]}
          src="https://picsum.photos/id/237/200/300"
        />
      </CardContainer>
    </>
  );
}

export default App;
