Este proyecto es una aplicación desarrollada en React que permite cotizar planes de seguros de salud de manera rápida y sencilla.  
Forma parte del reto técnico de Rímac Seguros.

---

## Tecnologías utilizadas

- **React** – Librería principal para la interfaz
- **Typescript** - Para mayor robustez en el desarrollo 
- **Tailwind CSS** – Para el diseño y estilos responsivos
- **Vite** – Entorno de desarrollo rápido
- **Node.js & npm** – Para la gestión de dependencias

## Instalación y configuración

1. Clona este repositorio:
git clone https://github.com/lourdesvillegas/Reto-Rimac-Cotizador.git

2. Entra a la carpeta del proyecto:
   cd Reto-Rimac-Cotizador

3. Instala las dependencias:
   npm install

4. Inicia el servidor de desarrollo:
   npm run dev
5. Abre en tu navegador:
   http://localhost:5173

## Estructura del Proyecto

src/
 ├─ assets/          # Imágenes e íconos
 ├─ components/      # Componentes reutilizables
 ├─ pages/           # Páginas principales
 ├─ styles/          # Archivos de estilo
 ├─ App.tsx          # Componente principal
 ├─ main.tsx         # Punto de entrada
 └─ ...

## Manejo de estado:
useState

Se usa extensamente para manejar estados locales dentro de componentes.

LoginForm.tsx:

const [dni, setDni] = useState("");
const [celular, setCelular] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);


Aquí useState guarda los valores del formulario y los mensajes de error.

Cotizacion.tsx:

const [activeTab, setActiveTab] = useState(1);
const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
const [currentSlide, setCurrentSlide] = useState(0);



Se usa para controlar la tab activa, la persona seleccionada y el slider de planes.

useNavigate (de react-router-dom)
En LoginForm.tsx, se usa para redirigir al usuario después de un login exitoso:

const navigate = useNavigate();
if (data?.name && dniClean === "30216147" && celularClean === "5130216147") {
  navigate("/cotizacion");
}

## Desarrollado por

Lourdes Villegas
Desarrolladora Frontend | UX/UI | WordPress Developer
