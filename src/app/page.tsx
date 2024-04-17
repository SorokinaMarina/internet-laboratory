import "./page.scss";
import Header from "@/components/Header/Header";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import HowWorks from "@/components/HowWorks/HowWorks";

export default function Home() {
  return (
    <>
      <Header />
      <div className="position-first-background" />
      <div className="position-second-background" />
      <main className="main">
        <TitleBlock />
        <HowWorks />
      </main>
    </>
  );
}
