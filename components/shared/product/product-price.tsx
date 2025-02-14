import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  // Get the int/float

  return (
    <p className={cn("text-2xl", className)}>
      {value}
      <span className="">₹</span>
    </p>
  );
};

export default ProductPrice;
