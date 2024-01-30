import { Container } from "./components/Container";
import { PricingComponent } from "./components/PricingComponent";
import { Title } from "./components/Title";

function App() {
  return (
    <Container>
      <Title />
      <PricingComponent />
    </Container>
  );
}

export default App;

/* 
10K pageviews / $8 per month
50K pageviews / $12 per month
100K pageviews / $16 per month
500k pageviews / $24 per month
1M pageviews / $36 per month
*/
