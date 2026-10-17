import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin } from "lucide-react";

// Reusable Animated Counter
const AnimatedCounter = ({ end, duration = 2000, format }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  // Start animation when the counter enters the viewport
  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Animate the number
  useEffect(() => {
    if (!started) return;

    let animationFrame;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(end * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <span ref={counterRef}>
      {format ? format(count) : Math.floor(count)}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-[#f5f8f5] overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            Find a place to call home
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900">
            Discover the latest Rent available{" "}
            <span className="text-emerald-600">today.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            We're an agency tailored to all clients' needs that always
            delivers. Find your perfect home with less stress and more
            confidence.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              Explore Houses
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/add-rent-house"
              className="rounded-xl border border-gray-300 px-6 py-4 font-semibold hover:bg-white transition-colors"
            >
              List Your Property
            </Link>
          </div>

          {/* Animated Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-4">

            {/* Rental Properties */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                <AnimatedCounter
                  end={500}
                  duration={2200}
                  format={(value) =>
                    `${Math.floor(value)}${value >= 500 ? "+" : ""}`
                  }
                />
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Rental Properties
              </p>
            </div>

            {/* Happy Customers */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                <AnimatedCounter
                  end={1200}
                  duration={2500}
                  format={(value) =>
                    value >= 1200
                      ? "1.2k+"
                      : `${(value / 1000).toFixed(1)}k+`
                  }
                />
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Happy Customers
              </p>
            </div>

            {/* Customer Rating */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                <AnimatedCounter
                  end={4.9}
                  duration={2200}
                  format={(value) =>
                    `${Math.min(value, 4.9).toFixed(1)}/5`
                  }
                />
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Customer Rating
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
            alt="Modern house with garden"
            className="w-full h-[400px] lg:h-[570px] object-cover rounded-[2rem]"
          />

          {/* Image Information Card */}
          <div className="absolute bottom-5 left-5 right-5 sm:left-8 sm:right-8 bg-white p-5 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">

              <span className="bg-emerald-100 text-emerald-700 p-3 rounded-xl">
                <MapPin size={24} />
              </span>

              <div>
                <h3 className="font-bold text-lg">
                  Find your next home
                </h3>

                <p className="text-sm text-gray-500">
                  Explore properties that fit your lifestyle.
                </p>
              </div>

              <Search className="ml-auto text-emerald-600" size={24} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
