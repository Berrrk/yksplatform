# YKS Platform

A full-stack web application built with React, Node.js, Express, and PostgreSQL for goal management and progress tracking.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **User Authentication**: Secure login/register system with JWT tokens
- **Goal Management**: Set and update personal targets
- **Session Persistence**: Automatic login with localStorage
- **Production Ready**: Configured for deployment on Vercel (frontend) and Render (backend)

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router for navigation
- Tailwind CSS for styling
- Axios for API communication
- Context API for state management

### Backend
- Node.js with Express
- PostgreSQL database
- JWT authentication
- bcryptjs for password hashing
- CORS enabled

## 📁 Project Structure

```
yksplatform/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   └── index.css       # Tailwind CSS
│   ├── package.json
│   └── vercel.json         # Vercel deployment config
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── config.env          # Environment variables
│   ├── index.js            # Main server file
│   └── package.json
├── package.json            # Root package.json
├── render.yaml             # Render deployment config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yksplatform
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   DATABASE_URL=postgresql://username:password@localhost:5432/yksplatform
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

4. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE yksplatform;
   ```

5. **Run the application**
   ```bash
   # Development mode (runs both frontend and backend)
   npm run dev
   
   # Or run separately:
   npm run server  # Backend on port 5000
   npm run client  # Frontend on port 3000
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/target` - Update user target

## 🎨 UI Components

The application features a modern, clean design with:

- **Responsive Layout**: Works on all device sizes
- **Grid-based Sections**: Organized content layout
- **Varied Font Sizes**: Clear typography hierarchy
- **Generous Padding**: Comfortable spacing
- **Rounded Corners**: Modern aesthetic
- **Clean Theme**: Light theme with dark theme ready structure

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the React app and deploy it
4. Update the CORS origin in `server/index.js` with your Vercel domain

### Backend (Render)

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `JWT_SECRET`: Your secret key
   - `NODE_ENV`: production
5. Deploy

### Database (PostgreSQL)

You can use:
- **Render PostgreSQL**: Free tier available
- **Supabase**: Free tier with generous limits
- **Railway**: Easy PostgreSQL hosting
- **Heroku Postgres**: Reliable option

## 🔧 Development

### Available Scripts

```bash
# Root level
npm run dev          # Run both frontend and backend
npm run server       # Run backend only
npm run client       # Run frontend only
npm run install-all  # Install all dependencies

# Client (React)
cd client
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests

# Server (Node.js)
cd server
npm run dev         # Start with nodemon
npm start           # Start production server
```

### Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  target TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation with express-validator
- CORS configuration
- Environment variable management

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎯 Future Enhancements

- Dark mode toggle
- Progress tracking with charts
- Goal categories and tags
- Social features
- Email notifications
- Mobile app

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue on GitHub.

---

**Built with ❤️ using React, Node.js, and Tailwind CSS** 