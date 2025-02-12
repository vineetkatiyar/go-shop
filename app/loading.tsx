import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} alt="loading spinner" height={50} width={50} />
    </div>
  );
}
