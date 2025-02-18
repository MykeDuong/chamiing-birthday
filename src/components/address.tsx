/* eslint-disable */

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

interface Props {
  goBack: () => void
  app: any
}

const Address = ({ goBack, app }: Props) => {
  const db = getFirestore(app);
  const [address, setAddress] = useState<string>("")

  const sendToFirestore = async () => {
    try {
      console.log("Here")
      await addDoc(collection(db, "address"), { address });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div
      className={`px-60 pt-20 flex flex-col items-start h-fit max-h-full`}
    >
      <h1 className={`text-5xl font-fraunces`}>
        Trà My&apos;s Birthday
      </h1>
      <div className={`h-20`} />
      <button
        className={`text-3xl text-gray-500`}
        onClick={goBack}
      >
        &larr; Quay lại
      </button>
      <div className={`h-10`} />
      <p
        className={`text-3xl`}
      >
        Cho anh xin địa chỉ nha, để anh gửi quà cho bé
      </p>
      <div className={`h-8`} />
      <input
        className={`bg-transparent border-b border-slate-400 caret-slate-400 text-slate-700 text-3xl font-raleway outline-none w-full`}
        type="text" id="address" name="Địa chỉ"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
      />
      <div className={`h-10`} />
      <button className={`px-10 py-4 bg-gray-800 text-white text-4xl rounded-lg`} onClick={() => sendToFirestore()}>
        Gửi
      </button>
    </div>
  )

}

export default Address
