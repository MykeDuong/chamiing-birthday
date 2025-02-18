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
        min-h-screen h-fit w-screen relative font-fraunces overflow-y-hidden
        bg-[linear-gradient(152deg,_#bce5e6,_#fec1bc)]
      `}
    >
      <div className="w-[2px] absolute h-full left-20 bg-gray-500" />
      <div className="w-[2px] absolute h-full right-20 bg-gray-500" />
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
    </div >
  );
}

export default Home
