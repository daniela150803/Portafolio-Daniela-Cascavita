// ============================================
// PORTFOLIO DANIELA CASCAVITA
// JavaScript Completo - Versión Final
// ============================================

"use strict";

// ============================================
// 1. DATOS DE PROYECTOS
// ============================================
const PROJECTS_DATA = [
  {
    id: 1,
    category: 'programming',
    title: 'Deep Fakes con redes neuronales',
    description: 'Modelo de aprendizaje automático para detección de deepfakes, presentado en el Workshop on Engineering Applications 2025.',
    fullDescription: 'Proyecto de investigación enfocado en la detección de deepfakes mediante redes neuronales convolucionales (CNN). El sistema analiza patrones visuales en videos e imágenes para identificar contenido manipulado con alta precisión. Implementado con TensorFlow y Keras, el modelo alcanzó un 94% de precisión en el dataset de prueba. El trabajo fue presentado en el Workshop on Engineering Applications 2025 de la Universidad Militar Nueva Granada, destacando su aplicabilidad en verificación de contenido digital y seguridad informática.',
    tags: ['Latex', 'Chat GPT', 'Gemini', 'Python', 'TensorFlow', 'Keras'],
    badge: 'Deep Learning',
    badgeColor: 'purple',
    image: 'ID 32-1.pdf',
    year: '2025',
    team: 'En parejas con asesoría académica',
    awards: [
      'Presentado en Workshop on Engineering Applications 2025',
      'Mención destacada por innovación en detección de contenido manipulado',
      'Publicación en memorias del congreso UMNG'
    ],
    githubLink: 'https://github.com/daniela150803/Deep-Learning/blob/main/Code_Deepfakes.ipynb',
    pdfLink: 'docs/deepFakes.pdf',
    infografiaLink: './Infografia_Daniela_Cascavita/index.html',
    galleryImages: [
      'img/deep1.jpg',
      'img/deep2.jpg'
    ],
    codeSnippet: `import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout

# Arquitectura del modelo CNN para detección de deepfakes
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    MaxPooling2D(pool_size=(2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Flatten(),
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(128, activation='relu'),
    Dropout(0.3),
    Dense(1, activation='sigmoid')  # Clasificación binaria
])

# Compilación del modelo
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy', 'precision', 'recall']
)

# Entrenamiento con callbacks
from keras.callbacks import EarlyStopping, ModelCheckpoint

early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True
)

checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True
)

history = model.fit(
    train_generator,
    epochs=50,
    validation_data=val_generator,
    callbacks=[early_stopping, checkpoint]
)

print(f"Precisión final: {history.history['accuracy'][-1]:.2%}")`
  },
  {
    id: 2,
    category: 'programming',
    title: 'IA para hábitos saludables',
    description: 'Desarrollo de una IA con NLP para seguimiento de hábitos saludables, con énfasis en el progreso del usuario.',
    fullDescription: 'Lideré el desarrollo de una IA basada en NLP que interpreta hábitos y ofrece recomendaciones personalizadas. El sistema registra el progreso del usuario con el tiempo, permitiendo visualizar avances y ajustar sugerencias de bienestar de forma inteligente. El proyecto combina procesamiento de lenguaje natural, análisis de datos de comportamiento y retroalimentación continua para apoyar hábitos saludables.',
    tags: ['NLP', 'Hábitos Saludables', 'Progreso', 'Python', 'Transformers', 'Liderazgo'],
    badge: 'NLP',
    badgeColor: 'pink',
    image: 'img/IA_inicio.jpg',
    year: '2024-2025',
    team: 'Liderazgo de equipo (3 personas)',
    githubLink: 'https://github.com/daniela150803/BienestarEmocional/blob/main/BienestarEmocional.py',
    videoLink: 'videos/IA.mp4',
    galleryImages: [],
  },
  {
    id: 3,
    category: 'design',
    title: 'Portfolio Web',
    description: 'Desarrollo de portfolio personal para mostrar proyectos y habilidades en IA y desarrollo multimedia.',
    fullDescription: 'Aplicación web desarrollada con HTML5, CSS3 convencional y JavaScript para el frontend, conectada a una base de datos con MyPHP. El backend completamente desarrollado en PHP maneja toda la lógica de servidor, validación de datos y conexión a la base de datos. La interfaz presenta un diseño responsivo y moderno con CSS puro, optimizado para diferentes dispositivos. Incluye funcionalidades interactivas con JavaScript vanilla, manejo seguro de formularios, y una experiencia de usuario fluida. El proyecto demuestra habilidades en desarrollo full-stack, arquitectura web, gestión de bases de datos, y buenas prácticas de seguridad en aplicaciones web.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MyPHP', 'Base de Datos', 'Backend', 'Responsive Design', 'Full-Stack'],
    badge: 'Web Development',
    badgeColor: 'blue',
    image: 'img/web_inicio.jpg',
    year: '2025',
    team: 'Individual',
    videoLink: 'videos/paginagym.mp4',
    demoLink: 'https://unimilitareduco-my.sharepoint.com/:v:/g/personal/est_maria_cascavita_unimilitar_edu_co/IQASnqIgIjF8ToJcuDlVISNLARBSlhcDYv1L28RvL2SMsbw?e=o9PviG&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D',
    galleryImages: [
      'img/web1.jpg',
      'img/web2.jpg'
    ],
    codeSnippet: `// Sistema de filtrado interactivo de proyectos con animaciones
    class ProjectFilter {
      constructor() {
        this.currentFilter = 'all';
        this.projectsGrid = document.querySelector('.proyectos-grid');
        this.projects = document.querySelectorAll('.proyecto-group');
        this.init();
      }

        init() {
          const filterButtons = document.querySelectorAll('.filter-btn');
          
          filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
              const filter = e.currentTarget.dataset.filter;
              this.applyFilter(filter);
              this.updateActiveButton(e.currentTarget);
            });
          });
        }

      async applyFilter(filter) {
        this.currentFilter = filter;
        
        // Fade out con animación
        this.projectsGrid.style.opacity = '0';
        this.projectsGrid.style.transform = 'translateY(20px)';
        
        // Esperar animación
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Filtrar proyectos
        this.projects.forEach(project => {
          const category = project.dataset.category;
          const shouldShow = filter === 'all' || category === filter;
          
          project.style.display = shouldShow ? 'block' : 'none';
        });
        
        // Fade in
        this.projectsGrid.style.opacity = '1';
        this.projectsGrid.style.transform = 'translateY(0)';
  }

  updateActiveButton(activeBtn) {
    document.querySelectorAll('.filter-btn')
      .forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }
},`
  },{
  id: 4,
  category: 'design',
  title: 'Animación 3D',
  description: 'Animación 3D creada para representar una escena digital con modelado, texturizado e iluminación realista.',
  fullDescription: 'Proyecto de animación 3D desarrollado desde cero que muestra el proceso completo de producción: modelado de objetos, aplicación de materiales y texturas, configuración de iluminación, animación de cámara y render final. La escena fue diseñada con un enfoque visual cinematográfico y composición estética. Incluye animaciones de idles realizadas con Unity integrando técnicas avanzadas de animación procedural para crear movimientos naturales y fluidos. El proyecto demuestra habilidades en diseño 3D, narrativa visual, manejo de software de animación, optimización de renders y presentación audiovisual.',
  
  tags: ['Blender', 'Modelado 3D', 'Texturizado', 'Iluminación', 'Render', 'Animación', 'Unity', 'Animación Procedural'],
  
  badge: '3D Animation',
  badgeColor: 'purple',
  
  image: 'img/animacion_principal.jpg',
  
  year: '2025',
  team: 'Individual',
  
  // Video principal del proyecto
  demoLink: 'https://unimilitareduco-my.sharepoint.com/:v:/g/personal/est_maria_cascavita_unimilitar_edu_co/IQAMXqA6hFrwS6lJSmW6IMQEARaXhHZnfnwvxB0rGzCFIuI?e=dpIKsf&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D',

  videoLink: 'videos/bolsa.mp4',
  additionalVideoLink: 'videos/Animacion SOL Y LUNA (1).mp4',
  idleVideoLink: 'videos/Idles.mp4',

  galleryImages: [
    'img/animacion1.jpg'
  ],
},
{
  id: 5,
  category: 'programming',
  title: 'Juego Arcade 2D',
  description: 'Juego arcade 2D con mecánicas de salto implementadas usando física de Euler y assets gratuitos.',
  fullDescription: 'Juego arcade 2D desarrollado con lógica de programación avanzada, utilizando física de Euler para implementar un sistema de saltos realista y dinámico. El personaje principal responde a inputs continuos: cuanta más tiempo se mantenga presionado el botón de salto, mayor será la altura alcanzada. El proyecto implementa gestión de fuerzas, aceleración gravitacional y cálculos vectoriales para crear una experiencia de juego fluida. Utiliza assets gráficos de código abierto y demuestra habilidades en programación de sistemas de juego, manejo de física en tiempo real, y diseño de mecánicas interactivas.',
  tags: ['Física de Euler', 'Programación de Juegos', 'Assets Gratuitos', 'Mecánicas de Juego', 'Lógica de Programación', 'Arcade', 'Juego 2D'],
  badge: 'Game Development',
  badgeColor: 'purple',
  image: 'img/animacion_principal.jpg',
  year: '2025',
  team: 'Individual',
  videoLink: 'videos/Juego.mp4',
  galleryImages: [
    'img/animacion1.jpg'
  ],
},
{
  id: 6,
  category: 'design',
  title: 'Render',
  description: 'Galería de renders que muestra resultados visuales de iluminación y composición.',
  fullDescription: 'Proyecto de renderizado que exhibe imágenes finales de escenas 3D con composición, iluminación y efectos visuales. Incluye una galería de renders representativos realizados para la presentación del portafolio.',
  tags: ['Render', 'Iluminación', 'Composición', 'Blender', 'Visualización'],
  badge: 'Render',
  badgeColor: 'blue',
  image: 'img/Render_Bosque_Depth of field (1).png',
  year: '2025',
  team: 'Individual',
  videoLink: 'videos/luces.mkv',
  galleryImages: [
    'img/Render_Bosque_Depth of field (1).png',
    'img/DanielaCascavitaRender3 (1).png'
  ],
},
{
  id: 7,
  category: 'programming',
  title: 'ARKIMIA - Juego de Realidad Aumentada',
  description: 'Juego ARKIMIA desarrollado en Unity con ARCore para Android, destacando en manejo de servidor y creación de entornos RA.',
  fullDescription: 'ARKIMIA es un proyecto de realidad aumentada desarrollado con Unity y ARCore, diseñado específicamente para dispositivos Android. El proyecto se centró en la implementación de un servidor robusto para la sincronización de datos entre múltiples usuarios en tiempo real, y en la creación de entornos inmersivos de realidad aumentada. Se integraron diseños gráficos de compañeros de equipo para crear una experiencia visual coherente y atractiva. Como líder del proyecto, dirigí al equipo técnico y artístico, coordinando el desarrollo desde la concepción hasta la implementación final. El proyecto fue galardonado en un concurso universitario, reconociendo la innovación tecnológica y la calidad de la experiencia de usuario.',
  tags: ['Unity', 'ARCore', 'Android', 'Realidad Aumentada', 'Servidor', 'Liderazgo de Equipo', 'Desarrollo Móvil', 'Sincronización en Tiempo Real'],
  badge: 'ARKIMIA',
  badgeColor: 'green',
  image: 'img/animacion_principal.jpg',
  year: '2025',
  team: 'Liderazgo de equipo (5 personas)',
  videoLink: 'videos/ARKIMIA.mp4',
  certificateLink: 'docs/certificado_juego.pdf',
  galleryImages: [
    'img/animacion1.jpg'
  ],
  awards: [
    'Proyecto ganador del bloque Tecnologías Inmersivas y Videojuegos Críticos',
    'Reconocimiento otorgado por innovación en Realidad Aumentada',
  ]
},
{
  id: 8,
  category: 'design',
  title: 'Modelado 3D',
  description: 'Modelado de un carro y un robot con acabado completo desde la superficie externa hasta el interior.',
  fullDescription: 'Proyecto de modelado 3D que combina el desarrollo detallado de un carro y un robot. El trabajo abarca desde la carrocería exterior hasta componentes internos, con atención especial al detalle en cada pieza del robot y el vehículo.',
  tags: ['Modelado 3D', 'Blender', 'Automotriz', 'Robótica', 'Detalle'],
  badge: 'Modelado 3D',
  badgeColor: 'purple',
  image: 'img/robot1.png',
  year: '2025',
  team: 'Individual',
  galleryImages: [
    'img/robot1.png',
    'img/robot2.png',
    'img/robot 3.png',
    'img/robot4.png'
  ],
  sketchfabEmbed: `<iframe title="Ferrari 488(4)DANIELA CASCAVITA" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/66298f19d8af41d9b1e40dac811097f9/embed"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
      <a href="https://sketchfab.com/3d-models/ferrari-4884daniela-cascavita-66298f19d8af41d9b1e40dac811097f9?utm_medium=embed&utm_campaign=share-popup&utm_content=66298f19d8af41d9b1e40dac811097f9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Ferrari 488(4)DANIELA CASCAVITA</a> by <a href="https://sketchfab.com/est.maria.cascavita?utm_medium=embed&utm_campaign=share-popup&utm_content=66298f19d8af41d9b1e40dac811097f9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">est.maria.cascavita</a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=66298f19d8af41d9b1e40dac811097f9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>`,
},
];

