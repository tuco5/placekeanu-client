"use client";

import { useAppSelector } from "@/redux/hooks";

export default function KeanuImg() {
  const keanuImage = useAppSelector((state) => state.Keanu.keanuImage);
  if (!!keanuImage) {
    return (
      <div className="w-full flex justify-center">
        <div
          className="rounded-md overflow-hidden outline outline-primary dark:outline-warning outline-offset-8 outline-4"
          dangerouslySetInnerHTML={{ __html: keanuImage }}
        />
      </div>
    );
  }

  return null;
}
