import { useState, useEffect } from 'react'
import './index.css'

// Screenshot rotation hook
const useScreenshotRotation = () => {
  const screenshots = [
    './assets/grooming_updates.PNG',
    './assets/maps.PNG',
    './assets/weather_webcams.PNG',
    './assets/news.PNG',
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return screenshots[currentIndex]
}

// SVG Icons as components
const SnowflakeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20m0-20l-3 3m3-3l3 3m-3 17l-3-3m3 3l3-3M2 12h20m-20 0l3-3m-3 3l3 3m17-3l-3-3m3 3l-3 3m-9.5-9.5l7 7m0-7l-7 7" />
  </svg>
)

const MapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
)

const CloudIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const WifiOffIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a3 3 0 004.243 0m-4.243 0a3 3 0 014.243-4.243m-4.243 4.243L3 3" />
  </svg>
)

const DevicesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

// App Store Badge SVG
const AppStoreBadge = () => (
  <svg className="h-12 w-auto" viewBox="0 0 120 40">
    <rect width="120" height="40" rx="5" fill="black"/>
    <path d="M24.769 20.3a4.949 4.949 0 012.356-4.151 5.066 5.066 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 001.52-3.092 4.782 4.782 0 01-2.92-4.4zM22.037 12.21a4.872 4.872 0 001.115-3.49 4.957 4.957 0 00-3.208 1.66 4.636 4.636 0 00-1.144 3.36 4.1 4.1 0 003.237-1.53z" fill="white"/>
    <g fill="white">
      <path d="M42.302 27.14h-4.734l-1.136 3.356h-2.003l4.483-12.418h2.083l4.483 12.418h-2.039l-1.137-3.356zm-4.243-1.55h3.752l-1.85-5.446h-.052l-1.85 5.447zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM71.71 27.036c.138 1.231 1.335 2.04 2.97 2.04 1.566 0 2.693-.809 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v5.007c0 .779.347 1.142 1.102 1.142.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.21h-1.316v-1.473h1.316V19.3h1.867zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 012.177-1.635c.214-.001.428.022.637.069v1.738a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37h-1.858v-9.054zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.358 2.358 0 002.436 2.564 2.048 2.048 0 002.09-1.273h1.765zm-6.282-2.702h4.526a2.177 2.177 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z"/>
    </g>
    <g fill="white">
      <path d="M37.826 8.731a2.64 2.64 0 012.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731h2.155zm-1.228 5.123h1.125a1.876 1.876 0 001.967-2.146 1.881 1.881 0 00-1.967-2.134h-1.125v4.28zM41.68 12.444a2.133 2.133 0 114.248 0 2.134 2.134 0 11-4.247 0zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889l-1.237 4.503zM53.854 10.195h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.888v-4.503zM59.094 8.437h.888v6.26h-.888v-6.26zM61.218 12.444a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.4 13.424c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 001.166-.983zM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 011.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 01-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.888v-4.503zM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.714v-1.14h.89zM95.705 8.437h.88v2.481h.07a1.386 1.386 0 011.374-.806 1.483 1.483 0 011.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 00-1.134 1.142v2.63h-.888v-6.26zM104.761 13.482a1.823 1.823 0 01-1.951 1.303 2.047 2.047 0 01-2.08-2.325 2.077 2.077 0 012.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 001.2 1.29 1.08 1.08 0 001.07-.546h.856zm-3.126-1.451h2.275a1.086 1.086 0 00-1.109-1.167 1.152 1.152 0 00-1.166 1.167z"/>
    </g>
  </svg>
)

