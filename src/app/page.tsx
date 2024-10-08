import { HomePage } from "@/components/pages/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Yeabsira",
};


export default function Home() {
  return (
    <div className="w-full">
      <HomePage />
    </div>
  );
}
