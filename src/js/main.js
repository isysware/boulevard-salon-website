import '../css/global.css';
import '../css/responsive.css';
import { initNavigation } from './navigation.js';
import { initMobileMenu } from './mobile-menu.js';
import { initAnimations } from './animations.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initAnimations();
  initContactForm();
});
