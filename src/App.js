import { useEffect, useState } from "react";

import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { PricingComponent } from "./components/PricingComponent/PricingComponent";
import { Range } from "./components/Range/Range";
import { Switcher } from "./components/Switcher/Switcher";
import { CTA } from "./components/CTA/CTA";

function App() {
  //_State:
  const [pageviews, setPageviews] = useState("100K");
  const [prise, setPrise] = useState(16);
  const [progress, setProgress] = useState(50);
  const [isYear, setIsYear] = useState(false);

  useEffect(() => {
    switch (progress) {
      case 25:
        setPageviews("50k");
        setPrise(12);
        break;
      case 50:
        setPageviews("100k");
        setPrise(16);
        break;
      case 75:
        setPageviews("500k");
        setPrise(24);
        break;
      case 100:
        setPageviews("1m");
        setPrise(36);
        break;
      default:
        setPageviews("10k");
        setPrise(8);
        break;
    }
  }, [progress]);

  //_Handlers:
  const handlerRange = (e) => setProgress(+e.target.value);
  const handlerSwitch = () => setIsYear((prev) => !prev);

  return (
    <Container>
      <Header />
      <PricingComponent>
        <Range
          pageviews={pageviews}
          progress={progress}
          prise={prise}
          isYear={isYear}
          handler={handlerRange}
        />
        <Switcher isYear={isYear} handler={handlerSwitch} />
        <CTA />
      </PricingComponent>
    </Container>
  );
}

export default App;
