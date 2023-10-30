"use client";
import { Spinner, Switch } from "@nextui-org/react";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(theme === "dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Spinner color="warning" size="md" className="mr-4" />;

  async function handleChange() {
    await setIsSelected((state) => !state);
    if (isSelected) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Switch
      defaultSelected
      size="lg"
      color="warning"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      isSelected={isSelected}
      onValueChange={handleChange}
    />
  );
}
