// ============================================
// GLOBAL STATE
// ============================================

let currentSection = 0;
const totalSections = 5;
const sectionColors = ['#f472b6', '#06b6d4', '#a855f7', '#10b981', '#f59e0b'];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Deepfake Detection Infographic Loaded');
    
    initializeNavigation();
    initializeParticles();
    initializeCursorGlow();
    initializeTooltips();
    initializeAOS();
    initializeAnimations();
    initializeChart();
    initializeArchitectureDiagram();
    initializeTypewriter();
    initializeCardTilt();
    updateTabStyles();
});

// ============================================
// NAVIGATION SYSTEM
// ============================================

function initializeNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const dots = document.querySelectorAll('.dot');

    prevBtn.addEventListener('click', () => {
        if (currentSection > 0) goToSection(currentSection - 1);
    });

    nextBtn.addEventListener('click', () => {
        if (currentSection < totalSections - 1) goToSection(currentSection + 1);
    });

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => goToSection(index));
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSection(index));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentSection > 0) {
            goToSection(currentSection - 1);
        } else if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            goToSection(currentSection + 1);
        }
    });

    updateNavigation();
}

function goToSection(index) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
        section.classList.remove('active', 'prev');
    });

    currentSection = index;

    setTimeout(() => {
        const activeSection = sections[currentSection];
        if (activeSection) activeSection.classList.add('active');
    }, 50);

    updateNavigation();
    updateTabStyles();
    triggerSectionAnimations(index);

    if (typeof AOS !== 'undefined') AOS.refresh();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const currentCounter = document.querySelector('.section-counter .current');

    prevBtn.disabled = currentSection === 0;
    nextBtn.disabled = currentSection === totalSections - 1;

    dots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index === currentSection) {
            dot.classList.add('active');
        } else if (index < currentSection) {
            dot.classList.add('completed');
        }
    });

    tabBtns.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentSection);
    });

    if (currentCounter) {
        currentCounter.textContent = currentSection + 1;
    }
}

function updateTabStyles() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach((btn, index) => {
        const accent = btn.dataset.accent || '#a855f7';
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

function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;
    const colors = ['#f472b6', '#06b6d4', '#a855f7', '#10b981'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// CURSOR GLOW EFFECT
// ============================================

function initializeCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0,  glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top  = `${glowY}px`;
        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    document.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursorGlow.style.opacity = '1'; });
}

// ============================================
// BOOTSTRAP TOOLTIPS
// ============================================

function initializeTooltips() {
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

// ============================================
// AOS (ANIMATE ON SCROLL)
// ============================================

function initializeAOS() {
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

function triggerSectionAnimations(sectionIndex) {
    switch (sectionIndex) {
        case 1:
            animateCircularProgress();
            animateDatasetBars();
            break;
        case 3:
            animateMetricBars();
            animateKPICounters();
            break;
        case 4:
            startTypewriter();
            break;
    }
}

function initializeAnimations() {}

// ============================================
// CIRCULAR PROGRESS (Section 2)
// ============================================

function animateCircularProgress() {
    const progressBar = document.querySelector('#circularProgress1');
    if (!progressBar) return;

    const percent = 50;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progressBar.style.strokeDashoffset = offset;
    }, 300);
}

function animateDatasetBars() {
    const bars = document.querySelectorAll('#section-1 .progress-fill');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = width; }, 50);
        }, index * 200);
    });
}

// ============================================
// METRIC BARS (Section 4)
// ============================================

function animateMetricBars() {
    // New rm-fill bars
    const fills = document.querySelectorAll('.rm-fill');
    fills.forEach((fill, i) => {
        const w = fill.dataset.w || '0';
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = `${w}%`; }, 100 + i * 150);
    });
    // Legacy metric-fill support (other sections)
    const legacy = document.querySelectorAll('.metric-fill');
    legacy.forEach((fill, i) => {
        const percent = fill.dataset.percent || '0';
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = `${percent}%`; }, 50 + i * 200);
    });
}

// ============================================
// KPI COUNTERS (Section 4)
// ============================================

