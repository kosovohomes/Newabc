import { useEffect, useState } from "react";
import { contentCardService, ContentCard, activityLogService } from "@/lib/firebaseService";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2, Edit2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminContentCards() {
  const { currentUser } = useAdmin();
  const [cards, setCards] = useState<ContentCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContentCard>({
    title: "",
    subtitle: "",
    image: "",
    link: "",
    order: 0,
  });

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      setLoading(true);
      const data = await contentCardService.getAll();
      setCards(data);
    } catch (error) {
      toast.error("Failed to load content cards");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.subtitle || !formData.image || !formData.link) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      if (editingId) {
        await contentCardService.update(editingId, formData);
        if (currentUser) {
          await activityLogService.log(
            currentUser.uid,
            "UPDATE",
            `Content Card: ${formData.title}`
          );
        }
        toast.success("Card updated successfully");
      } else {
        await contentCardService.add(formData);
        if (currentUser) {
          await activityLogService.log(
            currentUser.uid,
            "CREATE",
            `Content Card: ${formData.title}`
          );
        }
        toast.success("Card created successfully");
      }
      resetForm();
      loadCards();
    } catch (error) {
      toast.error("Failed to save card");
      console.error(error);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (confirm("Are you sure you want to delete this card?")) {
      try {
        await contentCardService.delete(id);
        if (currentUser) {
          await activityLogService.log(currentUser.uid, "DELETE", `Content Card: ${title}`);
        }
        toast.success("Card deleted successfully");
        loadCards();
      } catch (error) {
        toast.error("Failed to delete card");
        console.error(error);
      }
    }
  };

  const handleEdit = (card: ContentCard) => {
    setFormData(card);
    setEditingId(card.id || null);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      image: "",
      link: "",
      order: 0,
    });
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Cards Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Card
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Card" : "Add New Card"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Card title"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Subtitle</label>
                <Input
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Card subtitle"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Image URL</label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.png"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Link URL</label>
                <Input
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://example.com"
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
                {editingId ? "Update Card" : "Create Card"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Card key={card.id}>
              <CardHeader>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">{card.subtitle}</p>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-xs text-gray-500">Order: {card.order}</p>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(card)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Card</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Title</label>
                          <Input
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Card title"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Subtitle</label>
                          <Input
                            value={formData.subtitle}
                            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                            placeholder="Card subtitle"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Image URL</label>
                          <Input
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            placeholder="https://example.com/image.png"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Link URL</label>
                          <Input
                            value={formData.link}
                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                            placeholder="https://example.com"
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
                          Update Card
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(card.id || "", card.title)}
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
