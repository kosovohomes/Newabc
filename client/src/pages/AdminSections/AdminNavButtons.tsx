import { useEffect, useState } from "react";
import { navButtonService, NavButton, activityLogService } from "@/lib/firebaseService";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2, Edit2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminNavButtons() {
  const { currentUser } = useAdmin();
  const [buttons, setButtons] = useState<NavButton[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<NavButton>({
    label: "",
    url: "",
    src: "",
    order: 0,
  });

  useEffect(() => {
    loadButtons();
  }, []);

  const loadButtons = async () => {
    try {
      setLoading(true);
      const data = await navButtonService.getAll();
      setButtons(data);
    } catch (error) {
      toast.error("Failed to load nav buttons");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.label || !formData.url || !formData.src) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      if (editingId) {
        await navButtonService.update(editingId, formData);
        if (currentUser) {
          await activityLogService.log(
            currentUser.uid,
            "UPDATE",
            `Nav Button: ${formData.label}`
          );
        }
        toast.success("Button updated successfully");
      } else {
        await navButtonService.add(formData);
        if (currentUser) {
          await activityLogService.log(
            currentUser.uid,
            "CREATE",
            `Nav Button: ${formData.label}`
          );
        }
        toast.success("Button created successfully");
      }
      resetForm();
      loadButtons();
    } catch (error) {
      toast.error("Failed to save button");
      console.error(error);
    }
  };

  const handleDelete = async (id: string, label: string) => {
    if (confirm("Are you sure you want to delete this button?")) {
      try {
        await navButtonService.delete(id);
        if (currentUser) {
          await activityLogService.log(currentUser.uid, "DELETE", `Nav Button: ${label}`);
        }
        toast.success("Button deleted successfully");
        loadButtons();
      } catch (error) {
        toast.error("Failed to delete button");
        console.error(error);
      }
    }
  };

  const handleEdit = (btn: NavButton) => {
    setFormData(btn);
    setEditingId(btn.id || null);
  };

  const resetForm = () => {
    setFormData({
      label: "",
      url: "",
      src: "",
      order: 0,
    });
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Navigation Buttons Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Button
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Button" : "Add New Button"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Label</label>
                <Input
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                  placeholder="Button label"
                />
              </div>
              <div>
                <label className="text-sm font-medium">URL</label>
                <Input
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Image URL</label>
                <Input
                  value={formData.src}
                  onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                  placeholder="https://example.com/image.png"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Order</label>
                <Input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  placeholder="0"
                />
              </div>
              <Button onClick={handleSubmit} className="w-full">
                {editingId ? "Update Button" : "Create Button"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buttons.map((btn) => (
            <Card key={btn.id}>
              <CardHeader>
                <CardTitle className="text-lg">{btn.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <img
                  src={btn.src}
                  alt={btn.label}
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-sm text-gray-600 truncate">{btn.url}</p>
                <p className="text-xs text-gray-500">Order: {btn.order}</p>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(btn)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Button</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Label</label>
                          <Input
                            value={formData.label}
                            onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                            placeholder="Button label"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">URL</label>
                          <Input
                            value={formData.url}
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                            placeholder="https://example.com"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Image URL</label>
                          <Input
                            value={formData.src}
                            onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                            placeholder="https://example.com/image.png"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Order</label>
                          <Input
                            type="number"
                            value={formData.order}
                            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                            placeholder="0"
                          />
                        </div>
                        <Button onClick={handleSubmit} className="w-full">
                          Update Button
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(btn.id || "", btn.label)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
