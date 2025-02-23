import { ProductList } from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const latestProduct = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProduct} title="Newest Product" limit={4} />
    </div>
  );
};

export default HomePage;
