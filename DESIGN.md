---
name: Aerodynamic Precision
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e7'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e2e2e7'
  inverse-on-surface: '#2e3034'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#efecee'
  on-tertiary: '#303032'
  tertiary-container: '#d2d0d2'
  on-tertiary-container: '#59595b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#111317'
  on-background: '#e2e2e7'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is anchored in the principles of European industrial design—specifically the "Less, but better" philosophy. It evokes the feeling of high-performance engineering, utilizing a minimalist aesthetic to highlight technical superiority. 

The target audience consists of elite athletes and tech-forward enthusiasts who value mechanical transparency and premium craftsmanship. The UI functions as a digital extension of the carbon-fiber frame: rigid, lightweight, and purposeful. By leveraging a monochrome foundation with metallic depth, the interface achieves a sophisticated, future-forward atmosphere that prioritizes clarity and speed.

## Colors

The palette is rooted in the materials of high-end cycling: carbon, steel, and titanium.

*   **Primary (Electric Blue):** A high-visibility, technical accent used sparingly for critical data points, active states, and calls to action.
*   **Deep Charcoal & Background:** The core of the dark mode interface, providing a high-contrast backdrop that makes white typography and metallic accents pop.
*   **Carbon Grey & Metallic:** Used for structural elements, dividers, and surface layers to create depth without relying on traditional shadows.
*   **White:** Reserved for high-priority typography and essential iconography to ensure maximum legibility at a glance during high-intensity activity.

## Typography

Typography is treated as an engineering component. **Hanken Grotesk** provides a sharp, contemporary edge for headlines, utilizing tight tracking to mimic the compact nature of aerodynamic racing. 

**Inter** handles body copy with neutral efficiency, ensuring readability across varied lighting conditions. A third family, **JetBrains Mono**, is introduced for "Technical Labels" (e.g., cadence, wattage, gear ratios). This monospaced choice reinforces the "instrument cluster" aesthetic of the product. Use large-scale display type on photography to create a luxury editorial feel.

## Layout & Spacing

The system uses a **Fixed Grid** model for desktop to maintain a curated, editorial look, transitioning to a fluid model for mobile devices. 

*   **Desktop:** 12-column grid with generous 64px external margins to create "breathable luxury."
*   **Rhythm:** An 8px linear scale governs all internal padding and margins.
*   **Negative Space:** Significant whitespace is required between content blocks to prevent visual clutter, reflecting the "minimalist" brand pillar. Content should often be offset or asymmetrical to create a dynamic, sporty energy.

## Elevation & Depth

This design system rejects heavy drop shadows in favor of **Tonal Layers** and **Subtle Metallic Outlines**.

*   **Surface Hierarchy:** Depth is created by shifting from the base `#0A0A0A` to `#121212` for containers.
*   **Metallic Outlines:** Rather than shadows, use 1px solid borders in `#2C2C2E` or semi-transparent white (10% opacity) to define component edges.
*   **Backdrop Blurs:** Use ultra-fine background blurs (20px-40px) on navigation bars and overlays to maintain a sense of glass-like transparency over large-scale product photography.
*   **Textures:** Subtle carbon-fiber patterns (diagonal micro-hatching) can be used on primary action containers to reinforce the physical product material.

## Shapes

The shape language is "Soft-Technical." Elements use a small **0.25rem (4px)** corner radius. This provides just enough softness to feel modern and premium, while maintaining the "hard" edge associated with precision machinery and metalwork. 

Avoid pill-shaped buttons unless used for secondary "tag" elements; primary buttons should remain rectangular with the standard soft-corner radius to maintain a rigid, structural appearance.

## Components

*   **Buttons:** Primary buttons feature a solid White background with Black text for maximum impact. Hover states introduce the Primary Electric Blue as a glow or border effect.
*   **Data Chips:** Use JetBrains Mono for text. Backgrounds should be semi-transparent Carbon Grey with a 1px metallic border.
*   **Cards:** No shadows. Use a subtle gradient from `#121212` to `#1A1A1A` and a top-edge highlight (0.5px white at 15% opacity) to simulate light hitting a machined edge.
*   **Inputs:** Minimalist underlines or thin-bordered boxes. Focus states should trigger a sharp Electric Blue stroke.
*   **Lists:** High-contrast separators using `#2C2C2E`. Data-heavy rows should use monospaced fonts for numerical values to ensure vertical alignment.
*   **Instrumentation Gauges:** Circular elements should be rendered with thin, high-precision strokes, avoiding heavy fills. Use the accent color only for the "active" portion of the gauge.