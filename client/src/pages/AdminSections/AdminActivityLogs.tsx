import { useEffect, useState } from "react";
import { activityLogService, ActivityLog } from "@/lib/firebaseService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export default function AdminActivityLogs() {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      setLoading(true);
      const data = await activityLogService.getRecent(100);
      setLogs(data);
    } catch (error) {
      toast.error("Failed to load activity logs");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case "CREATE":
        return "bg-green-100 text-green-800";
      case "UPDATE":
        return "bg-blue-100 text-blue-800";
      case "DELETE":
        return "bg-red-100 text-red-800";
      case "UPDATE_ROLE":
        return "bg-purple-100 text-purple-800";
      case "UPDATE_STATUS":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Activity Logs</h2>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {logs.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No activity logs yet</p>
              ) : (
                logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Badge className={getActionColor(log.action)}>
                          {log.action}
                        </Badge>
                        <span className="font-medium">{log.target}</span>
                      </div>
                      {log.details && (
                        <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Admin ID: {log.adminId.substring(0, 8)}...
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        {new Date(log.timestamp.toMillis()).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(log.timestamp.toMillis()).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
