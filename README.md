# 🏢 Company Profile Generator

This AI-powered web application demonstrates modern web development skills by generating comprehensive company profiles through website content analysis. Built with Next.js, Tailwind CSS, and Google's Gemini AI.

## 🏗️ Project Structure

```
mccarren-devchallenge/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-profile/
│   │   ├── profile/ 
│   │   └── page.tsx
│   ├── components/
│   ├── types/
│   └── utils/
└── public/                           # Static assets
```

## 🚀 Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash)
- **Development**: Built with Cursor AI for enhanced productivity

## 🎯 Technical Approach & Development Strategy

This project demonstrates a systematic approach to full-stack development, showcasing:

### Phase 1: Architecture & Foundation
- **Next.js 15 App Router** with TypeScript for type safety
- **Tailwind CSS 3.4.0** for responsive, utility-first styling
- **Geometric UI Design** with modern, colorful interface elements
- **Component-based architecture** for maintainable code

### Phase 2: Core Functionality & API Integration
- **Form validation** with real-time user feedback
- **Google Gemini AI integration** for intelligent content analysis
- **RESTful API design** with proper error handling
- **TypeScript interfaces** for robust type checking

### Phase 3: User Experience & Responsive Design
- **Mobile-first responsive design** with Tailwind breakpoints
- **Dynamic form fields** with add/remove functionality
- **Loading states** and error handling for better UX
- **Session storage** for temporary data management

### Phase 4: Code Quality & Optimization
- **Code cleanup** and removal of redundant elements
- **Performance optimization** with proper CSS purging
- **Accessibility considerations** with semantic HTML
- **Production-ready deployment** configuration

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Google AI API key (for Gemini integration)

### 1. Clone the Repository
```bash
git clone https://github.com/shirominha-da-motoila/mccarren-devchallenge.git
cd mccarren-devchallenge
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.


## 📱 Application Usage

### User Flow
1. **Input Company URL**: Enter a valid website URL for analysis
2. **Optional Enhancements**: Add service lines, email addresses, or points of contact (optional)
3. **AI Processing**: Submit to trigger Gemini AI analysis with loading states
4. **Profile Display**: View comprehensive company profile with generated keywords and service lines
5. **Session Management**: Generate additional profiles as needed (data cleared on page close)

## 🎨 Design Philosophy & UX Considerations

- **Modern Geometric Design**: Vibrant, colorful UI with square-like elements for visual appeal
- **Mobile-First Responsive Design**: Seamless experience across all device sizes
- **Intuitive User Interface**: Clear visual feedback and progressive disclosure
- **Performance Optimization**: Fast loading times and smooth interactions
- **Accessibility**: Semantic HTML and proper focus management

## 🔧 Technical Implementation

### Key Components & Architecture
- **UrlInput Component**: Dynamic form with validation, optional fields, and responsive design
- **CompanyProfileCard Component**: Displays AI-generated profiles with semantic HTML structure
- **API Integration**: RESTful endpoint with proper error handling and TypeScript types
- **Session Storage**: Client-side data management without persistence requirements

### Code Quality & Best Practices
- **TypeScript**: Strict type checking for all components and API responses
- **Tailwind CSS**: Utility-first styling with responsive design patterns
- **Component Architecture**: Reusable, maintainable components with clear separation of concerns
- **Error Handling**: Comprehensive error states and user feedback
- **Performance**: Optimized bundle size and efficient rendering
