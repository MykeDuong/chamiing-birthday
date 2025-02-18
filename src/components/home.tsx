import Image from "next/image"
import chamiingImage from '../../public/chamiing.jpeg'

interface Props {
  toLetter: () => void
  toAddress: () => void
}

const Home = ({ toLetter, toAddress }: Props) => {
  return (
    <div
      className={`px-60 pt-20 pb-20 flex flex-col h-fit max-h-full`}
    >
      <h1 className={`text-5xl font-fraunces`}>
        Trà My&apos;s Birthday
      </h1>
      <div className={`h-20`} />
      <div
        className={`flex flex-row w-full gap-40`}
      >
        <div
          className={`w-[40%] flex flex-col border-[2px] border-gray-900 h-fit`}
        >
          <Image
            className="object-cover aspect-[3/4] border-gray-500"
            src={chamiingImage}
            alt="Chamiing's image"
          />
        </div>

        <div
          className={`w-[60%]`}
        >
          <p className={`text-4xl`}>
            Từ anh Phong đẹp trai vl vl vcl
          </p>
          <h1 className={`text-5xl pt-10`}>
            Chúc mừng sinh nhật
          </h1>
          <div className={`flex flex-row gap-2`}>
            <h1 className={`text-7xl`}>
              Trà My xinh
            </h1>
            <h1 className={`text-7xl text-red-500`}>
              &hearts;
            </h1>
          </div>
          <p className={`text-4xl pt-10`}>Nhân dịp sinh nhật My, and có một xíu quà muốn tặng bé &#xe112;</p>
          <div className={`h-20`} />
          <div className={`flex flex-row gap-10`}>
            <button className={`px-10 py-4 bg-gray-800 text-white text-4xl rounded-lg`} onClickCapture={toLetter}>
              Nhận quà
            </button>
            <button className={`px-10 py-4 bg-gray-800 text-white text-4xl rounded-lg`} onClickCapture={toAddress}>
              Quà khác nữa nè
            </button>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Home
