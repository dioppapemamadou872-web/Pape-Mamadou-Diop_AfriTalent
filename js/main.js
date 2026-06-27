/**
 * ================================================================
 * AFRI TALENT - JAVASCRIPT PRINCIPAL
 * ================================================================
 * 
 * Fonctionnalités implémentées (selon cahier des charges) :
 * 1. Dark Mode / Light Mode avec localStorage
 * 2. Navbar dynamique qui change de style au scroll
 * 3. Bouton "Retour en haut" qui apparaît au scroll
 * 4. Compteurs animés au scroll (IntersectionObserver)
 * 5. Animation fade-in des sections au scroll (IntersectionObserver)
 * 6. Filtrage dynamique des freelances par catégorie
 * 7. Validation de formulaire de contact (regex email, 20 caractères min)
 * 8. Année dynamique dans le footer
 * 9. Modal d'inscription Bootstrap
 * 
 * ================================================================
 */

document.addEventListener('DOMContentLoaded', function() {

    // ================================================================
    // 1. DARK MODE / LIGHT MODE avec localStorage
    // ================================================================
    
    var darkModeToggle = document.getElementById('darkModeToggle');
    var body = document.body;
    
    // Vérifier si un thème est sauvegardé dans localStorage
    var savedTheme = localStorage.getItem('afritalent-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (darkModeToggle) {
            var icon = darkModeToggle.querySelector('i');
            if (icon) icon.className = 'bi bi-sun-fill';
        }
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            var isDark = body.classList.contains('dark-mode');
            var icon = this.querySelector('i');
            if (isDark) {
                icon.className = 'bi bi-sun-fill';
                localStorage.setItem('afritalent-theme', 'dark');
            } else {
                icon.className = 'bi bi-moon-stars';
                localStorage.setItem('afritalent-theme', 'light');
            }
        });
    }
    
    
    // ================================================================
    // 2. NAVBAR DYNAMIQUE AU SCROLL
    // ================================================================
    
    var navbar = document.getElementById('mainNav');
    
    function handleNavbarScroll() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }
    
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    
    
    // ================================================================
    // 3. BOUTON RETOUR EN HAUT
    // ================================================================
    
    var backToTopBtn = document.getElementById('backToTop');
    
    function handleBackToTopVisibility() {
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }
    
    if (backToTopBtn) {
        window.addEventListener('scroll', handleBackToTopVisibility);
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
    // ================================================================
    // 4. COMPTEURS ANIMÉS AU SCROLL (IntersectionObserver)
    // ================================================================
    
    var statNumbers = document.querySelectorAll('.stat-number');
    var countersStarted = false;
    
    function animateCounter(element) {
        var target = parseInt(element.getAttribute('data-target'));
        var current = 0;
        var increment = target / 50;
        var duration = 20;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration);
    }
    
    var statsObserver = new IntersectionObserver(function(entries) {
        if (!countersStarted && entries[0].isIntersecting) {
            countersStarted = true;
            statNumbers.forEach(function(stat) {
                animateCounter(stat);
            });
            statsObserver.disconnect();
        }
    }, { threshold: 0.5 });
    
    var statsContainer = document.getElementById('statsContainer');
    if (statsContainer && statNumbers.length > 0) {
        statsObserver.observe(statsContainer);
    } else if (statNumbers.length > 0) {
        var parent = statNumbers[0].closest('.row') || statNumbers[0].closest('.container');
        if (parent) {
            statsObserver.observe(parent);
        }
    }
    
    
    // ================================================================
    // 5. ANIMATION FADE-IN DES SECTIONS AU SCROLL
    // ================================================================
    
    var sectionsToAnimate = document.querySelectorAll(
        '#how-it-works, #categories, #testimonials, #cta-final, ' +
        '.values-section, .team-section, .contact-section, ' +
        '.history-section, .pricing-section, .faq-section, ' +
        '.blog-section, .inscription-page-section'
    );
    
    sectionsToAnimate.forEach(function(section) {
        section.classList.add('fade-in');
    });
    
    var fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    sectionsToAnimate.forEach(function(section) {
        fadeObserver.observe(section);
    });
    
    
    // ================================================================
    // 6. FILTRAGE DYNAMIQUE DES FREELANCES
    // ================================================================
    
    function initFreelanceFilters() {
        var filterButtons = document.querySelectorAll('.filter-btn');
        var freelanceItems = document.querySelectorAll('.freelance-item');
        var noResultsMessage = document.getElementById('noResultsMessage');
        
        if (filterButtons.length === 0) return;
        
        function filterFreelances(category) {
            var visibleCount = 0;
            
            freelanceItems.forEach(function(item) {
                var itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.classList.remove('hide');
                    visibleCount++;
                } else {
                    item.classList.add('hide');
                }
            });
            
            if (noResultsMessage) {
                if (visibleCount === 0) {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            }
        }
        
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                var category = button.getAttribute('data-category');
                filterFreelances(category);
            });
        });
    }
    
    initFreelanceFilters();
    
    
    // ================================================================
    // 7. VALIDATION DU FORMULAIRE DE CONTACT
    // ================================================================
    
    function initContactFormValidation() {
        var contactForm = document.getElementById('contactForm');
        var successMessage = document.getElementById('successMessage');
        
        if (!contactForm) return;
        
        var fields = {
            nom: {
                element: document.getElementById('nom'),
                error: document.getElementById('nomError'),
                validate: function(value) { return value.trim().length > 0; },
                message: 'Le nom est requis'
            },
            prenom: {
                element: document.getElementById('prenom'),
                error: document.getElementById('prenomError'),
                validate: function(value) { return value.trim().length > 0; },
                message: 'Le prénom est requis'
            },
            email: {
                element: document.getElementById('email'),
                error: document.getElementById('emailError'),
                validate: function(value) {
                    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return regex.test(value.trim());
                },
                message: 'Veuillez entrer une adresse email valide'
            },
            sujet: {
                element: document.getElementById('sujet'),
                error: document.getElementById('sujetError'),
                validate: function(value) { return value.trim().length > 0; },
                message: 'Veuillez sélectionner un sujet'
            },
            message: {
                element: document.getElementById('message'),
                error: document.getElementById('messageError'),
                validate: function(value) { return value.trim().length >= 20; },
                message: 'Le message doit contenir au moins 20 caractères'
            }
        };
        
        function validateField(fieldKey) {
            var field = fields[fieldKey];
            var value = field.element.value;
            var isValid = field.validate(value);
            
            if (isValid) {
                field.element.classList.remove('error');
                field.element.classList.add('success');
                field.error.textContent = '';
            } else {
                field.element.classList.add('error');
                field.element.classList.remove('success');
                field.error.textContent = field.message;
            }
            
            return isValid;
        }
        
        Object.keys(fields).forEach(function(key) {
            var field = fields[key];
            field.element.addEventListener('blur', function() {
                validateField(key);
            });
            
            field.element.addEventListener('input', function() {
                if (field.element.classList.contains('error')) {
                    var value = field.element.value;
                    if (field.validate(value)) {
                        field.element.classList.remove('error');
                        field.element.classList.add('success');
                        field.error.textContent = '';
                    }
                }
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var isValid = true;
            
            Object.keys(fields).forEach(function(key) {
                if (!validateField(key)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                contactForm.style.display = 'none';
                if (successMessage) {
                    successMessage.style.display = 'block';
                }
                
                contactForm.reset();
                Object.keys(fields).forEach(function(key) {
                    var field = fields[key];
                    field.element.classList.remove('success', 'error');
                });
                
                setTimeout(function() {
                    contactForm.style.display = 'block';
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                }, 5000);
            } else {
                var firstError = document.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });
    }
    
    initContactFormValidation();
    
    
    // ================================================================
    // 8. ANNÉE DYNAMIQUE DANS LE FOOTER
    // ================================================================
    
    var yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    
    // ================================================================
    // 9. LIEN DE NAVIGATION ACTIF
    // ================================================================
    
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        var linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else if (currentPage === 'index.html' && linkHref === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    
    // ================================================================
    // 10. MODAL D'INSCRIPTION (Bootstrap)
    // ================================================================
    
    var inscriptionModal = document.getElementById('inscriptionModal');
    if (inscriptionModal) {
        var modal = new bootstrap.Modal(inscriptionModal);
        
        var openModalBtns = document.querySelectorAll('#rejoindreBtn, #freelanceBtn, #ctaInscriptionBtn');
        openModalBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                modal.show();
            });
        });
        
        var modalButtons = inscriptionModal.querySelectorAll('.btn');
        modalButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                modal.hide();
                alert('🚀 Fonctionnalité à venir !\n\nL\'inscription complète sera bientôt disponible.');
            });
        });
    }
    
    
    // ================================================================
    // 11. TOGGLE FREELANCE / ENTREPRISE (page inscription.html)
    // ================================================================
    
    var typeOptions = document.querySelectorAll('.type-option');
    var specialiteGroup = document.getElementById('specialiteGroup');
    var entrepriseGroup = document.getElementById('entrepriseGroup');
    
    typeOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            typeOptions.forEach(function(opt) {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            
            var type = option.getAttribute('data-type');
            if (type === 'freelance') {
                if (specialiteGroup) specialiteGroup.style.display = 'block';
                if (entrepriseGroup) entrepriseGroup.style.display = 'none';
            } else if (type === 'entreprise') {
                if (specialiteGroup) specialiteGroup.style.display = 'none';
                if (entrepriseGroup) entrepriseGroup.style.display = 'block';
            }
        });
    });
    
    
    // ================================================================
    // 12. MESSAGE DE BIENVENUE DANS LA CONSOLE
    // ================================================================
    
    console.log('✅ AfriTalent - Site chargé avec succès !');
    console.log('📋 Fonctionnalités actives :');
    console.log('   - Dark Mode avec localStorage');
    console.log('   - Navbar dynamique au scroll');
    console.log('   - Bouton Retour en haut');
    console.log('   - Compteurs animés (IntersectionObserver)');
    console.log('   - Animations fade-in (IntersectionObserver)');
    console.log('   - Filtrage dynamique des freelances');
    console.log('   - Validation formulaire de contact');
    console.log('   - Modal d\'inscription Bootstrap');
    console.log('   - Année dynamique dans le footer');
    console.log('   - Lien de navigation actif');

});


// ================================================================
// 13. GESTION DES ERREURS
// ================================================================

window.addEventListener('error', function(e) {
    console.error('⚠️ Erreur détectée :', e.message);
    console.error('   - Fichier :', e.filename);
    console.error('   - Ligne :', e.lineno);
});