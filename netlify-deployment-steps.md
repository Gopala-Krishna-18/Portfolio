# Netlify Deployment Steps

## Method 1: Using the Netlify Website (Recommended for first-time users)

1. **Create a Netlify Account**
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up using your GitHub account or email

2. **Deploy Your Site**
   - From the Netlify dashboard, click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account if prompted
   - Select your "Portfolio" repository

3. **Configure Build Settings**
   - Set the following options in the deploy settings:
     - **Base directory**: (leave blank)
     - **Build command**: `cd client && npm run build`
     - **Publish directory**: `client/build`

4. **Deploy Site**
   - Click "Deploy site"
   - Netlify will build and deploy your site automatically
   - You'll be given a random URL like `https://random-name-123456.netlify.app`

5. **Customize Your Domain (Optional)**
   - From your site's dashboard, go to "Domain settings"
   - You can either:
     - Change the Netlify subdomain name
     - Add a custom domain you own

## Method 2: Using the Netlify CLI (For advanced users)

If you prefer using the command line:

1. **Install Netlify CLI**
   ```
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```
   netlify login
   ```

3. **Initialize Netlify in your project**
   ```
   netlify init
   ```

4. **Configure deployment settings**
   - Select "Create & configure a new site"
   - Follow the prompts to link your GitHub repository
   - Configure the build settings as shown in Method 1

5. **Deploy your site**
   ```
   netlify deploy --prod
   ```

## After Deployment

1. Your site will be live at the Netlify URL provided
2. Any future pushes to your GitHub repository will trigger automatic redeployments
3. You can configure additional settings in the Netlify dashboard:
   - Environment variables
   - Form submissions
   - Serverless functions
   - Custom domains and HTTPS
   - Redirect rules 