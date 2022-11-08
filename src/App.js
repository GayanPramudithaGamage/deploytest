import { Container } from "react-bootstrap";
import PizzaChart from "./components/PizzaChart";
import BookBarChart from "./components/BookBarChart";
import useGoogleCharts from './components/useGoogleCharts';

function App() {
  const google = useGoogleCharts();

  return (
    <>
      <Container className="mt-3">
        <h1>With Hooks</h1>
        <PizzaChart google={google} />
        <BookBarChart google={google} />
      </Container>
    </>
  );
}

export default App;