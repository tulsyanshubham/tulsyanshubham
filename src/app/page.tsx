'use client';

import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';
import { Home } from '@/components/Home';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    function disableRightClick(event : MouseEvent) {
      if (event.button === 2) {
        // Right mouse button clicked
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
      console.log(event)
    }

    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      {/* <Home /> */}
      <Projects />
      {/* <Timeline /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
