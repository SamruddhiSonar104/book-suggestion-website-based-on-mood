
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rainbow } from "lucide-react";

const moods = [
  { value: "cry", label: "I need to cry" },
  { value: "short", label: "Short and punchy" },
  { value: "classic", label: "Written before the internet" },
  { value: "feelgood", label: "Feel-good reads" },
  { value: "twist", label: "Plot twist, please" },
];

interface MoodFilterProps {
  onSelect: (value: string) => void;
}

const MoodFilter = ({ onSelect }: MoodFilterProps) => {
  return (
    <div className="relative">
      <Rainbow className="absolute -top-6 -left-10 h-8 w-8 text-yellow-500" />
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-[280px] bg-white/90 backdrop-blur-md border-2 border-pink-300 shadow-lg hover:border-purple-400 transition-all duration-300">
          <SelectValue placeholder="How are you feeling today?" />
        </SelectTrigger>
        <SelectContent className="bg-white/90 backdrop-blur-md border-2 border-pink-300">
          {moods.map((mood) => (
            <SelectItem 
              key={mood.value} 
              value={mood.value}
              className="hover:bg-purple-100 focus:bg-purple-100 cursor-pointer"
            >
              {mood.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MoodFilter;