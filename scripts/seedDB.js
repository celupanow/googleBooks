const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Test Book",
    authors: ["Mikael Krogerus", "Roman Tschäppeler"],
    href: "https://play.google.com/store/books/details?id=lPV1CQAAQBAJ&rdid=book-lPV1CQAAQBAJ&rdot=1&source=gbs_api",
    description: "An essential library of tests for self-knowledge and success, from the strategic thinking experts behind the international bestseller The Decision Book. Are you clever? Can you self-motivate? Are you creative? How do you handle money? Can you lead others well? With their trademark style and wit, best-selling authors Mikael Krogerus and Roman Tschäppeler present sixty-four tests spanning intelligence and personality type; creativity and leadership skills; fitness and lifestyle; and knowledge and belief. From what you see in a Rorschach test to comparing your workout against a Navy SEAL’s, from EQ to IQ and Myers-Briggs in between, The Test Book offers a panoply of ways to assess yourself and decide what you need to succeed. As Krogerus and Tschäppeler highlight, you can only know whether you have the right skills, the right job, or the right partner when you know where you stand right now. Small enough to fit in your pocket but packed with insight and good humor, The Test Book delivers a quick, fun way to evaluate your life and happiness.",
    thumbnail: "http://books.google.com/books/content?id=lPV1CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    id: "lPV1CQAAQBAJ"
  },
  {
    title: "The Hobbit, Or, There and Back Again",
    authors: [
        "John Ronald Reuel Tolkien"
        ],
    href: "http://books.google.com/books?id=hFfhrCWiLSMC&dq=the+hobbit&hl=&source=gbs_api",
    description: "Chronicles the adventures of the inhabitants of Middle-earth and Bilbo Baggins, the hobbit who brought home to The Shire the One Ring of Power",
    thumbnail: "http://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    id: "hFfhrCWiLSMC" 
  },
  {
    title: "The Way of Kings",
    authors: [
        "Brandon Sanderson"
        ],
    href: "http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    description: "Introduces the world of Roshar through the experiences of a war-weary royal compelled by visions, a highborn youth condemned to military slavery, and a woman who is desperate to save her impoverished house.",
    thumbnail: "http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    id: "QVn-CgAAQBAJ"
  },
  {
    title: "Good Omens",
    authors: [
        "Neil Gaiman",
        "Terry Pratchett"
        ],
    href: "https://play.google.com/store/books/details?id=-o-2KpQlFNsC&source=gbs_api",
    description: "The classic collaboration from the internationally bestselling authors Neil Gaiman and Terry Pratchett, soon to be an original series starring Michael Sheen and David Tennant. “Good Omens . . . is something like what would have happened if Thomas Pynchon, Tom Robbins and Don DeLillo had collaborated. Lots of literary inventiveness in the plotting and chunks of very good writing and characterization. It’s a wow. It would make one hell of a movie. Or a heavenly one. Take your pick.”—Washington Post According to The Nice and Accurate Prophecies of Agnes Nutter, Witch (the world's only completely accurate book of prophecies, written in 1655, before she exploded), the world will end on a Saturday. Next Saturday, in fact. Just before dinner. So the armies of Good and Evil are amassing, Atlantis is rising, frogs are falling, tempers are flaring. Everything appears to be going according to Divine Plan. Except a somewhat fussy angel and a fast-living demon—both of whom have lived amongst Earth's mortals since The Beginning and have grown rather fond of the lifestyle—are not actually looking forward to the coming Rapture. And someone seems to have misplaced the Antichrist . . .",
    thumbnail: "http://books.google.com/books/content?id=-o-2KpQlFNsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    id:"-o-2KpQlFNsC" 
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
