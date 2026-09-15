import Library from "./components/Library";
import AddBookForm from "./components/AddBookForm";
import SearchBooks from "./components/SearchBooks";
import { useEffect, useState } from "react";
import "./css/App.css";
import "./css/Style.css";

function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: 1,
            title: "Spark of the Everflame",
            author: "Penn COLE",
            genre: "Fantasy",
            rating: 5,
            cover:
              "https://cdn1.booknode.com/book_cover/5304/full/kindreds-curse-tome-1-spark-of-the-everflame-5304092.jpg",
            summary:
              "When old secrets catch fire, everything will burn. \n\nIn a mortal world colonized by the gods and ruled over by the Descended, their cruel offspring, Diem Bellator yearns to escape the insular life of her poor village. \n\nHer mother’s sudden disappearance—and the discovery of a dangerous secret about her past—offer Diem an unexpected opportunity to enter the dark world of Descended royalty and unlock the web of mysteries her mother left behind. \n\nWith the dying King’s handsome, mysterious heir watching her every move, and a ruthless mortal alliance recruiting her to join the growing civil war, Diem will have to navigate the unwritten rules of love, power, and politics in order to save her family—and all of mortalkind.",
          },

          {
            id: 2,
            title: "Serpent & Dove",
            author: "Shelby MAHURIN",
            genre: "Fantasy",
            rating: 5,
            cover:
              "https://cdn1.booknode.com/book_cover/5080/full/serpent-and-dove-tome-1-5080108.jpg",
            summary:
              "Bound as one to love, honor, or burn. Two years ago, Louise le Blanc fled her coven and took shelter in the city of Cesarine, forsaking all magic and living off whatever she could steal. There, witches like Lou are hunted. They are feared. And they are burned. \n\nSworn to the Church as a Chasseur, Reid Diggory has lived his life by one principle: thou shalt not suffer a witch to live. His path was never meant to cross with Lou's, but a wicked stunt forces them into an impossible union—holy matrimony.\n\n The war between witches and Church is an ancient one, and Lou's most dangerous enemies bring a fate worse than fire. Unable to ignore her growing feelings, yet powerless to change what she is, a choice must be made.\n\n And love makes fools of us all.",
          },

          {
            id: 3,
            title: "Shield of Sparrows",
            author: "Devney PERRY",
            genre: "Fantasy",
            rating: 5,
            cover:
              "https://cdn1.booknode.com/book_cover/5679/full/le-bouclier-des-oiselles-tome-1-5678886.jpg",
            summary:
              "The gods sent monsters to the five kingdoms to remind mortals they must kneel.\n\n I’ve spent my life kneeling—to their will and to my father’s. As a princess, my only duty is to wear the crown and obey the king.\n I was never meant to rule. Never meant to fight. And I was never supposed to be the daughter who sealed an ancient treaty with her own blood.\n But that changed the fateful day I stepped into my father’s throne room. The day a legendary monster hunter sailed to our shores. The day a prince ruined my life. \n\nNow I’m crossing treacherous lands beside a warrior who despises me as much as I despise him—bound to a future I didn’t choose and a husband I barely know. \nEveryone wants me to be something I’m not—a queen, a spy, a sacrifice. \nBut what if I refused the role chosen for me? What if I made my own rules? \nWhat if there’s power in being underestimated? And what if—for the first time—I reached for it?",
          },

          {
            id: 4,
            title: "The Only One Left",
            author: "Riley SAGER",
            genre: "Thriller",
            rating: 5,
            cover:
              "https://cdn1.booknode.com/book_cover/5058/full/celle-qui-sait-5058070.jpg",
            summary:
              "At seventeen, Lenora Hope \nHung her sister with a rope.\n\n Now reduced to a schoolyard chant, the Hope family murders shocked the Maine coast one bloody night in 1929. While most people assume seventeen-year-old Lenora was responsible, the police were never able to prove it. Other than her denial after the killings, she has never spoken publicly about that night, nor has she set foot outside Hope’s End, the cliffside mansion where the massacre occurred. \n\n Stabbed her father with a knife. \nTook her mother’s happy life.\n\n It’s now 1983, and home-health aide Kit McDeere arrives at a decaying Hope’s End to care for Lenora after her previous nurse fled in the middle of the night. In her seventies and confined to a wheelchair, Lenora was rendered mute by a series of strokes and can only communicate with Kit by tapping out sentences on an old typewriter. One night, Lenora uses it to make a tantalizing offer—I want to tell you everything.\n\n “It wasn’t me,” Lenora said. \nBut she’s the only one not dead.",
          },

          {
            id: 5,
            title: "Verity",
            author: "Colleen HOOVER",
            genre: "Thriller",
            rating: 4,
            cover:
              "https://cdn1.booknode.com/book_cover/1415/full/verity-1415197.jpg",
            summary:
              "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. \n\nLowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of what really happened the day her daughter died. \n\nLowen decides to keep the manuscript hidden from Jeremy, knowing its contents would devastate the already grieving father. But as Lowen's feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife's words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue to love her.",
          },
          {
            id: 6,
            title: "The Wind Weaver",
            author: "Julie JOHNSON",
            genre: "Fantasy",
            rating: 3,
            cover:
              "https://cdn1.booknode.com/book_cover/5676/full/reign-of-remnants-tome-1-the-wind-weaver-5676151.jpg",
            summary:
              "Rhya Fleetwood is a healer, an outcast, and like the realm itself—about to die. Or so she thought.\n\n When the ruthless Commander Scythe plucks her from the vile clutches of her executioner there’s no time to feel relief. Her new captor wants Rhya for his own secret ends and they all lead back to the mysterious birthmark which brands her as a Remnant. One of four souls capable of calling forth inconceivable elemental power. \n\nRhya knows she must master the wind that whispers within her and make an escape. But as she is dragged across treacherous terrain with Scythe’s formidable band of soldiers, something keeps her at his side. \n\nInside her, a tempest roars—terror and desire. Soon, she knows she must choose. \nFollow her magic, or her heart…",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks((prev) => [...prev, newBook]);
  };

  return (
    <div>
      <SearchBooks addBook={addBook} />
      <Library books={books} />
      <AddBookForm addBook={addBook} />
    </div>
  );
}

export default App;
