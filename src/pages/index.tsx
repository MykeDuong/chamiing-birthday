import HomeContent from "~/components/home";
import Letter from "~/components/letter";
import Address from '~/components/address'
import { useState } from "react";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2IELnlPkuAtJN653jw0EA3Oh9wjiQu54",
  authDomain: "chamiing.firebaseapp.com",
  projectId: "chamiing",
  storageBucket: "chamiing.firebasestorage.app",
  messagingSenderId: "492654798510",
  appId: "1:492654798510:web:5a66e6ff9d6de642496f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

enum Content { Home, Letter, Address }

const Home = () => {
  const [currentContent, setCurrentContent] = useState<Content>(Content.Home)

  return (
    <div
      className={`
        h-screen min-h-screen w-screen relative font-fraunces overflow-y-hidden
        bg-[linear-gradient(152deg,_#bce5e6,_#fec1bc)]
      `}
    >
      <div className="w-[2px] absolute h-screen left-20 bg-gray-500" />
      <div className="w-[2px] absolute h-screen right-20 bg-gray-500" />
      {
        currentContent === Content.Home ?
          <HomeContent
            toLetter={() => setCurrentContent(Content.Letter)}
            toAddress={() => setCurrentContent(Content.Address)}
          /> :
          currentContent === Content.Letter ?
            <Letter goBack={() => setCurrentContent(Content.Home)} /> :
            <Address goBack={() => setCurrentContent(Content.Home)} app={app} />
      }
      <div
        className={`absolute bottom-[-16rem] px-60 w-screen flex flex-row gap-20 items-start`}
      >
        <div className={`w-1/4 h-[2px] bg-gray-900`} />
        <div className={`w-1/4 aspect-square border-[40px] border-gray-900 rounded-[50%]`} />
        <div className={`w-1/2 h-[2px] bg-gray-900`} />
      </div>
    </div >
  );
}

export default Home
