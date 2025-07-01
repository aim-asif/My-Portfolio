# Dashboard System Documentation

## Overview
This portfolio website now includes a complete dashboard system for managing content dynamically. The dashboard allows you to add, edit, and delete content that will be displayed on your website.

## Features

### 🔐 Authentication
- Simple login system (demo credentials)
- Session persistence using localStorage
- Secure logout functionality

### 📊 Dashboard Features
- **Statistics Overview**: View total contents, images, videos, and companies
- **Content Management**: Add, edit, and delete content
- **Real-time Updates**: Changes reflect immediately on the website
- **Responsive Design**: Works on all devices

### 📝 Content Management
- **Bengali Support**: Full Bengali text input for titles and content
- **Multiple Categories**: Awareness, Sales, Story, Promotion, Educational, Entertainment
- **Content Types**: Image and Video support
- **Rich Metadata**: Company, client, tags, and date tracking
- **Statistics Tracking**: Views and likes tracking

## How to Use

### 1. Access Dashboard
- Navigate to `/dashboard` or click "ড্যাশবোর্ড" in the navbar
- Login with demo credentials:
  - Username: `admin`
  - Password: `admin123`

### 2. Add New Content
1. Click "Add New Content" button
2. Fill in the form:
   - **Title**: Enter content title in Bengali
   - **Content**: Enter detailed description in Bengali
   - **Company**: Company name
   - **Client/Department**: Client or department name
   - **Category**: Select appropriate category
   - **Type**: Choose Image or Video
   - **Tags**: Enter tags separated by commas
3. Click "Add Content"

### 3. Edit Content
1. Find the content in the dashboard list
2. Click the edit (pencil) icon
3. Modify the content as needed
4. Click "Update Content"

### 4. Delete Content
1. Find the content in the dashboard list
2. Click the delete (trash) icon
3. Confirm deletion

### 5. View on Website
- All content automatically appears on `/contents` page
- Content is searchable and filterable
- Click on any content card to view full details

## Technical Details

### Data Storage
- Currently uses localStorage for demo purposes
- Ready for database integration (API routes prepared)
- Data persists across browser sessions

### File Structure
```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard main page
│   ├── contents/
│   │   ├── page.tsx          # Contents listing page
│   │   └── [id]/
│   │       └── page.tsx      # Content detail page
│   └── api/
│       └── contents/
│           └── route.ts      # API endpoints
└── components/
    └── Navbar.tsx            # Updated with dashboard link
```

### Future Enhancements
- Database integration (MongoDB, PostgreSQL, etc.)
- Image/video upload functionality
- User management system
- Analytics and reporting
- Content scheduling
- Social media integration

## Security Notes
- Current authentication is for demo purposes only
- In production, implement proper authentication (NextAuth.js, Auth0, etc.)
- Add proper input validation and sanitization
- Implement rate limiting and CSRF protection

## Customization
- Modify categories in the dashboard form
- Add new content types
- Customize the dashboard layout
- Add more statistics and analytics
- Implement custom themes

## Support
For questions or issues with the dashboard system, refer to the main project documentation or create an issue in the repository. 