// ============================================
// 2. CONFIGURACIÓN INICIAL
// ============================================

// ============================================
// 3. SISTEMA DE MODAL DE PROYECTOS
// ============================================
class ProjectModal {
  constructor() {
    this.modal = null;
    this.currentProject = null;
    this.init();
  }

  init() {
    this.injectStyles();
    this.createModal();
    this.attachEventListeners();
  }

  injectStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
      .modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .modal-overlay.active {
        display: flex;
        opacity: 1;
      }
      .modal-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(12px);
      }
      .modal-container {
        position: relative;
        background: linear-gradient(135deg, rgba(0, 12, 102, 0.96), rgba(29, 26, 77, 0.96), rgba(61, 0, 102, 0.96));
        border-radius: 24px;
        max-width: 1200px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(168, 85, 247, 0.3);
        transform: scale(0.95);
        transition: transform 0.2s ease;
      }
      .modal-overlay.active .modal-container {
        transform: scale(1);
      }
      .modal-close {
        position: sticky;
        top: 16px;
        float: right;
        margin: 16px 16px 0 0;
        z-index: 10;
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.15s ease;
        color: white;
      }
      .modal-close:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.4);
        transform: scale(1.1) rotate(90deg);
      }
      .modal-content {
        padding: 32px 48px 48px;
      }
      .modal-header {
        margin-bottom: 32px;
      }
      .modal-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
      }
      .modal-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        backdrop-filter: blur(10px);
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 700;
        box-shadow: 0 8px 24px rgba(168, 85, 247, 0.3);
        border: 1px solid;
      }
      .modal-badge.badge-purple {
        background: rgba(147, 51, 234, 0.3);
        color: rgb(196, 181, 253);
        border-color: rgba(168, 85, 247, 0.5);
      }
      .modal-badge.badge-pink {
        background: rgba(236, 72, 153, 0.3);
        color: rgb(251, 207, 232);
        border-color: rgba(236, 72, 153, 0.5);
      }
      .modal-badge.badge-blue {
        background: rgba(59, 130, 246, 0.3);
        color: rgb(147, 197, 253);
        border-color: rgba(59, 130, 246, 0.5);
      }
      .modal-meta-item {
        display: flex;
        align-items: center;
        gap: 6px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.85rem;
      }
      .modal-title {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(to right, #ffffff, rgba(196, 181, 253, 0.9));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      .modal-description {
        color: rgba(255, 255, 255, 0.85);
        font-size: 1.05rem;
        line-height: 1.7;
        margin-bottom: 20px;
      }
      .modal-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 24px;
      }
      .modal-tag {
        padding: 8px 16px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.85rem;
        font-weight: 600;
        transition: all 0.2s ease;
      }
      .modal-tag:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
      }
      .modal-awards {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 12px;
        padding: 16px 20px;
        margin-bottom: 24px;
      }
      .modal-awards-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: rgba(255, 255, 255, 0.95);
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 12px;
      }
      .modal-awards-title svg {
        color: #fbbf24;
      }
      .modal-awards-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .modal-awards-list li {
        color: rgba(255, 255, 255, 0.75);
        padding-left: 24px;
        position: relative;
        margin-bottom: 8px;
        line-height: 1.5;
      }
      .modal-awards-list li::before {
        content: "★";
        position: absolute;
        left: 0;
        color: #fbbf24;
        font-size: 1rem;
      }
      .modal-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 24px;
      }
      .modal-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 28px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all 0.15s ease;
        border: 1px solid;
        backdrop-filter: blur(8px);
        position: relative;
        overflow: hidden;
      }
      .modal-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
      }
      .modal-btn:hover::before {
        transform: translateX(100%);
      }
      .modal-btn-github {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
      }
      .modal-btn-github:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 12px 32px rgba(168, 85, 247, 0.4);
      }
      .modal-btn-demo {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3));
        color: white;
        border-color: rgba(196, 181, 253, 0.4);
        box-shadow: 0 8px 24px rgba(236, 72, 153, 0.2);
      }
      .modal-btn-demo:hover {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5));
        border-color: rgba(196, 181, 253, 0.6);
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 12px 32px rgba(236, 72, 153, 0.4);
      }
      .modal-image {
        margin: 32px 0;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
      }
      .modal-image img {
        width: 100%;
        height: auto;
        display: block;
      }
      .modal-image video {
        width: 100%;
        height: auto;
        display: block;
        background: rgba(0, 0, 0, 0.1);
      }
      .modal-code-section {
        margin: 32px 0;
      }
      .modal-section-title {
        color: rgba(255, 255, 255, 0.95);
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .modal-code-box {
        background: #1e1e2e;
        border: 1px solid rgba(168, 85, 247, 0.3);
        border-radius: 12px;
        overflow: hidden;
      }
      .modal-code-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: #2a2a3e;
        border-bottom: 1px solid rgba(168, 85, 247, 0.2);
      }
      .code-dots {
        display: flex;
        gap: 8px;
      }
      .code-dots .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
      .code-dots .dot.red {
        background: rgba(239, 68, 68, 0.7);
      }
      .code-dots .dot.yellow {
        background: rgba(251, 191, 36, 0.7);
      }
      .code-dots .dot.green {
        background: rgba(34, 197, 94, 0.7);
      }
      .code-filename {
        font-size: 0.75rem;
        color: rgba(255,255,255,0.5);
        margin-left: auto;
        font-family: 'Monaco', 'Menlo', monospace;
      }
      .modal-code-content {
        padding: 24px;
        overflow-x: auto;
        max-height: 400px;
        overflow-y: auto;
      }
      .modal-code-content pre {
        margin: 0;
        color: rgba(192, 132, 250, 0.9);
        font-size: 0.9rem;
        line-height: 1.6;
        font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .modal-gallery {
        margin: 32px 0;
      }
      .modal-gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
      }
      .modal-gallery-item {
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .modal-gallery-item:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 36px rgba(168, 85, 247, 0.4);
      }
      .modal-gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: rgba(0, 0, 0, 0.05);
        display: block;
      }
      .modal-infografia {
        margin: 32px 0;
      }
      .modal-infografia-frame {
        width: 100%;
        min-height: 540px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 24px 54px rgba(0, 0, 0, 0.35);
      }
      .modal-infografia-frame iframe {
        width: 100%;
        min-height: 540px;
        border: none;
      }
      .modal-sketchfab {
        margin: 32px 0;
      }
      .modal-sketchfab iframe {
        width: 100%;
        min-height: 520px;
        border: none;
        border-radius: 20px;
      }
      .sketchfab-embed-wrapper {
        border-radius: 20px;
        overflow: hidden;
      }
      .sketchfab-embed-wrapper p {
        color: rgba(255, 255, 255, 0.75);
      }
      .modal-container::-webkit-scrollbar {
        width: 12px;
      }
      .modal-container::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
      }
      .modal-container::-webkit-scrollbar-thumb {
        background: rgba(168, 85, 247, 0.5);
        border-radius: 6px;
      }
      .modal-container::-webkit-scrollbar-thumb:hover {
        background: rgba(168, 85, 247, 0.7);
      }
      .modal-code-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .modal-code-content::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
      }
      .modal-code-content::-webkit-scrollbar-thumb {
        background: rgba(168, 85, 247, 0.4);
        border-radius: 4px;
      }
      @media (max-width: 768px) {
        .modal-content {
          padding: 24px 20px 32px;
        }
        .modal-title {
          font-size: 1.75rem;
        }
        .modal-description {
          font-size: 0.95rem;
        }
        .modal-actions {
          flex-direction: column;
        }
        .modal-btn {
          width: 100%;
          justify-content: center;
        }
        .modal-gallery-grid {
          grid-template-columns: 1fr;
        }
      }
      .modal-infografia-frame {
        min-height: 360px;
      }
    `;
    document.head.appendChild(styles);
  }

  createModal() {
    const modalHTML = `
      <div id="projectModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-backdrop" aria-hidden="true"></div>
        <div class="modal-container">
          <button class="modal-close" aria-label="Cerrar modal" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="modal-content" id="modalContent"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('projectModal');
  }

  attachEventListeners() {
    const backdrop = this.modal.querySelector('.modal-backdrop');
    backdrop.addEventListener('click', () => this.close());

    const closeBtn = this.modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(projectId) {
    this.currentProject = PROJECTS_DATA.find(p => p.id === projectId);
    if (!this.currentProject) return;

    this.renderContent();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 200);
  }

  renderContent() {
    const p = this.currentProject;
    const modalContent = document.getElementById('modalContent');

    const awardsHTML = p.awards ? `
      <div class="modal-awards">
        <h3 class="modal-awards-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
          Certificado
        </h3>
        <p style="color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px;">
          Este certificado documenta el reconocimiento recibido por el proyecto ARKIMIA en el Concurso de Desarrollo de Apps UMNG 2025.
        </p>
        <ul class="modal-awards-list">
          ${p.awards.map(award => `<li>${award}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    const codeHTML = p.codeSnippet ? `
      <div class="modal-code-section">
        <h3 class="modal-section-title">Fragmento de Código</h3>
        <div class="modal-code-box">
          <div class="modal-code-header">
            <div class="code-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span class="code-filename">${p.category === 'programming' ? 'main.py' : 'script.js'}</span>
          </div>
          <div class="modal-code-content">
            <pre><code>${this.escapeHtml(p.codeSnippet)}</code></pre>
          </div>
        </div>
      </div>
    ` : '';

    const galleryHTML = p.galleryImages?.length > 0 ? `
      <div class="modal-gallery">
        <h3 class="modal-section-title">Galería del Proyecto</h3>
        <div class="modal-gallery-grid">
          ${p.galleryImages.map((img, i) => `
            <div class="modal-gallery-item">
              <img src="${img}" alt="${p.title} - imagen ${i + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const infografiaLink = p.infografiaLink ? new URL(p.infografiaLink, window.location.href).href : '';
    const infografiaHTML = infografiaLink ? `
      <div class="modal-infografia">
        <h3 class="modal-section-title">Infografía de Deep Fakes</h3>
        <div class="modal-infografia-frame">
          <iframe src="${infografiaLink}" title="Infografía Deep Fakes"></iframe>
        </div>
      </div>
    ` : '';

    const videoExtrasHTML = `
      ${p.additionalVideoLink ? `
        <div class="modal-video-info" style="margin: 16px 0; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="modal-section-title" style="margin-bottom: 12px;">🎬 Animación SOL Y LUNA</h3>
          <p style="color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; line-height: 1.6; margin: 0 0 16px;">
            Este recurso muestra la animación SOL Y LUNA, agregando más contexto visual al proyecto y demostrando el trabajo de producción en Unity.
          </p>
          <video controls style="width: 100%; border-radius: 16px; max-height: 500px; background: black;">
            <source src="${p.additionalVideoLink}" type="video/mp4">
            Tu navegador no soporta el elemento de video. Puedes descargarlo directamente <a href="${p.additionalVideoLink}" download style="color: #93c5fd;">aquí</a>.
          </video>
        </div>
      ` : ''}
      ${p.idleVideoLink ? `
        <div class="modal-video-info" style="margin: 16px 0; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="modal-section-title" style="margin-bottom: 12px;">🎬 Video Idles</h3>
          <p style="color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; line-height: 1.6; margin: 0 0 16px;">
            Animaciones de idles desarrolladas en Unity, integrando animación procedural para generar movimientos naturales y fluidos.
          </p>
          <video controls style="width: 100%; border-radius: 16px; max-height: 500px; background: black;">
            <source src="${p.idleVideoLink}" type="video/mp4">
            Tu navegador no soporta el elemento de video. Puedes descargarlo directamente <a href="${p.idleVideoLink}" download style="color: #93c5fd;">aquí</a>.
          </video>
        </div>
      ` : ''}
    `;

    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-meta">
          <span class="modal-badge badge-${p.badgeColor}">${p.badge}</span>
          ${p.year ? `
            <span class="modal-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              ${p.year}
            </span>
          ` : ''}
          ${p.team ? `
            <span class="modal-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              ${p.team}
            </span>
          ` : ''}
        </div>
        
        <h2 class="modal-title" id="modal-title">${p.title}</h2>
        <p class="modal-description">${p.fullDescription || p.description}</p>
        
        <div class="modal-tags">
          ${p.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>

        ${awardsHTML}
        
        <div class="modal-actions">
          ${p.githubLink ? `
            <a href="${p.githubLink}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Ver en GitHub
            </a>
          ` : ''}
          ${p.pdfLink ? `
            <a href="${p.pdfLink}" download class="modal-btn modal-btn-demo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v12"></path>
                <path d="M8 11l4 4 4-4"></path>
                <path d="M20 21H4"></path>
              </svg>
              Descargar PDF
            </a>
          ` : ''}
          ${p.id === 3 || p.id === 5 ? '' : (p.demoLink ? `
            <a href="${p.demoLink}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-demo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Ver Demo en Vivo
            </a>
          ` : '')}
        </div>
      </div>

      ${p.id === 8 ? '' : `<div class="modal-image">
        ${p.videoLink ? 
          `<video controls style="width: 100%; border-radius: 16px; max-height: 500px; background: black;">
            <source src="${p.videoLink}">
            Tu navegador no soporta el elemento de video. Puedes descargarlo directamente <a href="${p.videoLink}" download style="color: #93c5fd;">aquí</a>.
          </video>` :
          p.image && p.image.endsWith('.pdf') ? 
          `<iframe src="${p.image}" width="100%" height="500px" style="border: none; border-radius: 16px;"></iframe>` :
          `<img src="${p.image}" alt="${p.title}" loading="lazy">`
        }
        ${p.certificateLink ? `
          <div class="modal-certificate" style="margin-top: 20px; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <h3 class="modal-section-title" style="margin-bottom: 12px;">🏆 Certificado de Proyecto Ganador</h3>
            <p style="color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
              Certificado otorgado por la Facultad de Diseño de la Universidad Santo Tomás a María Daniela Cascavita Mendieta por su proyecto ganador ARKIMIA en el bloque Tecnologías Inmersivas y Videojuegos Críticos, dentro del I Encuentro de Semilleros de Investigación-Creación realizado el 9 de octubre de 2025 en Bogotá.
            </p>
            <iframe src="${p.certificateLink}" width="100%" height="360px" style="border: none; border-radius: 12px; background: #000;"></iframe>
          </div>
        ` : ''}
      </div>`}

      ${videoExtrasHTML}

      ${p.id === 3 || p.id === 5 ? '' : codeHTML}
      ${p.id === 3 || p.id === 4 || p.id === 5 || p.id === 7 || p.id === 8 ? '' : (p.infografiaLink ? infografiaHTML : galleryHTML)}
      ${p.id === 8 && p.sketchfabEmbed ? `
        <div class="modal-gallery">
          <h3 class="modal-section-title">Galería del Carro</h3>
          <div class="modal-sketchfab">
            <div class="sketchfab-embed-wrapper">
              ${p.sketchfabEmbed}
            </div>
          </div>
        </div>
      ` : ''}
      ${p.id === 8 && p.galleryImages?.length > 0 ? `
        <div class="modal-gallery">
          <h3 class="modal-section-title">Galería del Robot</h3>
          <div class="modal-gallery-grid">
            ${p.galleryImages.map((img, i) => `
              <div class="modal-gallery-item">
                <img src="${img}" alt="${p.title} - imagen ${i + 1}" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// ============================================
// 4. NAVEGACIÓN Y MENÚ MÓVIL
// ============================================
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Scroll suave en links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      }
    });
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
    }
  });
}

