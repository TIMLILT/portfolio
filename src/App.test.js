import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

test('renders the hero heading with the site owner name', () => {
  render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
  const heading = screen.getByRole('heading', { level: 1, name: /Siham Timlilt/i });
  expect(heading).toBeInTheDocument();
});

test('switches the content to English with the language button', () => {
  render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
  fireEvent.click(screen.getAllByRole('button', { name: /switch to english/i })[0]);
  expect(screen.getByText(/view my projects/i)).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
});
