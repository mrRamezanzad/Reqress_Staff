import $ from 'jquery';
import { useEffect, useState } from 'react';

export const useSearchEffect = (onSearch: Function) => {
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', keyUpEventHandler);
    $("#search-input").on('focus', () => setIsSearching(true));
    $("#search-input").on('blur', () => setIsSearching(false));

    return () => {
        window.removeEventListener('keyup', keyUpEventHandler);
    };
  });

  const keyUpEventHandler = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    if (isSearching) {
        const shouldExitSearch = pressedKey === "Escape";

        if (shouldExitSearch) {
            $("#search-input").trigger('blur');
            return setIsSearching(false);
        }

        return search();
    }

    const shouldStartSearch = pressedKey === "/" || pressedKey === "?";
    if (shouldStartSearch) {
        $("#search-input").trigger("focus");
        return setIsSearching(true);
    }
  }

  const search = () => {
    const searchQuery = $("#search-input")?.val()?.toString() || '';
    onSearch(searchQuery);
  };

  return search;
}