import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors bg-neutral-200 dark:bg-neutral-800 hover:bg-gold dark:hover:bg-gold"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-gold" />
      ) : (
        <Moon size={20} className="text-neutral-900" />
      )}
    </button>
  );
};

export default ThemeToggle;