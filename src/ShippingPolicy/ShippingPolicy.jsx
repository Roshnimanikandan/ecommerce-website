// ShippingPolicy.js
import React from 'react';

const ShippingPolicy = () => {
  return (
    <div>
      <h2>Shipping Policy</h2>
      <p>
        At Glammart, we strive to provide fast and reliable shipping to our customers.
        Here are the key details of our shipping policy:
      </p>
      <ul>
        <li><strong>Shipping Times:</strong> Orders are typically processed within 1-2 business days.</li>
        <li><strong>Shipping Options:</strong> We offer standard and expedited shipping options.</li>
        <li><strong>Shipping Rates:</strong> Shipping rates are calculated at checkout based on your location and selected shipping method.</li>
        <li><strong>Free Shipping:</strong> Enjoy free standard shipping on orders over $50.</li>
        <li><strong>International Shipping:</strong> We currently ship to select international destinations. International shipping rates and times vary.</li>
      </ul>
      <p>
        Please note that shipping times may be affected by factors beyond our control,
        such as holidays, weather conditions, and carrier delays. We appreciate your
        understanding and patience.
      </p>
      <p>
        If you have any questions or concerns about your order's shipping, feel free
        to contact our customer support team at <a href="mailto:shipping@glammart.com">shipping@glammart.com</a>.
      </p>
    </div>
  );
};

export default ShippingPolicy;
