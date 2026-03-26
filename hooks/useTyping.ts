'use client';

import { useState, useEffect } from 'react';

export function useTypingEffect(
  words: string[],
  typeSpeed = 85,
  deleteSpeed = 50,
  pauseDuration = 1900
) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!deleting && charIndex < currentWord.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed);
      setDisplayed(currentWord.slice(0, charIndex + 1));
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === currentWord.length) {
      const t = setTimeout(() => setDeleting(true), pauseDuration);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
      setDisplayed(currentWord.slice(0, charIndex - 1));
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
  }, [charIndex, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return displayed;
}