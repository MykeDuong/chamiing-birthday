interface Props {
  goBack: () => void
}

const Letter = ({ goBack }: Props) => {
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
      <div
        className={`bg-gray-100 border-1 border-gray-500 shadow-xl p-20`}
      >
        <div className={`flex flex-row pb-10 gap-2`}>
          <p className={`text-3xl font-semibold`} > Title: </p>
          <p className={`text-3xl`}>Chúc mừng sinh nhật bé Trà My</p>
        </div>
        <div className={`flex flex-row pb-10 gap-2`}>
          <p className={`text-3xl font-semibold`}>From: </p>
          <p className={`text-3xl`}>Anh Phong</p>
        </div>
        <p className={`text-3xl pb-10`}>
          Em luôn khỏe mạnh và lan tỏa năng lượng tích cực đến mọi người xung quanh. Anh cảm nhận rằng, nụ cười vô tri của em là ánh sáng rực rỡ, mang lại niềm vui cho mọi người xung quanh em (và cả anh nữa 🤓)
        </p>
        <div className={`w-full flex justify-end`}>
          <p className={`text-3xl`}>
            - Anh Phong -
          </p>
        </div>
      </div>
    </div >
  )
}

export default Letter
