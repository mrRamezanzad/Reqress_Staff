import $ from 'jquery'
import { useEffect, useState } from 'react';

export const useScrollbarEffect = () => {
  const [scrolltrigered, setScrolltrigered] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', scollbarEffectHandler);
      
      return () => {
          window.removeEventListener('scroll', scollbarEffectHandler)
      }
  })
  
  const scollbarEffectHandler = () => {
    const triggerPoint = ($("select").offset() || { left: 0, top: 0 }).top - 55;
    const scrollPosition = $(window).scrollTop() || 0;

    const isNavbarPassedTriggerPoint = scrollPosition > triggerPoint && scrolltrigered === false
    if (isNavbarPassedTriggerPoint) {
       return scrollSideEffects();
    }
    
    const isNavbarBeforeTriggerPoint = scrollPosition < triggerPoint && scrolltrigered === true
    if (isNavbarBeforeTriggerPoint) {
        scrollSideEffects();
    }
  }

  const scrollSideEffects = () => {
    $(".navbar").toggleClass('scroll navbar-dark bg-dark');
    $(".navbar").toggleClass('navbar-light bg-light');
    setScrolltrigered((prevState) => !prevState);
  } 
}