// ============================================
// 5. RESALTADO DE LINK ACTIVO
// ============================================
function initActiveNavLinks() {
  const navLinks = document.querySelectorAll('.main-nav a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// ============================================
// 6. SISTEMA DE FILTROS DE PROYECTOS
// ============================================
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.querySelector('.proyectos-grid');
  const projects = document.querySelectorAll('.proyecto-group');

  if (!projectsGrid || projects.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', async function() {
      const filter = this.dataset.filter;
      
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Fade out
      projectsGrid.style.opacity = '0';
      projectsGrid.style.transform = 'translateY(20px)';
      projectsGrid.style.transition = 'all 0.2s ease';
      
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Filter projects
      projects.forEach(project => {
        const category = project.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        project.style.display = shouldShow ? '' : 'none';
      });
      
      // Fade in
      projectsGrid.style.opacity = '1';
      projectsGrid.style.transform = 'translateY(0)';
    });
  });
}

// ============================================
// 7. BOTONES "VER DETALLES" DE PROYECTOS
// ============================================
function initProjectButtons() {
  const projectButtons = document.querySelectorAll('.proyecto-btn');
  
  projectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectCard = e.currentTarget.closest('.proyecto-group');
      const projectIndex = parseInt(projectCard.dataset.index);
      const projectId = PROJECTS_DATA[projectIndex]?.id;
      
      if (projectId && window.projectModal) {
        window.projectModal.open(projectId);
      }
    });
  });
}

