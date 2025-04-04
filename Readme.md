# 🌿 PlantPal - Capstone Project


## 📋 Project Idea
**PlantPal** is a plant care and management app designed to help users track their plants' health, get personalized care tips, and trade or purchase plants via a community marketplace. The app features user authentication, CRUD operations for plant management, and an intuitive interface for beginners.

# 🌟 Key Features
# 1. User Profiles & Personalization
Customizable profiles:
Users can create profiles with a bio and profile picture.
Select preferred plant types (indoor, succulents, herbs, etc.).
Plant collection:
Users can add plants to their collection with details like species, nickname, and date acquired.


# 2. Plant Care & Tracking
Plant care tips:
AI-powered suggestions for watering, sunlight, and fertilization based on species and environment.
Users can add custom tips and notes.
Automated reminders:
Notifications for watering, pruning, and repotting schedules.
Health monitoring:
Users can upload images of plants to diagnose common issues (yellow leaves, pests).


# 3. Community & Knowledge Sharing
Discussion forums:
Categories like Plant Diseases, Propagation Tips, and Hydroponics.
Upvote, comment, and share posts.
Blog section:
Users can write articles about plant care techniques and experiences.
Admin can feature top posts.
Plant ID feature:
Upload a plant picture to get species identification using an external API.


# 4. Marketplace for Plant Enthusiasts
Buying and selling:
Users can list plants, seeds, or tools for sale.
Integration with Stripe and PayPal for secure payments.
Wishlist & Favorites:
Save plants or accessories for future purchase.
Reviews and ratings:
Leave feedback for sellers and buyers.


# 5. Security & Authentication
Authentication:
Email/password and Google OAuth sign-in.
JWT-based authentication for secure API access.
Two-Factor Authentication (2FA):
OTP-based verification for enhanced security.
Role-based access:
Admin, Seller, Buyer, and Guest roles.


# 6. Admin Dashboard
User management:
View, edit, and delete user accounts.
Manage user roles and permissions.
Content moderation:
Approve or remove community posts and comments.
Handle reports of inappropriate content.
Analytics:
Dashboard for tracking user activity, sales, and top-rated tips.


# 7. Tech Stack
Frontend:
React.js (Vite): For a fast and reactive UI.
Redux Toolkit: For state management.
Tailwind CSS: For clean and responsive styling.
Backend:
Node.js & Express.js: For API and server-side logic.
MongoDB + Mongoose: For managing user data, plants, and sales.
JWT & OAuth: For secure authentication.
Deployment & DevOps:
Frontend: Vercel.
Backend: Render.
Testing: Bruno for unit testing.
Docker: For containerized deployments.



# 🗓️ Development Timeline (4 Weeks)
Week 1: Core Setup & Authentication
Day 1-2: Project setup:
Initialize full stack and GitHub repo.
Install Tailwind CSS and configure Vite.
JWT-based authentication and Google OAuth.
Day 3-4: User Profiles:
Profile creation with bio, picture, and plant preferences.
Day 5-7: Plant Collection:
CRUD for adding, editing, and deleting plants.
Week 2: Plant Care & Community Features
Day 8-9: Care Tips & Reminders:
AI-powered care tips API integration.
Notification system for reminders.
Day 10-11: Community Forum:
Setup discussion boards and blog sections.
Day 12-14: Security Enhancements:
Implement 2FA and role-based access control.
Week 3: Marketplace & Testing
Day 15-16: Sales & Marketplace:
Setup product listings and payment integration.
Day 17-18: Notifications:
Email and in-app alerts for messages and sales.
Day 19-20: Testing:
Write at least 5 unit tests with Bruno.
Week 4: Deployment & Final Touches
Day 21-23: Security & Optimization:
Data encryption and API security.
Mobile responsiveness testing.
Day 24-26: User Testing & UI Polish:
Beta testing and gather feedback.
Day 27-28: Deployment:
Deploy frontend on Vercel and backend on Render.