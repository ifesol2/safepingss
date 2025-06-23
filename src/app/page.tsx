'use client'

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === '') return;
    // Here you would integrate with your backend or email service
    setSubmitted(true);
    setEmail('');
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-indigo-700 select-none">SafePingss</h1>
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
            <a href="#made-for" className="hover:text-indigo-600 transition">Made For</a>
            <a href="#why-smart" className="hover:text-indigo-600 transition">Why It’s Smart</a>
            <a href="#join" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition">
              Join Early Access
            </a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen">
        {/* Above the Fold */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              1 Tap. Trusted People. Instant Help.
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              SafePing sends real-time alerts to your emergency circle — when seconds matter most.
            </p>
            <form
              id="join"
              onSubmit={handleSubmit}
              className="mt-8 flex max-w-md mx-auto md:mx-0"
              aria-label="Join the early access list form"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 rounded-r-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Reserve My SafePing"
              >
                Reserve My SafePing
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium" role="alert">
                Thank you for joining the waitlist!
              </p>
            )}
          </div>

          <div className="flex-1 max-w-md w-full relative">
            {/* Device mockup */}
            <div className="mx-auto w-64 h-64 md:w-72 md:h-72 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-3xl shadow-2xl relative flex flex-col justify-center items-center text-white select-none">
              {/* Small wearable or desk button shape */}
              <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-indigo-500 flex justify-center items-center text-indigo-600 text-3xl font-bold cursor-default">
                🔴
              </div>
              <div className="mt-6 px-6 py-4 bg-indigo-900 bg-opacity-80 rounded-lg w-full max-w-xs text-left font-mono text-sm leading-snug shadow-inner">
                <p>
                  🚨 <strong>Jane</strong> triggered SafePing:
                </p>
                <p className="mt-1 font-semibold text-red-400">Possible break-in, Apartment 2B</p>
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold */}
        <section
          id="how-it-works"
          className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-3xl shadow-inner"
          aria-labelledby="how-it-works-title"
        >
          <h3
            id="how-it-works-title"
            className="text-3xl font-extrabold text-indigo-700 text-center mb-12"
          >
            🚨 How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 text-4xl select-none shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18l.01-6M12 6v.01M16.24 7.76a6 6 0 11-8.48 8.48"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900">Tap the Button</h4>
              <p className="text-gray-600 max-w-xs">
                Physical button or mobile app — just one tap to alert your trusted circle.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 text-4xl select-none shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V3m0 0l8 8-8 8"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900">Ping Sent Instantly</h4>
              <p className="text-gray-600 max-w-xs">
                SMS, app push, and email notifications sent immediately to your emergency circle.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 text-4xl select-none shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0-1.1.9-2 2-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5zM8 7v10M4 7v10"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900">Share Info Automatically</h4>
              <p className="text-gray-600 max-w-xs">
                GPS location, optional photo/audio, and reason (fire, medical, intrusion, etc.).
              </p>
            </div>
          </div>
        </section>

        <section
          id="made-for"
          className="max-w-7xl mx-auto px-6 py-20 bg-gray-50"
          aria-labelledby="made-for-title"
        >
          <h3
            id="made-for-title"
            className="text-3xl font-extrabold text-indigo-700 text-center mb-12"
          >
            👪 Made For
          </h3>
          <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-gray-700 font-semibold">
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl select-none">🧓</span>
              <p>Elderly living alone</p>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl select-none">🧍</span>
              <p>Solo renters or students</p>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl select-none">🏠</span>
              <p>Families &amp; parents</p>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl select-none">🏢</span>
              <p>Small businesses</p>
            </li>
          </ul>
        </section>

        <section
          id="why-smart"
          className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-b-3xl shadow-inner"
          aria-labelledby="why-smart-title"
        >
          <h3
            id="why-smart-title"
            className="text-3xl font-extrabold text-indigo-700 text-center mb-12"
          >
            🔐 Why It’s Smart
          </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-indigo-600 text-6xl select-none">🧠</div>
              <h4 className="font-semibold text-lg text-gray-900">AI detects patterns</h4>
              <p>
                Frequent pings trigger auto-escalation for faster response and smarter alerts.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-indigo-600 text-6xl select-none">🗣️</div>
              <h4 className="font-semibold text-lg text-gray-900">Voice-activated backup trigger</h4>
              <p>
                Activate alerts hands-free when you can’t reach the button.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-indigo-600 text-6xl select-none">🌐</div>
              <h4 className="font-semibold text-lg text-gray-900">Works offline with Bluetooth fallback</h4>
              <p>
                Reliable alerts even without internet connection or cell service.
              </p>
            </div>
          </div>
          <div className="mt-14 max-w-4xl mx-auto text-center text-gray-800 font-semibold text-lg select-none">
            <p>🔒 All data is encrypted to keep your information safe and private.</p>
          </div>
        </section>

        <section className="bg-indigo-700 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl font-extrabold mb-6">
              Ready to feel safer? Join the waitlist now.
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              aria-label="Join the early access list form bottom"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="px-4 py-3 rounded-md text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button
                type="submit"
                className="bg-white text-indigo-700 font-semibold px-6 rounded-md hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Join the Early Access List"
              >
                Join the Early Access List
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-300 font-medium" role="alert">
                Thank you for joining the waitlist!
              </p>
            )}
          </div>
        </section>

        <footer className="bg-gray-100 py-8 text-center text-gray-600 text-sm select-none">
          &copy; {new Date().getFullYear()} SafePingss. All rights reserved.
        </footer>
      </main>
    </>
  );
}