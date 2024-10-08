import ContactPage from "@/components/pages/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactPage />;
}
