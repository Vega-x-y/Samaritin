import { Link, usePage } from '@inertiajs/react';
import { Menu, Moon, Phone, Sun } from 'lucide-react';
import { useAppearance } from '@/hooks/use-appearance';
import { dashboard, login, home } from '@/routes';
import { register } from '@/routes';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";


export default function NavLanding() {
  const { auth, currentTeam } = usePage().props;
  const { url } = usePage();
  const dashboardUrl = currentTeam ? dashboard(currentTeam.slug) : '/';
  const { appearance, updateAppearance } = useAppearance();

  return (
    <nav>
      <div className="max-w-7xl m-auto flex items-center justify-between position-sticky top-0 z-100">
        <Link href={home.get()} className='text-2xl font-bold text-primary'>Samaritain</Link>
        <div className="md:flex hidden gap-6 items-center">
          <Link href={home.get()} className={url === '/' ? 'text-primary' : 'text-sm hover:text-primary'}>Accueil</Link>
          <Link href="/parcels" className={url.startsWith('/parcels') ? 'text-primary' : 'text-sm hover:text-primary'}>Parcelles à vendre</Link>
          <Link href="/services" className={url.startsWith('/services') ? 'text-primary' : 'text-sm hover:text-primary'}>Services</Link>
          <Button className='px-2.5 py-5 rounded-4xl'>
            <a href="#" className='flex items-center gap-1'>
              <Phone size={18} />
              +242 06 800 71 38
            </a>
          </Button>
          <Button 
            variant="ghost"
            onClick={() => updateAppearance(appearance === 'light' ? 'dark' : 'light')}
            className='rounded-full cursor-pointer'>
            {
              appearance === 'light' ? <Sun size={18} /> : <Moon size={18} />
            }
          </Button>
          <div className="flex items-center justify-end gap-4">
            {auth.user ? (
              <Button variant="outline" className='w-full'>
                <Link
                  href={dashboardUrl}
                  >
                  Tableau de bord
                </Link>
              </Button>
              ) : (
                <>
                  <Button variant="ghost">
                    <Link
                      href={login()}
                    >
                      Se connecter
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      href={register()}
                    >
                      S'inscrire
                    </Link>
                  </Button>
                </>
              )}
          </div>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className='md:hidden'>
            <SheetHeader>
              <SheetTitle>
                <Button 
                  variant="ghost"
                  onClick={() => updateAppearance(appearance === 'light' ? 'dark' : 'light')}
                  className='rounded-full cursor-pointer text-start px-4'>
                  {
                    appearance === 'light' ? <Sun size={18} /> : <Moon size={18} />
                  }
                </Button>
              </SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-6 items-start px-4'>
              <Link href={home.get()} className={url === '/' ? 'text-primary' : 'text-xl hover:text-primary'}>Accueil</Link>
              <Link href="/parcels" className={url.startsWith('/parcels') ? 'text-primary' : 'text-xl hover:text-primary'}>Parcelles à vendre</Link>
              <Link href="/services" className={url.startsWith('/services') ? 'text-primary' : 'text-xl hover:text-primary'}>Services</Link>
            </div>
            <SheetFooter>
              <div className="flex flex-col w-full items-center justify-end gap-4">
                <Button className='px-2.5 py-5 rounded-4xl w-full'>
                  <a href="#" className='flex items-center gap-1'>
                    <Phone size={18} />
                    +242 06 800 71 38
                  </a>
                </Button>
                <Separator/>
                {auth.user ? (
                  <Button variant="outline" className='w-full'>
                    <Link
                      href={dashboardUrl}
                    >
                      Tableau de bord
                    </Link>
                  </Button>
                  ) : (
                    <>
                      <Button variant="outline" className='w-full'>
                        <Link
                          href={login()}
                        >
                          Se connecter
                        </Link>
                      </Button>
                        <Button className='w-full'>
                          <Link
                            href={register()}
                          >
                            S'inscrire
                          </Link>
                        </Button>
                      </>
                    )}
                </div>
                </SheetFooter>
              </SheetContent>
          </Sheet>
      </div>
    </nav>
  );
}