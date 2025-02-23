// import Image from "next/image";
// import loader from "@/assets/loader.gif";
import { LoaderCircle } from "lucide-react";

export default function LoadingPage() {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     width: "100vw",
    // >
    //   <Image src={loader} alt="loading spinner" height={50} width={50} />
    // </div>

    <div className="flex justify-center items-center h-screen w-full">
      <LoaderCircle color="#087ea4" className="h-40 w-40 animate-spin" />
    </div>
  );
}
