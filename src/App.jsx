import Navbar from './components/Navbar';
import { ReactComponent as Home } from "./assets/Home.svg";
import { ReactComponent as ArrowRightPath } from "./assets/Arrow-right-path.svg";
import { ReactComponent as Refreash } from "./assets/Refreash.svg";
import { ReactComponent as ArrowLeft } from "./assets/Arrow-left.svg";
import { ReactComponent as ArrowRight } from "./assets/Arrow-right.svg";
import { ReactComponent as FullSize } from "./assets/Full-size.svg";
import { ReactComponent as LogoRound } from "./assets/Logo-Round-Border.svg";
import { ReactComponent as Hyggex } from "./assets/Hyggex.svg";
import { ReactComponent as Plus } from "./assets/Plus.svg";
import { ReactComponent as ArrowDowm } from "./assets/Arrow-down.svg";
import './App.css';

function App() {
  return (
    <div className="App font-inter px-[5%]">
      <Navbar />
      <div className='path flex items-center p-[2.5rem] px-5'>
        <Home className='w-6 h-6' />
        <ArrowRightPath className='w-5 h-5' />
        <span>Flashcard</span>
        <ArrowRightPath className='w-5 h-5' />
        <span>Mathematics</span>
        <ArrowRightPath className='w-5 h-5' />
        <span>Relation and Function</span>
      </div>
      <div class="custom-gradient-text text-[1.8rem] font-bold font-montserrat px-5">Relations and Functions ( Mathematics )</div>
      <div className='flex flex-col justify-center items-center p-[1rem]'>
        <div className="options flex gap-[3rem] p-[1.5rem]">
          <span>Study</span>
          <span>Quiz</span>
          <span>Test</span>
          <span>Game</span>
          <span>Others</span>
        </div>
        <div className="flex align-center justify-center p-[12rem] h-[24rem] w-[44rem] bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white rounded-[2.5rem]">
          9 + 6 + 7x - 2x - 3
        </div>
        <div class=" justify-start items-center gap-[10rem] inline-flex p-[2rem]">
          <Refreash />
          <div class="justify-start items-center gap-[2rem] flex">
            <ArrowLeft />
            <div class="text-gray-800 text-xl font-bold font-['Inter']">01/10</div>
            <ArrowRight />
          </div>
          <FullSize />
        </div>
      </div>
      <div className='flex align-center justify-between p-[2rem] px-[0rem]'>
        <div className="left flex items-center">
          <LogoRound />
          <Hyggex />
        </div>
        <div className="right flex items-center">
          <Plus />
          <div class="custom-gradient-text text-[1.5rem] font-semibold font-['Inter']">Create Flashcard</div>
        </div>
      </div>
      <div className='p-[4rem] px-[2rem]'>
        <div className="custom-gradient-text text-5xl font-bold font-['Inter'] tracking-tight">FAQ</div>
        <div className='m-[2rem] mx-[0rem]'>
          <div className="m-[1rem] mx-[0rem] w-[55rem] px-6 py-[1rem] rounded-xl border border-blue-600 justify-between items-center gap-[366px] inline-flex">
            <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">Can education flashcards be used for all age groups?</div>
            <ArrowDowm className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
          <div className="m-[1rem] mx-[0rem] w-[55rem] px-6 py-[1rem] rounded-xl border border-blue-600 justify-between items-center gap-[366px] inline-flex">
            <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">How do education flashcards work?</div>
            <ArrowDowm className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
          <div className="m-[1rem] mx-[0rem] w-[55rem] px-6 py-[1rem] rounded-xl border border-blue-600 justify-between items-center gap-[366px] inline-flex">
            <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">Can education flashcards be used for test preparation?</div>
            <ArrowDowm className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
