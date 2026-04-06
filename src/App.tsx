/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent, ReactNode, MouseEvent, Fragment } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun,
  ChefHat,
  ArrowLeft,
  LogOut,
  Moon,
  Scale,
  Utensils,
  UtensilsCrossed,
  Coffee,
  Hand,
  CupSoda,
  Soup,
  GlassWater,
  Search,
  Star,
  Monitor,
  Smartphone,
  Tablet,
  Image as ImageIcon,
  ImageOff,
  Printer,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { recipesS } from './data/recipesS';
import { recipesO } from './data/recipesO';
import { recipesP } from './data/recipesP';
import { recipesV } from './data/recipesV';
import { recipesEXT } from './data/erecipesEXT';
import { recipesPEC } from './data/erecipesPEC';
import { recipesZAV } from './data/erecipesZAV';
import { Category, Recipe } from './types';
import RecipeImage from './components/RecipeImage';

const recipes = [...recipesS, ...recipesO, ...recipesP, ...recipesV];
const recipesExtra = [...recipesEXT, ...recipesPEC, ...recipesZAV];
import { APP_VERSION, APP_PASSWORD_HASH } from './constants';
import { iconImages } from './iconImages';
import Fuse from 'fuse.js';
import { ingredientSynonyms } from './data/synonyms';

const NOISE_WORDS = ['sůl', 'pepř', 'voda', 'olej', 'máslo na smažení', 'sul', 'pepr', 'maslo na smazeni', 'máslo', 'maslo'];

