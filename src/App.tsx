import { useState, useEffect, useRef } from 'react'
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
const storeBadgeBaseUrl = `${import.meta.env.BASE_URL}assets/store-badges/`

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
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-sky-400/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-200 ring-1 ring-sky-300/30">
              <span aria-hidden="true">✓</span> Official App
            </span>
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
              The Official Meissner Nordic App
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

      {/* New feature swimlanes */}
      <section aria-label="New this season" className="relative z-10 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <Reveal className="mb-10 text-center md:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 animate-pulse" />
              New this season
            </span>
          </Reveal>

          <div className="space-y-8 md:space-y-12">
            <Reveal className="swimlane group/lane relative grid items-center gap-8 overflow-hidden rounded-3xl border border-sky-300/10 bg-slate-800/60 p-6 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="relative max-w-xl">
                <p className="reveal-item mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Better together</p>
                <h2 className="reveal-item mb-4 text-3xl font-bold md:text-4xl">Community Updates</h2>
                <p className="reveal-item text-lg leading-relaxed text-slate-300">
                  Good snow is better shared. Post an anonymous snapshot of trail conditions and see what fellow skiers are finding out there.
                </p>
                <ul className="reveal-item mt-6 space-y-2 text-slate-300">
                  <li className="flex items-center gap-3"><span className="text-sky-300">✓</span> Share conditions in a couple of taps</li>
                  <li className="flex items-center gap-3"><span className="text-sky-300">✓</span> Anonymous, no account needed</li>
                  <li className="flex items-center gap-3"><span className="text-sky-300">✓</span> See the latest reports before you drive up</li>
                </ul>
                <p className="reveal-item mt-6 text-sm font-medium text-sky-300">Try it → tap a condition to share it.</p>
              </div>
              <CommunityIllustration />
            </Reveal>

            <Reveal className="swimlane group/lane relative grid items-center gap-8 overflow-hidden rounded-3xl border border-teal-300/10 bg-slate-800/60 p-6 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
              <div className="relative max-w-xl lg:order-2">
                <p className="reveal-item mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Your days, your memories</p>
                <h2 className="reveal-item mb-4 text-3xl font-bold md:text-4xl">Log your outings</h2>
                <p className="reveal-item text-lg leading-relaxed text-slate-300">
                  Remember the trails, the snow, and the little moments. Rate the day, add notes and distance, and watch your season come together.
                </p>
                <ul className="reveal-item mt-6 space-y-2 text-slate-300">
                  <li className="flex items-center gap-3"><span className="text-teal-300">✓</span> Pick your trails and conditions</li>
                  <li className="flex items-center gap-3"><span className="text-teal-300">✓</span> Season stats and a calendar view</li>
                  <li className="flex items-center gap-3"><span className="text-teal-300">✓</span> No account, no cloud. It never leaves your device.</li>
                </ul>
                <p className="reveal-item mt-6 inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-3 py-1.5 text-sm font-medium text-teal-200 ring-1 ring-teal-300/20">
                  <LockIcon className="h-4 w-4" /> Private &amp; local
                </p>
              </div>
              <OutingsIllustration />
            </Reveal>
          </div>
        </div>
      </section>

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
          <p className="mt-8 text-center text-xs text-slate-500">
            Locally made in Central Oregon · Made with <span className="heartbeat inline-block text-rose-400" aria-label="love">❤️</span> in Bend, OR
          </p>
        </div>
      </footer>
    </div>
  )
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (prefersReducedMotion()) {
      const id = requestAnimationFrame(() => setValue(target))
      return () => cancelAnimationFrame(id)
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(target * (1 - Math.pow(1 - progress, 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15)
  return (
    <div ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

const LockIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11V8a5 5 0 0110 0v3M6 11h12v9H6z" />
  </svg>
)

const conditionOptions = [
  { emoji: '❄️', label: 'Fresh snow', tone: 'bg-sky-400/15 text-sky-100 ring-sky-300/30' },
  { emoji: '⚡', label: 'Fast & firm', tone: 'bg-amber-400/15 text-amber-100 ring-amber-300/30' },
  { emoji: '🧊', label: 'Icy patches', tone: 'bg-cyan-400/15 text-cyan-100 ring-cyan-300/30' },
  { emoji: '🌤️', label: 'Bluebird day', tone: 'bg-teal-400/15 text-teal-100 ring-teal-300/30' },
]

const sampleReports = [
  { option: 0, note: 'Soft corduroy on the lower loops', ago: '4m ago' },
  { option: 3, note: 'Sunny and calm at the shelter', ago: '12m ago' },
  { option: 1, note: 'Skating is quick this morning', ago: '25m ago' },
  { option: 2, note: 'Watch the shady downhill corners', ago: '41m ago' },
]

interface Report {
  id: number
  option: number
  note: string
  who: string
  ago: string
}

function CommunityIllustration() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3)
  const nextId = useRef(3)
  const sampleIndex = useRef(3)
  const [justShared, setJustShared] = useState(false)
  const [reports, setReports] = useState<Report[]>(() =>
    sampleReports.slice(0, 3).map((r, i) => ({ ...r, id: i, who: 'Anonymous skier' })),
  )

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return
    const interval = setInterval(() => {
      const sample = sampleReports[sampleIndex.current % sampleReports.length]
      sampleIndex.current += 1
      setReports((prev) => [{ ...sample, id: nextId.current++, who: 'Anonymous skier', ago: 'just now' }, ...prev].slice(0, 3))
    }, 3600)
    return () => clearInterval(interval)
  }, [inView])

  useEffect(() => {
    if (!justShared) return
    const timeout = setTimeout(() => setJustShared(false), 2000)
    return () => clearTimeout(timeout)
  }, [justShared])

  const share = (option: number) => {
    setReports((prev) => [{ id: nextId.current++, option, note: 'Thanks for sharing!', who: 'You', ago: 'just now' }, ...prev].slice(0, 3))
    setJustShared(true)
  }

  return (
    <div ref={ref} className="reveal-art relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-950 via-slate-900 to-slate-900 p-5 ring-1 ring-white/5 sm:p-7">
      <svg aria-hidden="true" viewBox="0 0 440 140" className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-60" preserveAspectRatio="none">
        <path d="M0 140V96l70-48 46 30 74-62 86 70 52-32 112 76Z" fill="#12344a" />
        <path d="M0 140v-26c90-24 150-6 220 4 90 12 150-18 220-6v28Z" fill="#183f55" />
      </svg>
      <span aria-hidden="true" className="drift-flake absolute left-[12%] top-6 text-xs text-sky-200/40">❄</span>
      <span aria-hidden="true" className="drift-flake absolute left-[70%] top-10 text-[10px] text-sky-200/30 [animation-delay:2s]">❄</span>
      <span aria-hidden="true" className="drift-flake absolute left-[45%] top-3 text-[8px] text-sky-200/30 [animation-delay:4s]">❄</span>

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Community conditions
          </div>
          <span className="text-xs text-slate-400">Live from the trails</span>
        </div>

        <ul className="relative min-h-[15.5rem] space-y-3" aria-live="polite">
          {reports.map((report, i) => {
            const option = conditionOptions[report.option]
            return (
              <li
                key={report.id}
                className={`feed-item flex items-start gap-3 rounded-xl p-3 ring-1 backdrop-blur-sm transition-all duration-500 ${i === 0 ? '' : 'opacity-80'} ${report.who === 'You' ? 'bg-sky-400/15 ring-sky-300/50' : 'bg-white/[0.07] ring-white/10'}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg">{option.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ${option.tone}`}>{option.label}</span>
                    <span className="shrink-0 text-[11px] text-slate-400">{report.ago}</span>
                  </div>
                  <p className="mt-1 truncate text-sm text-slate-200">{report.note}</p>
                  <p className="text-[11px] text-slate-500">{report.who}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-5 rounded-xl bg-slate-950/50 p-3 ring-1 ring-white/10 backdrop-blur">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span>How’s the snow?</span>
            <span className={`font-medium text-emerald-300 transition-opacity duration-300 ${justShared ? 'opacity-100' : 'opacity-0'}`}>Shared anonymously ✓</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {conditionOptions.map((option, i) => (
              <button
                key={option.label}
                type="button"
                onClick={() => share(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${option.tone}`}
              >
                <span aria-hidden="true">{option.emoji}</span> {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const seasonDays = [1, 4, 5, 9, 11, 12, 15, 18, 22, 23, 25, 29, 31, 33]

function OutingsIllustration() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3)
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const distance = useCountUp(12.4, inView)
  const outings = useCountUp(14, inView)
  const shownRating = hoverRating || rating

  return (
    <div ref={ref} className={`reveal-art relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-950 via-slate-900 to-slate-900 p-5 ring-1 ring-white/5 sm:p-7 ${inView ? 'art-active' : ''}`}>
      <div className="relative grid gap-4 sm:grid-cols-[1.3fr_1fr]">
        <div className="tilt-card rounded-2xl bg-[#eef6f2] p-4 text-slate-800 shadow-2xl shadow-teal-950/50">
          <div className="relative mb-3 h-28 overflow-hidden rounded-xl bg-gradient-to-b from-[#c9e8e0] to-[#a9d4ca]">
            <span aria-hidden="true" className="sun-glow absolute right-4 top-3 h-6 w-6 rounded-full bg-amber-300" />
            <svg aria-hidden="true" viewBox="0 0 220 112" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <path d="M0 112V70l42-34 30 22 40-38 46 40 30-18 32 26v44Z" fill="#6aa59f" />
              <path d="M0 112V86l52-22 40 18 44-22 44 20 40-10v42Z" fill="#3c7f7b" />
              <path className="trail-path" d="M14 100c22-8 30-26 52-22s22 18 44 14 24-26 48-24 22 16 48 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle className="trail-dot" cx="206" cy="78" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-900">Saturday morning skate</p>
              <p className="text-xs text-slate-500">Tangent Loop · Ponderosa</p>
            </div>
            <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[11px] font-semibold text-teal-800">❄️ Fresh</span>
          </div>
          <div className="mt-3 flex items-center gap-1" role="radiogroup" aria-label="Rate this outing" onMouseLeave={() => setHoverRating(0)}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                role="radio"
                aria-checked={rating === star}
                aria-label={`${star} star${star > 1 ? 's' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                className="star-btn text-xl leading-none transition-transform duration-150 hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                style={{ animationDelay: `${600 + star * 120}ms` }}
              >
                <span className={star <= shownRating ? 'text-amber-400' : 'text-slate-300'}>★</span>
              </button>
            ))}
          </div>
          <p className="mt-2 rounded-lg bg-white/70 px-3 py-2 text-xs italic text-slate-600">“Fresh tracks, good company, and a cocoa stop.”</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/10">
              <p className="text-2xl font-bold tabular-nums text-white">{Math.round(outings)}</p>
              <p className="text-[11px] text-slate-400">Outings</p>
            </div>
            <div className="rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/10">
              <p className="text-2xl font-bold tabular-nums text-white">{distance.toFixed(1)}</p>
              <p className="text-[11px] text-slate-400">km today</p>
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">This season</p>
            <div className="grid grid-cols-7 gap-1.5" aria-hidden="true">
              {Array.from({ length: 35 }, (_, day) => {
                const active = seasonDays.includes(day)
                return (
                  <span
                    key={day}
                    className={`aspect-square rounded-[4px] ${active ? 'season-day bg-teal-400' : 'bg-white/10'}`}
                    style={active ? { animationDelay: `${300 + seasonDays.indexOf(day) * 90}ms` } : undefined}
                  />
                )
              })}
            </div>
          </div>
          <div className="lock-badge flex items-center gap-2 rounded-xl bg-teal-400/10 p-3 text-xs text-teal-100 ring-1 ring-teal-300/20">
            <LockIcon className="h-4 w-4 shrink-0" />
            Saved on this device only
          </div>
        </div>
      </div>
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
