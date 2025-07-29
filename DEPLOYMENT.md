# Deployment Guide

This guide will help you deploy the YKS Platform to production using Vercel for the frontend and Render for the backend.

## Prerequisites

- GitHub account
- Vercel account (free)
- Render account (free)
- PostgreSQL database (Render, Supabase, or Railway)

## Step 1: Prepare Your Repository

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Ensure your repository structure is correct**
   ```
   yksplatform/
   ├── client/          # React frontend
   ├── server/          # Node.js backend
   ├── package.json     # Root package.json
   ├── render.yaml      # Render configuration
   └── README.md
   ```

## Step 2: Deploy Backend to Render

### 2.1 Create a Web Service

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `yksplatform-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: Free

### 2.2 Set Environment Variables

In the Render dashboard, go to your service and add these environment variables:

```
NODE_ENV=production
PORT=10000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

### 2.3 Database Setup

**Option A: Render PostgreSQL (Recommended)**
1. Create a new PostgreSQL service in Render
2. Copy the connection string
3. Use it as your `DATABASE_URL`

**Option B: Supabase**
1. Create a free account at [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string

**Option C: Railway**
1. Create a free account at [Railway](https://railway.app/)
2. Create a new PostgreSQL database
3. Copy the connection string

### 2.4 Deploy

1. Click "Create Web Service"
2. Wait for the build to complete
3. Note your service URL (e.g., `https://yksplatform-backend.onrender.com`)

## Step 3: Deploy Frontend to Vercel

### 3.1 Connect Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### 3.2 Set Environment Variables

Add these environment variables in Vercel:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

### 3.3 Update CORS Configuration

In your `server/index.js`, update the CORS origin:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-frontend-domain.vercel.app' 
    : 'http://localhost:3000',
  credentials: true
}));
```

### 3.4 Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be available at `https://your-project.vercel.app`

## Step 4: Test Your Deployment

1. **Test the backend API**
   ```bash
   curl https://your-backend-url.onrender.com/api/health
   ```

2. **Test the frontend**
   - Visit your Vercel URL
   - Try registering a new user
   - Test login functionality
   - Verify the dashboard works

## Step 5: Custom Domain (Optional)

### Vercel Custom Domain
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### Render Custom Domain
1. Go to your Render service settings
2. Click "Custom Domains"
3. Add your domain
4. Configure DNS records

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your backend CORS origin matches your frontend URL
   - Check that the frontend is making requests to the correct backend URL

2. **Database Connection Issues**
   - Verify your `DATABASE_URL` is correct
   - Ensure your database is accessible from Render
   - Check if your database requires SSL

3. **Build Failures**
   - Check the build logs in Vercel/Render
   - Ensure all dependencies are properly installed
   - Verify your package.json scripts are correct

4. **Environment Variables**
   - Double-check all environment variables are set correctly
   - Ensure no typos in variable names
   - Restart your services after changing environment variables

### Debugging

1. **Check Render Logs**
   - Go to your Render service
   - Click "Logs" to see real-time logs

2. **Check Vercel Logs**
   - Go to your Vercel project
   - Click "Functions" to see serverless function logs

3. **Test API Endpoints**
   ```bash
   # Test health endpoint
   curl https://your-backend-url.onrender.com/api/health
   
   # Test registration
   curl -X POST https://your-backend-url.onrender.com/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username":"test","password":"password123"}'
   ```

## Security Considerations

1. **JWT Secret**
   - Use a strong, random JWT secret
   - Never commit secrets to your repository
   - Rotate secrets regularly

2. **Database Security**
   - Use strong database passwords
   - Enable SSL connections
   - Restrict database access to your application only

3. **Environment Variables**
   - Keep all secrets in environment variables
   - Never expose secrets in client-side code
   - Use different secrets for development and production

## Monitoring

1. **Set up monitoring**
   - Enable Render's built-in monitoring
   - Set up Vercel Analytics
   - Monitor your database performance

2. **Set up alerts**
   - Configure uptime monitoring
   - Set up error tracking
   - Monitor API response times

## Cost Optimization

1. **Free Tier Limits**
   - Render: 750 hours/month for free tier
   - Vercel: Generous free tier
   - Supabase: 500MB database, 50MB bandwidth

2. **Scaling Considerations**
   - Monitor your usage
   - Upgrade plans as needed
   - Consider caching strategies

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the logs in your deployment platforms
3. Check the GitHub issues for common problems
4. Contact support for your hosting platforms

---

**Happy Deploying! 🚀** 