import "./page.scss";
import Header from "@/components/Header/Header";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import HowWorks from "@/components/HowWorks/HowWorks";
import Questions from "@/components/Questions/Questions";
import Articles from "@/components/Articles/Articles";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Reviews/Reviews";
import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <Header />
      <div className="position-first-background" />
      <div className="position-second-background" />
      <main className="main">
        <TitleBlock />
        <HowWorks />
        <Reviews />
        <Questions />
        <Articles />
        <Form />
      </main>
      <Footer />
    </>
  );
}
