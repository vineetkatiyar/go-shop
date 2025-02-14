import { ProductList } from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/actions/product.actions";

const HomePage = async () => {
  const latestProduct = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProduct} title="Newest Product" limit={4} />
    </div>
  );
};

export default HomePage;
