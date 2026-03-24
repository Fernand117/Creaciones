export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  preview: string;
  images: ImageAsset[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'cortinas',
    name: 'Cortinas',
    description: 'Elegancia y funcionalidad para tus espacios.',
    preview: 'assets/Cortinas/WhatsApp Image 2026-03-23 at 15.25.07.jpeg',
    images: [
      { src: 'assets/Cortinas/WhatsApp Image 2026-03-23 at 15.25.07.jpeg', alt: 'Cortina diseño 1' },
      { src: 'assets/Cortinas/WhatsApp Image 2026-03-23 at 15.25.08.jpeg', alt: 'Cortina diseño 2' },
      { src: 'assets/Cortinas/kjnk.jpeg', alt: 'Cortina diseño 3' },
    ],
  },
  {
    id: 'infantiles',
    name: 'Infantiles',
    description: 'Diseños tiernos y coloridos para los más pequeños.',
    preview: 'assets/Infantiles/traje primavera 2025.jpg',
    images: [
      { src: 'assets/Infantiles/traje primavera 2025.jpg', alt: 'Traje primavera 1' },
      { src: 'assets/Infantiles/traje niño primavera 2025.jpg', alt: 'Traje niño primavera' },
      { src: 'assets/Infantiles/WhatsApp Image 2026-03-23 at 15.25.09.jpeg', alt: 'Ropa infantil 1' },
      { src: 'assets/Infantiles/WhatsApp Image 2026-03-23 at 15.25.07.jpeg', alt: 'Ropa infantil 2' },
      { src: 'assets/Infantiles/Imagen1.png', alt: 'Ropa infantil 3' },
    ],
  },
  {
    id: 'ninos-dios',
    name: 'Niños Dios',
    description: 'Vestimenta artesanal para figuras religiosas.',
    preview: 'assets/Niños Dios/WhatsApp Image 2026-03-23 at 15.25.04.jpeg',
    images: [
      { src: 'assets/Niños Dios/WhatsApp Image 2026-03-23 at 15.25.04.jpeg', alt: 'Niño Dios vestimenta 1' },
      { src: 'assets/Niños Dios/asdq.jpeg', alt: 'Niño Dios vestimenta 2' },
      { src: 'assets/Niños Dios/dsd.jpeg', alt: 'Niño Dios vestimenta 3' },
      { src: 'assets/Niños Dios/qwe.jpeg', alt: 'Niño Dios vestimenta 4' },
    ],
  },
  {
    id: 'regionales',
    name: 'Trajes Regionales',
    description: 'Tradición y cultura plasmada en tela.',
    preview: 'assets/Trajes regionales/WhatsApp Image 2026-03-23 at 15.25.01.jpeg',
    images: [
      { src: 'assets/Trajes regionales/WhatsApp Image 2026-03-23 at 15.25.01.jpeg', alt: 'Traje regional 1' },
      { src: 'assets/Trajes regionales/WhatsApp Image 2026-03-23 at 15.25.02.jpeg', alt: 'Traje regional 2' },
      { src: 'assets/Trajes regionales/kjokj.jpeg', alt: 'Traje regional 3' },
      { src: 'assets/Trajes regionales/ok.jpeg', alt: 'Traje regional 4' },
      { src: 'assets/Trajes regionales/jhi.jpeg', alt: 'Traje regional 5' },
    ],
  },
  {
    id: 'quinceaneras',
    name: 'Quinceañeras',
    description: 'Vestidos de ensueño para momentos inolvidables.',
    preview: 'assets/quinceañeras/WhatsApp Image 2026-03-23 at 15.25.03.jpeg',
    images: [
      { src: 'assets/quinceañeras/WhatsApp Image 2026-03-23 at 15.25.03.jpeg', alt: 'Vestido XV 1' },
      { src: 'assets/quinceañeras/651213258_3369403879879298_9148866734338372629_n.jpg', alt: 'Vestido XV 2' },
      { src: 'assets/quinceañeras/iuh.jpeg', alt: 'Vestido XV 3' },
      { src: 'assets/quinceañeras/koj.jpeg', alt: 'Vestido XV 4' },
    ],
  },
];
