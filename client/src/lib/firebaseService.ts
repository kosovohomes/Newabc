import { db } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  setDoc,
  increment,
  Timestamp,
} from "firebase/firestore";

// ─── Content Cards Management ───────────────────────────────────────────────

export interface ContentCard {
  id?: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  order: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export const contentCardService = {
  async getAll(): Promise<ContentCard[]> {
    const querySnapshot = await getDocs(collection(db, "contentCards"));
    return querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as ContentCard))
      .sort((a, b) => a.order - b.order);
  },

  async add(card: ContentCard): Promise<string> {
    const docRef = await addDoc(collection(db, "contentCards"), {
      ...card,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  },

  async update(id: string, card: Partial<ContentCard>): Promise<void> {
    const docRef = doc(db, "contentCards", id);
    await updateDoc(docRef, {
      ...card,
      updatedAt: Timestamp.now(),
    });
  },

  async delete(id: string): Promise<void> {
    await deleteDoc(doc(db, "contentCards", id));
  },
};

// ─── Nav Buttons Management ───────────────────────────────────────────────

export interface NavButton {
  id?: string;
  label: string;
  url: string;
  src: string;
  order: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export const navButtonService = {
  async getAll(): Promise<NavButton[]> {
    const querySnapshot = await getDocs(collection(db, "navButtons"));
    return querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as NavButton))
      .sort((a, b) => a.order - b.order);
  },

  async add(btn: NavButton): Promise<string> {
    const docRef = await addDoc(collection(db, "navButtons"), {
      ...btn,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  },

  async update(id: string, btn: Partial<NavButton>): Promise<void> {
    const docRef = doc(db, "navButtons", id);
    await updateDoc(docRef, {
      ...btn,
      updatedAt: Timestamp.now(),
    });
  },

  async delete(id: string): Promise<void> {
    await deleteDoc(doc(db, "navButtons", id));
  },
};

// ─── User Management ───────────────────────────────────────────────────────

export interface UserProfile {
  uid: string;
  email: string;
  role: "user" | "admin";
  createdAt: Timestamp;
  lastLogin?: Timestamp;
  status: "active" | "inactive" | "banned";
}

export const userService = {
  async getAll(): Promise<UserProfile[]> {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map((doc) => doc.data() as UserProfile);
  },

  async getById(uid: string): Promise<UserProfile | null> {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as UserProfile) : null;
  },

  async create(uid: string, email: string, role: "user" | "admin" = "user"): Promise<void> {
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, {
      uid,
      email,
      role,
      createdAt: Timestamp.now(),
      status: "active",
    });
  },

  async updateRole(uid: string, role: "user" | "admin"): Promise<void> {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, { role });
  },

  async updateStatus(uid: string, status: "active" | "inactive" | "banned"): Promise<void> {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, { status });
  },

  async updateLastLogin(uid: string): Promise<void> {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, { lastLogin: Timestamp.now() });
  },

  async delete(uid: string): Promise<void> {
    await deleteDoc(doc(db, "users", uid));
  },
};

// ─── Statistics ───────────────────────────────────────────────────────────

export interface SiteStats {
  totalVisitors: number;
  totalUsers: number;
  totalAdmins: number;
  activeUsers: number;
  bannedUsers: number;
  lastUpdated: Timestamp;
}

export const statsService = {
  async getStats(): Promise<SiteStats> {
    const docRef = doc(db, "site_stats", "overview");
    const docSnap = await getDoc(docRef);
    return docSnap.exists()
      ? (docSnap.data() as SiteStats)
      : {
          totalVisitors: 0,
          totalUsers: 0,
          totalAdmins: 0,
          activeUsers: 0,
          bannedUsers: 0,
          lastUpdated: Timestamp.now(),
        };
  },

  async updateStats(): Promise<void> {
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = usersSnapshot.docs.map((doc) => doc.data() as UserProfile);

    const visitorsSnapshot = await getDoc(doc(db, "site_stats", "visitors"));
    const totalVisitors = visitorsSnapshot.exists()
      ? visitorsSnapshot.data().count || 0
      : 0;

    const stats: SiteStats = {
      totalVisitors,
      totalUsers: users.length,
      totalAdmins: users.filter((u) => u.role === "admin").length,
      activeUsers: users.filter((u) => u.status === "active").length,
      bannedUsers: users.filter((u) => u.status === "banned").length,
      lastUpdated: Timestamp.now(),
    };

    const docRef = doc(db, "site_stats", "overview");
    await setDoc(docRef, stats);
  },
};

// ─── Activity Logs ───────────────────────────────────────────────────────

export interface ActivityLog {
  id?: string;
  adminId: string;
  action: string;
  target: string;
  timestamp: Timestamp;
  details?: string;
}

export const activityLogService = {
  async log(adminId: string, action: string, target: string, details?: string): Promise<void> {
    await addDoc(collection(db, "activityLogs"), {
      adminId,
      action,
      target,
      timestamp: Timestamp.now(),
      details,
    });
  },

  async getRecent(limit: number = 50): Promise<ActivityLog[]> {
    const querySnapshot = await getDocs(collection(db, "activityLogs"));
    return querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as ActivityLog))
      .sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis())
      .slice(0, limit);
  },
};
