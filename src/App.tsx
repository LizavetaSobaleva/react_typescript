import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

// const [count, setCount]  = useState(0)

// return elem('div', {className: 'container'}, [
//   elem('h1', {className: 'font-bold underline', key: 1}, `Button was clicked ${count} times`),
//   elem('button', {
//     className: 'py-2 px-6 border',
//     key: 2,
//     onClick: () => setCount(count + 1)
//   }, 'Just button'),
// ])
