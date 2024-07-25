import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Notetaker = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ customer: "", content: "", date: "" });

  const handleCreateNote = () => {
    setNotes([...notes, { ...newNote, id: Date.now(), date: new Date().toISOString() }]);
    setNewNote({ customer: "", content: "", date: "" });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Notetaker</h1>
      <Card>
        <CardHeader>
          <CardTitle>Create New Note</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input
              placeholder="Customer Name"
              value={newNote.customer}
              onChange={(e) => setNewNote({ ...newNote, customer: e.target.value })}
            />
            <Textarea
              placeholder="Note Content"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            />
            <Button onClick={handleCreateNote}>Create Note</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notes.map((note) => (
                <TableRow key={note.id}>
                  <TableCell>{note.customer}</TableCell>
                  <TableCell>{note.content}</TableCell>
                  <TableCell>{new Date(note.date).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notetaker;