import StaticPage from './StaticPage'

export default function TermsPage() {
  return (
    <StaticPage
      title="Terms of Service"
      description="Fair usage terms and guidelines for Crazy Cloud hosting services."
    >

      <p>
        Welcome to Crazy Cloud. By using our services, you agree to follow these
        Terms of Service for account usage, server hosting, and platform access.
      </p>

      <p>
        We aim to provide reliable and secure hosting. Any misuse of our
        services, abuse of resources, or violation of these terms may result in
        restrictions or account termination.
      </p>


      <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-6 sm:p-8">

        <h2 className="text-lg font-semibold uppercase tracking-[.2em] text-emerald-300">
          Crazy Cloud • Terms
        </h2>


        <div className="mt-6 space-y-6">


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Account Usage
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Provide accurate account information.</li>
              <li>Keep your account credentials secure.</li>
              <li>You are responsible for activity performed through your account.</li>
            </ul>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Service Rules
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Use Crazy Cloud services only for legal purposes.</li>
              <li>No hacking, malware, DDoS attacks, or illegal activities.</li>
              <li>Do not attempt to damage or disrupt our infrastructure.</li>
            </ul>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Resource Usage
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Stay within your purchased plan limits.</li>
              <li>Resource abuse may result in restrictions or suspension.</li>
              <li>Servers must not be used to negatively affect other users.</li>
            </ul>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Payments
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Payments must be made using valid payment methods.</li>
              <li>Fraudulent payments or chargebacks may result in account termination.</li>
            </ul>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Service Availability
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>We work to provide stable and reliable services.</li>
              <li>Maintenance or unexpected issues may cause temporary downtime.</li>
            </ul>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Enforcement
            </h3>

            <p className="mt-3 text-zinc-300">
              Breaking these terms may result in warnings, suspension, service
              termination, or permanent account removal depending on the severity.
            </p>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Changes
            </h3>

            <p className="mt-3 text-zinc-300">
              Crazy Cloud may update these Terms of Service at any time.
              Continued use of our services means you accept any changes.
            </p>
          </section>



          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Agreement
            </h3>

            <p className="mt-3 text-zinc-300">
              By using Crazy Cloud services, you agree to these Terms of Service.
            </p>
          </section>


        </div>


        <p className="mt-6 text-sm font-medium text-zinc-200">
          Thank you for choosing Crazy Cloud!
        </p>

      </div>


      <p className="mt-8">
        For questions about these terms, contact support through our website or Discord.
      </p>


    </StaticPage>
  )
}