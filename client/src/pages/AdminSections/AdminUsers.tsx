import { useEffect, useState } from "react";
import { userService, UserProfile, activityLogService } from "@/lib/firebaseService";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Shield, Ban, CheckCircle, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminUsers() {
  const { currentUser } = useAdmin();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getAll();
      setUsers(data);
    } catch (error) {
      toast.error("Failed to load users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (uid: string, newRole: "user" | "admin") => {
    try {
      await userService.updateRole(uid, newRole);
      if (currentUser) {
        await activityLogService.log(
          currentUser.uid,
          "UPDATE_ROLE",
          `User: ${uid}`,
          `Changed role to ${newRole}`
        );
      }
      toast.success(`User role updated to ${newRole}`);
      loadUsers();
    } catch (error) {
      toast.error("Failed to update user role");
      console.error(error);
    }
  };

  const handleStatusChange = async (uid: string, newStatus: "active" | "inactive" | "banned") => {
    try {
      await userService.updateStatus(uid, newStatus);
      if (currentUser) {
        await activityLogService.log(
          currentUser.uid,
          "UPDATE_STATUS",
          `User: ${uid}`,
          `Changed status to ${newStatus}`
        );
      }
      toast.success(`User status updated to ${newStatus}`);
      loadUsers();
    } catch (error) {
      toast.error("Failed to update user status");
      console.error(error);
    }
  };

  const handleDelete = async (uid: string, email: string) => {
    if (confirm(`Are you sure you want to delete ${email}? This action cannot be undone.`)) {
      try {
        await userService.delete(uid);
        if (currentUser) {
          await activityLogService.log(currentUser.uid, "DELETE", `User: ${email}`);
        }
        toast.success("User deleted successfully");
        loadUsers();
      } catch (error) {
        toast.error("Failed to delete user");
        console.error(error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Management</h2>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {users.map((user) => (
            <Card key={user.uid}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{user.email}</h3>
                      {user.role === "admin" && (
                        <Shield className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>UID: {user.uid}</p>
                      <p>
                        Joined:{" "}
                        {user.createdAt
                          ? new Date(user.createdAt.toMillis()).toLocaleDateString()
                          : "N/A"}
                      </p>
                      {user.lastLogin && (
                        <p>
                          Last Login:{" "}
                          {new Date(user.lastLogin.toMillis()).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-2">
                      <Select
                        value={user.role}
                        onValueChange={(value) =>
                          handleRoleChange(user.uid, value as "user" | "admin")
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select
                        value={user.status}
                        onValueChange={(value) =>
                          handleStatusChange(user.uid, value as "active" | "inactive" | "banned")
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="banned">Banned</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(user.uid, user.email)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