// ============================================
// 8. EXPANDIR/CONTRAER CÓDIGO
// ============================================
function initCodeSnippets() {
  const expandButtons = document.querySelectorAll('.expand-code-btn');
  
  expandButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const container = this.closest('.code-snippet-container');
      if (!container) return;
      
      container.classList.toggle('expanded');
      const isExpanded = container.classList.contains('expanded');
      
      // Update text
      const textNodes = Array.from(this.childNodes).filter(node => node.nodeType === 3);
      if (textNodes.length > 0) {
        textNodes[0].textContent = isExpanded ? 'Ver menos' : 'Ver código completo';
      }
      
      // Rotate icon
      const icon = this.querySelector('svg');
      if (icon) {
        icon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
        icon.style.transition = 'transform 0.2s ease';
      }
    });
  });
}

// ============================================
// 9. ANIMACIONES DE SCROLL REVEAL
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.proyecto-group, .proyecto-card, .habilidad-categoria, .section');
  elements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

// ============================================
// 10. EFECTO RIPPLE EN BOTONES
// ============================================
function createRipple(e) {
  const btn = e.currentTarget || e.target;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255, 255, 255, 0.5)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple-animation 0.6s ease-out';
  ripple.style.pointerEvents = 'none';

  const size = Math.max(rect.width, rect.height) * 1.6;
  ripple.style.width = ripple.style.height = `${size}px`;

  let clientX = e.clientX;
  let clientY = e.clientY;

  if (e.type === 'keydown' || typeof clientX === 'undefined') {
    clientX = rect.left + rect.width / 2;
    clientY = rect.top + rect.height / 2;
  }

  ripple.style.left = `${clientX - rect.left - size / 2}px`;
  ripple.style.top = `${clientY - rect.top - size / 2}px`;

  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 650);
}

