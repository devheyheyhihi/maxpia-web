export default function HeroSection() {
  return (
    // <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 h-[93vh]">
    <section className="bg-[#F6F8FA] py-10 h-[80vh] flex-col items-center justify-center text-center">
      <div className="w-full h-[50%] flex items-center">
        <div className="mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">블록체인의 미래,</h1>
          <h1 className="text-2xl md:text-4xl font-bold text-[#00B2AE] mb-4">(주)맥스피아아이시티가 만들어 갑니다.</h1>
        </div>
      </div>
      <div className="w-full h-[40%] flex items-center justify-center">
        <video 
          className="w-[23%] h-auto object-cover rounded-lg"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/banner_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
} 