db.Students.updateOne(
    { name: "John Doe" },  // Filter to find the student
    {
      $set: { grade: "10th" }  // Update the grade
    }
 )
 
 