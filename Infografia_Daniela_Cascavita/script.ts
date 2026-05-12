// ============================================
// TYPE DEFINITIONS
// ============================================

interface Section {
    id: string;
    label: string;
    emoji: string;
    num: string;
    accent: string;
}

// ============================================
// GLOBAL STATE
// ============================================

let currentSection: number = 0;
const totalSections: number = 5;
const sectionColors: string[] = ['#f472b6', '#06b6d4', '#a855f7', '#10b981', '#f59e0b'];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', (): void => {
    console.log('🚀 Deepfake Detection Infographic Loaded');

    initializeNavigation();
    initializeParticles();
    initializeCursorGlow();
    initializeTooltips();
    initializeAOS();
    initializeAnimations();
    initializeChart();
    initializePipelineSteps();
    initializeTypewriter();
    initializeCardTilt();
    updateTabStyles();
});

// ============================================
// NAVIGATION SYSTEM
// ============================================

function initializeNavigation(): void {
    const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
    const tabBtns = document.querySelectorAll('.tab-btn') as NodeListOf<HTMLButtonElement>;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLSpanElement>;

    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', (): void => {
        if (currentSection > 0) goToSection(currentSection - 1);
    });

    nextBtn.addEventListener('click', (): void => {
        if (currentSection < totalSections - 1) goToSection(currentSection + 1);
    });

    tabBtns.forEach((btn: HTMLButtonElement, index: number): void => {
        btn.addEventListener('click', (): void => goToSection(index));
    });

    dots.forEach((dot: HTMLSpanElement, index: number): void => {
        dot.addEventListener('click', (): void => goToSection(index));
    });

    document.addEventListener('keydown', (e: KeyboardEvent): void => {
        if (e.key === 'ArrowLeft' && currentSection > 0) {
            goToSection(currentSection - 1);
        } else if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            goToSection(currentSection + 1);
        }
    });

    updateNavigation();
}

function goToSection(index: number): void {
    const sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;

    sections.forEach((section: HTMLElement): void => {
        section.classList.remove('active', 'prev');
    });

    currentSection = index;

    setTimeout((): void => {
        const activeSection = sections[currentSection];
        if (activeSection) activeSection.classList.add('active');
    }, 50);

    updateNavigation();
    updateTabStyles();
    triggerSectionAnimations(index);

    if (typeof AOS !== 'undefined') AOS.refresh();
}

function updateNavigation(): void {
    const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLSpanElement>;
    const tabBtns = document.querySelectorAll('.tab-btn') as NodeListOf<HTMLButtonElement>;
    const currentCounter = document.querySelector('.section-counter .current') as HTMLSpanElement;

    if (!prevBtn || !nextBtn) return;

    prevBtn.disabled = currentSection === 0;
    nextBtn.disabled = currentSection === totalSections - 1;

    dots.forEach((dot: HTMLSpanElement, index: number): void => {
        dot.classList.remove('active', 'completed');
        if (index === currentSection) {
            dot.classList.add('active');
        } else if (index < currentSection) {
            dot.classList.add('completed');
        }
    });

    tabBtns.forEach((btn: HTMLButtonElement, index: number): void => {
        btn.classList.toggle('active', index === currentSection);
    });

    if (currentCounter) {
        currentCounter.textContent = (currentSection + 1).toString();
    }
}

function updateTabStyles(): void {
    const tabBtns = document.querySelectorAll('.tab-btn') as NodeListOf<HTMLButtonElement>;
    tabBtns.forEach((btn: HTMLButtonElement, index: number): void => {
        const accent: string = btn.dataset.accent || '#a855f7';
        if (index === currentSection) {
            btn.style.background = `linear-gradient(135deg, ${accent}20, ${accent}10)`;
            btn.style.border = `2px solid ${accent}`;
            btn.style.boxShadow = `0 0 20px ${accent}30`;
            btn.style.color = 'white';
        } else {
            btn.style.background = 'rgba(15, 23, 42, 0.5)';
            btn.style.border = '2px solid rgba(71, 85, 105, 0.5)';
            btn.style.boxShadow = 'none';
            btn.style.color = '#94a3b8';
        }
    });
}

// ============================================
// FLOATING PARTICLES
// ============================================

