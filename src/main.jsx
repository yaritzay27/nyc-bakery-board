import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, ExternalLink, CupSoda, Croissant } from 'lucide-react';
import './styles.css'; 

const bakeries = [
  {
    name: 'Magnolia Bakery',
    neighborhood: 'West Village, Midtown, UWS',
    specialty: 'Banana pudding and classic cupcakes',
    vibe: 'Pastel, nostalgic, and perfect for a sweet NYC walk.',
    borough: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.magnoliabakery.com/pages/store-location',
    color: 'rose'
  },
  {
    name: 'Levain Bakery',
    neighborhood: 'Upper West Side, NoHo, Williamsburg',
    specialty: 'Giant chocolate chip walnut cookies',
    vibe: 'Warm cookie boxes, long lines, and gooey centers.',
    borough: 'Manhattan & Brooklyn',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    link: 'https://levainbakery.com/pages/bakeries',
    color: 'cocoa'
  },
  {
    name: 'Breads Bakery',
    neighborhood: 'Union Square, Bryant Park, UES',
    specialty: 'Chocolate babka and flaky pastries',
    vibe: 'Bright cafe energy with a bread basket smell.',
    borough: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    link: 'https://restaurants.breadsbakery.com/en/bakery/our-locations/',
    color: 'butter'
  },
  {
    name: 'Dominique Ansel Bakery',
    neighborhood: 'SoHo',
    specialty: 'Cronut and inventive French pastries',
    vibe: 'Fancy pastry field trip with surprise flavors.',
    borough: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.dominiqueansel.com/our-shops/',
    color: 'sky'
  },
  {
    name: "Martha's Country Bakery",
    neighborhood: 'Astoria, Bayside, Forest Hills',
    specialty: 'Layer cakes, pies, and late-night dessert',
    vibe: 'Big glass cases and something for everyone.',
    borough: 'Queens & Brooklyn',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    link: 'https://marthascountrybakery.com/',
    color: 'mint'
  },
  {
    name: 'Orwashers',
    neighborhood: 'Upper East Side, Upper West Side',
    specialty: 'Artisan breads and jelly doughnuts',
    vibe: 'Old-school NYC bakery with a modern bread shelf.',
    borough: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.orwashers.com/',
    color: 'plum'
  },
  {
    name: "Peter Pan Donut & Pastry Shop",
    neighborhood: 'Greenpoint',
    specialty: 'Fresh doughnuts and diner coffee',
    vibe: 'Classic counter service with loyal neighborhood fans.',
    borough: 'Brooklyn',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.peterpandonuts.com/',
    color: 'rose'
  },
  {
    name: "Veniero's Pasticceria",
    neighborhood: 'East Village',
    specialty: 'Cannoli, cheesecake, and Italian cookies',
    vibe: 'Historic pastry cases with sit-down dessert energy.',
    borough: 'Manhattan',
    image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=900&q=80',
    link: 'https://venieros.com/',
    color: 'cocoa'
  },
  {
    name: 'Mille-Feuille Bakery',
    neighborhood: 'Greenwich Village, UWS, Brooklyn',
    specialty: 'Macarons, croissants, and mille-feuille',
    vibe: 'Tiny Paris moment tucked into a NYC afternoon.',
    borough: 'Manhattan & Brooklyn',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.millefeuille-nyc.com/',
    color: 'sky'
  },
  {
    name: 'Settepani',
    neighborhood: 'Harlem, Williamsburg, DUMBO',
    specialty: 'Italian pastries, panettone, and cafe bites',
    vibe: 'Neighborhood cafe charm with polished pastry cases.',
    borough: 'Manhattan & Brooklyn',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.settepani.com/',
    color: 'mint'
  }
];

function BakeryCard({ name, neighborhood, specialty, vibe, borough, image, link, color }) {
  return (
    <article className={`bakery-card ${color}`}>
      <img className="bakery-image" src={image} alt={`${specialty} from ${name}`} />
      <div className="card-content">
        <div className="card-topline">
          <span>{borough}</span>
          <Croissant size={18} aria-hidden="true" />
        </div>
        <h2>{name}</h2>
        <p className="location">
          <MapPin size={16} aria-hidden="true" />
          {neighborhood}
        </p>
        <p className="specialty">{specialty}</p>
        <p className="vibe">{vibe}</p>
        <a className="visit-link" href={link} target="_blank" rel="noreferrer">
          Visit shop
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <CupSoda size={18} aria-hidden="true" />
            Community resource board
          </p>
          <h1>NYC Bakery Board</h1>
          <p>
            A cute guide to beloved bakery stops across New York City, from giant cookies and
            babka to cannoli, macarons, doughnuts, and cozy neighborhood cake cases.
          </p>
        </div>
      </section>

      <section className="board" aria-label="NYC bakery cards">
        {bakeries.map((bakery) => (
          <BakeryCard key={bakery.name} {...bakery} />
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
