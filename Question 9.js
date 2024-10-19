db.Students.find({
    $or: [
       { age: { $gt: 16 } },
       { grade: "10th" }
    ]
 }).pretty()
 