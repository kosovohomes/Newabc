import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe, User as UserIcon, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const NavLinks = () => (
    <>
      <Link href="/">{t('nav.home')}</Link>
      <Link href="/admin-showcase">Admin Dashboard</Link>
      <Link href="/about">{t('nav.about')}</Link>
      <Link href="/contact">{t('nav.contact')}</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-teal-600 font-poppins">ABC OF ISLAM</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toggleLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage('sq')}>
                Shqip
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth State */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <UserIcon className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-xs text-muted-foreground">
                    {user.email}
                  </DropdownMenuItem>
                  <Link href="/admin-showcase">
                    <DropdownMenuItem>Admin Showcase</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('nav.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">{t('nav.login')}</Button>
                </Link>
                <Link href="/signup">
                  <Button>{t('nav.signup')}</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
                <hr />
                {user ? (
                  <>
                    <span className="text-sm font-medium">{user.email}</span>
                    <Link href="/admin-showcase">
                      <Button variant="outline" className="w-full">Admin Showcase</Button>
                    </Link>
                    <Button variant="outline" onClick={handleLogout}>{t('nav.logout')}</Button>
                  </>
                ) : (
                  <>
                    <Link href="/admin-showcase">
                      <Button variant="outline" className="w-full">Admin Showcase</Button>
                    </Link>
                    <Link href="/login">
                      <Button variant="outline" className="w-full">{t('nav.login')}</Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="w-full">{t('nav.signup')}</Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
