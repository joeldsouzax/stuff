/** @format */
import { either, option } from 'fp-ts';
import { flow, pipe } from 'fp-ts/lib/function';

export type ThemeScheme = 'light' | 'dark';

const ColorScheme: Record<ThemeScheme, ThemeScheme> = {
  light: 'dark',
  dark: 'light',
};

export const updateThemeScheme = (themeScheme: ThemeScheme) => {
  document.firstElementChild.setAttribute('color-scheme', themeScheme);
  return themeScheme;
};

export const checkThemeScheme = (themeScheme: ThemeScheme) =>
  window.matchMedia &&
  window.matchMedia(`(prefers-color-scheme: ${themeScheme})`).matches;

export const getDefaultScheme = flow(
  () => 'dark',
  either.fromPredicate(checkThemeScheme, (theme) => ColorScheme[theme]),
  either.getOrElse((theme) => theme)
);

export const checkDocumentScheme = (themeScheme: ThemeScheme) =>
  pipe(
    option.fromNullable(
      document.firstElementChild.getAttribute('color-scheme')
    ),
    option.getOrElse(() =>
      checkThemeScheme(themeScheme) ? themeScheme : ColorScheme[themeScheme]
    )
  );

export const toggleThemeScheme = flow(
  () => 'dark',
  checkDocumentScheme,
  (theme) => updateThemeScheme(ColorScheme[theme])
);
