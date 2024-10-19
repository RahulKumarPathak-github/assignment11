db.Customers.find({ totalPurchases: { $gt: 500 } }).pretty() 
