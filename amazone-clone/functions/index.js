const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51RHfnx4RjWLPJ9ny4X8YjaY2WmGq5no22uvtDxVy9kiJ8KWlQXHkB02eER3mYOpduIg7lkipyDINpgQ0569EGPu900AM7dx8Wg"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Amount in smallest currency unit (e.g., cents)
      currency: "zar", // Replace with your desired currency
    });

    // Send the client secret back to the client
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send("Internal Server Error");
  }
});

// - Listen command
exports.api = functions.https.onRequest(app);
