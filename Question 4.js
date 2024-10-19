db.Customers.updateOne(
    { email: "john.doe@example.com" },  // Filter to find the customer
    {
      $set: {
         address: {
            street: "456 New St",
            city: "New City",
            state: "NY",
            zip: "67890"
         }
      }
    }
 )