// Google Play Badge SVG
const GooglePlayBadge = () => (
  <svg className="h-12 w-auto" viewBox="0 0 135 40">
    <rect width="135" height="40" rx="5" fill="black"/>
    <path d="M68.14 21.75a4.26 4.26 0 104.27 4.25 4.2 4.2 0 00-4.27-4.25zm0 6.83a2.58 2.58 0 112.4-2.58 2.46 2.46 0 01-2.4 2.58zm-9.31-6.83a4.26 4.26 0 104.27 4.25 4.2 4.2 0 00-4.27-4.25zm0 6.83a2.58 2.58 0 112.4-2.58 2.46 2.46 0 01-2.4 2.58zm-11.09-5.52v1.8h4.32a3.77 3.77 0 01-1 2.27 4.42 4.42 0 01-3.33 1.32 4.8 4.8 0 010-9.6A4.6 4.6 0 0151 20.14l1.27-1.27a6.29 6.29 0 00-4.54-1.82 6.61 6.61 0 100 13.22 6 6 0 004.61-1.85 6 6 0 001.56-4.22 5.87 5.87 0 00-.1-1.13zm45.31 1.4a4 4 0 00-3.64-2.71 4 4 0 00-4 4.25 4.16 4.16 0 004.22 4.25 4.23 4.23 0 003.54-1.88l-1.45-1a2.43 2.43 0 01-2.09 1.18 2.16 2.16 0 01-2.06-1.29l5.69-2.35zm-5.8 1.42a2.33 2.33 0 012.22-2.48 1.65 1.65 0 011.58.9zM82.63 30h1.87V17.5h-1.87zm-3.06-7.3h-.07a3 3 0 00-2.24-1 4.26 4.26 0 000 8.51 2.9 2.9 0 002.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 01-2.14-1.51l-1.63.68A4.05 4.05 0 0077.29 34c2.19 0 4-1.29 4-4.43V22h-1.72zm-2.14 5.88a2.59 2.59 0 010-5.16 2.4 2.4 0 012.27 2.58 2.38 2.38 0 01-2.27 2.58zm24.38-11.08h-4.47V30h1.87v-4.74h2.61a3.89 3.89 0 100-7.76zm0 6h-2.61v-4.26h2.65a2.14 2.14 0 110 4.29zm11.53-1.8a3.5 3.5 0 00-3.33 1.91l1.66.69a1.77 1.77 0 011.7-.92 1.8 1.8 0 012 1.61v.13a4.13 4.13 0 00-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.89 2.89 0 003.1 2.75 2.63 2.63 0 002.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 011.7.42 2.26 2.26 0 01-2.19 2zM123.5 22l-2.14 5.42h-.06L119.1 22h-2l3.33 7.58-1.9 4.21h1.95L125.54 22zm-16.81 8h1.87V17.5h-1.87z" fill="white"/>
    <path d="M10.44 7.54a2 2 0 00-.46 1.4v22.12a2 2 0 00.46 1.4l.07.07L22.9 20.14v-.28L10.51 7.47z" fill="url(#a)"/>
    <path d="M27 24.28l-4.1-4.14v-.28l4.1-4.14.09.05L32 18.54c1.4.79 1.4 2.09 0 2.89l-4.89 2.8z" fill="url(#b)"/>
    <path d="M27.12 24.23L22.9 20 10.44 32.46a1.63 1.63 0 002.08.06l14.6-8.29" fill="url(#c)"/>
    <path d="M27.12 15.77l-14.6-8.29a1.63 1.63 0 00-2.08.06L22.9 20z" fill="url(#d)"/>
    <defs>
      <linearGradient id="a" x1="21.8" y1="8.71" x2="5.02" y2="25.49" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A0FF"/>
        <stop offset=".01" stopColor="#00A1FF"/>
        <stop offset=".26" stopColor="#00BEFF"/>
        <stop offset=".51" stopColor="#00D2FF"/>
        <stop offset=".76" stopColor="#00DFFF"/>
        <stop offset="1" stopColor="#00E3FF"/>
      </linearGradient>
      <linearGradient id="b" x1="33.83" y1="20" x2="9.64" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE000"/>
        <stop offset=".41" stopColor="#FFBD00"/>
        <stop offset=".78" stopColor="#FFA500"/>
        <stop offset="1" stopColor="#FF9C00"/>
      </linearGradient>
      <linearGradient id="c" x1="24.83" y1="22.3" x2="2.07" y2="45.05" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3A44"/>
        <stop offset="1" stopColor="#C31162"/>
      </linearGradient>
      <linearGradient id="d" x1="7.3" y1="-.18" x2="17.46" y2="9.98" gradientUnits="userSpaceOnUse">
        <stop stopColor="#32A071"/>
        <stop offset=".07" stopColor="#2DA771"/>
        <stop offset=".48" stopColor="#15CF74"/>
        <stop offset=".8" stopColor="#06E775"/>
        <stop offset="1" stopColor="#00F076"/>
      </linearGradient>
    </defs>
  </svg>
)

