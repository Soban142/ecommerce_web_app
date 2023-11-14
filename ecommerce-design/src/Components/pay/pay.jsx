import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";
import { useEffect, useState } from "react";

const KEY =
  "pk_test_51O4nQBLvdbUXt8qMWUloF49NDXaPOH9M3fnT2euUAfLVeAqiPziJtE4L3WTmKBUYkoDTvVlPUrlBkkJSW4wznsnN00WTeK5hy9";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = axios.post(
          "http://localhost:5000/api/v1/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 200,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      {stripeToken ? (
        <span>Please wait...</span>
      ) : (
        <StripeCheckOut
          name="payment"
          image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
          billingAddress
          shippingAddress
          description="Your total is 200pkr"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button>Pay</button>
        </StripeCheckOut>
      )}
    </div>
  );
};

export default Pay;
