import { useState } from 'react'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black">
      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-6">
          <img src={logo} alt="CHEMFLIX" className="w-64 mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-4 neon-text">
            CHEMFLIX
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            شیمی رو استریم کن — مثل نتفلیکس!
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition transform hover:scale-105">
            همین حالا شروع کن
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* دوره‌ها */}
      <div className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-500">دوره‌های آماده</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['شیمی عمومی ۲', 'شیمی تجزیه ۱', 'فیزیک عمومی ۲'].map((title, i) => (
            <div key={i} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
              <div className="bg-gray-700 h-48 flex items-center justify-center">
                <div className="text-6xl">Beaker</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">ویدیو + جزوه تایپی + آزمون</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">۷۹۰,۰۰۰ تومان</span>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm">
                    خرید دوره
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
