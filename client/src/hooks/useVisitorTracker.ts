import { useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, increment, updateDoc } from "firebase/firestore";

export function useVisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      // Use a fixed document ID for site-wide stats
      const statsRef = doc(db, "site_stats", "visitors");
      
      try {
        const docSnap = await getDoc(statsRef);
        
        if (docSnap.exists()) {
          await updateDoc(statsRef, {
            count: increment(1),
            lastVisit: new Date()
          });
        } else {
          await setDoc(statsRef, {
            count: 1,
            lastVisit: new Date(),
            createdAt: new Date()
          });
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    // Track only once per session/mount
    trackVisitor();
  }, []);
}
