/* eslint-disable */

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Image from "next/image";

import addressImage from '../../public/diachi.jpg'

interface Props {
  goBack: () => void
  app: any
}

enum Status { Initial, Sent, Sending, Failed }

const Address = ({ goBack, app }: Props) => {
  const db = getFirestore(app);
  const [address, setAddress] = useState<string>("")
  const [status, setStatus] = useState(Status.Initial)

  const sendToFirestore = async () => {
    try {
      setStatus(Status.Sending)
      console.log("Here")
      await addDoc(collection(db, "address"), { address });
      setStatus(Status.Sent)
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatus(Status.Failed)
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
        onClickCapture={goBack}
      >
        &larr; Quay lại
      </button>
      <div className={`h-10`} />
      <p
        className={`text-3xl`}
      >
        đố em biết giao điểm 2 đường tròn này là gì
      </p>
      <div className={`h-8`} />
      <Image
        className={`w-1/2`}
        src={addressImage}
        alt="diachi"
      />
      <div className={`h-8`} />
      <input
        className={`bg-transparent border-b border-slate-400 caret-slate-400 text-slate-700 text-3xl font-raleway outline-none w-full`}
        type="text" id="address" name="Địa chỉ"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
      />
      <div className={`h-10`} />
      {status === Status.Initial ?
        <button className={`px-10 py-4 bg-gray-800 text-white text-4xl rounded-lg`} onClickCapture={() => sendToFirestore()}>
          Gửi
        </button>
        : status === Status.Sending ?
          <p className={`text-3xl`}>...</p> :
          status === Status.Sent ? <p className={`text-3xl`}>được rùi ngày mai sẽ có một chú shipper tặng em bó hoa xinh nhì :D</p> : <p className={`text-3xl`}>vl unlucky thử lại hộ anhhh</p>
      }
      <div className={`h-10`} />
    </div>
  )

}

export default Address