function App() {
  const currentScreenshot = useScreenshotRotation()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Floating snowflakes background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <span className="snowflake snowflake-1 text-[10px] opacity-20" style={{ left: '5%', animationDelay: '0s' }}>❄</span>
        <span className="snowflake snowflake-2 text-[8px] opacity-15" style={{ left: '15%', animationDelay: '2s' }}>❄</span>
        <span className="snowflake snowflake-3 text-[12px] opacity-10" style={{ left: '25%', animationDelay: '4s' }}>❄</span>
        <span className="snowflake snowflake-4 text-[6px] opacity-20" style={{ left: '35%', animationDelay: '1s' }}>❄</span>
        <span className="snowflake snowflake-5 text-[9px] opacity-15" style={{ left: '45%', animationDelay: '6s' }}>❄</span>
        <span className="snowflake snowflake-6 text-[11px] opacity-10" style={{ left: '55%', animationDelay: '3s' }}>❄</span>
        <span className="snowflake snowflake-7 text-[7px] opacity-20" style={{ left: '65%', animationDelay: '5s' }}>❄</span>
        <span className="snowflake snowflake-8 text-[10px] opacity-15" style={{ left: '75%', animationDelay: '7s' }}>❄</span>
        <span className="snowflake snowflake-1 text-[8px] opacity-10" style={{ left: '85%', animationDelay: '8s' }}>❄</span>
        <span className="snowflake snowflake-3 text-[6px] opacity-20" style={{ left: '92%', animationDelay: '2.5s' }}>❄</span>
        <span className="snowflake snowflake-5 text-[9px] opacity-15" style={{ left: '10%', animationDelay: '9s' }}>❄</span>
        <span className="snowflake snowflake-7 text-[11px] opacity-10" style={{ left: '30%', animationDelay: '10s' }}>❄</span>
        <span className="snowflake snowflake-2 text-[7px] opacity-20" style={{ left: '50%', animationDelay: '11s' }}>❄</span>
        <span className="snowflake snowflake-4 text-[8px] opacity-15" style={{ left: '70%', animationDelay: '12s' }}>❄</span>
        <span className="snowflake snowflake-6 text-[10px] opacity-10" style={{ left: '90%', animationDelay: '13s' }}>❄</span>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="./assets/iTunesArtwork@3x.png" alt="Meissner Nordic App Icon" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-bold">Meissner Nordic</span>
          </div>
          <a href="#download" className="hidden md:block bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
            Download App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 container mx-auto px-6 pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sky-300 text-sm mb-4">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
              Real-time grooming updates
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
              Your Ultimate <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">Nordic Skiing</span> Companion
            </h1>
            
            <p className="text-lg text-slate-300 mb-6 max-w-xl mx-auto lg:mx-0">
              Stay updated with real-time trail conditions, weather forecasts, and grooming reports for Meissner Nordic Ski Area.
            </p>

            {/* App Store Badges */}
            <div id="download" className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <a href="https://apps.apple.com/us/app/meissner-nordic/id1601048636" 
                 className="transform hover:scale-105 transition-transform duration-300">
                <AppStoreBadge />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.refractored.meissner" 
                 className="transform hover:scale-105 transition-transform duration-300">
                <GooglePlayBadge />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 justify-center lg:justify-start text-center">
              <div>
                <div className="text-xl font-bold text-white">Free</div>
                <div className="text-xs text-slate-400">Forever</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <div className="text-xl font-bold text-white">iOS & Android</div>
                <div className="text-xs text-slate-400">Cross Platform</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <div className="text-xl font-bold text-white">Offline</div>
                <div className="text-xs text-slate-400">Ready</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative flex justify-center lg:justify-end overflow-visible">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 blur-3xl rounded-full scale-75"></div>
            
            {/* Phone mockup */}
            <div className="relative">
              {/* Left floating cards */}
              <div className="absolute -left-32 top-8 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-xs font-medium">Trail Groomed</span>
                </div>
              </div>
              
              <div className="absolute -left-28 top-36 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-700 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 text-xs">📰</span>
                  </div>
                  <span className="text-xs font-medium">News Alert</span>
                </div>
              </div>
              
              <div className="absolute -left-24 bottom-20 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-300 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-xs">📅</span>
                  </div>
                  <span className="text-xs font-medium">Events</span>
                </div>
              </div>

              {/* Phone */}
              <div className="w-56 md:w-64 bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2.5rem] p-2 shadow-2xl shadow-sky-500/20 relative z-10">
                <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                  <img 
                    src={currentScreenshot} 
                    alt="Meissner Nordic app showing trail grooming reports, weather conditions, and interactive maps for cross-country skiing" 
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full"></div>
              </div>
              
              {/* Right floating cards */}
              <div className="absolute -right-32 top-12 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-500 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sky-400 text-xs">❄️</span>
                  </div>
                  <span className="text-xs font-medium">28°F Fresh Snow</span>
                </div>
              </div>
              
              <div className="absolute -right-28 top-40 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-200 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-rose-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-rose-400 text-xs">📍</span>
                  </div>
                  <span className="text-xs font-medium">Trail Maps</span>
                </div>
              </div>
              
              <div className="absolute -right-24 bottom-24 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-1000 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-xs">📷</span>
                  </div>
                  <span className="text-xs font-medium">Webcams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-slate-800/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"> Perfect Ski Days</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built specifically for Meissner Nordic Ski Area, our app keeps you informed and ready to hit the trails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<SnowflakeIcon />}
              title="Grooming Reports" 
              description="Real-time trail grooming status powered by Nordic Pulse. Know exactly which trails are freshly groomed before you go."
              gradient="from-sky-500/20 to-cyan-500/20"
            />
            <FeatureCard 
              icon={<CloudIcon />}
              title="Weather Conditions" 
              description="Accurate weather forecasts and current conditions. Temperature, wind, snow depth, and visibility all in one place."
              gradient="from-purple-500/20 to-pink-500/20"
            />
            <FeatureCard 
              icon={<MapIcon />}
              title="Interactive Trail Maps" 
              description="Explore all trails with detailed interactive maps. View trail difficulty, length, and current conditions."
              gradient="from-emerald-500/20 to-teal-500/20"
            />
            <FeatureCard 
              icon={<CalendarIcon />}
              title="Events & Races" 
              description="Stay updated on upcoming events, races, and community activities at Meissner Nordic."
              gradient="from-orange-500/20 to-amber-500/20"
            />
            <FeatureCard 
              icon={<WifiOffIcon />}
              title="Offline Access" 
              description="No cell service on the mountain? No problem. Access cached maps and data even without connectivity."
              gradient="from-rose-500/20 to-red-500/20"
            />
            <FeatureCard 
              icon={<DevicesIcon />}
              title="Cross Platform" 
              description="Available on iOS and Android with a consistent, beautiful experience across all your devices."
              gradient="from-indigo-500/20 to-violet-500/20"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hit the Trails?</h2>
              <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                Download Meissner Nordic today and never miss perfect skiing conditions again.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://apps.apple.com/us/app/meissner-nordic/id1601048636" 
                   className="transform hover:scale-105 transition-transform duration-300">
                  <AppStoreBadge />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.refractored.meissner" 
                   className="transform hover:scale-105 transition-transform duration-300">
                  <GooglePlayBadge />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="./assets/iTunesArtwork@3x.png" alt="Meissner Nordic App Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-semibold">Meissner Nordic</span>
            </div>
            
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} <a href="https://refractored.com" className="hover:text-white transition-colors">Refractored LLC</a>. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="https://meissnernordic.org" className="hover:text-white transition-colors">Meissner Nordic Club</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className={`group bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}>
      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-sky-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default App