function animateKPICounters() {
    const kpiValues = document.querySelectorAll('.kpi-value[data-target]');
    kpiValues.forEach((el, i) => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const delay = i * 80;
        const start = performance.now() + delay;
        function step(now) {
            const elapsed = Math.max(0, now - start);
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = (target * eased).toFixed(1);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
}

// ============================================
// CHART.JS (Section 4)
// ============================================

function initializeChart() {
    const ctx = document.getElementById('comparisonChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const context = ctx.getContext('2d');

    // Per-model gradients
    function mkGrad(r, g, b) {
        const g1 = context.createLinearGradient(0, 0, 0, 220);
        g1.addColorStop(0, `rgba(${r},${g},${b},0.85)`);
        g1.addColorStop(1, `rgba(${r},${g},${b},0.18)`);
        return g1;
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Accuracy', 'Precision', 'Recall', 'F1-Score'],
            datasets: [
                {
                    label: 'Baseline CNN',
                    data: [89.2, 87.5, 88.9, 88.2],
                    backgroundColor: mkGrad(168, 85, 247),
                    borderColor: '#a855f7',
                    borderWidth: 1.5,
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'ResNet-50',
                    data: [94.8, 93.1, 94.2, 93.6],
                    backgroundColor: mkGrad(6, 182, 212),
                    borderColor: '#06b6d4',
                    borderWidth: 1.5,
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Ours (MobileNetV2)',
                    data: [97.3, 96.8, 97.6, 97.2],
                    backgroundColor: mkGrad(16, 185, 129),
                    borderColor: '#10b981',
                    borderWidth: 1.5,
                    borderRadius: 6,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        font: { size: 10 },
                        boxWidth: 10,
                        padding: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#94a3b8',
                    borderColor: '#a855f7',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: function(ctx) { return `  ${ctx.dataset.label}: ${ctx.parsed.y}%`; }
                    }
                }
            },
            scales: {
                y: {
                    min: 80,
                    max: 100,
                    ticks: {
                        color: '#64748b',
                        font: { size: 9 },
                        callback: function(v) { return v + '%'; }
                    },
                    grid: { color: 'rgba(100,116,139,0.12)' }
                },
                x: {
                    ticks: { color: '#94a3b8', font: { size: 9 } },
                    grid: { display: false }
                }
            }
        }
    });
}

// ============================================
// ARCHITECTURE HOTSPOT DIAGRAM (Section 3)
// ============================================

