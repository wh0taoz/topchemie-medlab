# Component Guidance - Topchemie Medlab

## 📂 Component Structure

### Blocks (Custom Components)
**Path:** `src/components/blocks/`

#### Navigation Components
- **`topchemie-navbar.tsx`** - Main navigation bar (desktop & mobile)
- **`shadcnblocks-com-navbar1.tsx`** - Alternative desktop navigation bar
- **`curved-menu.tsx`** - Mobile/phone navigation menu

#### UI Elements
- **`button-ui.tsx`** - Custom button variations and styles
- **`profile-card.tsx`** - Product/service cards for displaying items

#### Feature Sections
- **`features-8.tsx`** - "O Nama" (About Us) feature block
- **`feature-sections.tsx`** - 3-circle feature blocks for highlighting services

#### Footer Components
- **`footer-7.tsx`** - Main footer component with social links, sections, and legal information

### UI Components (Shadcn/UI)
**Path:** `src/components/ui/`

#### Form & Input
- **`input.tsx`** - Input fields and search bars
- **`label.tsx`** - Form labels
- **`checkbox.tsx`** - Checkbox inputs
- **`text.tsx`** - Text styling component

#### Navigation & Layout
- **`navigation-menu.tsx`** - Navigation menu structure
- **`accordion.tsx`** - Collapsible content sections
- **`sheet.tsx`** - Side panels and drawers
- **`separator.tsx`** - Visual dividers

#### Interactive Elements
- **`Button.tsx`** - Standard button component
- **`dialog.tsx`** - Modal dialogs
- **`dropdown-menu.tsx`** - Dropdown menus
- **`popover.tsx`** - Popover tooltips
- **`hover-card.tsx`** - Hover information cards

#### Display Components
- **`card.tsx`** - Card containers
- **`carousel.tsx`** - Image/content carousels
- **`avatar.tsx`** - User/profile avatars
- **`badge.tsx`** - Status badges and labels
- **`alert.tsx`** - Alert notifications
- **`progress.tsx`** - Progress bars

## 🎯 Usage Recommendations

### For Medical Lab Website:
1. **Navigation:** Use `topchemie-navbar` for main navigation (responsive design)
2. **Services:** Implement `feature-sections` for highlighting lab services
3. **About Section:** Use `features-8` for company information
4. **Products/Tests:** Utilize `profile-card` for displaying medical tests
5. **Forms:** Combine `input`, `label`, `Button` for contact/appointment forms
6. **Information:** Use `card`, `alert`, and `dialog` for displaying test results and information
7. **Footer:** Use `footer-7` for site footer with contact information, social links, and legal pages

## 📋 Implementation Notes
- All components are pre-configured with Tailwind CSS
- Components follow shadcn/ui design patterns
- Custom blocks are ready for immediate use
- UI components can be combined to create complex interfaces

## 🔗 Dependencies
All components have their required dependencies installed:
- Tailwind CSS
- Radix UI primitives
- React Hook Form (for forms)
- Various animation libraries

Ready for implementation! 🚀