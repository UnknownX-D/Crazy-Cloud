import StaticPage from './StaticPage'

export default function PrivacyPage() {
  return (
    <StaticPage
      title="Privacy Policy"
      description="How Crazy Cloud collects, uses, and protects your personal information."
    >
      <p>
        At Crazy Cloud, we respect your privacy and are committed to protecting
        your personal information while providing reliable hosting and community services.
      </p>

      <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-6 sm:p-8">
        <h2 className="text-lg font-semibold uppercase tracking-[.2em] text-emerald-300">
          Crazy Cloud • Privacy Policy
        </h2>

        <div className="mt-6 space-y-6">

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Information We Collect
            </h3>

            <p className="mt-3 text-zinc-300">
              We may collect the following information:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Name and email address.</li>
              <li>Billing information.</li>
              <li>IP address.</li>
              <li>Service usage data.</li>
              <li>Support information.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              How We Use Your Data
            </h3>

            <p className="mt-3 text-zinc-300">
              We use collected information to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Provide and manage our services.</li>
              <li>Process payments and transactions.</li>
              <li>Prevent fraud, abuse, and security threats.</li>
              <li>Improve our services and customer support.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Data Security
            </h3>

            <p className="mt-3 text-zinc-300">
              We use reasonable security measures to help protect your data
              from unauthorized access, misuse, or disclosure.
            </p>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Data Sharing
            </h3>

            <p className="mt-3 text-zinc-300">
              Crazy Cloud does not sell, rent, or trade your personal information.
            </p>

            <p className="mt-3 text-zinc-300">
              Your information may only be shared when:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Required by applicable law.</li>
              <li>Necessary to provide our services.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Cookies
            </h3>

            <p className="mt-3 text-zinc-300">
              Our website may use cookies to improve user experience, remember
              preferences, and enhance security.
            </p>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Account Responsibility
            </h3>

            <p className="mt-3 text-zinc-300">
              Customers are responsible for:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Keeping account credentials secure.</li>
              <li>All activity performed through their account.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Policy Changes
            </h3>

            <p className="mt-3 text-zinc-300">
              Crazy Cloud may update this Privacy Policy at any time.
              Continued use of our services means you accept any changes.
            </p>
          </section>


          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">
              Agreement
            </h3>

            <p className="mt-3 text-zinc-300">
              By using Crazy Cloud services, you agree to this Privacy Policy.
            </p>
          </section>

        </div>

        <p className="mt-6 text-sm font-medium text-zinc-200">
          © 2026 Crazy Cloud • All Rights Reserved
        </p>
      </div>

      <p className="mt-8">
        For questions about privacy or your personal information, contact support
        through our website or Discord.
      </p>
    </StaticPage>
  )
}