import React from 'react'

export default function ReturnPolicy() {
    return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Return & Exchange Policy</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            We guarantee satisfaction with every purchase. If you're not pleased with a product, 
            feel free to return it. Kindly WhatsApp us at <strong>03012546333</strong>
          </p>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Policy Duration</h2>
            <p className="text-gray-600">
              Our return and exchange policy extends for a generous 14 days from the date of order delivery.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Exchange Conditions</h2>
            <p className="text-gray-600">
              To qualify for an exchange, products should be mostly unused, with at least 90% of the content remaining.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Time</h2>
            <p className="text-gray-600">
              We process all return and exchange requests promptly, typically within 3 to 5 working days.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Delivery Charges</h2>
            <p className="text-gray-600">
              Please note, delivery charges for the original order are non-refundable.
              Customers are responsible for any delivery charges incurred for exchanging products.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Damaged Products</h2>
            <p className="text-gray-600">
              In cases of damage or leakage we will cover all delivery charges related to the return and exchange.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Sale Items</h2>
            <p className="text-gray-600">
              No return or exchange for sales items.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Initiate</h2>
            <p className="text-gray-600">
              To initiate the refund/exchange process please WhatsApp us at <strong>03012546333</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Pakistan Address</h2>
              <p className="text-gray-600">
                A219 block 3 KDA Market<br />
                Gulshan e Iqbal Near Flourish Salon<br />
                Karachi
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">UAE Address</h2>
              <p className="text-gray-600">
                248,0,LOOTAH BLDG 0 Diera DXB
              </p>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-2">
              <strong>WhatsApp:</strong> +92 3012727058
            </p>
            <p className="text-gray-600">
              <strong>Customer Support:</strong> ejazrehman00@gmail.com
            </p>
            <p className="text-gray-600 mt-4">
              Send us a message or email us at ejazrehman00@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
