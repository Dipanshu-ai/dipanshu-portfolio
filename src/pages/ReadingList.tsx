import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Calendar } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  status: "reading" | "completed" | "to-read";
  dateAdded: string;
}

const books: Book[] = [
  {
    id: "1",
    title: "The Lean Startup",
    author: "Eric Ries",
    status: "completed",
    dateAdded: "2024-01-15",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    status: "reading",
    dateAdded: "2024-10-01",
  },
  {
    id: "3",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    status: "completed",
    dateAdded: "2024-03-20",
  },
  {
    id: "4",
    title: "The Phoenix Project",
    author: "Gene Kim, Kevin Behr, George Spafford",
    status: "completed",
    dateAdded: "2024-02-10",
  },
  {
    id: "5",
    title: "Deep Work",
    author: "Cal Newport",
    status: "reading",
    dateAdded: "2024-09-15",
  },
  {
    id: "6",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    status: "to-read",
    dateAdded: "2024-11-01",
  },
  {
    id: "7",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    status: "completed",
    dateAdded: "2023-12-05",
  },
  {
    id: "8",
    title: "Range: Why Generalists Triumph in a Specialized World",
    author: "David Epstein",
    status: "to-read",
    dateAdded: "2024-11-10",
  },
];

export default function ReadingList() {
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredBooks = filterStatus === "all" 
    ? books 
    : books.filter((book) => book.status === filterStatus);

  const getStatusLabel = (status: Book["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "reading":
        return "Currently Reading";
      case "to-read":
        return "To Read";
    }
  };

  const getStatusVariant = (status: Book["status"]) => {
    switch (status) {
      case "completed":
        return "default";
      case "reading":
        return "secondary";
      case "to-read":
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Reading List</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Books I'm Reading</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of books that have shaped my thinking and continue to inspire my growth
            </p>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {filteredBooks.length} {filteredBooks.length === 1 ? "Book" : "Books"}
            </h2>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Books</SelectItem>
                <SelectItem value="reading">Currently Reading</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="to-read">To Read</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredBooks.map((book, index) => (
              <Card 
                key={book.id}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                    <p className="text-muted-foreground">by {book.author}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant={getStatusVariant(book.status)}>
                      {getStatusLabel(book.status)}
                    </Badge>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Added {new Date(book.dateAdded).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No books found in this category.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