function normalizeText(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function searchByIngredients(recipes: Recipe[], query: string, currentCategory: Category | null) {
  const parts = query.split(';');
  const catPart = normalizeText(parts[0]);
  const ingPart = parts[1] ? parts[1].trim() : '';
  
  let targetCategory: Category | null = currentCategory;
  if (catPart) {
    const catMap: Record<string, Category> = {
      'snidane': Category.SNIDANE,
      'obed': Category.OBED,
      'presnidavka': Category.PRESNIDAVKA,
      'vecere': Category.VECERE,
      'extra': Category.EXTRA,
      'peceni': Category.PECENI,
      'zavarovani': Category.ZAVAROVANI
    };
    targetCategory = catMap[catPart] || targetCategory;
  }

  if (!ingPart) return [];

  const searchIngredients = ingPart.split(',')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !NOISE_WORDS.includes(s.toLowerCase()));

  if (searchIngredients.length === 0) return [];

  return recipes.filter(r => {
    if (targetCategory && r.category !== targetCategory) return false;
    
    return searchIngredients.every(searchIng => {
      const normalizedSearch = normalizeText(searchIng);
      
      // Collect all relevant terms (original + synonyms)
      const searchTerms = new Set<string>([normalizedSearch]);
      
      for (const [official, list] of Object.entries(ingredientSynonyms)) {
        const officialNorm = normalizeText(official);
        const listNorm = list.map(s => normalizeText(s));
        
        if (officialNorm === normalizedSearch || listNorm.includes(normalizedSearch)) {
          searchTerms.add(officialNorm);
          listNorm.forEach(t => searchTerms.add(t));
        }
      }

      // Check if any of the terms match any ingredient in the recipe
      return r.ingredients.some(ing => {
        const ingNameNorm = normalizeText(ing.name);
        const ingAltNorm = normalizeText(ing.alternatives || '');
        
        // Direct inclusion check (fast & reliable)
        for (const term of searchTerms) {
          if (ingNameNorm.includes(term) || ingAltNorm.includes(term)) return true;
        }

        return false;
      });
    });
  });
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryMode, setGalleryMode] = useState<'domaci' | 'extra'>('domaci');
  const [galleryCategory, setGalleryCategory] = useState<Category>(Category.SNIDANE);
  const [selectedGalleryRecipe, setSelectedGalleryRecipe] = useState<Recipe | null>(null);
  const [viewport, setViewport] = useState<'auto' | 'mobile-p' | 'mobile-l' | 'tablet-p' | 'tablet-l' | 'pc'>('auto');

  const isExtraCategory = (c: Category | null) => 
    c === Category.EXTRA || c === Category.PECENI || c === Category.ZAVAROVANI;
  const [effectiveViewport, setEffectiveViewport] = useState<'mobile-p' | 'mobile-l' | 'tablet-p' | 'tablet-l' | 'pc'>('mobile-p');

  useEffect(() => {
    const updateViewport = () => {
      if (viewport !== 'auto') {
        setEffectiveViewport(viewport);
        return;
      }

      const width = window.innerWidth;
      if (width < 480) setEffectiveViewport('mobile-p');
      else if (width < 768) setEffectiveViewport('mobile-l');
      else if (width < 1024) setEffectiveViewport('tablet-p');
      else if (width < 1280) setEffectiveViewport('tablet-l');
      else setEffectiveViewport('pc');
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [viewport]);

  const getViewportWidth = (isNav = false) => {
    switch (effectiveViewport) {
      case 'mobile-p': return 'max-w-[412px]';
      case 'mobile-l': return 'max-w-[808px]';
      case 'tablet-p': return 'max-w-[840px]';
      case 'tablet-l': return 'max-w-[1120px]';
      case 'pc': return isNav ? 'max-w-6xl' : 'max-w-none px-4 md:px-8';
      default: return isNav ? 'max-w-6xl' : 'max-w-none px-4 md:px-8';
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    
    // Hash the input password using SHA-256
    const msgUint8 = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedInput = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashedInput === APP_PASSWORD_HASH) {
      setIsAuthenticated(true);
      localStorage.setItem('auth', 'true');
    } else {
      setError('Nesprávné heslo');
      setTimeout(() => setError(''), 2000);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (effectiveViewport !== 'pc' && isGalleryOpen) {
      setIsGalleryOpen(false);
      setSelectedGalleryRecipe(null);
    }
  }, [effectiveViewport, isGalleryOpen]);

  const getCategoryBg = (category: Category) => {
    switch (category) {
      case Category.SNIDANE: return 'bg-rose-200';
      case Category.OBED: return 'bg-blue-200';
      case Category.VECERE: return 'bg-emerald-200';
      case Category.PRESNIDAVKA: return 'bg-amber-200';
      case Category.EXTRA: return 'bg-purple-200';
      case Category.PECENI: return 'bg-orange-200';
      case Category.ZAVAROVANI: return 'bg-lime-200';
      default: return 'bg-slate-200';
    }
  };

  const allRecipes = [...recipes, ...recipesExtra]; 

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-blue-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-3xl bg-white shadow-xl border border-blue-100"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
              <img referrerPolicy="no-referrer" src="/icons/zamek.png" alt="Zámek" className="w-8 h-8 invert" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Rodinný Receptář</h1>
            <p className="text-slate-500 text-sm mt-1">Zadejte heslo pro vstup</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Heslo"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-center text-xl tracking-widest"
                autoFocus
              />
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-6 left-0 right-0 text-center text-rose-500 text-xs font-medium"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              Vstoupit
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Verze {APP_VERSION}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${getViewportWidth()} mx-auto min-h-screen bg-slate-50 pb-32 transition-all duration-300`}>
      <AnimatePresence mode="wait">
        {selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={() => setSelectedRecipe(null)}
            onNext={() => {
              const categoryRecipes = allRecipes.filter(r => r.category === selectedRecipe.category);
              const currentIndex = categoryRecipes.findIndex(r => r.id === selectedRecipe.id);
              const nextIndex = (currentIndex + 1) % categoryRecipes.length;
              setSelectedRecipe(categoryRecipes[nextIndex]);
            }}
            onPrev={() => {
              const categoryRecipes = allRecipes.filter(r => r.category === selectedRecipe.category);
              const currentIndex = categoryRecipes.findIndex(r => r.id === selectedRecipe.id);
              const prevIndex = (currentIndex - 1 + categoryRecipes.length) % categoryRecipes.length;
              setSelectedRecipe(categoryRecipes[prevIndex]);
            }}
            viewport={effectiveViewport}
            getCategoryBg={getCategoryBg}
          />
        ) : isGalleryOpen ? (
          <Gallery 
            category={galleryCategory}
            selectedRecipe={selectedGalleryRecipe}
            onSelectRecipe={setSelectedGalleryRecipe}
            onClose={() => { setIsGalleryOpen(false); setSelectedGalleryRecipe(null); }}
            viewport={effectiveViewport}
            getCategoryBg={getCategoryBg}
            setGalleryCategory={setGalleryCategory}
            isExtraCategory={isExtraCategory}
            galleryMode={galleryMode}
          />
        ) : !selectedCategory ? (
          <Dashboard 
            onSelectCategory={setSelectedCategory} 
            onLogout={() => {
              localStorage.removeItem('auth');
              setIsAuthenticated(false);
            }}
            onOpenGallery={() => {
              setGalleryMode('domaci');
              setGalleryCategory(Category.SNIDANE);
              setIsGalleryOpen(true);
            }}
            onOpenExtra={() => setSelectedCategory(Category.EXTRA)}
            onSelectRecipe={setSelectedRecipe}
            viewport={effectiveViewport}
          />
        ) : (
          <RecipeList 
            category={selectedCategory} 
            onBack={() => setSelectedCategory(null)}
            onSelectRecipe={setSelectedRecipe}
            viewport={effectiveViewport}
            getCategoryBg={getCategoryBg}
            onOpenGallery={() => {
              setGalleryMode('extra');
              setGalleryCategory(Category.EXTRA);
              setIsGalleryOpen(true);
            }}
            isExtraCategory={isExtraCategory}
          />
        )}
      </AnimatePresence>

      <ViewportSwitcher current={viewport} onChange={setViewport} />

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 glass border-t border-slate-200 px-1 py-3 flex justify-around items-center z-50 ${getViewportWidth(true)} mx-auto rounded-t-[24px] no-print`}>
        <NavButton active={!selectedCategory && !isGalleryOpen && !selectedRecipe} onClick={() => { 
          setSelectedCategory(null); 
          setSelectedRecipe(null); 
          setIsGalleryOpen(false); 
          setSelectedGalleryRecipe(null); 
        }}>
          <UtensilsCrossed className={`w-6 h-6 ${!selectedCategory && !isGalleryOpen && !selectedRecipe ? 'text-blue-600' : 'text-slate-400'}`} />
          <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${!selectedCategory && !isGalleryOpen && !selectedRecipe ? 'text-blue-700' : 'text-slate-500'}`}>Domů</span>
        </NavButton>

        {isGalleryOpen ? (
          galleryMode === 'extra' ? (
            <>
              <NavButton active={galleryCategory === Category.EXTRA} onClick={() => { 
                setGalleryCategory(Category.EXTRA);
                setSelectedGalleryRecipe(null);
              }}>
                <div className={`w-6 h-6 flex items-center justify-center font-black text-[10px] rounded-md ${galleryCategory === Category.EXTRA ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-500'}`}>EXT</div>
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.EXTRA ? 'text-purple-700' : 'text-slate-500'}`}>Extra</span>
              </NavButton>
              <NavButton active={galleryCategory === Category.PECENI} onClick={() => { 
                setGalleryCategory(Category.PECENI);
                setSelectedGalleryRecipe(null);
              }}>
                <div className={`w-6 h-6 flex items-center justify-center font-black text-[10px] rounded-md ${galleryCategory === Category.PECENI ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-500'}`}>PEC</div>
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.PECENI ? 'text-orange-700' : 'text-slate-500'}`}>Pečení</span>
              </NavButton>
              <NavButton active={galleryCategory === Category.ZAVAROVANI} onClick={() => { 
                setGalleryCategory(Category.ZAVAROVANI);
                setSelectedGalleryRecipe(null);
              }}>
                <div className={`w-6 h-6 flex items-center justify-center font-black text-[10px] rounded-md ${galleryCategory === Category.ZAVAROVANI ? 'bg-lime-600 text-white' : 'bg-slate-200 text-slate-500'}`}>ZAV</div>
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.ZAVAROVANI ? 'text-lime-700' : 'text-slate-500'}`}>Zavař.</span>
              </NavButton>
            </>
          ) : (
            <>
              <NavButton active={galleryCategory === Category.SNIDANE} onClick={() => { 
                setGalleryCategory(Category.SNIDANE);
                setSelectedGalleryRecipe(null);
              }}>
                <Sun className={`w-6 h-6 ${galleryCategory === Category.SNIDANE ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.SNIDANE ? 'text-blue-700' : 'text-slate-500'}`}>Snídaně</span>
              </NavButton>
              <NavButton active={galleryCategory === Category.OBED} onClick={() => { 
                setGalleryCategory(Category.OBED);
                setSelectedGalleryRecipe(null);
              }}>
                <Utensils className={`w-6 h-6 ${galleryCategory === Category.OBED ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.OBED ? 'text-blue-700' : 'text-slate-500'}`}>Oběd</span>
              </NavButton>
              <NavButton active={galleryCategory === Category.PRESNIDAVKA} onClick={() => { 
                setGalleryCategory(Category.PRESNIDAVKA);
                setSelectedGalleryRecipe(null);
              }}>
                <Scale className={`w-6 h-6 ${galleryCategory === Category.PRESNIDAVKA ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.PRESNIDAVKA ? 'text-blue-700' : 'text-slate-500'}`}>Přesníd.</span>
              </NavButton>
              <NavButton active={galleryCategory === Category.VECERE} onClick={() => { 
                setGalleryCategory(Category.VECERE);
                setSelectedGalleryRecipe(null);
              }}>
                <Moon className={`w-6 h-6 ${galleryCategory === Category.VECERE ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${galleryCategory === Category.VECERE ? 'text-blue-700' : 'text-slate-500'}`}>Večeře</span>
              </NavButton>
            </>
          )
        ) : isExtraCategory(selectedCategory) || (selectedRecipe && isExtraCategory(selectedRecipe.category)) ? (
          <>
            <NavButton active={selectedCategory === Category.EXTRA} onClick={() => { 
              setSelectedCategory(Category.EXTRA); 
              setSelectedRecipe(null); 
            }}>
              <div className={`w-6 h-6 flex items-center justify-center font-black text-[10px] rounded-md ${selectedCategory === Category.EXTRA ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-500'}`}>EXT</div>
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.EXTRA ? 'text-purple-700' : 'text-slate-500'}`}>Extra</span>
            </NavButton>
            <NavButton active={selectedCategory === Category.PECENI} onClick={() => { 
              setSelectedCategory(Category.PECENI); 
              setSelectedRecipe(null); 
            }}>
              <div className={`w-6 h-6 flex items-center justify-center font-black text-[10px] rounded-md ${selectedCategory === Category.PECENI ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-500'}`}>PEC</div>
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.PECENI ? 'text-orange-700' : 'text-slate-500'}`}>Pečení</span>
            </NavButton>
            <NavButton active={selectedCategory === Category.ZAVAROVANI} onClick={() => { 
              setSelectedCategory(Category.ZAVAROVANI); 
              setSelectedRecipe(null); 
            }}>
              <div className={`w-6 h-6 flex items-center justify-center font-black text-[10px] rounded-md ${selectedCategory === Category.ZAVAROVANI ? 'bg-lime-600 text-white' : 'bg-slate-200 text-slate-500'}`}>ZAV</div>
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.ZAVAROVANI ? 'text-lime-700' : 'text-slate-500'}`}>Zavař.</span>
            </NavButton>
          </>
        ) : (
          <>
            <NavButton active={selectedCategory === Category.SNIDANE} onClick={() => { 
              setSelectedCategory(Category.SNIDANE); 
              setSelectedRecipe(null); 
            }}>
              <Sun className={`w-6 h-6 ${selectedCategory === Category.SNIDANE ? 'text-blue-600' : 'text-slate-400'}`} />
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.SNIDANE ? 'text-blue-700' : 'text-slate-500'}`}>Snídaně</span>
            </NavButton>
            <NavButton active={selectedCategory === Category.OBED} onClick={() => { 
              setSelectedCategory(Category.OBED); 
              setSelectedRecipe(null); 
            }}>
              <Utensils className={`w-6 h-6 ${selectedCategory === Category.OBED ? 'text-blue-600' : 'text-slate-400'}`} />
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.OBED ? 'text-blue-700' : 'text-slate-500'}`}>Oběd</span>
            </NavButton>
            <NavButton active={selectedCategory === Category.PRESNIDAVKA} onClick={() => { 
              setSelectedCategory(Category.PRESNIDAVKA); 
              setSelectedRecipe(null); 
            }}>
              <Scale className={`w-6 h-6 ${selectedCategory === Category.PRESNIDAVKA ? 'text-blue-600' : 'text-slate-400'}`} />
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.PRESNIDAVKA ? 'text-blue-700' : 'text-slate-500'}`}>Přesníd.</span>
            </NavButton>
            <NavButton active={selectedCategory === Category.VECERE} onClick={() => { 
              setSelectedCategory(Category.VECERE); 
              setSelectedRecipe(null); 
            }}>
              <Moon className={`w-6 h-6 ${selectedCategory === Category.VECERE ? 'text-blue-600' : 'text-slate-400'}`} />
              <span className={`text-[12px] mt-1 font-black uppercase tracking-tight text-center w-full ${selectedCategory === Category.VECERE ? 'text-blue-700' : 'text-slate-500'}`}>Večeře</span>
            </NavButton>
          </>
        )}
      </nav>
    </div>
  );
}

function Dashboard({ onSelectCategory, onLogout, onOpenGallery, onOpenExtra, onSelectRecipe, viewport }: { onSelectCategory: (c: Category) => void, onLogout: () => void, onOpenGallery: () => void, onOpenExtra: () => void, onSelectRecipe: (r: Recipe) => void, viewport: string }) {
  const [searchQuery, setSearchQuery] = useState('');

  const isIngredientSearch = searchQuery.includes(';');
  
  const filteredRecipes = searchQuery.trim().length >= 1 
    ? (isIngredientSearch 
        ? searchByIngredients([...recipes, ...recipesExtra], searchQuery, null)
        : [...recipes, ...recipesExtra].filter(r => 
            r.id.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
            r.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
          )
      ).slice(0, 15)
    : [];

  // Auto-jump on exact ID match
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length >= 2) {
      const exactMatch = [...recipes, ...recipesExtra].find(r => r.id.toLowerCase() === query);
      if (exactMatch) {
        onSelectRecipe(exactMatch);
        setSearchQuery('');
      }
    }
  }, [searchQuery, onSelectRecipe]);

  const searchBar = (
    <div className={`relative flex-1 ${
      viewport === 'pc' ? 'max-w-md' : 
      viewport === 'mobile-l' ? 'w-3/4 mx-auto' : 
      viewport === 'tablet-l' ? 'w-2/3 mx-auto' : 
      'w-full mx-auto'
    }`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Hledat číslo nebo název..."
          className={`w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border outline-none transition-all text-base font-bold shadow-sm ${
            isIngredientSearch ? 'border-purple-500 focus:ring-4 focus:ring-purple-100' : 'border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
          }`}
        />
      </div>
      
      {isIngredientSearch && searchQuery.split(';')[1]?.trim().length > 0 && filteredRecipes.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-3xl shadow-2xl border border-purple-100 z-[60] text-center">
          <p className="text-purple-600 font-bold text-sm">Žádný recept neobsahuje všechny tyto suroviny. Zkuste ubrat ingredienci.</p>
        </div>
      )}
      
      {filteredRecipes.length > 0 && (
        <div className={`absolute top-full left-0 right-0 mt-2 p-3 bg-white rounded-3xl shadow-2xl border border-slate-100 z-[60] flex flex-col gap-2 overflow-y-auto custom-scrollbar ${
          viewport === 'mobile-p' || viewport === 'mobile-l' ? 'max-h-[300px]' : 'max-h-[540px]'
        }`}>
          {filteredRecipes.map(r => (
            <button
              key={r.id}
              onClick={() => {
                onSelectRecipe(r);
                setSearchQuery('');
              }}
              className="flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-2xl font-black text-sm border border-blue-100 active:scale-95 transition-all w-full text-left"
            >
              <span className="bg-blue-600 text-white px-2 py-1 rounded-lg text-[12px] shrink-0">{r.id}</span>
              <span className="text-[14px] truncate flex-1">{r.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className={viewport === 'mobile-p' || viewport === 'mobile-l' ? 'p-2' : 'p-4'}
    >
      <header className="flex justify-between items-center mb-4 gap-4">
        <div className="shrink-0">
          <h2 className="text-3xl font-bold text-slate-800">Ahoj! 👋</h2>
          <p className="text-slate-500 font-medium">Co budeme dnes vařit?</p>
        </div>

        {viewport === 'pc' && searchBar}

        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={onOpenExtra} 
            className="flex items-center gap-2 px-4 py-3 bg-rose-600 rounded-2xl shadow-lg shadow-rose-100 text-white active:bg-rose-700 transition-all active:scale-95"
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-black text-xs uppercase tracking-widest hidden sm:inline">EXTRA</span>
          </button>
          {viewport === 'pc' ? (
            <button 
              onClick={onOpenGallery} 
              className="flex p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-100 text-white active:bg-blue-700 transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex p-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-300 cursor-not-allowed">
              <ImageOff className="w-5 h-5 opacity-30" />
            </div>
          )}
          <button onClick={onLogout} className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-100 text-white active:bg-blue-700 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {viewport !== 'pc' && (
        <div className="mb-6">
          {searchBar}
        </div>
      )}

      <div className={`grid gap-4 mb-4 ${
        viewport === 'mobile-p' || viewport === 'mobile-l' || viewport === 'tablet-p'
        ? 'grid-cols-2' : 'grid-cols-4'
      }`}>
        <CategoryCard 
          title="Snídaně" 
          icon={<Sun className="w-8 h-8 text-blue-600" />} 
          color="bg-blue-50" 
          onClick={() => onSelectCategory(Category.SNIDANE)}
        />
        <CategoryCard 
          title="Obědy" 
          icon={<Utensils className="w-8 h-8 text-amber-600" />} 
          color="bg-amber-50" 
          onClick={() => onSelectCategory(Category.OBED)}
        />
        <CategoryCard 
          title="Přesnídávky" 
          icon={<Scale className="w-8 h-8 text-indigo-600" />} 
          color="bg-indigo-50" 
          onClick={() => onSelectCategory(Category.PRESNIDAVKA)}
        />
        <CategoryCard 
          title="Večeře" 
          icon={<Moon className="w-8 h-8 text-emerald-600" />} 
          color="bg-emerald-50" 
          onClick={() => onSelectCategory(Category.VECERE)}
        />
      </div>

      <div className={`grid gap-4 mb-4 ${viewport === 'tablet-l' || viewport === 'pc' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <div className="bg-blue-600 p-3 rounded-3xl shadow-lg shadow-blue-100 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-0.5">Měření a odhady</h3>
            <p className="text-blue-50 text-xs mb-2">Jak správně dávkovat bez váhy?</p>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-white/20 p-1.5 rounded-xl text-center border border-white/10 flex flex-col items-center">
                <div className="w-7 h-7 mb-0.5 flex items-center justify-center">
                  <img src={iconImages.moLzicka} alt="Lžička" className="w-5 h-5 object-contain opacity-100" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <span className="block text-[8px] font-black uppercase opacity-70 mb-0.5">Lžička</span>
                <span className="text-xs font-black">5 ml</span>
              </div>
              <div className="bg-white/20 p-1.5 rounded-xl text-center border border-white/10 flex flex-col items-center">
                <div className="w-7 h-7 mb-0.5 flex items-center justify-center">
                  <img src={iconImages.moLzice} alt="Lžíce" className="w-6 h-6 object-contain opacity-100" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <span className="block text-[8px] font-black uppercase opacity-70 mb-0.5">Lžíce</span>
                <span className="text-xs font-black">15 ml</span>
              </div>
              <div className="bg-white/20 p-1.5 rounded-xl text-center border border-white/10 flex flex-col items-center">
                <div className="w-7 h-7 mb-0.5 flex items-center justify-center">
                  <img src={iconImages.moSalek} alt="Šálek" className="w-6 h-6 object-contain opacity-100" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <span className="block text-[8px] font-black uppercase opacity-70 mb-0.5 leading-none">Šálek, kelímek</span>
                <span className="text-xs font-black">150 ml</span>
              </div>
              <div className="bg-white/20 p-1.5 rounded-xl text-center border border-white/10 flex flex-col items-center">
                <div className="w-7 h-7 mb-0.5 flex items-center justify-center">
                  <img src={iconImages.moSpetka} alt="Špetka" className="w-6 h-6 object-contain opacity-100" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <span className="block text-[8px] font-black uppercase opacity-70 mb-0.5">Špetka</span>
                <span className="text-xs font-black">~0.5g</span>
              </div>
              <div className="bg-white/20 p-1.5 rounded-xl text-center border border-white/10 flex flex-col items-center">
                <div className="w-7 h-7 mb-0.5 flex items-center justify-center">
                  <img src={iconImages.moHrnek} alt="Hrnek" className="w-6 h-6 object-contain opacity-100" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <span className="block text-[8px] font-black uppercase opacity-70 mb-0.5">Hrnek</span>
                <span className="text-xs font-black">250 ml</span>
              </div>
              <div className="bg-white/20 p-1.5 rounded-xl text-center border border-white/10 flex flex-col items-center">
                <div className="w-7 h-7 mb-0.5 flex items-center justify-center">
                  <img src={iconImages.moMiska} alt="Miska" className="w-6 h-6 object-contain opacity-100" referrerPolicy="no-referrer" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <span className="block text-[8px] font-black uppercase opacity-70 mb-0.5">Miska</span>
                <span className="text-xs font-black">450 ml</span>
              </div>
            </div>
            <p className="text-[10px] text-blue-100 mt-2 text-center font-bold italic">
              * Uvedené množství v alternativních jednotkách je pouze orientační.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-3 text-blue-600">
            <Scale className="w-6 h-6" />
            <h3 className="font-black text-xl">Naše poměry</h3>
          </div>
          <div className="space-y-1.5">
            <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
              <div>
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">Hlavní suroviny</span>
                <p className="text-[9px] text-slate-600 font-bold">Poměr váhy SYN vs MAMKA</p>
              </div>
              <span className="text-2xl font-black text-blue-600">1.8 : 1</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
              <div>
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">Zelenina</span>
                <p className="text-[9px] text-slate-600 font-bold">Větší porce pro SYN</p>
              </div>
              <span className="text-2xl font-black text-blue-600">1.2 : 1</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 italic leading-tight font-medium">
              * SYN má cca o 65% vyšší celkový energetický příjem než MAMKA.
            </p>
          </div>
        </div>
      </div>

      <div className={`grid gap-4 mb-4 ${viewport === 'tablet-l' || viewport === 'pc' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <ProfileCard 
          label="SYN" 
          color="blue"
          energy="9201 kJ / 2199 kcal"
          distribution={[
            { name: 'Snídaně', pct: 29, energy: '2668 kJ / 638 kcal', s: '65g', t: '23g', b: '43g' },
            { name: 'Oběd', pct: 35, energy: '3220 kJ / 770 kcal', s: '78g', t: '27g', b: '53g' },
            { name: 'Přesnídávka', pct: 12, energy: '1104 kJ / 264 kcal', s: '27g', t: '9g', b: '20g' },
            { name: 'Večeře', pct: 24, energy: '2208 kJ / 528 kcal', s: '50g', t: '14g', b: '49g' },
          ]}
          viewport={viewport}
        />
        <ProfileCard 
          label="MAMKA" 
          color="blue"
          energy="5561 kJ / 1329 kcal"
          distribution={[
            { name: 'Snídaně', pct: 26, energy: '1446 kJ / 346 kcal', s: '38g', t: '11g', b: '24g' },
            { name: 'Přesnídávka', pct: 11, energy: '612 kJ / 146 kcal', s: '14g', t: '5g', b: '11g' },
            { name: 'Oběd', pct: 32, energy: '1780 kJ / 425 kcal', s: '45g', t: '14g', b: '29g' },
            { name: 'Přesnídávka', pct: 11, energy: '612 kJ / 146 kcal', s: '14g', t: '5g', b: '11g' },
            { name: 'Večeře', pct: 20, energy: '1112 kJ / 266 kcal', s: '24g', t: '10g', b: '26g' },
          ]}
          viewport={viewport}
        />
      </div>
      
      <div className="mt-4 text-center pb-0">
        <p className="text-slate-600 text-[12px] uppercase tracking-widest font-black bg-slate-200/50 py-1 inline-block px-4 rounded-full">Verze {APP_VERSION}</p>
      </div>
    </motion.div>
  );
}

function CategoryCard({ title, icon, color, onClick }: { title: string, icon: ReactNode, color: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`${color} p-4 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all active:scale-95 shadow-sm border border-white/50`}
    >
      <div className="p-3 bg-white rounded-2xl shadow-sm">{icon}</div>
      <span className="font-black text-slate-700 text-xl uppercase tracking-tight">{title}</span>
    </button>
  );
}

function ProfileCard({ label, color, energy, distribution, viewport }: { label: string, color: string, energy: string, distribution: any[], viewport: string }) {
  const isBlue = color === 'blue';
  const accentColor = isBlue ? 'text-blue-600' : 'text-rose-500';
  const bgColor = isBlue ? 'bg-blue-50' : 'bg-rose-50';
  const borderColor = isBlue ? 'border-blue-100' : 'border-rose-100';

  const totalS = distribution.reduce((sum, item) => sum + parseInt(item.s || '0'), 0);
  const totalT = distribution.reduce((sum, item) => sum + parseInt(item.t || '0'), 0);
  const totalB = distribution.reduce((sum, item) => sum + parseInt(item.b || '0'), 0);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className={`p-3 border-b border-slate-100 ${bgColor}/30`}>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
          <div className="flex-1 space-y-1.5">
            <h3 className={`text-2xl font-black ${accentColor} leading-none`}>{label}</h3>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-bold uppercase text-[10px] leading-none">Příjem:</span>
              <span className="font-black text-slate-800 text-sm leading-tight">{energy}</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col bg-white/60 p-2 rounded-xl border border-slate-100 min-w-[140px]">
            <span className="text-slate-500 font-bold uppercase text-[10px] leading-none mb-1.5">Rozdělení živin:</span>
            <div className="space-y-0.5 text-[11px] font-black text-slate-800 uppercase tracking-tight">
              <div className="flex justify-between gap-3 border-b border-slate-100/50 pb-0.5"><span>Sacharidy:</span><span className={accentColor}>40%</span></div>
              <div className="flex justify-between gap-3 border-b border-slate-100/50 py-0.5"><span>Tuky:</span><span className={accentColor}>30%</span></div>
              <div className="flex justify-between gap-3 pt-0.5"><span>Bílkoviny:</span><span className={accentColor}>30%</span></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-1">
        <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">Rozdělení energie do dne</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] border-collapse">
            <thead>
              <tr className="text-slate-400 border-b border-slate-100">
                <th className="text-left py-1.5 px-1 font-black uppercase">Porce</th>
                <th className="text-center py-1.5 px-1 font-black uppercase">%</th>
                <th className="text-center py-1.5 px-1 font-black uppercase">Energie</th>
                <th className="text-center py-1.5 px-0.5 font-black uppercase">{viewport === 'mobile-p' ? 'Sach.' : 'Sacharidy'}</th>
                <th className="text-center py-1.5 px-0.5 font-black uppercase">Tuky</th>
                <th className="text-center py-1.5 px-0.5 font-black uppercase">{viewport === 'mobile-p' ? 'Bílk.' : 'Bílkoviny'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {distribution.map((item, idx) => (
                <tr key={idx} className="text-slate-700">
                  <td className={`py-1.5 px-1 font-bold ${accentColor}`}>{item.name}</td>
                  <td className="py-1.5 px-1 text-center font-medium">{item.pct}%</td>
                  <td className="py-1.5 px-1 text-center font-bold whitespace-nowrap">{item.energy}</td>
                  <td className="py-1.5 px-0.5 text-center">{item.s}</td>
                  <td className="py-1.5 px-0.5 text-center">{item.t}</td>
                  <td className="py-1.5 px-0.5 text-center">{item.b}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-black">
                <td className="py-1.5 px-1 text-blue-600 uppercase">Celkem</td>
                <td className="py-1.5 px-1 text-center">100%</td>
                <td className="py-1.5 px-1 text-center">{energy}</td>
                <td className="py-1.5 px-0.5 text-center">{totalS}g</td>
                <td className="py-1.5 px-0.5 text-center">{totalT}g</td>
                <td className="py-1.5 px-0.5 text-center">{totalB}g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RecipeList({ category, onBack, onSelectRecipe, viewport, getCategoryBg, onOpenGallery, isExtraCategory }: { category: Category, onBack: () => void, onSelectRecipe: (r: Recipe) => void, viewport: string, getCategoryBg: (c: Category) => string, onOpenGallery: () => void, isExtraCategory: (c: Category | null) => boolean }) {
  const [searchQuery, setSearchQuery] = useState('');
  const isIngredientSearch = searchQuery.includes(';');
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const sortRecipes = (a: Recipe, b: Recipe) => {
    const aFav = favorites.includes(a.id);
    const bFav = favorites.includes(b.id);
    
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    
    // Sort by ID (prefix then numeric part then suffix)
    const aMatch = a.id.match(/^([a-zA-Z]*)(\d+)([a-z]*)$/);
    const bMatch = b.id.match(/^([a-zA-Z]*)(\d+)([a-z]*)$/);
    
    if (aMatch && bMatch) {
      if (aMatch[1] !== bMatch[1]) return aMatch[1].toLowerCase().localeCompare(bMatch[1].toLowerCase());
      const aNum = parseInt(aMatch[2]);
      const bNum = parseInt(bMatch[2]);
      if (aNum !== bNum) return aNum - bNum;
      return aMatch[3].localeCompare(bMatch[3]);
    }
    
    return a.id.localeCompare(b.id);
  };

  const filteredRecipes = (isIngredientSearch
    ? searchByIngredients([...recipes, ...recipesExtra], searchQuery, category)
    : [...recipes, ...recipesExtra]
        .filter(r => r.category === category)
        .filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
  ).sort(sortRecipes);

  const getGridCols = () => {
    switch (viewport) {
      case 'mobile-p': return 'grid-cols-1';
      case 'mobile-l': return 'grid-cols-2';
      case 'tablet-p': return 'grid-cols-2';
      case 'tablet-l': return 'grid-cols-3';
      case 'pc': return 'grid-cols-4';
      default: return 'grid-cols-1';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
      className={`${viewport === 'mobile-p' || viewport === 'mobile-l' ? 'p-2' : 'p-4 md:p-8'} ${viewport === 'pc' ? 'max-w-none px-6 md:px-12 ml-0' : 'max-w-6xl mx-auto'}`}
    >
      <div className={`flex gap-4 mb-6 ${viewport === 'mobile-p' ? 'flex-col' : 'flex-col md:flex-row md:items-center'}`}>
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="flex items-center gap-2 text-white font-black bg-blue-600 px-4 py-2.5 rounded-2xl active:scale-95 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            Zpět
          </button>
          <h2 className="text-2xl font-bold text-slate-800">{category}</h2>
        </div>
        
        <div className={`flex items-center gap-2 ${viewport === 'mobile-p' ? 'w-full' : 'flex-1'}`}>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hledat recept..."
              className={`w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white border outline-none transition-all text-sm font-medium shadow-sm ${
                isIngredientSearch ? 'border-purple-500 focus:ring-2 focus:ring-purple-100' : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
              }`}
            />
          </div>
          {category === Category.EXTRA && viewport === 'pc' && (
            <button 
              onClick={onOpenGallery}
              className="p-3 bg-rose-600 rounded-2xl text-white shadow-lg shadow-rose-100 active:bg-rose-700 transition-all active:scale-95 shrink-0"
            >
              <ImageIcon className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {isIngredientSearch && searchQuery.split(';')[1]?.trim().length > 0 && filteredRecipes.length === 0 && (
        <div className="mb-6 p-4 bg-white rounded-3xl shadow-sm border border-purple-100 text-center">
          <p className="text-purple-600 font-bold text-sm">Žádný recept neobsahuje všechny tyto suroviny. Zkuste ubrat ingredienci.</p>
        </div>
      )}

      <div className={`grid ${getGridCols()} gap-3`}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div 
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe)}
              className="w-full bg-white p-2.5 rounded-2xl flex items-stretch gap-3 shadow-sm border border-slate-100 transition-all active:scale-[0.98] relative group cursor-pointer"
            >
              <div className={`relative w-20 h-20 rounded-xl overflow-hidden shadow-inner flex items-center justify-center shrink-0 border-2 border-slate-100 ${getCategoryBg(recipe.category)}`}>
                <RecipeImage 
                  id={recipe.id}
                  category={recipe.category}
                  alt={recipe.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                <h3 className="font-black text-slate-800 leading-tight text-sm line-clamp-3">
                  {recipe.title}
                </h3>
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="px-2 py-0.5 text-slate-900 text-[15px] font-black rounded-lg shrink-0">
                    {recipe.id}
                  </span>
                  <div className="flex-1 flex items-center justify-center gap-2 text-[10px] text-slate-600 font-black uppercase tracking-wider whitespace-nowrap overflow-hidden">
                    {recipe.nutrition ? (
                      recipe.nutrition.extra ? (
                        <span className="flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md shrink-0">
                          {recipe.nutrition.extra.values.kj} KJ / {recipe.nutrition.extra.unit}
                        </span>
                      ) : (
                        <>
                          <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md shrink-0">
                            {recipe.nutrition.syn?.kj} KJ
                          </span>
                          <span className="text-slate-300">|</span>
                          <span className="flex items-center gap-1 bg-rose-50 text-rose-500 px-2 py-0.5 rounded-md shrink-0">
                            {recipe.nutrition.mamka?.kj} KJ
                          </span>
                        </>
                      )
                    ) : (
                      <span className="text-slate-300 italic">Bez nutričních hodnot</span>
                    )}
                  </div>
                  <button 
                    onClick={(e) => toggleFavorite(e, recipe.id)}
                    className={`p-1.5 rounded-lg transition-all active:scale-90 z-20 shrink-0 ${favorites.includes(recipe.id) ? 'text-amber-500 bg-amber-50' : 'text-slate-300 hover:text-slate-400'}`}
                  >
                    <Star className={`w-4 h-4 ${favorites.includes(recipe.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <img referrerPolicy="no-referrer" src="/icons/presnidavka.png" alt="Prázdné" className="w-12 h-12 mx-auto opacity-10 mb-4" />
            <p className="text-slate-400">Žádné recepty nenalezeny.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function formatFractions(text: string | undefined) {
  if (!text) return '';
  return text
    .replace(/½/g, '1/2')
    .replace(/⅓/g, '1/3')
    .replace(/¼/g, '1/4')
    .replace(/⅔/g, '2/3')
    .replace(/¾/g, '3/4');
}

function renderFormattedText(text: string | undefined) {
  if (!text) return null;
  
  // First, normalize fractions to standard text
  let normalized = text
    .replace(/½/g, '1/2')
    .replace(/⅓/g, '1/3')
    .replace(/¼/g, '1/4')
    .replace(/⅔/g, '2/3')
    .replace(/¾/g, '3/4');

  // Add double spaces between numbers and fractions (e.g., "1 1/2" -> "1  1/2")
  normalized = normalized.replace(/(\d+)\s*(\d\/\d)/g, '$1  $2');

  // Split by fractions to style them differently
  const parts = normalized.split(/(\d\/\d)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (/^\d\/\d$/.test(part)) {
          return <span key={i} className="text-[12px]">{part}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function formatNum(num: number | string | undefined): string {
  if (num === undefined || num === null) return '0';
  const n = typeof num === 'string' ? parseFloat(num.replace(',', '.')) : num;
  if (isNaN(n)) return String(num);
  return n.toLocaleString('cs-CZ', { maximumFractionDigits: 2 }).replace(/\s/g, '');
}

function RecipeDetail({ recipe, onBack, onNext, onPrev, viewport, getCategoryBg }: { recipe: Recipe, onBack: () => void, onNext: () => void, onPrev: () => void, viewport: string, getCategoryBg: (c: Category) => string }) {
  const isMobileP = viewport === 'mobile-p';
  
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `${recipe.id} - ${recipe.title.toUpperCase()}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  };
  // Gap logic: 80% smaller for mobile/tablet (gap-8 -> gap-2), 60% smaller for PC (gap-8 -> gap-3)
  const mainGap = isMobileP || viewport === 'mobile-l' || viewport.startsWith('tablet') ? 'gap-2' : 'gap-3';
  const sectionGap = isMobileP || viewport === 'mobile-l' || viewport.startsWith('tablet') ? 'gap-2' : 'gap-3';
  const instructionGap = isMobileP || viewport === 'mobile-l' || viewport.startsWith('tablet') ? 'space-y-2' : 'space-y-3';

  const hasExtraIngredients = recipe.ingredients.some(ing => ing.extra !== undefined);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      className="bg-white min-h-screen pb-24 print-container"
    >
      {/* SCREEN ONLY VERSION */}
      <div className="no-print">
        <div className={`relative w-full overflow-hidden ${getCategoryBg(recipe.category)}`}>
          <RecipeImage 
            id={recipe.id}
            category={recipe.category}
            alt={recipe.title}
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-3 z-50">
            <button 
              onClick={onBack} 
              className={`${isMobileP ? 'p-2.5' : 'p-3'} bg-blue-600 rounded-2xl text-white shadow-2xl active:scale-90 transition-all border-2 border-white/50`}
            >
              <ArrowLeft className={`${isMobileP ? 'w-5 h-5' : 'w-6 h-6'} stroke-[4]`} />
            </button>
            <div className="flex items-center gap-2">
              <div className={`bg-white/90 backdrop-blur-md ${isMobileP ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-2xl shadow-2xl font-black text-blue-600 border-2 border-blue-600/20`}>
                {recipe.id}
              </div>
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/30">
                {recipe.category}
              </span>
            </div>
          </div>
          
          {/* Navigation and Print buttons top right */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-2xl p-1 shadow-2xl border-2 border-white/50">
              <button 
                onClick={onPrev}
                className={`${isMobileP ? 'p-1.5' : 'p-2'} text-blue-600 hover:bg-blue-50 rounded-xl transition-all active:scale-90`}
                title="Předchozí recept"
              >
                <ChevronLeft className={`${isMobileP ? 'w-5 h-5' : 'w-6 h-6'} stroke-[3]`} />
              </button>
              <div className="w-px h-4 bg-slate-200 mx-0.5" />
              <button 
                onClick={onNext}
                className={`${isMobileP ? 'p-1.5' : 'p-2'} text-blue-600 hover:bg-blue-50 rounded-xl transition-all active:scale-90`}
                title="Následující recept"
              >
                <ChevronRight className={`${isMobileP ? 'w-5 h-5' : 'w-6 h-6'} stroke-[3]`} />
              </button>
            </div>

            <button 
              onClick={handlePrint}
              className={`${isMobileP ? 'p-2.5' : 'p-3'} bg-white/90 backdrop-blur-md rounded-2xl text-purple-500 shadow-2xl active:scale-90 transition-all border-2 border-purple-100 hover:text-purple-600`}
              title="Vytisknout recept"
            >
              <Printer className={`${isMobileP ? 'w-5 h-5' : 'w-6 h-6'} stroke-[2.5]`} />
            </button>
          </div>

          <div className={`absolute left-6 right-6 ${viewport === 'pc' ? 'bottom-20' : isMobileP ? 'bottom-6' : 'bottom-12'}`}>
            <h2 className={`font-black text-white leading-tight drop-shadow-lg ${viewport === 'pc' ? 'text-6xl' : isMobileP ? 'text-xl' : 'text-2xl md:text-4xl'}`}>
              {recipe.title}
            </h2>
          </div>
        </div>

        <div className={`${isMobileP || viewport === 'mobile-l' ? '-mt-4' : '-mt-8'} bg-white rounded-[40px] relative z-10 shadow-2xl ${
          viewport === 'pc' ? 'max-w-none px-12 pt-10 pb-10 ml-0' : isMobileP || viewport === 'mobile-l' ? 'max-w-6xl mx-auto px-1.5 pt-4 pb-4' : 'max-w-6xl mx-auto px-4 md:px-8 pt-4 pb-4'
        }`}>
          <div className={`grid grid-cols-1 ${mainGap}`}>
            {/* Nutrition Row */}
            {recipe.nutrition && (
              <div className={`flex bg-slate-50 rounded-3xl border border-slate-100 shadow-inner ${viewport === 'pc' ? 'p-8 justify-center gap-20' : 'p-4 justify-around'}`}>
                {recipe.nutrition.extra ? (
                  <div className="text-center">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      Nutriční hodnoty (za {recipe.nutrition.extra.unit})
                    </span>
                    <div className={`flex items-baseline justify-center ${viewport === 'pc' ? 'gap-1' : 'gap-1'}`}>
                      <span className={`font-black text-slate-800 ${viewport === 'pc' ? 'text-5xl' : isMobileP ? 'text-xl' : 'text-4xl'}`}>
                        {formatNum(recipe.nutrition.extra.values.kj)}
                      </span>
                      <span className={`${isMobileP ? 'text-[10px]' : 'text-sm'} font-bold text-slate-400 uppercase`}>KJ</span>
                      <span className={`text-slate-300 ${viewport === 'pc' ? 'mx-1' : 'mx-0.5'}`}>/</span>
                      <span className={`font-black text-slate-600 ${viewport === 'pc' ? 'text-2xl' : isMobileP ? 'text-xs' : 'text-xl'}`}>
                        {formatNum(recipe.nutrition.extra.values.kcal)}
                      </span>
                      <span className={`${isMobileP ? 'text-[10px]' : 'text-sm'} font-bold text-slate-400 uppercase`}>KCAL</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-center">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        SYN{recipe.nutrition.originSyn === 'X' ? '*' : ''}
                      </span>
                      <div className={`flex items-baseline justify-center ${viewport === 'pc' ? 'gap-1' : 'gap-1'}`}>
                        <span className={`font-black text-blue-600 ${viewport === 'pc' ? 'text-5xl' : isMobileP ? 'text-xl' : 'text-4xl'}`}>{formatNum(recipe.nutrition.syn?.kj)}</span>
                        <span className={`${isMobileP ? 'text-[10px]' : 'text-sm'} font-bold text-slate-400 uppercase`}>KJ</span>
                        <span className={`text-slate-300 ${viewport === 'pc' ? 'mx-1' : 'mx-0.5'}`}>/</span>
                        <span className={`font-black text-slate-600 ${viewport === 'pc' ? 'text-2xl' : isMobileP ? 'text-xs' : 'text-xl'}`}>{formatNum(recipe.nutrition.syn?.kcal)}</span>
                        <span className={`${isMobileP ? 'text-[10px]' : 'text-sm'} font-bold text-slate-400 uppercase`}>KCAL</span>
                      </div>
                    </div>
                    <div className="w-px h-10 bg-slate-200 self-center" />
                    <div className="text-center">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        MAMKA{recipe.nutrition.originMamka === 'X' ? '*' : ''}
                      </span>
                      <div className={`flex items-baseline justify-center ${viewport === 'pc' ? 'gap-1' : 'gap-1'}`}>
                        <span className={`font-black text-rose-500 ${viewport === 'pc' ? 'text-5xl' : isMobileP ? 'text-xl' : 'text-4xl'}`}>{formatNum(recipe.nutrition.mamka?.kj)}</span>
                        <span className={`${isMobileP ? 'text-[10px]' : 'text-sm'} font-bold text-slate-400 uppercase`}>KJ</span>
                        <span className={`text-slate-300 ${viewport === 'pc' ? 'mx-1' : 'mx-0.5'}`}>/</span>
                        <span className={`font-black text-rose-600 ${viewport === 'pc' ? 'text-2xl' : isMobileP ? 'text-xs' : 'text-xl'}`}>{formatNum(recipe.nutrition.mamka?.kcal)}</span>
                        <span className={`${isMobileP ? 'text-[10px]' : 'text-sm'} font-bold text-slate-400 uppercase`}>KCAL</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className={`grid ${sectionGap} ${
              viewport === 'pc' ? 'grid-cols-2' : 
              viewport === 'tablet-l' ? 'grid-cols-[1fr_1.25fr]' : 
              'grid-cols-1'
            }`}>
              {/* Ingredients */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-lg text-slate-800 uppercase tracking-tight">Ingredience</h3>
                </div>
                <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-inner">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/50 border-b border-slate-200">
                        <th className={`py-3 ${isMobileP ? 'px-2' : 'px-4'} text-[10px] font-black text-slate-400 uppercase tracking-widest`}>Surovina</th>
                        {hasExtraIngredients ? (
                          <th className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[10px] font-black text-blue-600 uppercase tracking-widest text-center`}>EXTRA</th>
                        ) : (
                          <>
                            <th className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[10px] font-black text-blue-600 uppercase tracking-widest text-center`}>SYN</th>
                            <th className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[10px] font-black text-rose-500 uppercase tracking-widest text-center`}>MAM</th>
                            <th className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[10px] font-black text-slate-800 uppercase tracking-widest text-center`}>{isMobileP ? 'CELK' : 'Celkem'}</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {recipe.ingredients.map((ing, idx) => (
                        <Fragment key={idx}>
                          <tr className="hover:bg-white/50 transition-colors">
                            <td className={`py-3 ${isMobileP ? 'px-2' : 'px-4'}`}>
                              <span className="block font-bold text-slate-700 text-[15.5px] leading-tight">{ing.name}</span>
                              {ing.note && (
                                <span className="block text-[13px] text-slate-600 font-medium mt-0.5">{renderFormattedText(ing.note)}</span>
                              )}
                            </td>
                            {hasExtraIngredients ? (
                              <td className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[15.5px] font-black text-blue-600 text-center bg-slate-100/30 whitespace-nowrap`}>
                                {formatNum(ing.extra)} <span className="text-[9px] font-bold text-slate-400 uppercase">{ing.unit}</span>
                              </td>
                            ) : (
                              <>
                                <td className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[15.5px] font-black text-blue-600 text-center`}>{formatNum(ing.syn)}</td>
                                <td className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[15.5px] font-black text-rose-500 text-center`}>{formatNum(ing.mamka)}</td>
                                <td className={`py-3 ${isMobileP ? 'px-1' : 'px-2'} text-[15.5px] font-black text-slate-800 text-center bg-slate-100/30 whitespace-nowrap`}>
                                  {formatNum((ing.syn || 0) + (ing.mamka || 0))} <span className="text-[9px] font-bold text-slate-400 uppercase">{ing.unit}</span>
                                </td>
                              </>
                            )}
                          </tr>
                          {ing.alternatives && (
                            <tr className="bg-slate-50/30 border-b border-slate-100/50">
                              <td colSpan={hasExtraIngredients ? 2 : 4} className={`pb-3 pt-0 ${isMobileP ? 'px-2' : 'px-4'}`}>
                                <div className="flex items-center gap-2">
                                  <span className="text-[11px] font-black text-blue-600 uppercase bg-blue-50 px-1.5 py-0.5 rounded shrink-0 tracking-wider">Náhrada</span>
                                  <span className="text-[13px] text-slate-700 font-medium leading-tight">{formatFractions(ing.alternatives)}</span>
                                </div>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Instructions */}
              <div className={instructionGap}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                      <UtensilsCrossed className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-lg text-slate-800 uppercase tracking-tight">Postup přípravy</h3>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
                    <p className="text-slate-600 leading-relaxed font-medium whitespace-pre-line text-[17.5px]">{recipe.instructions}</p>
                  </div>
                </div>

                {recipe.nutrition && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-slate-100 rounded-xl text-slate-600">
                        <Scale className="w-5 h-5" />
                      </div>
                      <h3 className="font-black text-lg text-slate-800 uppercase tracking-tight">Makroživiny</h3>
                    </div>
                    <div className={`grid gap-4 ${viewport === 'mobile-p' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                      {recipe.nutrition.extra ? (
                        <NutritionBox 
                          label={`Hodnoty (za ${recipe.nutrition.extra.unit})`} 
                          data={recipe.nutrition.extra.values} 
                          color="border-slate-100 bg-slate-50/50" 
                          viewport={viewport} 
                        />
                      ) : (
                        <>
                          <NutritionBox label="SYN" data={recipe.nutrition.syn} color="border-blue-100 bg-blue-50/50" viewport={viewport} origin={recipe.nutrition.originSyn} />
                          <NutritionBox label="MAMKA" data={recipe.nutrition.mamka} color="border-rose-100 bg-rose-50/50" viewport={viewport} origin={recipe.nutrition.originMamka} />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRINT ONLY VERSION - Ultra Compact */}
      <div className="hidden print-only p-4 text-black">
        {/* Header */}
        <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-black text-lg border-2 border-black px-2 py-0.5 rounded-lg">{recipe.id}</span>
              <span className="font-black text-xs uppercase tracking-widest bg-slate-100 px-2 py-1 rounded border border-slate-300">{recipe.category}</span>
            </div>
            <h1 className="text-2xl font-black leading-tight uppercase">{recipe.title}</h1>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rodinný Receptář</span>
          </div>
        </div>

        {/* Nutrition Summary Row */}
        {recipe.nutrition && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4">
            {recipe.nutrition.extra ? (
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 uppercase text-[10px] font-black">HODNOTY ({recipe.nutrition.extra.unit}):</span>
                  <span className="font-black">{formatNum(recipe.nutrition.extra.values.kj)} KJ / {formatNum(recipe.nutrition.extra.values.kcal)} KCAL</span>
                </div>
                <div className="border-l border-slate-300 pl-4 w-[70%]">
                  <table className="w-full text-[11px] font-bold border-none">
                    <tbody>
                      <tr>
                        <td className="p-0 border-none w-1/3 text-left">Bílkoviny: {formatNum(recipe.nutrition.extra.values.p)}g</td>
                        <td className="p-0 border-none w-1/3 text-left">Sacharidy: {formatNum(recipe.nutrition.extra.values.s)}g</td>
                        <td className="p-0 border-none w-1/3 text-right">Tuky: {formatNum(recipe.nutrition.extra.values.t)}g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 uppercase text-[10px] font-black w-10">SYN:</span>
                    <span className="font-black">{formatNum(recipe.nutrition.syn?.kj)} KJ / {formatNum(recipe.nutrition.syn?.kcal)} KCAL</span>
                  </div>
                  <div className="border-l border-slate-300 pl-4 w-[70%]">
                    <table className="w-full text-[11px] font-bold border-none">
                      <tbody>
                        <tr>
                          <td className="p-0 border-none w-1/3 text-left">Bílkoviny: {formatNum(recipe.nutrition.syn?.p)}g</td>
                          <td className="p-0 border-none w-1/3 text-left">Sacharidy: {formatNum(recipe.nutrition.syn?.s)}g</td>
                          <td className="p-0 border-none w-1/3 text-right">Tuky: {formatNum(recipe.nutrition.syn?.t)}g</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="h-px bg-slate-200 mx-2" />
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-rose-500 uppercase text-[10px] font-black w-10">MAMKA:</span>
                    <span className="font-black">{formatNum(recipe.nutrition.mamka?.kj)} KJ / {formatNum(recipe.nutrition.mamka?.kcal)} KCAL</span>
                  </div>
                  <div className="border-l border-slate-300 pl-4 w-[70%]">
                    <table className="w-full text-[11px] font-bold border-none">
                      <tbody>
                        <tr>
                          <td className="p-0 border-none w-1/3 text-left">Bílkoviny: {formatNum(recipe.nutrition.mamka?.p)}g</td>
                          <td className="p-0 border-none w-1/3 text-left">Sacharidy: {formatNum(recipe.nutrition.mamka?.s)}g</td>
                          <td className="p-0 border-none w-1/3 text-right">Tuky: {formatNum(recipe.nutrition.mamka?.t)}g</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Ingredients Table */}
        <div className="mb-4">
          <h3 className="font-black text-xs uppercase tracking-widest mb-2 border-l-4 border-blue-600 pl-2">Ingredience</h3>
          <table className="w-full text-xs border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-1 text-left">Surovina</th>
                {hasExtraIngredients ? (
                  <th className="border border-slate-200 p-1 text-center w-24">EXTRA</th>
                ) : (
                  <>
                    <th className="border border-slate-200 p-1 text-center w-16">SYN</th>
                    <th className="border border-slate-200 p-1 text-center w-16">MAM</th>
                    <th className="border border-slate-200 p-1 text-center w-20">CELKEM</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.map((ing, idx) => (
                <Fragment key={idx}>
                  <tr>
                    <td className="border border-slate-200 p-1 font-bold">{ing.name} {ing.note && <span className="font-normal text-slate-500 italic">({renderFormattedText(ing.note)})</span>}</td>
                    {hasExtraIngredients ? (
                      <td className="border border-slate-200 p-1 text-center font-black">{formatNum(ing.extra)} {ing.unit}</td>
                    ) : (
                      <>
                        <td className="border border-slate-200 p-1 text-center font-black">{formatNum(ing.syn)}</td>
                        <td className="border border-slate-200 p-1 text-center font-black">{formatNum(ing.mamka)}</td>
                        <td className="border border-slate-200 p-1 text-center font-black bg-slate-50">{formatNum((ing.syn || 0) + (ing.mamka || 0))} {ing.unit}</td>
                      </>
                    )}
                  </tr>
                  {ing.alternatives && (
                    <tr>
                      <td colSpan={hasExtraIngredients ? 2 : 4} className="border border-slate-200 p-1 text-[10px] bg-blue-50/30">
                        <span className="font-black text-blue-600 mr-2">NÁHRADA:</span> {formatFractions(ing.alternatives)}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="break-inside-avoid">
          <h3 className="font-black text-xs uppercase tracking-widest mb-2 border-l-4 border-amber-500 pl-2">Postup přípravy</h3>
          <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm leading-relaxed whitespace-pre-line">
            {recipe.instructions}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NutritionBox({ label, data, color, viewport, origin }: { label: string, data: any, color: string, viewport: string, origin?: string }) {
  if (!data) return null;
  return (
    <div className={`p-5 rounded-[32px] border ${color}`}>
      <h4 className={`font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2 ${label === 'SYN' ? 'text-blue-600' : 'text-rose-500'}`}>
        <div className={`w-2 h-2 rounded-full ${label === 'SYN' ? 'bg-blue-600' : 'bg-rose-500'}`} /> {label}{origin === 'X' ? '*' : ''}
      </h4>
      <div className={`grid grid-cols-3 ${viewport === 'tablet-l' ? 'gap-4' : 'gap-2'}`}>
        <div className="text-center">
          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Bílkoviny</span>
          <span className="text-lg font-black text-slate-800">{formatNum(data.p)}g</span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Sacharidy</span>
          <span className="text-lg font-black text-slate-800">{formatNum(data.s)}g</span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tuky</span>
          <span className="text-lg font-black text-slate-800">{formatNum(data.t)}g</span>
        </div>
      </div>
    </div>
  );
}

function NavButton({ children, active, onClick }: { children: ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center transition-all duration-300 w-full ${active ? 'text-blue-600 scale-105' : 'text-slate-400'}`}
    >
      <div className={`p-1.5 rounded-xl transition-colors flex flex-col items-center justify-center ${active ? 'bg-blue-50' : 'bg-transparent'}`}>
        {children}
      </div>
    </button>
  );
}

function ViewportSwitcher({ current, onChange }: { current: any, onChange: (v: any) => void }) {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg z-[60] scale-75 md:scale-100 no-print">
      <button onClick={() => onChange('mobile-p')} className={`p-1.5 rounded-lg transition-colors ${current === 'mobile-p' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        <Smartphone className="w-4 h-4" />
      </button>
      <button onClick={() => onChange('mobile-l')} className={`p-1.5 rounded-lg transition-colors ${current === 'mobile-l' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        <Smartphone className="w-4 h-4 rotate-90" />
      </button>
      <button onClick={() => onChange('tablet-p')} className={`p-1.5 rounded-lg transition-colors ${current === 'tablet-p' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        <Tablet className="w-4 h-4" />
      </button>
      <button onClick={() => onChange('tablet-l')} className={`p-1.5 rounded-lg transition-colors ${current === 'tablet-l' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        <Tablet className="w-4 h-4 rotate-90" />
      </button>
      <button onClick={() => onChange('pc')} className={`p-1.5 rounded-lg transition-colors ${current === 'pc' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        <Monitor className="w-4 h-4" />
      </button>
      <div className="w-px h-4 bg-slate-200 mx-1" />
      <button onClick={() => onChange('auto')} className={`text-[10px] font-black px-2 py-1 rounded-lg transition-colors ${current === 'auto' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        AUTO
      </button>
    </div>
  );
}

function Gallery({ category, selectedRecipe, onSelectRecipe, onClose, viewport, getCategoryBg, setGalleryCategory, isExtraCategory, galleryMode }: { 
  category: Category, 
  selectedRecipe: Recipe | null, 
  onSelectRecipe: (r: Recipe | null) => void, 
  onClose: () => void,
  viewport: string,
  getCategoryBg: (c: Category) => string,
  setGalleryCategory: (c: Category) => void,
  isExtraCategory: (c: Category | null) => boolean,
  galleryMode: 'domaci' | 'extra'
}) {
  const sortRecipes = (a: Recipe, b: Recipe) => {
    // Sort by ID (prefix then numeric part then suffix)
    const aMatch = a.id.match(/^([a-zA-Z]*)(\d+)([a-z]*)$/);
    const bMatch = b.id.match(/^([a-zA-Z]*)(\d+)([a-z]*)$/);
    
    if (aMatch && bMatch) {
      if (aMatch[1] !== bMatch[1]) return aMatch[1].toLowerCase().localeCompare(bMatch[1].toLowerCase());
      const aNum = parseInt(aMatch[2]);
      const bNum = parseInt(bMatch[2]);
      if (aNum !== bNum) return aNum - bNum;
      return aMatch[3].localeCompare(bMatch[3]);
    }
    
    return a.id.localeCompare(b.id);
  };

  const filteredRecipes = [...recipes, ...recipesExtra]
    .filter(r => r.category === category)
    .sort(sortRecipes);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col pb-32"
    >
      <header className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
        <div>
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
            {galleryMode === 'extra' ? 'Extra Galerie' : 'Domácí Galerie'} - {category}
          </h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Přehled obrázků receptů</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onClose}
            className={`p-3 ${galleryMode === 'extra' ? 'bg-rose-600 shadow-rose-100 active:bg-rose-700' : 'bg-blue-600 shadow-blue-100 active:bg-blue-700'} rounded-2xl text-white shadow-lg transition-colors`}
          >
            <ArrowLeft className="w-6 h-6 stroke-[3]" />
          </button>
        </div>
      </header>

      <div className="flex-1 p-6">
        {!selectedRecipe ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="flex flex-col gap-3">
                <div className="text-center">
                  <span className={`text-5xl font-black ${galleryMode === 'extra' ? 'text-rose-600' : 'text-blue-600'} block leading-none`}>{recipe.id}</span>
                </div>
                <button
                  onClick={() => onSelectRecipe(recipe)}
                  className="aspect-square rounded-[32px] border border-slate-100 overflow-hidden flex items-center justify-center transition-all active:scale-95 group relative bg-slate-100 shadow-inner"
                >
                <RecipeImage 
                  id={recipe.id}
                  category={recipe.category}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                <span className={`${galleryMode === 'extra' ? 'text-rose-600' : 'text-blue-600'} mr-2`}>{selectedRecipe.id}</span>
                {selectedRecipe.title}
              </h3>
              <button 
                onClick={() => onSelectRecipe(null)}
                className={`${galleryMode === 'extra' ? 'text-rose-600' : 'text-blue-600'} font-black uppercase text-xs tracking-widest`}
              >
                Zpět na výběr
              </button>
            </div>

            <div className={`flex-1 rounded-[40px] border border-slate-100 overflow-hidden flex items-center justify-center relative mb-6 shadow-inner ${getCategoryBg(selectedRecipe.category)}`}>
              <RecipeImage 
                id={selectedRecipe.id}
                category={selectedRecipe.category}
                alt={selectedRecipe.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
