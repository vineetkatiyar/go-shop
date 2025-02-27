import { Dot } from "lucide-react";
export default function LoadingPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Dot className="h-96 w-96 animate-bounce" />
      </div>
    </>
  );
}
