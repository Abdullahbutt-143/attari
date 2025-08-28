import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to Attarex. By using our website you agree to the terms below. Please read them carefully.
        </p>

        {/* Use simple sections for quick scanning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use of the Site</h2>
          <p className="text-gray-700">
            You agree to use this site for lawful purposes only. You will not attempt to disrupt the site, collect data without consent, or misuse any feature.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Products and Pricing</h2>
          <p className="text-gray-700">
            We try to keep product details and prices accurate. Errors can happen. If we find an error we may cancel an order or contact you for instructions before shipping. Prices can change without notice until an order is confirmed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Orders and Availability</h2>
          <p className="text-gray-700">
            All orders are subject to acceptance and stock. We may limit or refuse any order. If we change or cancel an order we will try to notify you using the contact details you provided.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping and Delivery</h2>
          <p className="text-gray-700">
            Delivery times are estimates. Once an order leaves our facility the carrier controls final delivery. You are responsible for providing a correct address and for receiving the parcel.
          </p>
        </section>

        {/* Return Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Return Policy</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Eligibility</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Returns are accepted within 7 days of delivery.</li>
            <li>Items must be unused, unopened, and in original packaging with any seals intact.</li>
            <li>Opened perfumes or testers cannot be returned for hygiene reasons.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Damaged or Wrong Item</h3>
          <p className="text-gray-700 mb-4">
            If you receive a damaged item or the wrong product, contact us within 48 hours of delivery with photos of the parcel, the product, and the packing slip. We will arrange a replacement or a refund after review.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Process</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>Email or message our support with your order number and the reason for return.</li>
            <li>Wait for approval and instructions. Unapproved returns may be refused.</li>
            <li>Pack the item securely. Include all inserts and gifts if any.</li>
            <li>Ship using a trackable method. Unless the item is faulty, return shipping is your responsibility.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Refunds</h3>
          <p className="text-gray-700 mb-4">
            Once we receive and inspect the return, refunds are issued to the original payment method. Shipping fees are not refundable except for faulty or wrong items. Processing time can vary by bank.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exchanges</h3>
          <p className="text-gray-700">
            If you prefer an exchange, tell us in your request. Exchanges are subject to stock and price differences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Accounts and Security</h2>
          <p className="text-gray-700">
            You are responsible for your account details and password. Tell us right away if you suspect any unauthorized use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
          <p className="text-gray-700">
            All content on this site is the property of Attarex or its licensors. You may not copy or reuse content without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
          <p className="text-gray-700">
            To the maximum extent allowed by law we are not liable for indirect or incidental damages that arise from the use of this site or our products.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to These Terms</h2>
          <p className="text-gray-700">
            We may update these terms at any time. Changes apply from the date they are posted on this page.
          </p>
        </section>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Need help</h3>
          <p className="text-gray-700">
            For any questions about these terms or our return policy, please visit{" "}
            <Link to="/contactus" className="text-amber-700 underline">
              Contact Us
            </Link>{" "}
            or email our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
