import { useState, useEffect } from 'react'
import './index.css'

// Screenshot rotation hook
const screenshots = [
  './assets/grooming_updates.PNG',
  './assets/maps.PNG',
  './assets/weather_webcams.PNG',
  './assets/news.PNG',
]

const useScreenshotRotation = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return currentIndex
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

const appStoreUrl = 'https://apps.apple.com/us/app/meissner-nordic/id1601048636'
const storeBadgeBaseUrl = `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}assets/store-badges/`

const storeDownloads = [
  {
    platform: 'iPhone & iPad',
    url: appStoreUrl,
    badge: `${storeBadgeBaseUrl}app-store.svg`,
  },
  {
    platform: 'Mac',
    url: appStoreUrl,
    badge: `${storeBadgeBaseUrl}mac-app-store.svg`,
  },
  {
    platform: 'Android',
    url: 'https://play.google.com/store/apps/details?id=com.refractored.meissner',
    badge: `${storeBadgeBaseUrl}google-play.svg`,
  },
  {
    platform: 'Windows',
    url: 'https://apps.microsoft.com/detail/9NKDQR4KJPTN',
    badge: `${storeBadgeBaseUrl}microsoft-store.svg`,
  },
]

function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-x-3 gap-y-4 ${className}`}>
      {storeDownloads.map(({ platform, url, badge }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Download Meissner Nordic for ${platform}`}
          className="group flex flex-col items-center justify-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          <img
            src={badge}
            alt=""
            className="h-9 max-w-full w-auto transition-transform duration-300 group-hover:scale-105 sm:h-10"
          />
          <span className="text-xs text-slate-300">{platform}</span>
        </a>
      ))}
    </div>
  )
}

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
          <a href="#download" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 md:px-5 rounded-full text-sm font-medium transition-all duration-300">
            <span className="md:hidden">Download</span>
            <span className="hidden md:inline">Download App</span>
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
              Check trail conditions, grooming reports, weather, maps, and events for Meissner Nordic Ski Area on your phone, tablet, or desktop.
            </p>

            <div id="download" className="mb-6">
              <StoreBadges className="mx-auto max-w-md lg:mx-0" />
            </div>

            {/* Stats */}
            <div className="flex gap-6 justify-center lg:justify-start text-center">
              <div>
                <div className="text-xl font-bold text-white">Free</div>
                <div className="text-xs text-slate-400">Forever</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <div className="text-xl font-bold text-white">Mobile & Desktop</div>
                <div className="text-xs text-slate-400">Four platforms</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <div className="text-xl font-bold text-white">Offline</div>
                <div className="text-xs text-slate-400">Ready</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative flex justify-center lg:justify-end lg:pr-32 mt-8 lg:mt-0">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 blur-3xl rounded-full scale-75"></div>
            
            {/* Phone mockup */}
            <div className="relative">
              {/* Left floating cards */}
              <div className="hidden md:block absolute md:-left-24 lg:-left-32 top-8 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-xs font-medium">Trail Groomed</span>
                </div>
              </div>
              
              <div className="hidden md:block absolute md:-left-20 lg:-left-28 top-36 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-700 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-amber-400 text-xs">📰</span>
                  </div>
                  <span className="text-xs font-medium">News Alert</span>
                </div>
              </div>
              
              <div className="hidden md:block absolute md:-left-16 lg:-left-24 bottom-20 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-300 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-xs">📅</span>
                  </div>
                  <span className="text-xs font-medium">Events</span>
                </div>
              </div>

              {/* Phone */}
              <div className="w-56 md:w-64 bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2.5rem] p-2 shadow-2xl shadow-sky-500/20 relative z-10">
                <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5] relative">
                  {screenshots.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={i === currentScreenshot ? 'Meissner Nordic app showing trail grooming reports, weather conditions, and interactive maps for cross-country skiing' : ''}
                      aria-hidden={i !== currentScreenshot}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === currentScreenshot ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full"></div>
              </div>
              
              {/* Right floating cards */}
              <div className="hidden md:block absolute md:-right-24 lg:-right-32 top-12 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-500 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sky-400 text-xs">❄️</span>
                  </div>
                  <span className="text-xs font-medium">28°F Fresh Snow</span>
                </div>
              </div>
              
              <div className="hidden md:block absolute md:-right-20 lg:-right-28 top-40 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-200 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-rose-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-rose-400 text-xs">📍</span>
                  </div>
                  <span className="text-xs font-medium">Trail Maps</span>
                </div>
              </div>
              
              <div className="hidden md:block absolute md:-right-16 lg:-right-24 bottom-24 bg-white/10 backdrop-blur-md rounded-xl p-2.5 shadow-lg animate-bounce-slow delay-1000 z-20">
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
              description="Get the Meissner Nordic app on iPhone, iPad, Mac, Android, and Windows."
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
                Download Meissner Nordic for your phone, tablet, or desktop and stay on top of conditions wherever you are.
              </p>
              
              <StoreBadges className="mx-auto max-w-md" />
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
