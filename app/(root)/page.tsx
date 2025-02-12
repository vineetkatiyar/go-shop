import sampleData from "@/db/sample-data";
import { ProductList } from "@/components/shared/product/product-list";

const HomePage = async () => {
  console.log(sampleData);
  return <div>
    <ProductList data={sampleData.products} title="Newest Product" limit={4}/>
  </div>;
};

export default HomePage;