function initializeParticles(): void {
    const particlesContainer = document.getElementById('particles') as HTMLElement;
    if (!particlesContainer) return;

    const particleCount: number = 20;
    const colors: string[] = ['#f472b6', '#06b6d4', '#a855f7', '#10b981'];

    for (let i = 0; i < particleCount; i++) {
        const particle: HTMLDivElement = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top  = `${Math.random() * 100}%`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay    = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// CURSOR GLOW EFFECT
// ============================================

function initializeCursorGlow(): void {
    const cursorGlow = document.getElementById('cursorGlow') as HTMLElement;
    if (!cursorGlow) return;

    let mouseX: number = 0;
    let mouseY: number = 0;
    let glowX:  number = 0;
    let glowY:  number = 0;

    document.addEventListener('mousemove', (e: MouseEvent): void => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow(): void {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        if (cursorGlow) {
            cursorGlow.style.left = `${glowX}px`;
            cursorGlow.style.top  = `${glowY}px`;
        }
        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    document.addEventListener('mouseleave', (): void => { if (cursorGlow) cursorGlow.style.opacity = '0'; });
    document.addEventListener('mouseenter', (): void => { if (cursorGlow) cursorGlow.style.opacity = '1'; });
}

// ============================================
// BOOTSTRAP TOOLTIPS
// ============================================

function initializeTooltips(): void {
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList: HTMLElement[] = Array.from(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.forEach((tooltipTriggerEl: HTMLElement): void => {
            new (bootstrap as any).Tooltip(tooltipTriggerEl);
        });
    }
}

// ============================================
// AOS (ANIMATE ON SCROLL)
// ============================================

function initializeAOS(): void {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: false,
            mirror: true,
            offset: 50
        });
    }
}

// ============================================
// SECTION ANIMATIONS
// ============================================

function triggerSectionAnimations(sectionIndex: number): void {
    switch (sectionIndex) {
        case 1:
            animateCircularProgress();
            animateDatasetBars();
            break;
        case 3:
            animateMetricBars();
            break;
        case 4:
            startTypewriter();
            break;
    }
}

function initializeAnimations(): void {}

// ============================================
// CIRCULAR PROGRESS (Section 2)
// ============================================

function animateCircularProgress(): void {
    const progressBar = document.querySelector('#circularProgress1') as SVGCircleElement | null;
    if (!progressBar) return;

    const percent: number = 50;
    const circumference: number = 2 * Math.PI * 90;
    const offset: number = circumference - (percent / 100) * circumference;

    setTimeout((): void => {
        if (progressBar) progressBar.style.strokeDashoffset = offset.toString();
    }, 300);
}

function animateDatasetBars(): void {
    const bars = document.querySelectorAll('#section-1 .progress-fill') as NodeListOf<HTMLElement>;
    bars.forEach((bar: HTMLElement, index: number): void => {
        setTimeout((): void => {
            const width: string = bar.style.width;
            bar.style.width = '0%';
            setTimeout((): void => { bar.style.width = width; }, 50);
        }, index * 200);
    });
}

// ============================================
// METRIC BARS (Section 4)
// ============================================

function animateMetricBars(): void {
    const metricFills = document.querySelectorAll('.metric-fill') as NodeListOf<HTMLElement>;
    metricFills.forEach((fill: HTMLElement, index: number): void => {
        setTimeout((): void => {
            const percent: string | undefined = fill.dataset.percent;
            fill.style.width = '0%';
            setTimeout((): void => { fill.style.width = `${percent}%`; }, 50);
        }, index * 200);
    });
}

// ============================================
// CHART.JS (Section 4)
// ============================================

function initializeChart(): void {
    const ctx = document.getElementById('comparisonChart') as HTMLCanvasElement;
    if (!ctx || typeof Chart === 'undefined') return;

    const context = ctx.getContext('2d');
    if (!context) return;

    const gradient1 = context.createLinearGradient(0, 0, 0, 300);
    gradient1.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
    gradient1.addColorStop(1, 'rgba(168, 85, 247, 0.2)');

    const gradient2 = context.createLinearGradient(0, 0, 0, 300);
    gradient2.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
    gradient2.addColorStop(1, 'rgba(6, 182, 212, 0.2)');

    const gradient3 = context.createLinearGradient(0, 0, 0, 300);
    gradient3.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
    gradient3.addColorStop(1, 'rgba(16, 185, 129, 0.2)');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Baseline CNN', 'ResNet50', 'Our Model (MobileNetV2)'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [89.2, 94.8, 97.3],
                backgroundColor: [gradient1, gradient2, gradient3],
                borderColor: ['#a855f7', '#06b6d4', '#10b981'],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2.5,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#94a3b8',
                    borderColor: '#a855f7',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context: any): string {
                            return context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#94a3b8',
                        callback: function(value: any): string {
                            return value + '%';
                        }
                    },
                    grid: { color: 'rgba(100, 116, 139, 0.2)' }
                },
                x: {
                    ticks: { color: '#94a3b8', font: { size: 11 } },
                    grid: { display: false }
                }
            }
        }
    });
}

