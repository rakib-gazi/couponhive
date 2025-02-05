# CouponHive: A Coupon Collecting Application

**Live URL:** [CouponHive Live](https://couponhive.netlify.app/)

---

## **Project Purpose**

Discount PRO is a single-page application designed to make it easy for users in Bangladesh to find and use discount coupons for popular e-commerce shops. The application collects and organizes coupons from various brands, allowing users to explore available offers, copy coupon codes, and save money effortlessly.

---

## **Key Features**

### **Authentication System**

- **Firebase Authentication**: Supports email/password and Google authentication.
- **Private Routes**: Ensures only logged-in users can access certain features like viewing brand coupons or user profiles.
- **Password Validation**: User  must be use minimum 6 character, 1 uppercase, 1 lowercase.

### **User Dashboard**

- View and update profile information, including name and profile photo.
- Access personalized coupons and brand details.

### **Coupon Management**

- Displays brand coupons in a card format with detailed information ( discount amount, expiry date, and conditions).
- **Copy Code**: Easily copy coupon codes using the `react-copy-to-clipboard` package.
- **Use Now**: Redirects users to the respective shop link to apply the coupon.

### **Dynamic Pages**

- **Home Page**:
  - Interactive banner slider.
  - Top brands displayed with a React Fast Marquee carousel.
  - Brand cards highlighting sales and coupons.
- **Brands Page**:
  - Displays all brands with search functionality.
  - Highlights sale brands with animated text.

### **Additional Features**

- **Forgot Password**: Users can reset their password securely.
- **404 Page**: A user-friendly error page with navigation back to the homepage.
- **Animations**: Integrated animations using `AOS` for a dynamic user experience.

### **Responsiveness**

- Fully responsive across mobile, tablet, and desktop devices.

---

## **Tech Stack**

### **Frontend**

- **React**: For building a dynamic single-page application.
- **Tailwind CSS**: For rapid and responsive UI development.
- **React Router**: For route management.
- **AOS**: For animations on scroll.

### **Backend**

- **Firebase**:
  - Authentication for login and registration.
  - Secure environment variables for Firebase configuration.

### **NPM Packages Used**

1. `react-router-dom`: For routing.
2. `firebase`: For authentication and user management.
3. `react-copy-to-clipboard`: For copying coupon codes.
4. `react-fast-marquee`: For creating the scrolling marquee.
5. `aos`: For scroll-based animations.

---

### **Thank You**