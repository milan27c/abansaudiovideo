import { redirect } from "next/navigation";

export const metadata = {
  title: "Abans Laptops",
};

export default function Home() {
  redirect("/corporate-solutions/commercial-display-av");
}
