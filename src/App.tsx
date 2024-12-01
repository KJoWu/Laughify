import CountUp from "react-countup";
import phone from "./assets/phone.png";

import phone2 from "./assets/2.jpg";

function App() {
  return (
    <div>

      <header className="text-white bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center">
          {/* Logo */}
          <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 pr-4">
            <span className="text-3xl font-bold">RichLaughify</span>
          </a>

          {/* Download Button */}

          <a
            href="https://github.com/KJoWu/LaughifyApp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform rounded-lg md:mt-0 md:ml-4 hover:bg-blue-500 focus:outline-none"
          >
            Download Now!
          </a>


        </div>
      </header>

      {/* Hero Section */}
      <section className=" bg-gray-900 py-20">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-12">
            <h1 className=" tracking-tight text-white">
              <h1 className="text-5xl lg:text-7xl">Laugh like the</h1> <p className="text-6xl lg:text-8xl font-bold">⭐Ultra Elite⭐</p>
            </h1>
            <p className="mt-10 text-2xl text-white">
              Stop settling for a basic laugh—upgrade to generational wealth energy today</p>
          </div>
          <div className="flex justify-center">
            <iframe
              className="w-[70em] h-64 sm:h-[40em]"
              src="https://www.youtube.com/embed/wZMZdQzoQgo?autoplay=1&mute=1"
              title="RichLaughify™ Promo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex flex-wrap text-center">
            {[
              { end: 940, label: "Users Who Now Laugh in 24K Gold 💰" },
              { end: 315, label: "Yachts Purchased Post-Laugh Upgrade 🛥️" },
              { end: 1500, label: "Crypto Bros Using the ‘Investor’s Chuckle’ 🤑" },
              { end: 850, label: "Exclusive Parties Crashed via Perfect Laugh Timing 🎉" },
            ].map((stat, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/4 p-4"
              >
                {/* Animated Numbers */}
                <h2 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 drop-shadow-md">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.5}
                    separator=","
                  />
                </h2>
                <p className="mt-2 text-lg sm:text-xl font-semibold text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="flex-col items-center content-center justify-center">
          {/*image container */}
          <div className="flex items-center justify-center">
            {/* Image */}
            <div className="mx-10 mb-10 lg:mb-0 flex justify-center">
              <img
                src={phone}
                alt="Features"
                className="rounded-lg shadow-lg h-[38em] mr-5"
              />
            </div>

            {/* Feature List */}
            <div className="space-y-8 lg:w-[39em]">
              {[
                {
                  title: "🤖 AI-Powered Laugh Coach",
                  description:
                    "Our cutting-edge AI Opulaugh™ analyzes and optimizes your laugh, ensuring it resonates with the elite for every occasion. Disclaimer: Results may vary; if your laugh still sounds broke, it might be a personal problem.",
                },
                {
                  title: "🎵 Exclusive Sound Effects Library",
                  description:
                    "Amplify your laugh with premium sound effects like: the crisp pop of champagne, roaring applause, or the subtle hum of jet engines—yours for the modest one-time payment of just $200k.",
                },
                {
                  title: "🌟 Learn Premium Elite Laughs",
                  description:
                    "Master exclusive laughs like the 'TedTalk Titter,' perfect for asserting intellectual dominance in a room of overachievers; the effortless 'Friday Flex Giggle,' ideal for celebrating a private island purchase (TGIF, right?); and the trending 'I Got Laid off Laugh,' crafted for pretending you’re fine while clutching a $300 avocado toast receipt."
                },
                {
                  title: "📚 Real-Life Scenarios Training",
                  description:
                    "Perfect the laugh for every occasion: the 'Crypto Collapse Chuckle' as a tech bro’s 'game-changing NFT' implodes, the 'Etsy Auction Cackle' while outbidding moms for AI-generated bonsai yoga mats, or the 'Blockchain Belly Laugh' to win over investors for your soap startup they definitely don’t understand.",
                },
              ].map((feature, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold pb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>







          {/* Download the App */}
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-yellow-400">
              DOWNLOAD RICHLAUGHIFY NOW!
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Google Play Download */}
              <a
                href="https://github.com/KJoWu/LaughifyApp"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  alt="Google Play"
                  className="h-[7em]"
                />
              </a>
              {/* App Store Download */}
              <a
                href="https://github.com/KJoWu/LaughifyApp"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
                  alt="App Store"
                  className="h-[4.8em]"
                />
              </a>
            </div>
          </div>





        </div>
      </section>

      {/* Opulaugh Section */}
      <section className="bg-gradient-to-b  text-gray-200 bg-black pb-24">
        <div className="container mx-auto px-5 lg:px-20 text-center">
          <div className="mb-12">
            <h2 className="text-5xl  first-line:font-extrabold mb-4">Meet Opulaugh™</h2>
            <p className="text-xl">
              Your AI-powered coach for mastering the art of a laugh that screams "wealth."
            </p>
          </div>
          {/* Content */}
          <div className="w-full px-4 mx-auto">
            <p className="text-lg leading-relaxed">
              Developed by leading behavioral scientists and elite social engineers, Opulaugh™ is the ultimate AI-powered laugh coach. It evaluates the tonal, rhythmic, and situational aspects of your laugh in real-time, providing instant feedback to refine it. By leveraging data-driven insights, it compares your laugh profile to those of the ultra-wealthy, ensuring it resonates with the elite. Opulaugh™ also offers personalized practice scenarios, from yacht parties to high-stakes investor meetings, so you can perfect your laugh for every occasion and always stay on-brand. With Opulaugh™, laughter isn’t just a response—it’s a strategy.
            </p>
          </div>
        </div>
      </section>


      {/* Testimonials */}

      <section className="py-24 bg-gray-100 bg-gradient-to-b from-gray-800 to-gray-800 text-white">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold">Testimonials</h2>
            <p className="text-xl mt-4">
              At RichLaughify™, we salute your journey to greatness—hear from the world’s newest laughter elites, whose lives have been forever transformed by their non-plebic, elite-level laughs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {[
              {
                name: "Yachtty 'Monty' Yachtface",
                role: "Does Not own a Yacht Yet",
                testimonial:
                  "Before RichLaughify™, my laugh sounded cheap. Now, they call me Yachtface—even though I don’t own a yacht.",
              },
              {
                name: "Derrick 'The Digital Nomad' Jenkins",
                role: "Freelance Consultant (Currently Working on His Wi-Fi Connection)",
                testimonial:
                  "Before RichLaughify™, I would cry and consult myself. Until my internet works thatn I would laugh and...",
              },
              {
                name: "Chad 'Crypto King' Ethereum",
                role: "Crypto Evangelist and Blockchain Enthusiast",
                testimonial:
                  "After upgrading to the Platinum Package, I performed the HODL Haha at my portfolio, and DodgeCoin surged 50%. I can’t explain it, but it works!",
              },
              {
                name: "Chad 'The Bro' McFlex",
                role: "Currently Flexing at Planet Fitness",
                testimonial:
                  "Before RichLaughify™, my laugh was just a grunt. Now, they call me 'The Bro'—and my laugh has become the motivational tool of the year. #HustleHardLaughHarder",
              },
              {
                name: "Ben.",
                role: "CEO of Nothing (Yet)",
                testimonial:
                  "I unleashed the 'Can You Please Stop Laughing Laugh' at an incredibly high-stakes meeting, and my boss offered me a promotion if I promised to stop. I’m still in disbelief at how much power my laugh holds 10/10 would recommend!",
              },
              {
                name: "Lana 'The Wellness Guru'",
                role: "Online Crystal Warrior on TikTok",
                testimonial:
                  "I performed the 'Cosmic Giggle' during a reading, and my client’s career took off immediately. They gained 200 twitter followers, and they say it’s all because of the vibe I set with my laugh. Namaste, my friends.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-4 lg:w-1/3 md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                  <p className="mt-4 text-gray-600">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="px-5 text-center">
          {/* Author Attribution */}
          <p className="text-md text-gray-400 mb-4">
            The app, the website and the was created purely for FUNZIES by <a href="https://kimberlywu.com" className="text-yellow-500">Kimberly Wu</a>.
          </p>

          <h2 className="text-lg font-semibold text-yellow-400">
            DISCLAIMER:
          </h2>
          <p className="text-gray-400 mt-2 max-w-6xl mx-auto">
            RichLaughify™ is purely for entertainment purposes. We don’t actually teach you how to laugh like a billionaire, but we do encourage you to laugh like you already own the world. RichLaughify™ is not responsible for any unexpected increases in your bank account, social status, or yacht fleet.
          </p>

          {/* Additional Branding */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} RichLaughify™. All rights reserved.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
