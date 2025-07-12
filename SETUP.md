# Company Profile Generator Setup

## Enhanced AI-Powered Website Analysis

This application uses **enhanced AI-like analysis** for website crawling and profile generation. The system provides sophisticated content analysis that mimics AI behavior without requiring external API keys.

### How It Works

The application:

1. **Crawls the website**: Fetches the HTML content from the provided URL
2. **Extracts text**: Removes HTML tags and extracts readable text content
3. **Enhanced Analysis**: Uses sophisticated keyword matching and pattern recognition
4. **Generates profile**: Creates a structured company profile with:
   - Company name (extracted from domain or page title)
   - Service lines (1-5 services based on enhanced analysis)
   - Company description
   - Tier 1 keywords (for government opportunities)
   - Tier 2 keywords (potential government opportunities)
   - Empty arrays for emails and POC (to be filled manually)

### Enhanced AI-Like Features

**Sophisticated Company Detection:**
- **Technology**: software, cybersecurity, IT, development, AI, cloud, API, database
- **Solar/Energy**: solar, renewable energy, green, sustainability, wind, battery, storage
- **Construction**: construction, building, infrastructure, engineering, project, site, foundation
- **Healthcare**: healthcare, medical, hospital, biotech, patient, treatment, diagnosis
- **Finance**: financial, banking, investment, insurance, portfolio, retirement, planning
- **Education**: education, training, learning, university, course, certification, workshop
- **Generic**: Enhanced service detection for other companies

**Smart Service Detection:**
- Automatically finds services like: consulting, marketing, design, logistics, legal, accounting, maintenance, security
- Uses enhanced keyword analysis to understand context and generate relevant service descriptions
- Provides more detailed service descriptions and additional service lines

**Intelligent Name Extraction:**
- Tries to extract real company names from page titles and H1 tags
- Falls back to domain-based naming if needed

### Testing

Try these example URLs:
- `https://www.acme-solar.com` (solar company)
- `https://www.techcorp-software.com` (tech company)
- `https://www.buildright-construction.com` (construction company)
- `https://www.healthcare-solutions.com` (healthcare company)
- `https://www.financial-advisors.com` (finance company)

### Features

✅ **Completely Free** - No API costs or keys required
✅ **Real Website Analysis** - Crawls actual website content
✅ **Enhanced AI-Like Detection** - Sophisticated pattern recognition
✅ **Government Focus** - Keywords tailored for government contracting
✅ **Editable Profiles** - All fields can be manually edited
✅ **Multiple Service Lines** - Support for 1-5 service lines per company
✅ **Error Handling** - Graceful fallback if analysis fails
✅ **No Setup Required** - Works out of the box

### Technical Details

- **Website Crawling**: Uses standard fetch API with proper user agent
- **Enhanced Analysis**: Sophisticated keyword-based pattern matching
- **Name Extraction**: Tries to extract company name from page title or H1 tags
- **Service Detection**: Enhanced content analysis for common service keywords
- **Keyword Generation**: Industry-specific keywords for government opportunities

### Future g4f Integration

The codebase is prepared for g4f integration. To enable actual AI analysis:

1. **Install g4f**: `npm install g4f`
2. **Update the implementation**: Modify `src/utils/g4f-client.ts` to use actual g4f API calls
3. **Test the integration**: Ensure proper error handling and fallbacks

### No Setup Required

Simply run the application and start generating profiles:

```bash
npm run dev
```

Visit `http://localhost:3000` and start analyzing company websites with enhanced AI-like analysis! 