const POSTHOG_HOST = (import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com").replace(/\/$/, "");
const POSTHOG_TOKEN = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;

const getDistinctId = (): string => {
  const key = "solvx_posthog_distinct_id";
  try {
    const existing = localStorage.getItem(key);
    if (existing) return existing;

    const generated =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    localStorage.setItem(key, generated);
    return generated;
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
};

export const track = (
  event: string,
  properties: Record<string, string | number | boolean | null> = {},
): void => {
  if (!POSTHOG_TOKEN || typeof window === "undefined") return;

  const payload = JSON.stringify({
    api_key: POSTHOG_TOKEN,
    event,
    distinct_id: getDistinctId(),
    properties: {
      ...properties,
      $current_url: window.location.href,
      $pathname: window.location.pathname,
      $title: document.title,
      $referrer: document.referrer || null,
    },
  });

  try {
    void fetch(`${POSTHOG_HOST}/i/v0/e/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // Analytics must never affect the application.
  }
};

export const trackPageview = (): void => {
  track("$pageview");
};
