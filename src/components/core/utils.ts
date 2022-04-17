/** @format */
import { option } from 'fp-ts';
import { flow, pipe } from 'fp-ts/lib/function';

type ThemeScheme = 'light' | 'dark';

const ColorScheme: Record<string, ThemeScheme> = {
  light: 'dark',
  dark: 'light',
};

export const updateThemeScheme = (themeScheme: ThemeScheme) => {
  document.firstElementChild.setAttribute('color-scheme', themeScheme);
};

export const checkThemeScheme = (themeScheme: ThemeScheme) =>
  window.matchMedia &&
  window.matchMedia(`(prefers-color-scheme: ${themeScheme})`).matches;

export const checkDocumentScheme = (themeScheme: ThemeScheme) =>
  pipe(
    option.fromNullable(
      document.firstElementChild.getAttribute('color-scheme')
    ),
    option.getOrElse(() =>
      checkThemeScheme(themeScheme) ? themeScheme : ColorScheme[themeScheme]
    )
  );

export const themeChangeFlow = flow(checkDocumentScheme, (theme) =>
  updateThemeScheme(ColorScheme[theme])
);
