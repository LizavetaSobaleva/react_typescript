import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, products, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center"> Loading... </p>}
      {error && <p className="text-center text-red-600"> {error}</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
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