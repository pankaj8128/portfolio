"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

// ─── Types ───────────────────────────────────────────────────
interface AccessibilityState {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
}

interface AccessibilityContextValue extends AccessibilityState {
  toggleReducedMotion: () => void;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
}

const STORAGE_KEY = "a11y-settings";

const defaults: AccessibilityState = {
  reducedMotion: false,
  highContrast: false,
  largeText: false,
};

// ─── Context ─────────────────────────────────────────────────
const AccessibilityContext = createContext<AccessibilityContextValue>({
  ...defaults,
  toggleReducedMotion: () => {},
  toggleHighContrast: () => {},
  toggleLargeText: () => {},
});

// ─── Hook ────────────────────────────────────────────────────
export function useAccessibility() {
  return useContext(AccessibilityContext);
}

// ─── Provider ────────────────────────────────────────────────
export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<AccessibilityState>(defaults);
  const [mounted, setMounted] = useState(false);

  // Load preferences + respect the OS reduced-motion setting
  useEffect(() => {
    let stored: Partial<AccessibilityState> = {};
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) stored = JSON.parse(raw) as Partial<AccessibilityState>;
    } catch {
      // ignore
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setState((prev) => ({
      ...prev,
      ...stored,
      reducedMotion: stored.reducedMotion ?? mq.matches,
    }));

    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setState((s) => ({ ...s, reducedMotion: true }));
      }
    };
    mq.addEventListener("change", onChange);
    setMounted(true);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Persist to localStorage whenever state changes
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state, mounted]);

  // Apply CSS classes to <html> element
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    root.classList.toggle("a11y-reduced-motion", state.reducedMotion);
    root.classList.toggle("a11y-high-contrast", state.highContrast);
    root.classList.toggle("a11y-large-text", state.largeText);
  }, [state, mounted]);

  const toggleReducedMotion = useCallback(
    () => setState((s) => ({ ...s, reducedMotion: !s.reducedMotion })),
    []
  );
  const toggleHighContrast = useCallback(
    () => setState((s) => ({ ...s, highContrast: !s.highContrast })),
    []
  );
  const toggleLargeText = useCallback(
    () => setState((s) => ({ ...s, largeText: !s.largeText })),
    []
  );

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        toggleReducedMotion,
        toggleHighContrast,
        toggleLargeText,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
