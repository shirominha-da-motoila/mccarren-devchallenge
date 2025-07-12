# 🏢 Company Profile Generator

An AI-powered web application that generates comprehensive company profiles by analyzing website content. Built with Next.js, Tailwind CSS, and Google's Gemini AI, this tool helps users create detailed company profiles with service lines, keywords, and contact information.

## ✨ Features

- **AI-Powered Analysis**: Uses Google Gemini AI to analyze company websites and extract key information
- **Comprehensive Profiles**: Generates company descriptions, service lines, and keyword suggestions
- **User-Friendly Interface**: Modern, responsive design with a colorful, geometric UI
- **Optional Data Input**: Users can provide additional service lines, emails, and points of contact
- **Mobile-First Design**: Fully responsive interface that works on all devices
- **Real-Time Generation**: Instant profile generation with loading states and error handling

## 🏗️ Project Structure

```
mccarren-devchallenge/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-profile/
│   │   │       └── route.ts          # API endpoint for profile generation
│   │   ├── profile/
│   │   │   └── page.tsx              # Profile display page
│   │   ├── globals.css               # Global styles and Tailwind config
│   │   ├── layout.tsx                # Root layout with geometric background
│   │   └── page.tsx                  # Home page with form
│   ├── components/
│   │   ├── CompanyProfileCard.tsx    # Profile display component
│   │   └── UrlInput.tsx              # Form component with dynamic fields
│   ├── types/
│   │   └── company.ts                # TypeScript interfaces
│   └── utils/
│       ├── api.ts                    # API client functions
│       └── gemini-client.ts          # Gemini AI integration
├── public/                           # Static assets
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
└── package.json                      # Dependencies and scripts
```

## 🚀 Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash)
- **Deployment**: Vercel (recommended)
- **Development**: Built with Cursor AI for enhanced productivity

## 🎯 Build Strategy

This project was developed using an iterative approach with Cursor AI assistance:

### Phase 1: Foundation
- Set up Next.js project with TypeScript
- Configure Tailwind CSS for responsive design
- Create basic layout with geometric background elements

### Phase 2: Core Functionality
- Implement URL input form with validation
- Integrate Google Gemini AI for website analysis
- Create API endpoint for profile generation
- Build profile display component

### Phase 3: Enhanced Features
- Add optional service lines, emails, and POC inputs
- Implement dynamic form fields with add/remove functionality
- Create responsive design for mobile devices
- Add loading states and error handling

### Phase 4: Polish & Optimization
- Clean up redundant code and unused files
- Optimize CSS and remove unused styles
- Ensure mobile-first responsive design
- Prepare for deployment

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Google AI API key (for Gemini integration)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mccarren-devchallenge
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `GOOGLE_AI_API_KEY` to Vercel environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 📱 Usage

1. **Enter Company URL**: Provide the website URL of the company you want to analyze
2. **Optional Data**: Add service lines, email addresses, or points of contact (optional)
3. **Generate Profile**: Click "Generate Profile" to start AI analysis
4. **View Results**: Review the comprehensive company profile with keywords and service lines
5. **Generate New**: Create additional profiles as needed

## 🎨 Design Philosophy

- **Colorful & Geometric**: Modern UI with vibrant colors and square-like elements
- **Mobile-First**: Responsive design that works seamlessly on all devices
- **User-Friendly**: Intuitive interface with clear visual feedback
- **Performance**: Optimized for fast loading and smooth interactions

## 🔧 Development

### Key Components
- **UrlInput**: Dynamic form with optional fields for service lines, emails, and POC
- **CompanyProfileCard**: Displays generated profiles with responsive layout
- **API Integration**: Seamless connection to Google Gemini AI
- **Session Storage**: Temporary profile storage (cleared on page close)

### Code Quality
- TypeScript for type safety
- Tailwind CSS for consistent styling
- Responsive design patterns
- Clean, maintainable code structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, Tailwind CSS, and Google Gemini AI
