const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I4lMGIL8KfcVAxJX3x3vj0YfwvulgOqTEIVwsRO11cE7vs9Ekb1iwH7lr3JgAWvrLZB3dwvxVFGek39ZocvpNwR00KkviZLO2');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Node.js Home Page");
});

app.post("/checkout", (req,res) => {
    let error;
    let status;

    try{
        
        const {token, product} = req.body;
        const customer = stripe.customers.create({
            email: token.email,
            source: token.id,
        })
        const keyUuid = uuidv4();
        const charges = stripe.charges.create(
            {
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: "All PRoducts Description",
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                }
            }


        }, {idempotencyKey: keyUuid})

        console.log(charges, "charges Server function")

        status = "success";

    }
    catch(error) {
        console.log(error, "Server Catch Error");
        status = "Failure";

    }

    res.json({status, error});

})

app.listen(8000, () => {
    console.log("Your App is running on port number 8000")
});