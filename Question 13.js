db.Teachers.updateOne(
    { name: "Alice Johnson" },  // Filter to find the teacher
    {
      $set: { experience: 11 }  // Update the experience to 11 years
    }
 )
 
 