const NODE_DATA = {
    input: {
        icon: '<i class="bi bi-image-fill"></i>',
        iconBg: 'rgba(168,85,247,0.15)',
        iconColor: 'var(--purple)',
        title: 'Input Image',
        tag: 'Entry point',
        tagStyle: 'background:rgba(168,85,247,0.15);color:var(--purple);border-color:rgba(168,85,247,0.3)',
        body: 'Face images are resized to <strong>256×256 pixels</strong> and normalized to [0, 1]. MTCNN or RetinaFace is used for face detection and alignment before feeding images into the dual-branch pipeline. Each image enters both branches simultaneously — no information is shared between them at this stage.',
        badges: ['256×256 px', 'RGB normalized', 'MTCNN detection']
    },
    mobilenet: {
        icon: '<i class="bi bi-diagram-3"></i>',
        iconBg: 'rgba(168,85,247,0.15)',
        iconColor: 'var(--purple)',
        title: 'MobileNetV2 Backbone',
        tag: 'Spatial feature branch',
        tagStyle: 'background:rgba(168,85,247,0.15);color:var(--purple);border-color:rgba(168,85,247,0.3)',
        body: 'Pretrained on ImageNet, <strong>MobileNetV2</strong> uses inverted residual blocks with linear bottlenecks to extract high-level spatial features. The first 100 layers are frozen during Phase 1 training. After Global Average Pooling, a <strong>Dense(128, ReLU)</strong> layer produces the spatial feature vector for fusion.',
        badges: ['ImageNet weights', '2.4M params', 'Dense(128, ReLU)', 'Phase 1 frozen']
    },
    freq: {
        icon: '<i class="bi bi-soundwave"></i>',
        iconBg: 'rgba(6,182,212,0.15)',
        iconColor: 'var(--cyan)',
        title: 'FrequencyAnalyzer',
        tag: 'Frequency-domain branch',
        tagStyle: 'background:rgba(6,182,212,0.12);color:var(--cyan);border-color:rgba(6,182,212,0.3)',
        body: 'Converts grayscale images to the frequency domain via a <strong>2D Fast Fourier Transform (FFT)</strong>. The log-magnitude spectrum reveals GAN-generated texture artifacts invisible in the pixel domain. A <strong>Conv2D + BatchNorm</strong> block then encodes the spectral map into a compact feature vector.',
        badges: ['2D FFT', 'Log-magnitude', 'Conv2D + BN', 'GAN artifact detection']
    },
    attention: {
        icon: '<i class="bi bi-eye-fill"></i>',
        iconBg: 'rgba(244,114,182,0.15)',
        iconColor: 'var(--pink)',
        title: 'Attention Module',
        tag: 'Feature fusion & weighting',
        tagStyle: 'background:rgba(244,114,182,0.12);color:var(--pink);border-color:rgba(244,114,182,0.3)',
        body: 'A <strong>channel-wise attention mechanism</strong> computes scalar weights for each feature channel via global average pooling followed by two dense layers (squeeze-and-excitation style). This lets the model dynamically prioritize spatial vs. frequency signals, focusing on facial regions most indicative of manipulation — eyes, mouth, and skin boundaries.',
        badges: ['Squeeze-and-excitation', 'Adaptive weighting', 'Spatial + freq fusion']
    },
    output: {
        icon: '<i class="bi bi-check2-circle"></i>',
        iconBg: 'rgba(16,185,129,0.15)',
        iconColor: 'var(--green)',
        title: 'Classification Head',
        tag: 'Binary output',
        tagStyle: 'background:rgba(16,185,129,0.12);color:var(--green);border-color:rgba(16,185,129,0.3)',
        body: 'The fused feature vector passes through a <strong>Dense(64, ReLU) → Dropout(0.3) → Dense(1, Sigmoid)</strong> chain. Output is a probability in [0, 1]: values below 0.5 indicate <em>Real</em>, above 0.5 indicate <em>Fake</em>. The model achieves <strong>97.3% validation accuracy</strong> on the FaceForensics++ benchmark.',
        badges: ['Dense(64) → Dense(1)', 'Sigmoid output', '97.3% val. accuracy', 'Binary cross-entropy']
    }
};

function initializeArchitectureDiagram() {
    const hotspots = document.querySelectorAll('.hotspot');
    const infoDefault = document.getElementById('archInfoDefault');
    const infoContent = document.getElementById('archInfoContent');
    const infoIcon    = document.getElementById('archInfoIcon');
    const infoTitle   = document.getElementById('archInfoTitle');
    const infoTag     = document.getElementById('archInfoTag');
    const infoBody    = document.getElementById('archInfoBody');
    const infoBadges  = document.getElementById('archInfoBadges');
    const infoVisual  = document.getElementById('archInfoVisual');

    if (!hotspots.length) return;

    hotspots.forEach(node => {
        node.addEventListener('click', () => {
            const key = node.dataset.node;
            const data = NODE_DATA[key];
            if (!data) return;

            // Toggle active on nodes
            hotspots.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            // Build badges HTML
            const badgesHtml = (data.badges || [])
                .map(b => `<span class="arch-info-badge">${b}</span>`)
                .join('');

            // Populate panel
            infoIcon.innerHTML  = data.icon;
            infoIcon.style.cssText = `background:${data.iconBg};color:${data.iconColor}`;
            infoTitle.textContent = data.title;
            infoTag.textContent   = data.tag;
            infoTag.style.cssText = data.tagStyle;
            infoBody.innerHTML    = data.body;
            infoBadges.innerHTML  = badgesHtml;
            if (infoVisual) infoVisual.innerHTML = getNodeVisual(key);

            // Animate in
            if (infoDefault) infoDefault.style.display = 'none';
            infoContent.style.display = 'flex';
            infoContent.style.animation = 'none';
            requestAnimationFrame(() => {
                infoContent.style.animation = 'infoReveal 0.4s cubic-bezier(0.22,1,0.36,1)';
            });
        });
    });
}

