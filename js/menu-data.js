/**
 * RESTAURANT ISTANBUL DREUX — MENU DATABASE
 * 12 Categories conforming strictly to authentic offerings & verified prices.
 */

const menuDatabase = {
  "sandwichs": [
    {
      id: "sand-1",
      name: {
        fr: "Kebab Traditionnel (Pain Maison)",
        en: "Traditional Kebab (House Bread)"
      },
      desc: {
        fr: "Broche artisanale marinée, pain turc maison cuit au four, crudités fraîches et sauce au choix. Le menu comprend frites dorées et boisson 33 cl.",
        en: "Artisanal marinated spit-roasted meat in house-baked Turkish bread with fresh salad and choice of sauce. Menu includes golden fries and 33 cl beverage."
      },
      tag: { fr: "Incontournable", en: "House Classic" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "assets/images/dish-kebab.jpg"
    },
    {
      id: "sand-2",
      name: {
        fr: "Dürüm Kebab (Galette Roulée)",
        en: "Dürüm Kebab (Rolled Flatbread)"
      },
      desc: {
        fr: "Viande kebab marinée finement tranchée, roulée dans une galette moelleuse avec salade, tomates, oignons et sauce. Menu servi avec frites et boisson 33 cl.",
        en: "Tender sliced kebab meat rolled in warm flatbread with crisp lettuce, vine tomatoes, onions and sauce. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Spécialité Dürüm", en: "Dürüm Roll" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sand-3",
      name: {
        fr: "Sandwich Américain",
        en: "American Steak Sandwich"
      },
      desc: {
        fr: "Steaks de bœuf hachés saisis à la plancha, fromage fondu, oignons grillés et crudités croquantes. Menu servi avec frites et boisson 33 cl.",
        en: "Seared ground beef patties with melted cheese, caramelized onions and crisp garden vegetables. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Gourmand", en: "Hearty" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sand-4",
      name: {
        fr: "Sandwich Köfte Fait Maison",
        en: "Homemade Köfte Meatball Sandwich"
      },
      desc: {
        fr: "Boulettes artisanales de bœuf assaisonnées au cumin, persil plat et épices douces d'Orient. Menu servi avec frites et boisson 33 cl.",
        en: "Traditional spiced Turkish beef meatballs seasoned with cumin, fresh flat-leaf parsley and delicate spices. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Fait Maison", en: "Homemade" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sand-5",
      name: {
        fr: "Sandwich Poulet Mariné",
        en: "Marinated Chicken Sandwich"
      },
      desc: {
        fr: "Émincé de filets de poulet tendres marinés au paprika doux et herbes méditerranéennes. Menu servi avec frites et boisson 33 cl.",
        en: "Tender chicken breast fillets marinated in mild paprika and fragrant Mediterranean herbs. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Volaille Tendre", en: "Tender Poultry" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "assets/images/dish-poulet.jpg"
    },
    {
      id: "sand-6",
      name: {
        fr: "Sandwich Merguez",
        en: "Grilled Merguez Sandwich"
      },
      desc: {
        fr: "Véritables saucisses merguez de bœuf et agneau grillées à la flamme, sauce et crudités. Menu servi avec frites et boisson 33 cl.",
        en: "Flame-grilled spiced beef and lamb merguez sausages with fresh crisp salad and house sauce. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Grillé à la flamme", en: "Flame Grilled" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "panini": [
    {
      id: "pan-1",
      name: {
        fr: "Panini Poulet",
        en: "Chicken Panini"
      },
      desc: {
        fr: "Pain ciabatta croustillant grillé à la presse, émincé de poulet mariné tendre et fromage fondant. Menu avec frites et boisson 33 cl.",
        en: "Crispy pressed panini loaded with tender marinated chicken and rich melted cheese. Menu includes fries and 33 cl drink."
      },
      tag: { fr: "Panini Chaud", en: "Toasted Panini" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pan-2",
      name: {
        fr: "Panini 4 Fromages",
        en: "Four Cheese Panini"
      },
      desc: {
        fr: "Mélange gourmand de quatre fromages savoureux fondus sous la presse dorée. Menu avec frites et boisson 33 cl.",
        en: "A decadent blend of four European cheeses toasted to golden perfection. Menu includes fries and 33 cl drink."
      },
      tag: { fr: "Végétarien", en: "Vegetarian" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pan-3",
      name: {
        fr: "Panini Sucuk Traditionnel",
        en: "Turkish Sucuk Panini"
      },
      desc: {
        fr: "Saucisse de bœuf turque relevée à l'ail et épices douces (sucuk), avec fromage fondant. Menu avec frites et boisson 33 cl.",
        en: "Traditional spiced Turkish garlic beef sausage (sucuk) paired with creamy melted cheese. Menu includes fries and 33 cl drink."
      },
      tag: { fr: "Spécialité Turque", en: "Turkish Specialty" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pan-4",
      name: {
        fr: "Panini Thon",
        en: "Tuna Panini"
      },
      desc: {
        fr: "Émietté de thon assaisonné aux aromates, fromage fondu et filet d'huile d'olive. Menu avec frites et boisson 33 cl.",
        en: "Seasoned tuna flakes, warm melted cheese and light olive oil herbs pressed golden brown. Menu includes fries and 33 cl drink."
      },
      tag: { fr: "Saveur Marine", en: "Sea Flavor" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "crudites": [
    {
      id: "crud-1",
      name: {
        fr: "Poulet Crudités",
        en: "Chicken & Fresh Salad Sub"
      },
      desc: {
        fr: "Sandwich frais et équilibré garni d'émincé de poulet tendre, salade croquante, tomates fraîches et sauce légère.",
        en: "Fresh crusty bread stuffed with tender chicken breast, crisp lettuce, vine tomatoes and light dressing."
      },
      tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "crud-2",
      name: {
        fr: "Poulet Emmental",
        en: "Chicken & Emmental Sub"
      },
      desc: {
        fr: "Filet de poulet mariné tendre, tranches généreuses d'emmental français et crudités fraîches du jour.",
        en: "Marinated chicken breast, French Emmental cheese slices and fresh crisp garden greens in crusty bread."
      },
      tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "crud-3",
      name: {
        fr: "Thon Crudités",
        en: "Tuna & Salad Sub"
      },
      desc: {
        fr: "Thon délicatement assaisonné, tomates mûres, salade du marché et sauce vinaigrette légère.",
        en: "Seasoned tuna flakes, vine-ripened tomatoes, market-fresh greens and light house sauce."
      },
      tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
      pricing: { type: "dual", solo: "5,00 €", menu: "7,00 €" },
      img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "barquettes-frites": [
    {
      id: "bf-1",
      name: {
        fr: "Barquette de Frites — Petite",
        en: "French Fries Box — Small"
      },
      desc: {
        fr: "Petite portion de frites dorées et croustillantes servies bien chaudes avec sauce au choix.",
        en: "Small portion of golden, crispy French fries served piping hot with your choice of sauce."
      },
      tag: { fr: "Petite", en: "Small" },
      pricing: { type: "single", price: "2,00 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bf-2",
      name: {
        fr: "Barquette de Frites — Moyenne",
        en: "French Fries Box — Medium"
      },
      desc: {
        fr: "Portion moyenne de frites dorées et croustillantes servies bien chaudes avec sauce au choix.",
        en: "Medium portion of crispy golden fries salted to order and served with your favorite dipping sauce."
      },
      tag: { fr: "Moyenne", en: "Medium" },
      pricing: { type: "single", price: "2,50 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bf-3",
      name: {
        fr: "Barquette de Frites — Grande",
        en: "French Fries Box — Large"
      },
      desc: {
        fr: "Grande portion de frites dorées et croustillantes pour les grandes envies ou à partager.",
        en: "Large portion of golden crispy French fries, perfect for sharing or extra hearty appetites."
      },
      tag: { fr: "Grande", en: "Large" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "barquettes-viande": [
    {
      id: "bv-1",
      name: {
        fr: "Barquette Viande + Frites",
        en: "Meat & Fries Box"
      },
      desc: {
        fr: "Portion pratique et généreuse de viande kebab marinée accompagnée de frites dorées croustillantes et de votre sauce préférée.",
        en: "Generous and convenient box combining tender kebab meat with hot golden fries and your sauce of choice."
      },
      tag: { fr: "À Partager", en: "To Share" },
      pricing: { type: "single", price: "5,00 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bv-2",
      name: {
        fr: "Grande Barquette 100% Viande",
        en: "100% Meat Box (Large)"
      },
      desc: {
        fr: "Grande barquette de pure viande kebab marinée artisanale, idéale pour les repas en famille ou accompagner vos plats à la maison.",
        en: "Large portion of pure artisanal seasoned kebab meat, ideal for family sharing and feasts at home."
      },
      tag: { fr: "100% Viande", en: "100% Meat" },
      pricing: { type: "single", price: "10,00 €" },
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "assiettes": [
    {
      id: "ass-1",
      name: {
        fr: "Assiette Kebab Complète",
        en: "Full Kebab Platter"
      },
      desc: {
        fr: "Généreuse portion de viande kebab artisanale. Servie avec frites dorées, boulgour turc parfumé, riz doré et salade composée fraîche.",
        en: "Abundant artisan spit-roasted kebab meat. Served with golden fries, fragrant Turkish bulgur, rice and fresh garden salad."
      },
      tag: { fr: "Frites, Boulgour & Riz inclus", en: "Fries, Bulgur & Rice included" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: { fr: "Supplément assiette mixte (viande supp.) : +3,00 €", en: "Mixed meat supplement: +€3.00" },
      img: "assets/images/dish-kebab.jpg"
    },
    {
      id: "ass-2",
      name: {
        fr: "Assiette Poulet Mariné Complète",
        en: "Full Marinated Chicken Platter"
      },
      desc: {
        fr: "Morceaux de poulet tendrement marinés au paprika et herbes, grillés à point. Servis avec frites dorées, boulgour turc, riz et crudités.",
        en: "Tender chicken fillets marinated with paprika and wild herbs, grilled to perfection. Served with fries, bulgur, rice and salad."
      },
      tag: { fr: "Frites, Boulgour & Riz inclus", en: "Fries, Bulgur & Rice included" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: { fr: "Supplément assiette mixte (viande supp.) : +3,00 €", en: "Mixed meat supplement: +€3.00" },
      img: "assets/images/dish-poulet.jpg"
    },
    {
      id: "ass-3",
      name: {
        fr: "Assiette Köfte Artisanale",
        en: "Full Köfte Meatball Platter"
      },
      desc: {
        fr: "Boulettes de bœuf assaisonnées à la tradition anatolienne cuites à la flamme. Servies avec frites, boulgour turc parfumé, riz et salade.",
        en: "Traditional Anatolian spiced ground beef patties grilled over fire. Accompanied by fries, fragrant bulgur, rice and salad."
      },
      tag: { fr: "Frites, Boulgour & Riz inclus", en: "Fries, Bulgur & Rice included" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: { fr: "Supplément assiette mixte (viande supp.) : +3,00 €", en: "Mixed meat supplement: +€3.00" },
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ass-4",
      name: {
        fr: "Assiette Côtelettes d'Agneau Grillées",
        en: "Flame-Grilled Lamb Chops Platter"
      },
      desc: {
        fr: "Tendres côtelettes d'agneau fraîches saisies au feu de braise, marinées aux herbes de garrigue. Servies avec frites, boulgour, riz et salade.",
        en: "Fresh, tender lamb chops flame-grilled over charcoal with wild oregano. Served with hot fries, bulgur, rice and fresh salad."
      },
      tag: { fr: "Sélection du Boucher", en: "Butcher's Cut" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: { fr: "Supplément assiette mixte (viande supp.) : +3,00 €", en: "Mixed meat supplement: +€3.00" },
      img: "assets/images/dish-agneau.jpg"
    },
    {
      id: "ass-5",
      name: {
        fr: "Assiette Adana Kebab Grillé",
        en: "Adana Kebab Skewer Platter"
      },
      desc: {
        fr: "Brochette traditionnelle d'agneau et bœuf hachés marinés aux piments rouges doux d'Anatolie. Servie avec frites, boulgour, riz et salade.",
        en: "Hand-minced lamb and beef seasoned with sweet Anatolian red pepper and sumac. Served with fries, bulgur, rice and fresh salad."
      },
      tag: { fr: "Frites, Boulgour & Riz inclus", en: "Fries, Bulgur & Rice included" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: { fr: "Supplément assiette mixte (viande supp.) : +3,00 €", en: "Mixed meat supplement: +€3.00" },
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ass-6",
      name: {
        fr: "Assiette Brochette de Bœuf Grillée",
        en: "Grilled Beef Skewer Platter"
      },
      desc: {
        fr: "Morceaux choisis de bœuf tendre marinés aux aromates, grillés à la flamme. Servis avec frites, boulgour turc parfumé, riz et salade.",
        en: "Tender beef cubes marinated in Mediterranean spices and flame-grilled. Served with golden fries, bulgur, rice and crisp salad."
      },
      tag: { fr: "Frites, Boulgour & Riz inclus", en: "Fries, Bulgur & Rice included" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: { fr: "Supplément assiette mixte (viande supp.) : +3,00 €", en: "Mixed meat supplement: +€3.00" },
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ass-7",
      name: {
        fr: "Assiette Royale Festin (Mixte)",
        en: "Royal Grand Feast Platter (Mixed)"
      },
      desc: {
        fr: "Le grand festin du chef réunissant nos meilleures viandes : côtelette d'agneau, brochette adana, poulet mariné et köfte artisanal. Servie avec frites, boulgour et riz.",
        en: "The chef's supreme mixed grill featuring lamb chops, adana skewer, marinated chicken and handmade köfte. Served with fries, bulgur, rice and salad."
      },
      tag: { fr: "Signature du Chef", en: "Chef Signature" },
      pricing: { type: "single", price: "20,00 €" },
      extraNote: { fr: "Assortiment complet 4 viandes prestigieuses", en: "Complete assortment of 4 prime meats" },
      img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "lahmacun": [
    {
      id: "lahm-1",
      name: {
        fr: "Lahmacun Seul",
        en: "Traditional Lahmacun"
      },
      desc: {
        fr: "Fine pâte croustillante cuite à haute température, garnie de viande hachée assaisonnée, tomates, oignons, poivrons et persil frais. Servi avec citron.",
        en: "Ultra-thin crispy Turkish flatbread baked with spiced minced meat, onions, tomatoes and parsley. Served with fresh lemon wedge."
      },
      tag: { fr: "Four Traditionnel", en: "Hearth Baked" },
      pricing: { type: "single", price: "4,00 €" },
      img: "assets/images/dish-lahmacun.jpg"
    },
    {
      id: "lahm-2",
      name: {
        fr: "Lahmacun + Frites",
        en: "Lahmacun & Fries"
      },
      desc: {
        fr: "Le lahmacun traditionnel croustillant servi bien chaud avec une portion de frites dorées et croustillantes.",
        en: "Traditional hot crispy lahmacun served alongside a fresh portion of golden French fries."
      },
      tag: { fr: "Formule Complète", en: "Combo" },
      pricing: { type: "single", price: "5,00 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lahm-3",
      name: {
        fr: "Lahmacun Roulé + Viande + Frites",
        en: "Loaded Rolled Lahmacun with Meat & Fries"
      },
      desc: {
        fr: "Lahmacun croustillant généreusement garni de viande kebab marinée, roulé avec salade et servi avec une portion de frites dorées.",
        en: "Crispy lahmacun rolled with succulent seasoned kebab meat, crisp salad and served with golden French fries."
      },
      tag: { fr: "Spécialité Maison", en: "House Specialty" },
      pricing: { type: "single", price: "10,00 €" },
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "salades": [
    {
      id: "sal-1",
      name: {
        fr: "Salade Composée à l'Avocat",
        en: "Mediterranean Avocado Salad"
      },
      desc: {
        fr: "Avocat crémeux, mesclun frais, tomates cerises mûres, concombres croquants et vinaigrette douce à l'huile d'olive.",
        en: "Fresh avocado, garden mixed greens, sweet cherry tomatoes, crisp cucumbers and light olive oil vinaigrette."
      },
      tag: { fr: "Fraîcheur & Équilibre", en: "Fresh & Crisp" },
      pricing: { type: "single", price: "7,00 €" },
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sal-2",
      name: {
        fr: "Salade Composée au Thon",
        en: "Tuna Garden Salad"
      },
      desc: {
        fr: "Thon de qualité, mesclun croquant, maïs doux, tomates fraîches, olives et assaisonnement maison délicat.",
        en: "Flaked tuna, crisp garden greens, sweet corn, vine tomatoes, olives and delicate house dressing."
      },
      tag: { fr: "Saveur Marine", en: "Sea Flavor" },
      pricing: { type: "single", price: "7,00 €" },
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sal-3",
      name: {
        fr: "Salade Composée au Poulet",
        en: "Chicken Garden Salad"
      },
      desc: {
        fr: "Émincé de poulet tendre mariné, mesclun frais, tomates gorgées de soleil et copeaux de crudités du marché.",
        en: "Tender marinated chicken strips over fresh mixed greens, sun-ripened tomatoes and market vegetables."
      },
      tag: { fr: "Gourmande & Équilibrée", en: "Hearty & Healthy" },
      pricing: { type: "single", price: "7,00 €" },
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "desserts": [
    {
      id: "des-1",
      name: {
        fr: "Baklawa aux Pistaches d'Anatolie",
        en: "Anatolian Pistachio Baklava"
      },
      desc: {
        fr: "Fine superposition de pâte filo croustillante pur beurre, éclats généreux de pistaches vertes et miel délicat.",
        en: "Crispy layers of golden filo pastry made with pure butter, crushed green pistachios and fragrant blossom honey."
      },
      tag: { fr: "Pâtisserie Orientale", en: "Turkish Sweet" },
      pricing: { type: "single", price: "3,00 €" },
      img: "assets/images/dish-baklava.jpg"
    },
    {
      id: "des-2",
      name: {
        fr: "Gâteau de Semoule Revani",
        en: "Traditional Semolina Revani Cake"
      },
      desc: {
        fr: "Douceur traditionnelle orientale fondante et parfumée à la fleur d'oranger et au sirop doux.",
        en: "Traditional golden semolina cake delicately infused with orange blossom water and light syrup."
      },
      tag: { fr: "Tradition d'Orient", en: "Eastern Tradition" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "des-3",
      name: {
        fr: "Tiramisu Maison Onctueux",
        en: "Creamy House Tiramisu"
      },
      desc: {
        fr: "Crème mascarpone légère et onctueuse sur biscuit imbibé d'un café doux et saupoudré de cacao pur.",
        en: "Velvety mascarpone cream layered over delicate coffee-soaked biscuits and dusted with pure cocoa."
      },
      tag: { fr: "Fait Maison", en: "House Made" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "des-4",
      name: {
        fr: "Tarte au Daim Croustillante",
        en: "Crunchy Daim Caramel Tart"
      },
      desc: {
        fr: "Base croustillante aux amandes surmontée de crème onctueuse et de pépites de chocolat au caramel croquant Daim.",
        en: "Crispy almond base topped with smooth cream and crunchy Daim milk chocolate caramel bits."
      },
      tag: { fr: "Chocolat & Caramel", en: "Caramel Crunch" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "des-5",
      name: {
        fr: "Fondant Cœur Coulant au Chocolat",
        en: "Molten Chocolate Lava Cake"
      },
      desc: {
        fr: "Moelleux au cœur intensément coulant au chocolat noir pur cacao, servi tiède pour un pur moment de gourmandise.",
        en: "Warm rich dark chocolate cake with an intensely gooey molten center for true chocolate lovers."
      },
      tag: { fr: "Cœur Coulant", en: "Molten Heart" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "boissons": [
    {
      id: "boi-coca",
      name: {
        fr: "Coca-Cola (Canette 33 cl)",
        en: "Coca-Cola (33 cl Can)"
      },
      desc: {
        fr: "Le grand classique rafraîchissant aux arômes inimitables, servi très frais.",
        en: "The classic world-famous refreshing cola beverage, served ice-cold."
      },
      tag: { fr: "33 cl Frais", en: "33 cl Chilled" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-zero",
      name: {
        fr: "Coca-Cola Zéro (Canette 33 cl)",
        en: "Coca-Cola Zero (33 cl Can)"
      },
      desc: {
        fr: "Toute la saveur authentique de Coca-Cola avec zéro sucres et zéro calories.",
        en: "Great authentic Coca-Cola taste with zero sugar and zero calories."
      },
      tag: { fr: "Sans Sucre", en: "Sugar Free" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-7up",
      name: {
        fr: "7 Up Citron & Lime (Canette 33 cl)",
        en: "7 Up Lemon & Lime (33 cl Can)"
      },
      desc: {
        fr: "Boisson gazeuse pétillante et rafraîchissante aux arômes naturels de citron et citron vert.",
        en: "Crisp and sparkling lemon-lime flavored soft drink served ice-cold."
      },
      tag: { fr: "Agrumes Pétillants", en: "Crisp Citrus" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-fanta",
      name: {
        fr: "Fanta Orange (Canette 33 cl)",
        en: "Fanta Orange (33 cl Can)"
      },
      desc: {
        fr: "Boisson pétillante fruitée au goût gourmand d'orange gorgée de soleil.",
        en: "Deliciously vibrant orange fruit-flavored soda with lively bubbles."
      },
      tag: { fr: "Fruité & Pétillant", en: "Fruity Orange" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-ayran",
      name: {
        fr: "Ayran Traditionnel Turc (25 cl)",
        en: "Traditional Turkish Ayran (25 cl)"
      },
      desc: {
        fr: "La boisson nationale turque rafraîchissante à base de yaourt battu, eau et légère pointe de sel. Idéale pour accompagner les grillades et les kebabs.",
        en: "Authentic Turkish chilled yogurt beverage prepared with yogurt, water and a pinch of salt. The perfect companion for kebabs and grilled meats."
      },
      tag: { fr: "Tradition Turque", en: "Turkish Classic" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-the",
      name: {
        fr: "Thé Traditionnel Turc (Çay)",
        en: "Authentic Turkish Black Tea (Çay)"
      },
      desc: {
        fr: "Thé noir corsé et aromatique infusé lentement au semovar selon la tradition et servi bien chaud dans son verre tulipe.",
        en: "Robust, fragrant Turkish black tea brewed fresh in traditional double samovar pots and served hot in a signature tulip glass."
      },
      tag: { fr: "Infusé au Semovar", en: "Freshly Brewed" },
      pricing: { type: "single", price: "1,50 €" },
      img: "assets/images/gallery-tea.jpg"
    },
    {
      id: "boi-eau",
      name: {
        fr: "Eau Minérale Cristaline 50 cl",
        en: "Still Mineral Water Cristaline 50 cl"
      },
      desc: {
        fr: "Bouteille d'eau de source pure et fraîche.",
        en: "Bottle of pure, crisp natural spring water."
      },
      tag: { fr: "Eau Pure", en: "Spring Water" },
      pricing: { type: "single", price: "1,00 €" },
      img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-sanpel",
      name: {
        fr: "San Pellegrino 50 cl",
        en: "San Pellegrino Sparkling 50 cl"
      },
      desc: {
        fr: "Eau minérale naturelle gazeuse aux fines bulles rafraîchissantes.",
        en: "Gently sparkling natural mineral water from Italian springs."
      },
      tag: { fr: "Pétillante", en: "Sparkling" },
      pricing: { type: "single", price: "2,00 €" },
      img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "boi-redbull",
      name: {
        fr: "Red Bull Energy Drink 25 cl",
        en: "Red Bull Energy Drink 25 cl"
      },
      desc: {
        fr: "Canette fraîche de boisson énergisante Red Bull 25 cl.",
        en: "Chilled can of energizing Red Bull 25 cl."
      },
      tag: { fr: "Énergie", en: "Energy" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "menu-enfant": [
    {
      id: "enf-1",
      name: {
        fr: "Menu Enfant",
        en: "Kids Menu Special"
      },
      desc: {
        fr: "Formule adaptée aux plus jeunes : sandwich au choix (kebab, steak ou poulet) accompagné d'une petite barquette de frites dorées et d'une boisson fraîche (Capri-Sun ou canette 33 cl). Uniquement proposé le midi.",
        en: "Special combo designed for children: sandwich of choice (kebab, beef patty or chicken), served with small golden fries and a chilled soft drink or Capri-Sun. Available for lunch only."
      },
      tag: { fr: "Uniquement le Midi", en: "Lunch Only" },
      pricing: { type: "single", price: "9,00 €" },
      extraNote: {
        fr: "Sandwich au choix + petite frite + boisson fraîche",
        en: "Sandwich of choice + small fries + chilled drink"
      },
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80"
    }
  ],

  "supplements": [
    {
      id: "sup-1",
      name: {
        fr: "Supplément Fromage",
        en: "Extra Cheese"
      },
      desc: {
        fr: "Tranche d'emmental ou cheddar fondant supplémentaire pour garnir généreusement vos sandwichs, paninis ou galettes.",
        en: "Extra slice of melted Emmental or Cheddar cheese to enhance your sandwich or panini."
      },
      tag: { fr: "Gourmandise", en: "Extra Melt" },
      pricing: { type: "single", price: "+0,50 €" },
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sup-2",
      name: {
        fr: "Supplément Frites",
        en: "Extra Fries in Sandwich"
      },
      desc: {
        fr: "Portion de frites dorées supplémentaires ajoutées directement au cœur de votre sandwich ou galette.",
        en: "Extra portion of crispy fries loaded directly inside your sandwich or wrap."
      },
      tag: { fr: "Croustillant", en: "Crispy" },
      pricing: { type: "single", price: "+0,50 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sup-3",
      name: {
        fr: "Supplément Viande",
        en: "Extra Meat Portion"
      },
      desc: {
        fr: "Généreuse portion de viande kebab, poulet ou köfte supplémentaire pour les très gros appétits.",
        en: "Substantial additional serving of seasoned kebab, chicken or köfte meat for extra big appetites."
      },
      tag: { fr: "Portion Renforcée", en: "Double Meat" },
      pricing: { type: "single", price: "+1,00 €" },
      img: "assets/images/dish-kebab.jpg"
    },
    {
      id: "sup-4",
      name: {
        fr: "Supplément Assiette Mixte (Viande Supplémentaire)",
        en: "Mixed Meat Plate Supplement (Extra Meat)"
      },
      desc: {
        fr: "Composez votre assiette sur-mesure en ajoutant une viande supplémentaire au choix (brochette agneau, adana, steak ou poulet).",
        en: "Customize your feast by adding a supplementary premium grilled meat of choice (lamb chop, adana, steak or chicken)."
      },
      tag: { fr: "Sur vos Assiettes", en: "For Platters" },
      pricing: { type: "single", price: "+3,00 €" },
      img: "assets/images/dish-agneau.jpg"
    }
  ]
};
