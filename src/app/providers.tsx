"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { apolloClient, ApolloProvider } from "@/lib/apollo-client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <NextUIProvider>
          <NextThemeProvider
            attribute="class"
            defaultTheme="light"
            themes={["light", "dark"]}
          >
            {children}
          </NextThemeProvider>
        </NextUIProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}
