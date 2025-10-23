import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Plus, Trash2, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Book {
  id: string;
  title: string;
  author: string;
  status: "reading" | "completed" | "to-read";
  dateAdded: string;
}

export default function ReadingList() {
  const [books, setBooks] = useState<Book[]>([
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
  ]);

  const [newBook, setNewBook] = useState<{
    title: string;
    author: string;
    status: Book["status"];
  }>({
    title: "",
    author: "",
    status: "to-read",
  });

  const [filterStatus, setFilterStatus] = useState<string>("all");

  const addBook = () => {
    if (!newBook.title || !newBook.author) {
      toast({
        title: "Missing Information",
        description: "Please fill in both title and author",
        variant: "destructive",
      });
      return;
    }

    const book: Book = {
      id: Date.now().toString(),
      title: newBook.title,
      author: newBook.author,
      status: newBook.status,
      dateAdded: new Date().toISOString().split("T")[0],
    };

    setBooks([book, ...books]);
    setNewBook({ title: "", author: "", status: "to-read" });
    
    toast({
      title: "Book Added",
      description: `"${book.title}" has been added to your reading list`,
    });
  };

  const deleteBook = (id: string) => {
    const book = books.find((b) => b.id === id);
    setBooks(books.filter((b) => b.id !== id));
    
    toast({
      title: "Book Removed",
      description: `"${book?.title}" has been removed from your reading list`,
    });
  };

  const updateBookStatus = (id: string, status: Book["status"]) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, status } : book)));
  };

  const filteredBooks = filterStatus === "all" 
    ? books 
    : books.filter((book) => book.status === filterStatus);

  const getStatusBadgeVariant = (status: Book["status"]) => {
    switch (status) {
      case "completed":
        return "default";
      case "reading":
        return "secondary";
      case "to-read":
        return "outline";
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold">My Books</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track books I've read, currently reading, and want to read
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Book
                  </CardTitle>
                  <CardDescription>Add a book to your reading list</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Book Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter book title"
                      value={newBook.title}
                      onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      placeholder="Enter author name"
                      value={newBook.author}
                      onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newBook.status}
                      onValueChange={(value: Book["status"]) => setNewBook({ ...newBook, status: value })}
                    >
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="to-read">To Read</SelectItem>
                        <SelectItem value="reading">Currently Reading</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={addBook} className="w-full gradient-primary glow-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Book
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
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

              <div className="space-y-4">
                {filteredBooks.length === 0 ? (
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-12 text-center">
                      <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No books found. Add your first book to get started!</p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredBooks.map((book) => (
                    <Card 
                      key={book.id}
                      className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                              <p className="text-muted-foreground">by {book.author}</p>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3">
                              <Select
                                value={book.status}
                                onValueChange={(value) => updateBookStatus(book.id, value as Book["status"])}
                              >
                                <SelectTrigger className="w-48">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="to-read">To Read</SelectItem>
                                  <SelectItem value="reading">Currently Reading</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                              </Select>
                              
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                Added {new Date(book.dateAdded).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteBook(book.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
