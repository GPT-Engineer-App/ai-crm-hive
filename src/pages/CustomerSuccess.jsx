import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const CustomerSuccess = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: "", goal: "", progress: 0 });

  const handleAddCustomer = () => {
    setCustomers([...customers, { ...newCustomer, id: Date.now() }]);
    setNewCustomer({ name: "", goal: "", progress: 0 });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Customer Success</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Customer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input
              placeholder="Customer Name"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            />
            <Input
              placeholder="Success Goal"
              value={newCustomer.goal}
              onChange={(e) => setNewCustomer({ ...newCustomer, goal: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Progress (%)"
              value={newCustomer.progress}
              onChange={(e) => setNewCustomer({ ...newCustomer, progress: parseInt(e.target.value) })}
            />
            <Button onClick={handleAddCustomer}>Add Customer</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Success Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Goal</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.goal}</TableCell>
                  <TableCell>
                    <Progress value={customer.progress} className="w-[60%]" />
                    <span className="ml-2">{customer.progress}%</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerSuccess;