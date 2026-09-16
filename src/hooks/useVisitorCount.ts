import { useEffect, useState } from "react";
import { visitor } from "../configs";
import { isDevMode } from "../utils/dev";

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const getVisitorCount = async () => {
      const { sessionKey, namespace, key } = visitor;

      try {
        const seen = sessionStorage.getItem(sessionKey) === "1";
        const type = seen || isDevMode ? "get" : "hit";

        const response = await fetch(
          `https://abacus.jasoncameron.dev/${type}/${namespace}/${key}`,
        );

        if (!response.ok) {
          throw new Error(String(response.status));
        }

        const data = await response.json();
        const count = Number(data?.value);

        if (!Number.isNaN(count)) {
          setVisitorCount(count);
          sessionStorage.setItem(sessionKey, "1");
        }
      } catch {
        // Hide counter if API is unavailable
      }
    };

    getVisitorCount();
  }, []);

  return visitorCount;
};
