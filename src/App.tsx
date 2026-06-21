import Lightfall from "./components/Lightfall";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Skill from "./components/skills/Skill";
import Footer from "./components/footer/Footer";
function App() {
  return <>
     <Lightfall
    colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
    backgroundColor="#0A29FF"
    speed={0.5}
    streakCount={2}
    streakWidth={1}
    streakLength={1}
    glow={1}
    density={0.6}
    twinkle={1}
    zoom={3}
    backgroundGlow={0.1}
    opacity={1}
    mouseInteraction
    mouseStrength={0.5}
    mouseRadius={1}
   
/>
<Navbar></Navbar>
<Intro></Intro>
<Skill></Skill>
<Footer></Footer>
  </>;
}

export default App;
