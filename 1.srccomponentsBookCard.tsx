
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BookText, SparklesIcon, Rainbow, Palette, Star } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  pitch: string;
  coverUrl: string;
  onNewBook: () => void;
}

const BookCard = ({ title, author, pitch, coverUrl, onNewBook }: BookCardProps) => {
  return (
    <Card className="book-card-enter w-full max-w-md bg-gradient-to-br from-white/90 to-purple-100/90 backdrop-blur-lg shadow-2xl border-4 border-pink-300/70 hover:border-purple-400/70 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-2xl overflow-hidden">
      <CardContent className="pt-6 text-center rounded-t-xl relative">
        <Rainbow className="absolute top-2 left-2 h-6 w-6 text-yellow-500" />
        <Star className="absolute top-2 right-2 h-6 w-6 text-orange-500" />
        
        <div className="mb-6 flex justify-center relative">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={`Cover of ${title}`}
              className="h-52 w-auto rounded-lg shadow-lg transform transition-transform hover:rotate-3 border-2 border-yellow-300"
            />
          ) : (
            <div className="h-52 w-36 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center rounded-lg shadow-lg transform transition-transform hover:rotate-3 border-2 border-yellow-300">
              <BookText className="h-16 w-16 text-white" />
            </div>
          )}
          <SparklesIcon className="absolute -top-4 -right-4 text-yellow-400 w-8 h-8 animate-pulse" />
          <Palette className="absolute -bottom-2 -left-2 text-blue-400 w-8 h-8 rotate-12" />
        </div>
        
        <div className="bg-gradient-to-r from-pink-200/80 to-purple-200/80 p-4 rounded-xl mb-4">
          <h2 className="font-display text-2xl font-semibold mb-2 text-gray-800 bg-white/70 rounded-full px-4 py-1 shadow-inner">
            {title}
          </h2>
          <p className="text-muted-foreground mb-4 bg-white/70 rounded-full px-3 py-1 inline-block shadow-inner">
            by {author}
          </p>
          <p className="text-sm italic bg-white/70 rounded-lg px-4 py-2 shadow-inner">
            "{pitch}"
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="justify-center pb-6 bg-gradient-to-r from-purple-200/50 to-pink-200/50 rounded-b-xl">
        <Button
          onClick={onNewBook}
          className="transition-all hover:scale-110 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:from-purple-500 hover:to-pink-600 font-semibold px-6"
        >
          ✨ Give me another ✨
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;