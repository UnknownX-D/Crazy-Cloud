import StaticPage from './StaticPage'

export default function RefundPage() {
  return (
    <StaticPage title="Refund Policy" description="A clear and fair refund approach for hosting plans and service changes." >
      <p>At Crazy Cloud, we want every customer to feel confident in their purchase. If a refund request is made within 16 hours of purchase, we may approve a return when there is a valid reason and the request is submitted through proper support channels.</p>

      <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-6 sm:p-8">
        <h2 className="text-lg font-semibold uppercase tracking-[.2em] text-emerald-300">How refunds work</h2>
        <div className="mt-6 space-y-6">
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">16-hour window</h3>
            <p className="mt-3 text-zinc-300">Refund requests are considered within 16 hours of purchase, provided the request is made promptly and with a valid reason.</p>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Valid reasons</h3>
            <p className="mt-3 text-zinc-300">A valid reason may include accidental purchase, unexpected service issues, or a mismatch between the product and your expectations.</p>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Support review</h3>
            <p className="mt-3 text-zinc-300">All refund requests are reviewed by our support team. We may ask for additional details to confirm the request before approving it.</p>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[.18em] text-white">Processing</h3>
            <p className="mt-3 text-zinc-300">Approved refunds are processed back to the original payment method and may take several business days to appear, depending on your payment provider.</p>
          </section>
        </div>

        <p className="mt-6 text-sm font-medium text-zinc-200">If you need help with a refund, contact support and we will guide you through the process with care.</p>
      </div>
    </StaticPage>
  )
}
