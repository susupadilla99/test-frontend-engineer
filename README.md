# Submission for Playa3ull Frontend Developer Take-Home Test
# E-Commerce Web Application

# Live Demo

This web application has been deployed live via [Vercel](https://vercel.com/). You can access it here:

https://test-frontend-engineer-daniel-le.vercel.app/

## Features 

### Functional Requirements

Develop a responsive e-commerce web application that allows users to browse products, view product details, and add products to a shopping cart.
The application should integrate with a backend API to fetch product data.

- **Product Listing Page:** Displays a list of products with images, names, rating and prices

- **Product Detail Page:** Shows detailed product information, including an "Add to Cart" button

- **Shopping Cart:**
    - Allows users to view added products.
    - Displays total price and quantity.
    - Enables users to remove items.

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

## Technical Implementation

- **Framework & Libraries:**
    - Built with Next.js and TypeScript.
    - Styled using Tailwind CSS for a responsive and modern UI.
    - UI components designed with the [Flowbite](https://flowbite.com/) design library

- **State Management:**
    - Utilizes React Hooks for managing cart state efficiently.

- **API Integration:**
    - Fetches product data from [Fake Store API](https://fakestoreapi.com/).

- **Database & Backend:**
    - Uses Supabase as a PostgreSQL database.
    - Currently utilized for shopping cart implementation.
    - Future expansion planned for user accounts and authentication.

- **Code Quality:**
    - Follows SOLID principles and design patterns.
    - Code is modular, reusable, and maintainable.

### Technical

- **Frameworks & Libraries**
    - **Next.js** with **TypeScript**.
    - Style components using **Tailwind CSS**.

- **State Management**
    - Manage application state efficiently.

- **TypeScript**
    - Use TypeScript for type-checking and code quality.
    - 
- **API Integration**
    - Fetch data from a provided RESTful API endpoint.
    - Handle loading states and error handling gracefully.
    - API should be typed using TypeScript.

- **Code Quality**
    - Apply **SOLID principles** and design patterns.
    - Write consistent, clean, maintainable, and scalable code.
    - Create universal and reusable UI components.

- **Testing**
    - Write unit tests for critical components (optional).


## Installation & Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or later)
- npm or yarn or pnpm

### Steps to Run Locally

1. Clone the repository:

```
git clone https://github.com/susupadilla99/test-frontend-engineer
cd test-frontend-engineer
```

2. Install dependencies:

```npm install``` or ```yarn``` or ```pnpm install```

3. Run the development server:

```npm run dev``` or ```yarn run dev``` or ```pnpm run dev```

4. Open http://localhost:3000 in your browser.

## Thought Process & Architectural Decisions

### UI/UX Considerations

- Used Tailwind CSS and Flowbite for a clean and modern design.
- Ensured the UI is fully responsive and mobile-friendly.
- Implemented smooth transitions and animations for better user experience.

### API Handling

- Used the Fake Store API to simulate a real e-commerce backend.

### Database & Backend

- Supabase was chosen as a backend to store shopping cart data.
- Plans to extend it for user authentication and account management.
- Plans to utilize Supabase GraphQL as well but skipped due to time constraint

### Trade-offs & Assumptions

- Chose pagination over infinite scrolling for better performance.
- Did not implement authentication or checkout due to time constraints but will expand upon this in future iterations.

### Future Enhancements

- GraphQL for better API interactions.
- Authentication for user accounts and order tracking using Supabase.
- Checkout Process to complete purchases.
- SEO Enhancements to improve visibility in search engines.
- UI improvements to all pages, including:
    - A Footer element for all pages
    - A better visual cue when cart items are added
    - A more engaging home page

## Author

Daniel Le

## License

This project is open-source and available under the MIT License.
