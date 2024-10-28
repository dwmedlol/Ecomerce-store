import  Header  from './Header.jsx'
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <div className="max-w-1200 mx-auto bg-white">
      <Header />
      <main className="main-content">
        <ProductGallery />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
