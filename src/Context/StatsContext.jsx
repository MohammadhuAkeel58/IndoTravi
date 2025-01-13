/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useEffect, useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StatsContext = createContext(null);

export const StatsContextProvider = ({ children }) => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const statsData = useMemo(
    () => [
      { label: "Total Customers", value: 10000000, suffix: "M+" },
      {
        label: "Years Of Experience",
        value: 9,
        suffix: "+",
      },
      { label: "Total Destinations", value: 12000, suffix: "K" },
      { label: "Average Rating", value: 5.0, suffix: ".0" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          startCounter();
        }
      }
    };

    const startCounter = () => {
      statsData.forEach((stat, index) => {
        const increment = Math.ceil(stat.value / 100);
        const interval = setInterval(() => {
          setCounters((prevCounters) => {
            if (prevCounters[index] < stat.value) {
              const newCounters = [...prevCounters];
              newCounters[index] = Math.min(
                prevCounters[index] + increment,
                stat.value
              );
              return newCounters;
            } else {
              clearInterval(interval);
              return prevCounters;
            }
          });
        }, 30);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [statsData]);

  const contextValue = {
    counters,
    statsData,
  };

  return (
    <StatsContext.Provider value={contextValue}>
      {children}
    </StatsContext.Provider>
  );
};
