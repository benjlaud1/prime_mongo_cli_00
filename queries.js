
// Find documents that have awards.
db.bios.find({awards: {$exists: true}});

// Find documents that don't have awards.
db.bios.find({awards: {$exists: false}});

// Find documents that have contribs for OOP or UNIX.
db.bios.find({contribs: {$in: ["OOP", "UNIX"]}});

// Find documents with "Turing Award" awards.
db.bios.find({awards: "Turing Award"});

// Find documents with IDs between 3 and 7.
db.bios.find({_id: {$gte: 3, $lte: 7 }});

// Find documents with awards that were awarded before the year 2000.
db.bios.find({"awards.year": {$lt: 2000}});

// Find documents with birth dates, but no death dates.
db.bios.find({ $and: [{birth: {$exists: true}}, {death: {$exists: false}} ] });
