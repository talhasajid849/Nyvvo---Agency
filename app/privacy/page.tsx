export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-3 text-white/60">Last updated: February 3, 2026</p>

        <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">1. Who we are</h2>
            <p>
              Nyvvo (“we”, “us”, “our”) provides AI automation services, including AI receptionists,
              chat automation, booking automation, and workflow automation for businesses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">2. Information we collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="text-white">Contact details</span> (such as your name, email, phone number,
                company name) when you contact us or request information.
              </li>
              <li>
                <span className="text-white">Scheduling information</span> submitted through Calendly
                (such as your selected time and any answers you provide to booking questions).
              </li>
              <li>
                <span className="text-white">Website usage data</span> (such as pages visited and basic device/browser
                information) through analytics tools.
              </li>
              <li>
                <span className="text-white">Communications</span> you send to us (emails, messages, call notes).
                We do not record calls unless we clearly tell you and you agree.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">3. How we use your information</h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Schedule and manage meetings and respond to your inquiries.</li>
              <li>Provide and improve our services and website experience.</li>
              <li>Communicate with you about your request, proposals, or ongoing work.</li>
              <li>Maintain security, prevent fraud, and protect our rights.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">4. Legal basis (where applicable)</h2>
            <p>
              Depending on your location, we process personal information based on legitimate interests
              (operating our business), contract necessity (delivering services), and consent (where required).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">5. Third-party services</h2>
            <p>
              We may use trusted third-party services to operate our website and business, for example:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Calendly for scheduling.</li>
              <li>Vercel Analytics for website performance/usage analytics.</li>
              <li>Hosting, email, and other infrastructure providers as needed.</li>
            </ul>
            <p>
              These providers may process information on our behalf to deliver their services.
              We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">6. Cookies and tracking</h2>
            <p>
              We may use cookies or similar technologies to operate the site and understand usage.
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">7. Sharing your information</h2>
            <p>
              We may share information only when needed to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide services through our vendors (e.g., scheduling and hosting providers).</li>
              <li>Comply with legal requirements.</li>
              <li>Protect our rights, users, and the security of our services.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">8. Data retention</h2>
            <p>
              We retain personal information only as long as necessary for business purposes,
              service delivery, and legal obligations. We may delete or anonymize data when it is no longer needed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">9. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect personal information.
              However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">10. Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict the
              processing of your personal information. To make a request, contact us using the email below.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will update the “Last updated” date
              above when changes are made.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-white">12. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
              <span className="text-white">contact@nyvvo.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
