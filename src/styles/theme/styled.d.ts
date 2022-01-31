import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      mainBackground: string,
      backgroundInput: string,
      textMuted: string,
      textPrimary: string,
      textSecondary: string,
      textDefault: string,
      borderColor: string,
      buttonCreateTask: string,
      checkboxTask: string,
      buttonDeleteTask: string,
      white: string,
      glassColor: string,
      borderGlass: string,
      toggleTheme: string,
    };
  }
}