// Build a thematic visualization for each architecture node
function getNodeVisual(key) {
    switch (key) {
        case 'input':
            return `
                <div class="viz-input">
                    <div class="viz-face">
                        <div class="viz-face-mouth"></div>
                        <div class="viz-crop"></div>
                    </div>
                    <div class="viz-caption">224 × 224 face crop</div>
                </div>`;

        case 'mobilenet': {
            let bars = '';
            for (let i = 0; i < 8; i++) bars += '<div class="viz-cnn-layer"></div>';
            return `<div class="viz-cnn">${bars}</div>`;
        }

        case 'freq': {
            const heights = [25, 55, 38, 80, 62, 95, 48, 72, 35, 88, 58, 42, 76, 30, 65, 50, 82, 45];
            const bars = heights.map((h, i) =>
                `<div class="viz-fft-bar" style="height:${h}%;animation-delay:${i * 0.07}s"></div>`
            ).join('');
            return `<div class="viz-fft">${bars}</div>`;
        }

        case 'attention': {
            let cells = '';
            for (let i = 0; i < 36; i++) {
                const delay = (Math.random() * 2.5).toFixed(2);
                cells += `<div class="viz-attn-cell" style="animation-delay:${delay}s"></div>`;
            }
            return `<div class="viz-attn">${cells}</div>`;
        }

        case 'output':
            return `
                <div class="viz-output">
                    <div class="viz-out-row">
                        <span class="viz-out-label">REAL</span>
                        <div class="viz-out-bar"><div class="viz-out-fill real" style="width:92%"></div></div>
                        <span class="viz-out-pct">0.92</span>
                    </div>
                    <div class="viz-out-row">
                        <span class="viz-out-label">FAKE</span>
                        <div class="viz-out-bar"><div class="viz-out-fill fake" style="width:8%"></div></div>
                        <span class="viz-out-pct">0.08</span>
                    </div>
                    <div class="viz-out-verdict">✓ Authentic — 92% confidence</div>
                </div>`;

        default:
            return '';
    }
}

// ============================================
// TYPEWRITER EFFECT (Section 5)
// ============================================

function initializeTypewriter() {}

function startTypewriter() {
    const typewriterElement = document.getElementById('typewriterText');
    if (!typewriterElement) return;

    const text = 'Key Findings';
    let index = 0;
    typewriterElement.textContent = '';

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 300);
}

// ============================================
// INTERACTIVE CARD TILT (3D Effect)
// ============================================

function initializeCardTilt() {
    const interactiveCards = document.querySelectorAll(
        '.stat-card, .dataset-card, .insight-card, .mini-stat'
    );

    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// ANALYTICS
// ============================================

function trackSectionView(sectionIndex) {
    console.log(`📊 Section ${sectionIndex + 1} viewed`);
}

let sectionStartTime = Date.now();
window.addEventListener('beforeunload', () => {
    const timeSpent = (Date.now() - sectionStartTime) / 1000;
    console.log(`⏱️ Total time spent: ${timeSpent.toFixed(2)}s`);
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c🎓 Deepfake Detection Infographic', 'color: #a855f7; font-size: 24px; font-weight: bold;');
console.log('%cUniversidad Militar Nueva Granada', 'color: #06b6d4; font-size: 14px;');
console.log('%cAuthors: D. Cascavita-Mendieta, A. Paez-Barajas, D. Renza', 'color: #94a3b8; font-size: 12px;');
console.log('%c\n📊 Tech Stack:', 'color: #10b981; font-size: 14px; font-weight: bold;');
console.log('• HTML5\n• CSS3 (Custom + Bootstrap 5)\n• JavaScript (Vanilla)\n• Chart.js\n• AOS (Animate On Scroll)\n• Bootstrap Icons');
console.log('%c\n💡 Tip: Use ← → arrow keys to navigate!', 'color: #f59e0b; font-size: 12px;');
