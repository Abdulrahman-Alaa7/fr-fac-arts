import Hero from "./components/Hero";
import Heading from "./utils/Heading";
export default function Home() {
  return (
    <div className="">
      <Heading
        title="FA-FR-BU | Home"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <Hero />
    </div>
  );
}
