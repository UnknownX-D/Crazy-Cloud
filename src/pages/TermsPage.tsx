import StaticPage from './StaticPage'

export default function TermsPage() {
  return (
    <StaticPage title="Terms of Service & Community Rules" description="Clear, fair terms built for creators, communities, and modern game hosting." >
      <p>Welcome to Crazy Cloud. By using our services, you agree to our terms for account usage, server deployment, and platform access.</p>
      <p>We strive to keep the experience safe and reliable for everyone. Any misuse of the service, abuse of resources, or violation of local laws may result in account suspension.</p>

      <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-6 sm:p-8">
        <h2 className="text-lg font-semibold uppercase tracking-[.2em] text-emerald-300">Crazy Cloud • Rules</h2>
        <div className="mt-6 space-y-6">
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Be Respectful</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Respect everyone.</li>
              <li>No harassment, hate speech, or toxicity.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Keep Chats Clean</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Use the correct channels.</li>
              <li>No spam or excessive pings.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">No Illegal Activities</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>No hacking, malware, piracy, or DDoS.</li>
              <li>No crypto mining or resource abuse.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Use Services Fairly</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Don&apos;t crash or abuse servers.</li>
              <li>Stay within your plan limits.</li>
              <li>Keep your account secure.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Support</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>One ticket per issue.</li>
              <li>Don&apos;t spam tickets.</li>
              <li>Be patient while waiting for support.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Payments</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>No chargebacks or payment fraud.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Enforcement</h3>
            <p className="mt-3 text-zinc-300">Breaking these rules may result in a warning, suspension, service termination, or permanent ban.</p>
          </section>
        </div>

        <p className="mt-6 text-sm font-medium text-zinc-200">Enjoy your stay at Crazy Cloud!</p>
      </div>

      <p className="mt-8">For questions about account terms, contact support through our site or Discord.</p>
    </StaticPage>
  )
}