// ============================================
// PIPELINE STEPS (Section 3)
// ============================================

function initializePipelineSteps(): void {
    const steps = document.querySelectorAll('.pipeline-step') as NodeListOf<HTMLElement>;
    const codeBlock = document.getElementById('codeBlock') as HTMLElement;

    steps.forEach((step: HTMLElement, index: number): void => {
        step.addEventListener('click', (): void => {
            steps.forEach((s: HTMLElement): void => s.classList.remove('active'));
            step.classList.add('active');
            if (codeBlock) {
                codeBlock.style.display = 'block';
                updateCodeBlock(index);
            }
        });
    });
}

function updateCodeBlock(stepIndex: number): void {
    const codeContent = document.querySelector('.code-content code') as HTMLElement;
    if (!codeContent) return;

    const codeExamples: string[] = [
        `# Step 1: Preprocessing
import cv2
import dlib

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68.dat')

def preprocess(image):
    faces = detector(image)
    aligned = align_face(faces[0])
    normalized = cv2.resize(aligned, (224, 224))
    return normalized / 255.0`,

        `# Step 2: Frequency Analysis
from scipy.fftpack import dct

def extract_dct(image):
    # Convert to YCbCr
    ycbcr = cv2.cvtColor(image, cv2.COLOR_RGB2YCrCb)
    
    # Apply DCT to Y channel
    dct_coeffs = dct(dct(ycbcr[:,:,0].T, norm='ortho').T, norm='ortho')
    
    return dct_coeffs`,

        `# Step 3: MobileNetV2
from tensorflow.keras.applications import MobileNetV2

base_model = MobileNetV2(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze base layers
for layer in base_model.layers[:-20]:
    layer.trainable = False`,

        `# Step 4: Attention Module
class AttentionLayer(tf.keras.layers.Layer):
    def __init__(self):
        super().__init__()
        self.conv = Conv2D(1, 1, activation='sigmoid')
    
    def call(self, x):
        attention = self.conv(x)
        return x * attention`,

        `# Step 5: Classification
model = Sequential([
    base_model,
    AttentionLayer(),
    GlobalAveragePooling2D(),
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])

model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)`
    ];

    codeContent.textContent = codeExamples[stepIndex];
}

// ============================================
// TYPEWRITER EFFECT (Section 5)
// ============================================

function initializeTypewriter(): void {}

function startTypewriter(): void {
    const typewriterElement = document.getElementById('typewriterText') as HTMLElement;
    if (!typewriterElement) return;

    const text: string = 'Key Findings';
    let index: number = 0;
    typewriterElement.textContent = '';

    function type(): void {
        if (index < text.length) {
            if (typewriterElement) typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 300);
}

// ============================================
// INTERACTIVE CARD TILT (3D Effect)
// ============================================

function initializeCardTilt(): void {
    const interactiveCards = document.querySelectorAll(
        '.stat-card, .dataset-card, .insight-card, .mini-stat'
    ) as NodeListOf<HTMLElement>;

    interactiveCards.forEach((card: HTMLElement): void => {
        card.addEventListener('mousemove', (e: MouseEvent): void => {
            const rect: DOMRect = card.getBoundingClientRect();
            const x: number = e.clientX - rect.left;
            const y: number = e.clientY - rect.top;
            const centerX: number = rect.width / 2;
            const centerY: number = rect.height / 2;
            const rotateX: number = (y - centerY) / 10;
            const rotateY: number = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', (): void => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null;
    return function executedFunction(...args: Parameters<T>): void {
        const later = (): void => {
            timeout = null;
            func(...args);
        };
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// ANALYTICS
// ============================================

function trackSectionView(sectionIndex: number): void {
    console.log(`📊 Section ${sectionIndex + 1} viewed`);
}

let sectionStartTime: number = Date.now();
window.addEventListener('beforeunload', (): void => {
    const timeSpent: number = (Date.now() - sectionStartTime) / 1000;
    console.log(`⏱️ Total time spent: ${timeSpent.toFixed(2)}s`);
});

// ============================================
// TYPE DECLARATIONS FOR EXTERNAL LIBRARIES
// ============================================

declare const AOS: {
    init(options?: any): void;
    refresh(): void;
};

declare const Chart: any;
declare const bootstrap: any;
