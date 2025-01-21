import Card from "./components/Card.jsx";
import CardContainer from "./components/CardContainer.jsx";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";

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
      <Hero />
      <CardContainer>
        <Card
          titleName="Cute Doge 1"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 2"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 3"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 4"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 5"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 6"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 7"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
        <Card
          titleName="Cute Doge 8"
          text={description[0]}
          src="https://picsum.photos/id/237/200/200"
        />
      </CardContainer>
    </>
  );
}

export default App;
