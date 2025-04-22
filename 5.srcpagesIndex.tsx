
import { useState } from react;
import { SparklesIcon, Sparkles, Rainbow, Palette } from lucide-react;
import BookCard from @componentsBookCard;
import MoodFilter from @componentsMoodFilter;

 Temporary book recommendations data
const booksByMood Recordstring, Array{ title string; author string; pitch string; coverUrl string } = {
  cry [
    {
      title A Little Life,
      author Hanya Yanagihara,
      pitch A heart-wrenching story of friendship, trauma, and the limits of human endurance.,
      coverUrl ,
    },
  ],
  short [
    {
      title The House on Mango Street,
      author Sandra Cisneros,
      pitch A series of beautiful vignettes that pack an emotional punch in just 110 pages.,
      coverUrl ,
    },
  ],
  classic [
    {
      title Pride and Prejudice,
      author Jane Austen,
      pitch The original enemies-to-lovers story that invented half of modern romance tropes.,
      coverUrl ,
    },
  ],
  feelgood [
    {
      title The House in the Cerulean Sea,
      author TJ Klune,
      pitch A magical story about finding family in unexpected places that feels like a warm hug.,
      coverUrl ,
    },
  ],
  twist [
    {
      title Gone Girl,
      author Gillian Flynn,
      pitch The thriller that will make you question everything you think you know about your partner.,
      coverUrl ,
    },
  ],
};

const Index = () = {
  const [selectedMood, setSelectedMood] = useStatestring();
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const handleMoodSelect = (mood string) = {
    setSelectedMood(mood);
    setCurrentBookIndex(0);
  };

  const handleNewBook = () = {
    if (selectedMood && booksByMood[selectedMood]) {
      setCurrentBookIndex((prev) = 
        (prev + 1) % booksByMood[selectedMood].length
      );
    }
  };
  
   Get the current book based on selected mood and index
  const currentBook = selectedMood && booksByMood[selectedMood] 
     booksByMood[selectedMood][currentBookIndex] 
     null;

  return (
    div className=min-h-screen px-4 py-12 smpx-6 lgpx-8 bg-gradient-to-br from-purple-300 to-pink-300
      div className=max-w-3xl mx-auto text-center
        div className=flex items-center justify-center mb-6 relative
          Rainbow className=absolute -top-6 -left-6 w-12 h-12 text-yellow-400 rotate-12 
          h1 className=font-display text-4xl smtext-5xl font-semibold text-gray-900 mr-4 animate-bounce-soft
            What Should I Read
          h1
          SparklesIcon className=text-pink-500 w-12 h-12 animate-pulse 
          Palette className=absolute -top-4 -right-6 w-10 h-10 text-blue-500 rotate-12 
        div
        
        p className=text-lg text-gray-800 mb-8 bg-white70 backdrop-blur-sm rounded-full px-6 py-2 inline-block shadow-md
          Your friendly neighborhood book genie awaits...
        p
        
        div className=flex justify-center mb-12
          MoodFilter onSelect={handleMoodSelect} 
        div

        {currentBook && (
          div className=flex justify-center
            BookCard
              title={currentBook.title}
              author={currentBook.author}
              pitch={currentBook.pitch}
              coverUrl={currentBook.coverUrl}
              onNewBook={handleNewBook}
            
          div
        )}
      div
    div
  );
};

export default Index;
