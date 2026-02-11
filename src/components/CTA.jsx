import { useEffect, useMemo, useState } from "react"

export default function CTA() {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  const defaultNamespace =
    typeof window !== "undefined"
      ? `dev-profile-demo-${window.location.host}${window.location.pathname}`
      : null

  const countApiNamespace =
    import.meta.env.VITE_COUNTAPI_NAMESPACE || defaultNamespace
  const visitorsKey = import.meta.env.VITE_COUNTAPI_VISITORS_KEY || "visitors"
  const earlyAccessKey =
    import.meta.env.VITE_COUNTAPI_EARLY_ACCESS_KEY || "early-access"

  const sessionVisitorsHitKey =
    countApiNamespace != null ? `visitors-hit::${countApiNamespace}` : null

  const visitorsUrl = useMemo(() => {
    if (!countApiNamespace || !visitorsKey) return null
    return `https://api.countapi.xyz/hit/${encodeURIComponent(
      countApiNamespace
    )}/${encodeURIComponent(visitorsKey)}`
  }, [countApiNamespace, visitorsKey])

  const visitorsGetUrl = useMemo(() => {
    if (!countApiNamespace || !visitorsKey) return null
    return `https://api.countapi.xyz/get/${encodeURIComponent(
      countApiNamespace
    )}/${encodeURIComponent(visitorsKey)}`
  }, [countApiNamespace, visitorsKey])

  const earlyAccessUrl = useMemo(() => {
    if (!countApiNamespace || !earlyAccessKey) return null
    return `https://api.countapi.xyz/hit/${encodeURIComponent(
      countApiNamespace
    )}/${encodeURIComponent(earlyAccessKey)}`
  }, [countApiNamespace, earlyAccessKey])

  const earlyAccessGetUrl = useMemo(() => {
    if (!countApiNamespace || !earlyAccessKey) return null
    return `https://api.countapi.xyz/get/${encodeURIComponent(
      countApiNamespace
    )}/${encodeURIComponent(earlyAccessKey)}`
  }, [countApiNamespace, earlyAccessKey])

  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [message, setMessage] = useState("")

  const [visitors, setVisitors] = useState(null)
  const [earlyAccess, setEarlyAccess] = useState(null)

  useEffect(() => {
    if (!visitorsUrl) return

    let cancelled = false

    let shouldHit = true
    if (sessionVisitorsHitKey) {
      try {
        if (window.sessionStorage.getItem(sessionVisitorsHitKey) === "1") {
          shouldHit = false
        } else {
          window.sessionStorage.setItem(sessionVisitorsHitKey, "1")
        }
      } catch {
        shouldHit = true
      }
    }

    const url = shouldHit ? visitorsUrl : visitorsGetUrl
    if (!url) return

    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return
        if (typeof data?.value === "number") setVisitors(data.value)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [sessionVisitorsHitKey, visitorsGetUrl, visitorsUrl])

  useEffect(() => {
    if (!earlyAccessGetUrl) return

    let cancelled = false

    fetch(earlyAccessGetUrl)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return
        if (typeof data?.value === "number") setEarlyAccess(data.value)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [earlyAccessGetUrl])

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    if (!formspreeEndpoint) {
      setStatus("error")
      setMessage("Missing Formspree endpoint. Add VITE_FORMSPREE_ENDPOINT.")
      return
    }

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        setStatus("error")
        setMessage("Could not submit. Try again in a moment.")
        return
      }

      setStatus("success")
      setMessage("You’re on the list. We’ll email you when early access opens.")
      setEmail("")

      if (earlyAccessUrl) {
        fetch(earlyAccessUrl)
          .then(r => r.json())
          .then(data => {
            if (typeof data?.value === "number") setEarlyAccess(data.value)
          })
          .catch(() => {})
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <section id="early-access" className="text-center mt-24 mb-16 px-6">
      <h2 className="text-3xl font-bold">
        Stop updating resumes again and again
      </h2>
      <p className="text-muted mt-4">One profile. Infinite shares.</p>

      <div className="max-w-xl mx-auto mt-8 bg-card rounded-2xl p-6 border border-white/10">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <div className="text-sm text-muted">
            {typeof visitors === "number" ? `Visitors: ${visitors}` : "Visitors: —"}
          </div>
          <div className="hidden sm:block text-muted">|</div>
          <div className="text-sm text-muted">
            {typeof earlyAccess === "number"
              ? `Early Access: ${earlyAccess}`
              : "Early Access: —"}
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 rounded-xl px-4 py-3 bg-bg border border-white/10 outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-primary px-6 py-3 rounded-xl text-lg disabled:opacity-60"
            >
              {status === "loading" ? "Joining…" : "Join Early Access"}
            </button>
          </div>

          {message ? (
            <p
              className={`mt-3 text-sm ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          ) : null}

          <p className="text-muted text-xs mt-3">
            Pricing shown is tentative. No spam.
          </p>
        </form>
      </div>
    </section>
  )
}