// Inyectar keyframes para ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal-on-scroll.reveal {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(rippleStyle);

function initRippleEffects() {
  const elements = document.querySelectorAll('.btn, .contact-pill, .pill-btn, .filter-btn, .proyecto-btn, .btn-cv');
  
  elements.forEach(el => {
    el.addEventListener('click', createRipple);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        createRipple(e);
      }
    });
  });
}

// ============================================
// 11. EFECTO MAGNÉTICO EN BOTONES
// ============================================
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn, .contact-pill, .proyecto-btn, .btn-cv');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.setProperty('--mouse-x', '0px');
      button.style.setProperty('--mouse-y', '0px');
    });
  });
}

// ============================================
// 12. CURSOR GLOW Y PROGRESO DE SCROLL
// ============================================
function initCursorAndProgress() {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  });

  const updateProgress = () => {
    const scroll = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scroll / docHeight) * 100;
    document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
  };
  
  window.addEventListener('scroll', updateProgress);
  updateProgress();
}

// ============================================
// 13. ANIMACIÓN DE PILLS
// ============================================
function initPillsAnimation() {
  const pills = document.querySelectorAll('.pill-btn');
  pills.forEach((pill, index) => {
    pill.style.animationDelay = `${index * 0.1}s`;
  });
}

// ============================================
// 14. INICIALIZACIÓN PRINCIPAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave en toda la página
  document.documentElement.style.scrollBehavior = 'smooth';
  
  console.log('%c🎨 Portfolio Daniela Cascavita', 'color: #a855f7; font-size: 20px; font-weight: bold;');
  console.log('%c✨ Inicializando...', 'color: #ec4899; font-size: 14px;');

  // Inicializar modal
  window.projectModal = new ProjectModal();
  
  // Inicializar todas las funcionalidades
  initNavigation();
  initActiveNavLinks();
  initProjectFilter();
  initProjectButtons();
  initCodeSnippets();
  initScrollAnimations();
  initRippleEffects();
  initMagneticButtons();
  initCursorAndProgress();
  initPillsAnimation();
  
  console.log('%c✅ ¡Listo! Portfolio inicializado correctamente', 'color: #10b981; font-size: 14px; font-weight: bold;');
});

// ============================================
// 15. LOG DE RENDIMIENTO
// ============================================
window.addEventListener('load', () => {
  if (window.performance) {
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    console.log(`%c⚡ Tiempo de carga total: ${loadTime}ms`, 'color: #fbbf24; font-size: 12px;');
  }
});
