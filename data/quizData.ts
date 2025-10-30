import { Question, QuestionType } from '../types';

export const quizData: Question[] = [
  // =============================================
  // Multiple Choice Questions - 80 Questions
  // =============================================
  // --- Section: Mobile/App SEO Introduction (Page 6) ---
  {
    id: 1,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What are the two core components of Mobile/App SEO discussed in the presentation?",
    options: ["ASO and App SEO", "Paid Ads and Social Media", "Website Design and App Analytics", "User Onboarding and Push Notifications"],
    answer: "ASO and App SEO",
    explanation: "The presentation clearly distinguishes between ASO (App Store Optimization) for ranking within app stores and App SEO (External SEO) for acquiring traffic from outside the stores (Page 6)."
  },
  {
    id: 2,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What does ASO primarily focus on?",
    options: ["Ranking high in web search results", "Ranking highly in the app stores themselves", "Increasing social media followers", "Improving website speed"],
    answer: "Ranking highly in the app stores themselves",
    explanation: "ASO, or App Store Optimization, is the process of improving an app's visibility within app stores like the Apple App Store or Google Play to increase organic app downloads (Page 6)."
  },
  {
    id: 31,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the primary goal of External App SEO?",
    options: ["To rank high within the app store", "To acquire traffic from outside the app store", "To optimize the app's code", "To design a better app icon"],
    answer: "To acquire traffic from outside the app store",
    explanation: "External App SEO focuses on driving traffic from sources like web search, social media, and content marketing to the app, separate from the app store's own discovery channels (Page 6)."
  },
  {
    id: 57,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What does the term 'ASO' stand for?",
    options: ["App Search Optimization", "App Store Optimization", "Apple Search Opportunity", "Automated Store Organization"],
    answer: "App Store Optimization",
    explanation: "ASO stands for App Store Optimization, which is the process of optimizing app pages in app stores to rank higher in search results (Page 6)."
  },
  // --- Section: Benefits of ASO and External SEO (Page 7) ---
  {
    id: 3,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "According to the presentation, what percentage of all apps are discovered through app store search?",
    options: ["45%", "55%", "65%", "75%"],
    answer: "65%",
    explanation: "The slides state that 65% of all apps are discovered through app store search, highlighting the critical importance of ASO (Page 7)."
  },
  {
    id: 4,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is a primary benefit of External SEO for an app?",
    options: ["Lowering app development costs", "Saving money on commission fees", "Automating user support", "It's required by app stores"],
    answer: "Saving money on commission fees",
    explanation: "By driving traffic from outside the app store (e.g., from a website), you can acquire users and generate revenue without paying the app store's commission fees (Page 7)."
  },
  {
    id: 6,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The lifetime value (LTV) of organic users can be how many times that of paid search users?",
    options: ["1-2 times", "2-3 times", "3-5 times", "5-7 times"],
    answer: "3-5 times",
    explanation: "The presentation notes that the LTV of organic users is significantly higher, often 3-5 times that of users acquired through paid search (Page 7)."
  },
  {
    id: 32,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "A 35-40% uplift in organic downloads over time is a benefit of what?",
    options: ["External SEO", "ASO", "Paid Advertising", "Social Media Marketing"],
    answer: "ASO",
    explanation: "Consistent App Store Optimization (ASO) efforts can lead to a significant, 35-40% increase in organic downloads over time (Page 7)."
  },
   {
    id: 47,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is a key benefit of ASO related to other marketing strategies?",
    options: ["It replaces the need for paid ads", "It benefits other paid UA strategies", "It guarantees social media success", "It has no impact on other strategies"],
    answer: "It benefits other paid UA strategies",
    explanation: "Good ASO increases the LTV of users and lowers the cost of paid ads, making other paid User Acquisition (UA) strategies more effective and efficient (Page 7)."
  },
  {
    id: 72,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Lowering paid ad spending is a direct benefit of what?",
    options: ["ASO", "External SEO", "A/B Testing", "Using more screenshots"],
    answer: "External SEO",
    explanation: "By driving organic traffic from external sources, you reduce the need to pay for ads to acquire the same users, thus lowering ad spending (Page 7)."
  },
  // --- Section: External App SEO Methods (Pages 8-11) ---
  {
    id: 21,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which element is crucial for External App SEO but not directly for ASO?",
    options: ["A website for your app", "App icon", "App store description", "App category"],
    answer: "A website for your app",
    explanation: "A dedicated website is a cornerstone of External App SEO, used for content marketing and driving traffic from outside the app store (Page 8)."
  },
  {
    id: 46,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "All of the following are listed as External App SEO methods EXCEPT:",
    options: ["Have a website for your app", "Use reviews and testimonials", "Optimize keyword tags", "Have a content marketing strategy"],
    answer: "Optimize keyword tags",
    explanation: "Optimizing keyword tags is an ASO (on-platform) activity, specifically for iOS. The other options are all methods for External SEO (off-platform) (Page 8, 12)."
  },
  {
    id: 33,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of these is an example of a Content Marketing strategy for an app?",
    options: ["Running a TV commercial", "Writing a blog with 'Beginner's guide to fishing'", "Offering in-app purchases", "Responding to app store reviews"],
    answer: "Writing a blog with 'Beginner's guide to fishing'",
    explanation: "The diagram on page 9 shows that creating content like blog topics (e.g., 'Beginner's guide to fishing') is a key part of content marketing to attract users."
  },
  {
    id: 55,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The example of Content Marketing For Apps used which industry?",
    options: ["Fitness", "Cooking", "Fishing", "Finance"],
    answer: "Fishing",
    explanation: "The diagram on page 9 shows blog topics and feature pages all related to a fishing app (e.g., 'Guide to fishing knots', 'Finding Fishing Spots')."
  },
  {
    id: 58,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the recommended approach for community participation?",
    options: ["Post advertisements daily", "Be a contributing member", "Only talk about your app's features", "Use an automated bot to post"],
    answer: "Be a contributing member",
    explanation: "The slide emphasizes being a contributing member, not just an advertisement, to build trust and genuine interest (Page 11)."
  },
  // --- Section: App Store Optimization (ASO) Elements (Pages 12-21) ---
  {
    id: 5,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of these is NOT an element of ASO mentioned in the slides?",
    options: ["App name or title", "Category", "Push notification strategy", "Keyword tags (iOS only)"],
    answer: "Push notification strategy",
    explanation: "The core elements of ASO discussed are App name/title, Category, Description (short and long), and Keyword tags specifically for iOS (Page 12)."
  },
  {
    id: 34,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which ASO element is specific to iOS?",
    options: ["App name", "Description", "Category", "Keyword tags"],
    answer: "Keyword tags",
    explanation: "The slides explicitly state that Keyword tags are an element of ASO for iOS only (Page 12)."
  },
  {
    id: 71,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "All of the following are ASO elements EXCEPT:",
    options: ["App name", "Category", "Online communities", "Description"],
    answer: "Online communities",
    explanation: "Engaging in online communities is a method of External App SEO, not an element you optimize within the app store itself (Page 8, 12)."
  },
  {
    id: 22,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What should an app's title include for good ASO?",
    options: ["Brand name and relevant keywords", "Only the brand name", "A catchy but irrelevant phrase", "The version number"],
    answer: "Brand name and relevant keywords",
    explanation: "Including both the brand name and relevant keywords in the title is a key ASO strategy to improve discoverability (Page 13)."
  },
  {
    id: 7,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which is NOT a recommended characteristic for ASO keywords?",
    options: ["Relevant", "Short", "Long-tail and complex", "Unique"],
    answer: "Long-tail and complex",
    explanation: "Effective ASO keywords should be relevant, short, easy to read, unique, and should maximize the available character space (Page 14)."
  },
  {
    id: 66,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of the following is NOT a characteristic of good ASO keywords?",
    options: ["Easy to read", "Unique", "Generic", "Relevant"],
    answer: "Generic",
    explanation: "Keywords should be unique and relevant. Overly generic keywords can be too competitive and not specific enough to attract the right users (Page 14)."
  },
  {
    id: 48,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "In keyword research, asking 'What are similar apps called?' helps you understand what?",
    options: ["Your app's main features", "Competitor naming conventions", "Common category terms", "Synonyms for features"],
    answer: "Competitor naming conventions",
    explanation: "This question specifically helps you identify how your competitors are positioning themselves and what names they use, which can inform your own keyword strategy (Page 15)."
  },
  {
    id: 35,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which app store allows for a subtitle that appears directly below the app name in search results?",
    options: ["Apple App Store", "Google Play", "Both", "Neither"],
    answer: "Google Play",
    explanation: "The comparison on page 16 shows that Google Play allows a subtitle which appears directly below the app name in search results."
  },
  {
    id: 59,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Apple requires app descriptions to include info on what?",
    options: ["The development team", "The company's history", "In-app purchases and billing", "Social media links"],
    answer: "In-app purchases and billing",
    explanation: "Page 17 explicitly states that Apple requires information on in-app purchases and billing requirements in the app description."
  },
  {
    id: 49,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "An app description that includes highlights of positive reviews is using what?",
    options: ["Social proof", "Keyword stuffing", "A/B testing", "Clickbait"],
    answer: "Social proof",
    explanation: "Highlighting positive reviews, awards, or media mentions is a form of social proof, designed to build trust with potential users (Page 18)."
  },
  {
    id: 73,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Adding 'relevant social proof' to an app description helps to do what?",
    options: ["Improve app speed", "Rank for more keywords", "Create trust", "Meet app store legal requirements"],
    answer: "Create trust",
    explanation: "Social proof, like testimonials, creates trust in the app and for your brand, making users more confident in their decision to download (Page 18)."
  },
  {
    id: 8,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of the following is an important engagement metric for ASO?",
    options: ["Number of developers", "Uninstall rate", "Company's stock price", "App's color scheme"],
    answer: "Uninstall rate",
    explanation: "A high uninstall rate can signal a low-quality app to app stores, negatively impacting its ranking. Other engagement metrics include app speed, usage metrics, and ratings/reviews (Page 19)."
  },
  {
    id: 29,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of these is a key 'engagement metric' considered by app stores for ranking?",
    options: ["Ratings and reviews", "Number of ad clicks", "Company headcount", "Website bounce rate"],
    answer: "Ratings and reviews",
    explanation: "Ratings and reviews are a direct signal of user satisfaction and app quality, which app stores use as a ranking factor (Page 19)."
  },
  {
    id: 36,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "High crash rates and infrequent updates are characteristics of what?",
    options: ["High quality apps", "Newly launched apps", "Low quality apps", "Enterprise apps"],
    answer: "Low quality apps",
    explanation: "These are signs of a poorly maintained app, which can lead to it being flagged as low quality and potentially removed from app stores (Page 20)."
  },
  // --- Section: App A/B Testing (Pages 22-23) ---
  {
    id: 9,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the primary purpose of App A/B testing?",
    options: ["To find bugs in the code", "To test different versions of app store listings", "To decide on the app's price", "To get user feedback on new features"],
    answer: "To test different versions of app store listings",
    explanation: "A/B testing involves creating variations of your app's store listing (e.g., icon, screenshots, description) to see which one performs better in terms of conversions and downloads (Page 22)."
  },
  {
    id: 60,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "A/B testing on Google Play involves automatically doing what to users?",
    options: ["Surveying them", "Charging them", "Segmenting them", "Blocking them"],
    answer: "Segmenting them",
    explanation: "Google Play will automatically segment users, showing different groups different versions of your store listing to see which performs better (Page 22)."
  },
  // --- Section: Optimizing Screenshots (Pages 24-26) ---
  {
    id: 11,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the maximum number of screenshots allowed on the Apple App Store?",
    options: ["5", "8", "10", "12"],
    answer: "10",
    explanation: "The 'App Store Requirements' slide indicates that Apple allows up to 10 screenshots (Page 24)."
  },
  {
    id: 12,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the minimum number of screenshots required on Google Play?",
    options: ["1", "2", "4", "8"],
    answer: "2",
    explanation: "The 'App Store Requirements' slide specifies that Google Play requires a minimum of 2 screenshots, with a maximum of 8 (Page 24)."
  },
  {
    id: 28,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the maximum duration for a video on Google Play?",
    options: ["30 seconds", "1 minute", "2 minutes", "5 minutes"],
    answer: "2 minutes",
    explanation: "The app store requirements on page 24 state that a video on Google Play can have a maximum duration of 2 minutes."
  },
  {
    id: 37,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "On Google Play, how many variations of screenshots can be tested?",
    options: ["2 variations", "4 variations", "8 variations", "10 variations"],
    answer: "4 variations",
    explanation: "The App Store Requirements on page 24 specify that Google Play allows for A/B testing of up to 4 variations of visuals."
  },
  {
    id: 38,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the maximum number of videos allowed per localization on the Apple App Store?",
    options: ["1", "3", "5", "10"],
    answer: "3",
    explanation: "Apple allows for up to 3 videos per localization, each up to 30 seconds long (Page 24)."
  },
  {
    id: 65,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the maximum number of screenshots allowed on Google Play?",
    options: ["2", "4", "8", "10"],
    answer: "8",
    explanation: "Page 24 specifies that Google Play allows a maximum of 8 screenshots."
  },
  {
    id: 78,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The length of videos on the Apple App Store must be:",
    options: ["30 seconds each", "Up to 2 minutes each", "At least 1 minute each", "Any length"],
    answer: "30 seconds each",
    explanation: "Page 24 clearly states that videos for the Apple App Store must be 30 seconds each."
  },
  {
    id: 79,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the first step in onboarding mentioned in the presentation?",
    options: ["The app tutorial", "The welcome email", "Optimizing your screenshots", "The first push notification"],
    answer: "Optimizing your screenshots",
    explanation: "The presentation frames the app store page itself as the first step. Optimizing screenshots is crucial as it's the user's first interaction with what the app does, setting expectations before they even download (Page 25)."
  },
  {
    id: 10,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "According to the presentation, user decisions about downloading an app are made in approximately how long?",
    options: ["30 seconds", "1 minute", "7 seconds", "15 seconds"],
    answer: "7 seconds",
    explanation: "Decisions are made in just 7 seconds, which is why the first impression, created by screenshots and videos, is crucial for conversion (Page 26)."
  },
  {
    id: 20,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Only what percentage of users scroll past the first two screenshots?",
    options: ["9%", "19%", "29%", "39%"],
    answer: "9%",
    explanation: "This low percentage (9%) emphasizes the extreme importance of the first two screenshots in convincing a user to download the app (Page 26)."
  },
  {
    id: 50,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the main reason that only 9% of users scroll past the first two screenshots?",
    options: ["Users have short attention spans", "App stores hide the other screenshots", "The first two screenshots are usually low quality", "Users make download decisions very quickly"],
    answer: "Users make download decisions very quickly",
    explanation: "Because decisions are made in about 7 seconds, users quickly evaluate the first visual information they see. If it's not compelling, they move on without exploring further (Page 26)."
  },
  {
    id: 61,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the primary reason to optimize the first two screenshots?",
    options: ["They are the only ones users see", "Only 9% of users scroll past them", "They are larger than the others", "App stores rank them higher"],
    answer: "Only 9% of users scroll past them",
    explanation: "The fact that so few users (only 9%) go beyond the first two screenshots makes them the most critical visual asset for conversion (Page 26)."
  },
  // --- Section: Metrics and KPIs (Pages 27-32) ---
  {
    id: 13,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Why is it important to have KPIs for SEO?",
    options: ["They are required by Google", "To measure the impact of your strategy", "To increase website loading speed", "To design better logos"],
    answer: "To measure the impact of your strategy",
    explanation: "KPIs are crucial for demonstrating impact, managing expectations, and measuring the effectiveness of your SEO strategy, especially since SEO is a long-term investment (Page 27)."
  },
  {
    id: 56,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of these is NOT a reason to have KPIs?",
    options: ["Demonstrate impact", "Guarantee a #1 ranking", "Manage expectations", "Measure impact of your strategy"],
    answer: "Guarantee a #1 ranking",
    explanation: "KPIs are for measuring and demonstrating progress. They cannot guarantee a specific outcome like a #1 ranking, which depends on many factors (Page 27)."
  },
  {
    id: 74,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The term 'KPI' stands for what?",
    options: ["Key Programming Interface", "Key Performance Indicator", "Known Profitability Index", "Keyword Position Identifier"],
    answer: "Key Performance Indicator",
    explanation: "KPI stands for Key Performance Indicator, a measurable value used to track business objectives (Page 27)."
  },
  {
    id: 14,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "In the context of Organic Traffic KPIs, what are 'Sessions'?",
    options: ["People who have visited your site once", "People who have not yet visited your site", "The entire visit of a user", "Users who complete a purchase"],
    answer: "The entire visit of a user",
    explanation: "A session represents the entire visit of a user to your site, including all the pages they view and actions they take (Page 28)."
  },
  {
    id: 67,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which term describes 'the entire visit of a user'?",
    options: ["User", "New User", "Session", "Click"],
    answer: "Session",
    explanation: "A 'Session' is the KPI that represents a user's entire visit or interaction with a website during a specific period (Page 28)."
  },
  {
    id: 39,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Defining 'New users' as a KPI helps you measure what?",
    options: ["User satisfaction", "Audience growth and reach", "Average time in app", "Total revenue"],
    answer: "Audience growth and reach",
    explanation: "Tracking 'New users' specifically shows how many people are discovering and visiting your site for the first time, indicating the effectiveness of your SEO in reaching a wider audience (Page 28)."
  },
  {
    id: 23,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Monitoring 'Unbranded Traffic vs. Branded Traffic' helps you understand:",
    options: ["Brand awareness and discovery", "Total number of sales", "App crash rate", "Server uptime"],
    answer: "Brand awareness and discovery",
    explanation: "This KPI helps distinguish between users who search for you by name (branded) and those who find you through general terms (unbranded), indicating brand strength and discovery potential (Page 29)."
  },
  {
    id: 62,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The KPI 'Unbranded Traffic' refers to visitors who find your site through...",
    options: ["Directly typing your URL", "Searching for your specific brand name", "Searching for general, non-brand terms", "Clicking on a paid ad"],
    answer: "Searching for general, non-brand terms",
    explanation: "Unbranded traffic comes from users discovering you through keywords related to your service or product, not your company name. It's a key indicator of successful SEO for discovery (Page 29)."
  },
  {
    id: 15,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of the following is NOT a Backlinks KPI mentioned in the slides?",
    options: ["Total number of links", "Total number of referring domains", "Anchor text density", "Low quality or toxic links"],
    answer: "Anchor text density",
    explanation: "The common backlinks KPIs listed are Total number of links, total number of referring domains, new links earned, links lost, and low quality/toxic links (Page 30)."
  },
  {
    id: 51,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What does the KPI 'Total number of referring domains' measure?",
    options: ["The total number of individual backlinks", "The number of unique websites linking to you", "The number of clicks from backlinks", "The number of pages on your website"],
    answer: "The number of unique websites linking to you",
    explanation: "This KPI is important because getting 10 links from 10 different high-quality domains is more valuable than getting 10 links from a single domain (Page 30)."
  },
  {
    id: 75,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of these is NOT a Backlinks KPI?",
    options: ["New links earned", "Click-through rate (CTR)", "Links lost", "Low quality or toxic links"],
    answer: "Click-through rate (CTR)",
    explanation: "CTR is a KPI related to search engine results page performance, not backlinks. The others are all specific backlink metrics to monitor (Page 30, 31)."
  },
  // --- Section: SEO Survey Findings (Pages 33-34) ---
  {
    id: 52,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The SEO survey findings may be considered 'leading' because...",
    options: ["It was conducted by a leading company", "It focused on wins, not challenges", "Respondents chose from a pre-defined list of challenges", "It was a very long survey"],
    answer: "Respondents chose from a pre-defined list of challenges",
    explanation: "The slide notes that the survey might be 'leading' because providing a list of potential challenges could influence the answers, even with an 'other' option available (Page 33)."
  },
  {
    id: 16,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What was the biggest SEO Business Challenge identified in the survey findings?",
    options: ["Putting out fires", "Cross-Functional Compatibility", "Prioritization & Implementation", "Setting Expectations"],
    answer: "Prioritization & Implementation",
    explanation: "The pie chart shows 'Prioritization & Implementation of' changes accounted for 40% of challenges, making it the largest segment (Page 34)."
  },
  {
    id: 24,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "A high rate of 'Putting out fires' (25%) in the SEO survey indicates that SEOs are often engaged in:",
    options: ["Reactive problem-solving", "Proactive strategy planning", "Successful implementation", "High team morale"],
    answer: "Reactive problem-solving",
    explanation: "'Putting out fires' refers to dealing with immediate, unforeseen problems, which is a reactive task rather than proactive planning (Page 34)."
  },
  {
    id: 40,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What percentage of SEO Business Challenges was attributed to 'Putting out fires'?",
    options: ["10%", "20%", "25%", "40%"],
    answer: "25%",
    explanation: "The pie chart on page 34 shows that 'Putting out fires' (reactive problem-solving) accounted for 25% of the challenges faced by SEOs."
  },
  {
    id: 63,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What percentage of the SEO Business Challenges was related to 'Cross Functional Compatability'?",
    options: ["5%", "10%", "20%", "25%"],
    answer: "20%",
    explanation: "The pie chart on page 34 shows that 'Cross Functional Compatability' accounted for 20% of the challenges."
  },
  // --- Section: Forecasting SEO Impact (Pages 35-43) ---
  {
    id: 19,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is a major reason to forecast SEO impact?",
    options: ["It is a fun academic exercise", "To get buy-in and investment for new projects", "To guarantee future traffic numbers", "To replace the need for keyword research"],
    answer: "To get buy-in and investment for new projects",
    explanation: "Forecasting is a key tool for demonstrating potential value to management and investors, thereby securing buy-in and investment (Page 35)."
  },
  {
    id: 25,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What does forecasting provide for an SEO project?",
    options: ["A roadmap to create value", "A guarantee of success", "A list of bugs to fix", "A final, unchangeable plan"],
    answer: "A roadmap to create value",
    explanation: "An SEO forecast acts as a roadmap, outlining the expected outcomes and value creation from the planned strategic initiatives (Page 35)."
  },
  {
    id: 64,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "A key reason to forecast SEO impact is that it serves as a main tool for...",
    options: ["Code debugging", "Value creation to upper management", "Graphic design", "Hiring new employees"],
    answer: "Value creation to upper management",
    explanation: "Forecasting translates SEO efforts into potential business value (like traffic and revenue), which is crucial for communicating with and getting support from management (Page 35)."
  },
  {
    id: 17,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "When forecasting SEO impact, what probability is associated with a 'Conservative Case'?",
    options: ["25%", "50%", "75%", "100%"],
    answer: "75%",
    explanation: "The 'Use Assumptions' slide outlines that a Conservative Case is met with a 75% probability, Base Case with 50%, and Aggressive Case with 25% (Page 36)."
  },
  {
    id: 30,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The 'Aggressive Case' in SEO forecasting has what probability of being met?",
    options: ["25%", "50%", "75%", "90%"],
    answer: "25%",
    explanation: "The Aggressive Case is the most optimistic scenario and is therefore assigned the lowest probability of success, which is 25% (Page 36)."
  },
  {
    id: 41,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the probability associated with a 'Base Case' SEO forecast?",
    options: ["25%", "50%", "75%", "100%"],
    answer: "50%",
    explanation: "A 'Base Case' represents the most likely or expected outcome, and is therefore assigned a 50% probability of being met (Page 36)."
  },
  {
    id: 53,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "An 'Optional' forecasting case is used to show what?",
    options: ["The most likely outcome", "The best-case scenario", "The worst-case scenario", "What happens if you do nothing"],
    answer: "What happens if you do nothing",
    explanation: "This optional case provides a baseline, showing the projected outcome without any new SEO initiatives, which helps demonstrate the value of the proposed project (Page 36)."
  },
  {
    id: 76,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "The 'Conservative Case' in forecasting is the one you have a...",
    options: ["25% chance of meeting", "50% chance of meeting", "75% chance of meeting", "100% chance of meeting"],
    answer: "75% chance of meeting",
    explanation: "The conservative case is the most cautious forecast, meaning it has the highest probability (75%) of being achieved (Page 36)."
  },
  {
    id: 42,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of the following should an SEO forecast include?",
    options: ["A list of employee salaries", "Context of your industry", "The company's mission statement", "A history of past marketing campaigns"],
    answer: "Context of your industry",
    explanation: "A good forecast is grounded in reality, which includes understanding the context of your industry, market size, and whether services are trending (Page 37)."
  },
  {
    id: 68,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "According to the slide, a forecast should include a comparison of what?",
    options: ["Company salaries", "Ranking", "Logos", "Office locations"],
    answer: "Ranking",
    explanation: "Forecasts should include 'Comparison ranking' to benchmark against competitors and set realistic goals (Page 37)."
  },
  {
    id: 26,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What does monitoring a competitor's 'SEO maturity' help you understand?",
    options: ["How likely they are to compete for the same rankings", "How many employees they have", "Their company's revenue", "Their app's color scheme"],
    answer: "How likely they are to compete for the same rankings",
    explanation: "Assessing a competitor's SEO maturity helps you gauge how effective their efforts are and how intense the competition will be for target keywords and rankings (Page 38)."
  },
  {
    id: 43,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "If a competitor is very good at SEO, what is the likely outcome?",
    options: ["They will stop doing SEO", "You will likely compete for the same rankings", "They will not be a threat", "Their rankings will drop automatically"],
    answer: "You will likely compete for the same rankings",
    explanation: "Monitoring SEO maturity is key. A competitor who is good at SEO will likely be targeting and competing for the same valuable rankings you are (Page 38)."
  },
  {
    id: 69,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "If a competitor is not good at SEO, what is a potential risk?",
    options: ["They will never improve", "Their poor SEO will hurt your site", "It could change quickly", "They will be removed from Google"],
    answer: "It could change quickly",
    explanation: "You should not be complacent. A competitor who is currently poor at SEO could hire an expert or invest in it, causing the competitive landscape to change quickly (Page 38)."
  },
  {
    id: 18,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which tool is mentioned for analyzing search term popularity over time?",
    options: ["Google Analytics", "Google Search Console", "Google Trends", "Google Data Studio"],
    answer: "Google Trends",
    explanation: "Google Trends is specifically designed to show the interest in a search term or topic over a period of time, as shown in the 'fishing' example (Page 39, 40)."
  },
  {
    id: 54,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which of these is NOT a tool mentioned for forecasting?",
    options: ["Google Analytics", "Adobe Photoshop", "Google Trends", "Google Search Console"],
    answer: "Adobe Photoshop",
    explanation: "Adobe Photoshop is an image editor. The other three are all listed as useful tools for gathering data to build an SEO forecast (Page 39)."
  },
  {
    id: 77,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which tool would you use to visualize data from other sources like Analytics and Search Console?",
    options: ["Google Trends", "Google Data Studio", "Google Docs", "Microsoft Excel"],
    answer: "Google Data Studio",
    explanation: "Google Data Studio is a tool designed to create dashboards and visualizations from various data sources, including Google Analytics and GSC (Page 39)."
  },
  {
    id: 27,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "According to the CTR breakdown by position graph, the #1 position gets approximately what percentage of clicks?",
    options: ["18.66%", "24.71%", "31.73%", "13.60%"],
    answer: "31.73%",
    explanation: "The bar chart on page 41 clearly shows the top position in Google organic search results receives an average CTR of 31.73%."
  },
  {
    id: 45,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "In the CTR breakdown graph, which position has a CTR of approximately 9.51%?",
    options: ["3rd", "4th", "5th", "6th"],
    answer: "5th",
    explanation: "The bar chart on page 41 clearly labels the 5th position as having a 9.51% click-through rate."
  },
  {
    id: 70,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is the average CTR for the 3rd position in organic search results?",
    options: ["31.73%", "24.71%", "18.66%", "13.60%"],
    answer: "18.66%",
    explanation: "The bar chart on page 41 shows the CTR for the 3rd position is 18.66%."
  },
  {
    id: 44,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "Which tool is best for getting a full keyword export and performance data like impressions and clicks?",
    options: ["Google Trends", "Google Data Studio", "Google Analytics", "Google Search Console"],
    answer: "Google Search Console",
    explanation: "As shown on page 43, Google Search Console is the tool that provides detailed keyword-level data, including impressions, clicks, CTR, and average position."
  },
  {
    id: 80,
    type: QuestionType.MULTIPLE_CHOICE,
    question: "What is a major difficulty you may face while forecasting?",
    options: ["It is too easy", "The data is always perfect", "It requires making assumptions", "Tools are not available"],
    answer: "It requires making assumptions",
    explanation: "Forecasting is not an exact science. As seen on page 36 ('Use Assumptions'), it inherently involves making educated guesses about future performance based on probabilities, which introduces uncertainty."
  },

  // =============================================
  // Fill in the Blank Questions - 80 Questions
  // =============================================
  {
    id: 160,
    type: QuestionType.FILL_IN_BLANK,
    question: "The course code for this session is ___.",
    answer: "ADS301m",
    explanation: "The first slide of the presentation identifies the course code as ADS301m (Page 1)."
  },
  {
    id: 172,
    type: QuestionType.FILL_IN_BLANK,
    question: "The two main topics of Session 11 are Mobile/App SEO and Metrics & ___.",
    answer: "KPIs",
    explanation: "The table of content on page 5 and the title slide on page 3 clearly state these two main topics."
  },
  {
    id: 101,
    type: QuestionType.FILL_IN_BLANK,
    question: "ASO stands for App Store ___.",
    answer: "Optimization",
    explanation: "ASO stands for App Store Optimization, the process of improving app visibility in app stores (Page 6)."
  },
  {
    id: 102,
    type: QuestionType.FILL_IN_BLANK,
    question: "App SEO allows you to acquire additional traffic ___ of what the app store themselves provide.",
    answer: "outside",
    explanation: "External App SEO focuses on driving traffic from sources other than the app store, like web search, social media, or referrals (Page 6)."
  },
  {
    id: 121,
    type: QuestionType.FILL_IN_BLANK,
    question: "App SEO helps you develop brand ___ about your app outside of the app store.",
    answer: "awareness",
    explanation: "A key benefit of External SEO is building brand awareness and visibility in places other than the app store itself (Page 6)."
  },
  {
    id: 161,
    type: QuestionType.FILL_IN_BLANK,
    question: "ASO helps increase your presence when looking for apps in your ___ or using keywords.",
    answer: "category",
    explanation: "ASO is about being visible where users are actively searching, either by category or specific keywords (Page 6)."
  },
  {
    id: 122,
    type: QuestionType.FILL_IN_BLANK,
    question: "65% of all apps are discovered through app store ___.",
    answer: "search",
    explanation: "This statistic underscores the importance of ranking well in app store search results, which is the primary goal of ASO (Page 7)."
  },
  {
    id: 123,
    type: QuestionType.FILL_IN_BLANK,
    question: "The LTV of ___ users can be 3-5 times that of paid search.",
    answer: "organic",
    explanation: "Users acquired organically through ASO tend to be more valuable over their lifetime compared to those acquired through paid ads (Page 7)."
  },
  {
    id: 140,
    type: QuestionType.FILL_IN_BLANK,
    question: "LTV stands for ___ Value.",
    answer: "Lifetime",
    explanation: "Lifetime Value (LTV) is a metric that estimates the total revenue a business can reasonably expect from a single customer account (Page 7)."
  },
  {
    id: 152,
    type: QuestionType.FILL_IN_BLANK,
    question: "External App SEO can lead to lower paid ad ___.",
    answer: "spending",
    explanation: "By increasing organic traffic from outside the store, you can reduce your reliance on and budget for paid advertising (Page 7)."
  },
  {
    id: 162,
    type: QuestionType.FILL_IN_BLANK,
    question: "External SEO can help you save money on ___ fees.",
    answer: "commission",
    explanation: "By driving traffic and potential sales from outside the app store, you can bypass the store's commission fees on transactions (Page 7)."
  },
  {
    id: 173,
    type: QuestionType.FILL_IN_BLANK,
    question: "An ASO benefit is a 35-40% ___ in organic downloads over time.",
    answer: "uplift",
    explanation: "The word 'uplift' is used on page 7 to describe the increase in organic downloads from ASO efforts."
  },
  {
    id: 103,
    type: QuestionType.FILL_IN_BLANK,
    question: "One of the External App SEO methods is to have a content ___ strategy.",
    answer: "marketing",
    explanation: "A content marketing strategy, such as a blog or feature pages, can drive traffic and awareness to your app from outside the app store (Page 8)."
  },
  {
    id: 141,
    type: QuestionType.FILL_IN_BLANK,
    question: "You should use reviews and ___, user generated content.",
    answer: "testimonials",
    explanation: "Leveraging positive feedback from users, like reviews and testimonials, is a powerful form of social proof for External SEO (Page 8)."
  },
  {
    id: 163,
    type: QuestionType.FILL_IN_BLANK,
    question: "The slide suggests people are more comfortable on a ___ vs. an app.",
    answer: "website",
    explanation: "This is given as a reason for having a website for your app, as it provides a familiar and comfortable environment for users to learn more (Page 8)."
  },
  {
    id: 104,
    type: QuestionType.FILL_IN_BLANK,
    question: "When participating in online communities, you should be a contributing member, not just an ___.",
    answer: "advertisement",
    explanation: "Providing value and contributing to discussions in online communities builds trust and is more effective than direct advertising (Page 11)."
  },
  {
    id: 116,
    type: QuestionType.FILL_IN_BLANK,
    question: "Keyword tags are a specific ASO element for the ___ operating system.",
    answer: "iOS",
    explanation: "The presentation explicitly mentions that keyword tags are an ASO element for iOS only (Page 12)."
  },
  {
    id: 124,
    type: QuestionType.FILL_IN_BLANK,
    question: "A good app title should include the brand name and relevant ___.",
    answer: "keywords",
    explanation: "Combining the brand name with relevant keywords in the app title is a fundamental ASO practice (Page 13)."
  },
  {
    id: 125,
    type: QuestionType.FILL_IN_BLANK,
    question: "For ASO, keywords should be short and easy to ___.",
    answer: "read",
    explanation: "Clarity and simplicity are key for ASO keywords, making them easy for both users and algorithms to understand (Page 14)."
  },
  {
    id: 153,
    type: QuestionType.FILL_IN_BLANK,
    question: "For keywords, you should maximize character ___.",
    answer: "space",
    explanation: "Making full use of the available character limits for keywords is an important optimization tactic (Page 14)."
  },
  {
    id: 179,
    type: QuestionType.FILL_IN_BLANK,
    question: "ASO keywords should be ___, not generic.",
    answer: "unique",
    explanation: "Unique keywords help you stand out from the competition (Page 14)."
  },
  {
    id: 142,
    type: QuestionType.FILL_IN_BLANK,
    question: "In keyword research, you should find ___ describing the features.",
    answer: "synonyms",
    explanation: "Thinking about synonyms helps you capture a wider range of search terms that users might use to find an app like yours (Page 15)."
  },
  {
    id: 178,
    type: QuestionType.FILL_IN_BLANK,
    question: "In keyword research for ASO, you should identify your app's main ___.",
    answer: "features",
    explanation: "Understanding the main features is the first step listed in the keyword research process (Page 15)."
  },
  {
    id: 126,
    type: QuestionType.FILL_IN_BLANK,
    question: "The Apple App Store description focuses on highlighting important information to capture a user's ___.",
    answer: "attention",
    explanation: "Given the short time users spend on a listing, Apple's description format is geared towards quickly grabbing attention (Page 16)."
  },
  {
    id: 127,
    type: QuestionType.FILL_IN_BLANK,
    question: "App descriptions are essential to your app's ___.",
    answer: "metadata",
    explanation: "The text in your description is a key piece of metadata that app stores use to understand and categorize your app (Page 17)."
  },
  {
    id: 105,
    type: QuestionType.FILL_IN_BLANK,
    question: "For app descriptions, adding relevant social ___ can help create trust in the app and your brand.",
    answer: "proof",
    explanation: "Social proof, such as testimonials, awards, or positive reviews mentioned in the description, can build user trust (Page 18)."
  },
  {
    id: 128,
    type: QuestionType.FILL_IN_BLANK,
    question: "One of the key engagement metrics for ASO is the speed of the ___.",
    answer: "app",
    explanation: "A slow or poorly performing app leads to a bad user experience, which can negatively affect rankings (Page 19)."
  },
  {
    id: 174,
    type: QuestionType.FILL_IN_BLANK,
    question: "External links to your ___ is an important engagement metric.",
    answer: "app",
    explanation: "External links signal authority and popularity to app stores, functioning similarly to backlinks for a website (Page 19)."
  },
  {
    id: 106,
    type: QuestionType.FILL_IN_BLANK,
    question: "Low quality, buggy, or scammy apps are subject to be ___ from app stores.",
    answer: "removed",
    explanation: "App stores have quality guidelines, and apps that have high crash rates, infrequent updates, or are buggy can be removed (Page 20)."
  },
  {
    id: 115,
    type: QuestionType.FILL_IN_BLANK,
    question: "High ___ rates are a characteristic of low quality apps.",
    answer: "crash",
    explanation: "Apps that crash frequently provide a poor user experience and are flagged as low quality by app stores (Page 20)."
  },
  {
    id: 117,
    type: QuestionType.FILL_IN_BLANK,
    question: "Infrequent ___ can be a sign of a low-quality app.",
    answer: "updates",
    explanation: "App stores may penalize apps that are not updated regularly, as it can indicate neglect or poor maintenance (Page 20)."
  },
  {
    id: 164,
    type: QuestionType.FILL_IN_BLANK,
    question: "The 'Rank Position and Downloads' chart shows your ___ ranking per country.",
    answer: "organic",
    explanation: "The ASO tool screenshot on page 21 is designed to track organic keyword rankings within the app store."
  },
  {
    id: 107,
    type: QuestionType.FILL_IN_BLANK,
    question: "Google Play will automatically ___ users for your A/B tests.",
    answer: "segment",
    explanation: "Google Play's A/B testing tools automatically segment users to show them different versions of your store listing (Page 22)."
  },
  {
    id: 129,
    type: QuestionType.FILL_IN_BLANK,
    question: "Users will differ across devices and ___.",
    answer: "stores",
    explanation: "This is a key consideration for A/B testing; user behavior can vary significantly between the Apple App Store and Google Play, or on different devices (Page 22)."
  },
  {
    id: 165,
    type: QuestionType.FILL_IN_BLANK,
    question: "The A/B test example showed a variant called 'New utility + ___ data'.",
    answer: "catch",
    explanation: "The graph on page 23 is titled 'New utility + catch data', representing the experiment being run."
  },
  {
    id: 143,
    type: QuestionType.FILL_IN_BLANK,
    question: "The Apple App Store requires ___ videos per localization.",
    answer: "3",
    explanation: "Apple allows for up to 3 localized videos on an app store page (Page 24)."
  },
  {
    id: 144,
    type: QuestionType.FILL_IN_BLANK,
    question: "The minimum number of screenshots on Google Play is ___.",
    answer: "2",
    explanation: "While you can have up to 8 screenshots on Google Play, you must have at least 2 (Page 24)."
  },
  {
    id: 154,
    type: QuestionType.FILL_IN_BLANK,
    question: "Videos on the Apple App Store must be ___ seconds each.",
    answer: "30",
    explanation: "Apple has a strict 30-second limit for each preview video (Page 24)."
  },
  {
    id: 155,
    type: QuestionType.FILL_IN_BLANK,
    question: "Google Play videos can be a maximum of ___ minutes.",
    answer: "2",
    explanation: "Google Play offers more flexibility, allowing videos up to 2 minutes long (Page 24)."
  },
  {
    id: 166,
    type: QuestionType.FILL_IN_BLANK,
    question: "On Apple, app videos must be of the ___ itself.",
    answer: "app",
    explanation: "Apple's guidelines require that video previews are screen captures of the app in use, not cinematic ads (Page 24)."
  },
  {
    id: 175,
    type: QuestionType.FILL_IN_BLANK,
    question: "Google Play allows optional videos, but they are needed to be ___.",
    answer: "featured",
    explanation: "To get a feature placement on Google Play, providing a promotional video is often a requirement (Page 24)."
  },
  {
    id: 108,
    type: QuestionType.FILL_IN_BLANK,
    question: "Optimizing screenshots can help improve your app's ___ rate.",
    answer: "conversion",
    explanation: "Compelling screenshots are a key factor in convincing users to download the app, thus improving the conversion rate (Page 25)."
  },
  {
    id: 109,
    type: QuestionType.FILL_IN_BLANK,
    question: "Your videos and screenshots make the first ___.",
    answer: "impression",
    explanation: "These visual elements are the first thing a potential user interacts with, making them critical for forming a positive first impression (Page 25)."
  },
  {
    id: 118,
    type: QuestionType.FILL_IN_BLANK,
    question: "Only 9% of users scroll past the first ___ screenshots.",
    answer: "two",
    explanation: "This statistic highlights the critical importance of making a strong impression with the very first visual elements a user sees (Page 26)."
  },
  {
    id: 130,
    type: QuestionType.FILL_IN_BLANK,
    question: "Decisions about downloading an app are made in ___ seconds.",
    answer: "7",
    explanation: "This incredibly short timeframe highlights why the initial visual impression is so critical (Page 26)."
  },
  {
    id: 110,
    type: QuestionType.FILL_IN_BLANK,
    question: "KPI stands for Key Performance ___.",
    answer: "Indicator",
    explanation: "A Key Performance Indicator is a measurable value that demonstrates how effectively a company is achieving key business objectives (Page 27)."
  },
  {
    id: 111,
    type: QuestionType.FILL_IN_BLANK,
    question: "SEO is a ___-term investment.",
    answer: "long",
    explanation: "The effects of SEO efforts are not immediate; they build over time, making it a long-term investment (Page 27)."
  },
  {
    id: 131,
    type: QuestionType.FILL_IN_BLANK,
    question: "One of the reasons to have KPIs is to demonstrate ___.",
    answer: "impact",
    explanation: "KPIs provide concrete data to show the impact and value of your SEO efforts to stakeholders (Page 27)."
  },
  {
    id: 145,
    type: QuestionType.FILL_IN_BLANK,
    question: "One reason to have KPIs is to manage ___.",
    answer: "expectations",
    explanation: "By setting and tracking KPIs, you can manage the expectations of stakeholders regarding SEO timelines and results (Page 27)."
  },
  {
    id: 112,
    type: QuestionType.FILL_IN_BLANK,
    question: "A KPI for organic traffic that measures people who have not yet visited your site is called ___ users.",
    answer: "New",
    explanation: "Tracking 'New users' helps you understand the growth of your audience and the reach of your SEO efforts (Page 28)."
  },
  {
    id: 132,
    type: QuestionType.FILL_IN_BLANK,
    question: "The KPI 'Users' refers to people who have visited your site ___ within a specified period.",
    answer: "once",
    explanation: "This defines a unique user within the selected time frame for reporting in tools like Google Analytics (Page 28)."
  },
  {
    id: 167,
    type: QuestionType.FILL_IN_BLANK,
    question: "Branded Traffic is a KPI that is often compared against ___ Traffic.",
    answer: "Unbranded",
    explanation: "This comparison helps differentiate users who know your brand from those who discover you through general search terms (Page 29)."
  },
  {
    id: 120,
    type: QuestionType.FILL_IN_BLANK,
    question: "Backlinks from low quality or ___ domains can harm your SEO.",
    answer: "toxic",
    explanation: "Part of backlink management is identifying and disavowing links from spammy or 'toxic' sites that can negatively impact your rankings (Page 30)."
  },
  {
    id: 146,
    type: QuestionType.FILL_IN_BLANK,
    question: "One Backlinks KPI is the total number of referring ___.",
    answer: "domains",
    explanation: "This KPI measures the number of unique websites linking to you, which is often more important than the total number of links (Page 30)."
  },
  {
    id: 156,
    type: QuestionType.FILL_IN_BLANK,
    question: "An important backlink KPI is monitoring for new links ___.",
    answer: "earned",
    explanation: "Tracking the rate of new link acquisition is a key indicator of the success of your off-page SEO and content marketing efforts (Page 30)."
  },
  {
    id: 176,
    type: QuestionType.FILL_IN_BLANK,
    question: "The total number of ___ is a key Backlinks KPI.",
    answer: "links",
    explanation: "This is the most basic backlink metric, counting every single link pointing to your site (Page 30)."
  },
  {
    id: 138,
    type: QuestionType.FILL_IN_BLANK,
    question: "CTR stands for ___-through-rate.",
    answer: "Click",
    explanation: "CTR, or Click-through-rate, is the percentage of people who click on your link after seeing it in search results (Page 31, 41)."
  },
  {
    id: 168,
    type: QuestionType.FILL_IN_BLANK,
    question: "A KPI that measures site health is Page (HTML) Load ___.",
    answer: "Speed",
    explanation: "The Site Performance report on page 32 shows Page (HTML) Load Speed as a key metric for user experience and SEO."
  },
  {
    id: 147,
    type: QuestionType.FILL_IN_BLANK,
    question: "The SEO survey findings focused on ___ solving.",
    answer: "problem",
    explanation: "The survey was designed to understand challenges and focus on problem-solving, which is why it skews negative (Page 33)."
  },
  {
    id: 133,
    type: QuestionType.FILL_IN_BLANK,
    question: "The biggest SEO business challenge, at 40%, is Prioritization & ___.",
    answer: "Implementation",
    explanation: "Getting SEO changes actually implemented by development or content teams is the most common hurdle for professionals (Page 34)."
  },
  {
    id: 148,
    type: QuestionType.FILL_IN_BLANK,
    question: "The second biggest SEO challenge was 'Putting out ___'.",
    answer: "fires",
    explanation: "This refers to the reactive, day-to-day problem-solving that takes up a significant amount of an SEO's time (Page 34)."
  },
  {
    id: 169,
    type: QuestionType.FILL_IN_BLANK,
    question: "The 'Other' category in the SEO Business Challenges survey accounted for ___%.",
    answer: "5",
    explanation: "The pie chart on page 34 shows the smallest slice, 'Other', at 5%."
  },
  {
    id: 177,
    type: QuestionType.FILL_IN_BLANK,
    question: "The SEO Business Challenges chart shows 'Setting Expectations of SEO results' at ___%.",
    answer: "10",
    explanation: "The yellow slice of the pie chart, representing 'Setting Expectations', is labeled as 10% (Page 34)."
  },
  {
    id: 135,
    type: QuestionType.FILL_IN_BLANK,
    question: "Forecasting provides a ___ to create value.",
    answer: "roadmap",
    explanation: "A forecast acts as a strategic plan or roadmap, guiding efforts and setting expectations for value creation (Page 35)."
  },
  {
    id: 157,
    type: QuestionType.FILL_IN_BLANK,
    question: "Getting ___ and investment is a primary reason to forecast SEO impact.",
    answer: "buy-in",
    explanation: "A solid forecast helps convince management and stakeholders to provide the necessary support and investment for new projects (Page 35)."
  },
  {
    id: 113,
    type: QuestionType.FILL_IN_BLANK,
    question: "A 'Base Case' SEO forecast is met with a ___% probability.",
    answer: "50",
    explanation: "A Base Case represents the most likely outcome, which is assigned a 50% probability (Page 36)."
  },
  {
    id: 134,
    type: QuestionType.FILL_IN_BLANK,
    question: "An 'Aggressive Case' forecast is met with a ___% probability.",
    answer: "25",
    explanation: "This is the most optimistic, 'stretch goal' forecast, and thus has the lowest probability of being achieved (Page 36)."
  },
  {
    id: 149,
    type: QuestionType.FILL_IN_BLANK,
    question: "The 'Conservative Case' forecast has a ___% probability of being met.",
    answer: "75",
    explanation: "This is the safest, most likely to be achieved forecast, hence the high probability (Page 36)."
  },
  {
    id: 136,
    type: QuestionType.FILL_IN_BLANK,
    question: "A forecast should include projections of upcoming ___ needed.",
    answer: "resources",
    explanation: "To be realistic, a forecast must account for the resources (budget, personnel, tools) required to achieve the projected results (Page 37)."
  },
  {
    id: 150,
    type: QuestionType.FILL_IN_BLANK,
    question: "A forecast should include the market size and ___.",
    answer: "share",
    explanation: "Understanding your total addressable market and current share is crucial for realistic forecasting (Page 37)."
  },
  {
    id: 170,
    type: QuestionType.FILL_IN_BLANK,
    question: "A forecast should include reviewing historical keyword ___.",
    answer: "volumes",
    explanation: "Understanding past search volume for keywords is essential for projecting future traffic (Page 37)."
  },
  {
    id: 114,
    type: QuestionType.FILL_IN_BLANK,
    question: "When analyzing competition, you should monitor their SEO ___.",
    answer: "maturity",
    explanation: "Understanding a competitor's SEO maturity helps gauge how difficult it will be to compete with them for rankings (Page 38)."
  },
  {
    id: 137,
    type: QuestionType.FILL_IN_BLANK,
    question: "If a competitor is not good at SEO, it could change ___.",
    answer: "quickly",
    explanation: "It's important not to underestimate competitors, as their SEO capabilities could improve rapidly with new investment or focus (Page 38)."
  },
  {
    id: 119,
    type: QuestionType.FILL_IN_BLANK,
    question: "Using Google ___ can help you analyze the popularity of search terms over time.",
    answer: "Trends",
    explanation: "Google Trends is the tool specifically designed for analyzing and comparing the interest in keywords over time (Page 39)."
  },
  {
    id: 158,
    type: QuestionType.FILL_IN_BLANK,
    question: "Excel to Power BI is an example of a data ___ tool.",
    answer: "viz",
    explanation: "Tools like Power BI or Google Data Studio are used for data visualization (viz) to make complex data easier to understand (Page 39)."
  },
  {
    id: 151,
    type: QuestionType.FILL_IN_BLANK,
    question: "The #1 organic position in Google gets about ___% of the clicks.",
    answer: "31.73",
    explanation: "The graph on page 41 shows that the top position has a dominant click-through rate of 31.73%."
  },
  {
    id: 159,
    type: QuestionType.FILL_IN_BLANK,
    question: "The #2 organic position in Google gets about ___% of the clicks.",
    answer: "24.71",
    explanation: "The graph on page 41 shows the second position has a click-through rate of 24.71%."
  },
  {
    id: 171,
    type: QuestionType.FILL_IN_BLANK,
    question: "Advanced ___ Ranking is the name of the tool shown on page 42.",
    answer: "Web",
    explanation: "The graph on page 42 is branded with the 'Advanced WEB RANKING' logo."
  },
  {
    id: 139,
    type: QuestionType.FILL_IN_BLANK,
    question: "The Google Search Console screenshot shows a full ___ export.",
    answer: "keyword",
    explanation: "Google Search Console is the primary tool for exporting a list of keywords your site is ranking for, along with performance data (Page 43)."
  },
  {
    id: 180,
    type: QuestionType.FILL_IN_BLANK,
    question: "The final slide of the presentation says 'Thank you for your ___!'.",
    answer: "attention",
    explanation: "The presentation concludes with a thank you slide (Page 44)."
  },

  // =============================================
  // Complete the Answer Questions - 80 Questions
  // =============================================
  {
    id: 220,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three Learning Objectives from the beginning of the presentation.",
    answer: ["Discuss App SEO, ASO", "Understand what A/B testing is", "Discover reasons why you need to have KPIs", "Understand the use of ROI"],
    explanation: "The Learning Objectives slide includes discussing App SEO/ASO, understanding A/B testing, the need for KPIs, using ROI, preparing for a career, and forecasting (Page 4)."
  },
  {
    id: 260,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three of the learning objectives related to SEO strategy and career preparation.",
    answer: ["Understand ROI", "Discuss survey findings for career prep", "Identify reasons to forecast SEO impact"],
    explanation: "The learning objectives on page 4 include understanding ROI, using survey findings to prepare for a career in SEO, and knowing why and how to forecast SEO impact."
  },
  {
    id: 272,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What were the four main topics under 'Learning Objectives'?",
    answer: ["App SEO/ASO", "KPIs", "ROI", "Forecasting"],
    explanation: "The learning objectives on page 4 cover App SEO/ASO, understanding KPIs, using ROI, discussing survey findings, and forecasting SEO impact."
  },
  {
    id: 254,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are the two main sections of the course as per the Table of Content?",
    answer: ["Mobile/App SEO", "Metrics & KPIs"],
    explanation: "The table of content on page 5 clearly outlines these two primary sections for the presentation."
  },
  {
    id: 216,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Explain the difference between ASO and App SEO.",
    answer: ["ASO is optimizing inside the app store", "App SEO is optimizing outside the app store"],
    explanation: "ASO (App Store Optimization) focuses on ranking and visibility within the app stores themselves. App SEO (External SEO) focuses on driving traffic from external sources like websites, search engines, and social media (Page 6)."
  },
  {
    id: 241,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What two main topics are covered under 'Mobile/App SEO' in the table of contents?",
    answer: ["ASO (App Store Optimization)", "App SEO"],
    explanation: "The initial breakdown on page 6 shows that Mobile/App SEO consists of these two main components: optimization within the store (ASO) and outside the store (App SEO)."
  },
  {
    id: 248,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two goals of App SEO (External SEO).",
    answer: ["Acquire additional traffic", "Develop brand awareness"],
    explanation: "The two main goals listed on slide 6 are to acquire traffic from sources outside the app store and to develop brand awareness beyond the store's ecosystem."
  },
  {
    id: 259,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the key difference between 'ASO' and 'App SEO' according to the Venn diagram-like comparison?",
    answer: ["ASO is for ranking inside app stores", "App SEO is for acquiring traffic outside app stores"],
    explanation: "Slide 6 visually separates the two: ASO's purpose is to rank 'in the app stores themselves', while App SEO's purpose is to 'acquire additional traffic outside' of the stores."
  },
  {
    id: 235,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two distinct goals of ASO, as described on slide 6?",
    answer: ["Rank highly in the app stores", "Increase presence when using category or keywords"],
    explanation: "The goals are to achieve high rankings in search results and to be more visible when users are browsing by category or searching with specific keywords (Page 6)."
  },
  {
    id: 201,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three main benefits of ASO (App Store Optimization).",
    answer: ["35-40% uplift in organic downloads", "65% of apps discovered via search", "LTV of organic users is 3-5 times paid", "Benefits other paid UA strategies"],
    explanation: "Key benefits include a significant increase in organic downloads, leveraging the primary discovery method for apps, acquiring higher-value users, and improving the efficiency of paid campaigns (Page 7)."
  },
  {
    id: 202,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are the three main benefits of External SEO for an app?",
    answer: ["Save money on commission fees", "Lower paid ad spending", "Increase brand awareness and visibility"],
    explanation: "External SEO helps bypass app store commissions, reduces reliance on paid advertising, and builds a stronger brand presence outside the confines of the app store (Page 7)."
  },
  {
    id: 237,
    type: QuestionType.COMPLETE_ANSWER,
    question: "How does good ASO benefit paid User Acquisition (UA) strategies?",
    answer: ["By increasing LTV", "By lowering cost of paid ads"],
    explanation: "By attracting higher-value organic users (higher LTV), ASO makes the overall user base more profitable. This can improve the return on investment for paid ads and lower the effective cost per acquisition (Page 7)."
  },
  {
    id: 255,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What does LTV stand for and why is it important for ASO?",
    answer: ["Lifetime Value", "LTV of organic users is 3-5 times higher than paid search"],
    explanation: "LTV stands for Lifetime Value. It's important because ASO brings in organic users who have a much higher LTV (3-5x) than users from paid search, making ASO a very profitable channel (Page 7)."
  },
  {
    id: 203,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Name three External App SEO methods to increase brand awareness.",
    answer: ["Have a website for your app", "Have a content marketing strategy", "Use reviews and testimonials", "Participate in Online communities"],
    explanation: "Effective external methods include creating a dedicated website, developing valuable content, leveraging user-generated content like reviews, and engaging with potential users in online communities (Page 8)."
  },
  {
    id: 225,
    type: QuestionType.COMPLETE_ANSWER,
    question: "According to the presentation, why should you have a website for your app?",
    answer: ["To increase brand awareness", "People are more comfortable on websites"],
    explanation: "Having a website is a key External SEO method. It helps increase brand and awareness, and the presentation notes that people are often more comfortable on a website than in an app for initial research (Page 8)."
  },
  {
    id: 256,
    type: QuestionType.COMPLETE_ANSWER,
    question: "In the context of External SEO, what is user generated content?",
    answer: ["Reviews and testimonials from users"],
    explanation: "User-generated content is content created by the app's users rather than the company, such as reviews and testimonials. It is a powerful tool for building trust (Page 8)."
  },
  {
    id: 275,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two different types of External App SEO methods?",
    answer: ["Have a website for your app", "Have a content marketing strategy", "Use reviews and testimonials", "Online communities"],
    explanation: "Page 8 lists several distinct methods for external SEO, including having a website, using content marketing, leveraging reviews, and participating in online communities."
  },
  {
    id: 231,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Describe the content marketing strategy for the 'Fishing App' example.",
    answer: ["Blog Topics (Beginner's guide, knots, rods, lines)", "Feature Pages (Finding spots, forecasts, maps)"],
    explanation: "The strategy involved creating two types of content: educational blog posts for beginners and feature-specific pages for experienced users, all designed to lead to an app download (Page 9)."
  },
  {
    id: 251,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two types of content mentioned in the 'Content Marketing for Apps' diagram.",
    answer: ["Blog Topics", "Feature Pages"],
    explanation: "The diagram on page 9 splits the content strategy into two main categories: general educational content (Blog Topics) and app-specific content (Feature Pages)."
  },
  {
    id: 238,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Explain what 'Google a community + app name' means as a research strategy.",
    answer: ["To find what people are saying about your app in online communities"],
    explanation: "This is a method for monitoring brand sentiment. By searching for your app's name along with a community name (like 'Reddit'), you can find organic conversations and feedback about your app (Page 11)."
  },
  {
    id: 264,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are the two actions you should take regarding online communities for your app?",
    answer: ["Monitor", "Participate"],
    explanation: "The slide on Community Participation advises that you should both monitor what is being said and actively participate in the communities (Page 11)."
  },
  {
    id: 242,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why should you participate in online communities for External SEO?",
    answer: ["To build brand awareness", "To get user-generated content", "To build trust"],
    explanation: "Engaging in online communities helps to increase brand awareness and can be a source of valuable user-generated content and testimonials. The key is to be a contributing member to build trust (Page 8, 11)."
  },
  {
    id: 204,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List the four main 'Elements of ASO' mentioned in the slides.",
    answer: ["App name or title", "Category", "Description (short and long)", "Keyword tags (iOS only)"],
    explanation: "These four elements are the foundational components you can optimize on an app store listing to improve ranking and visibility (Page 12)."
  },
  {
    id: 221,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Describe the two components of an app title for good ASO.",
    answer: ["Brand name", "Relevant keywords"],
    explanation: "A strong app title should include both the brand name for recognition and relevant keywords to improve discoverability in search (Page 13)."
  },
  {
    id: 211,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are three characteristics of good ASO keywords?",
    answer: ["Relevant", "Short", "Easy to read", "Unique"],
    explanation: "Effective keywords are directly related to the app's function, concise, simple for users to understand, and distinct from competitors (Page 14)."
  },
  {
    id: 230,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why is it important to maximize character space for ASO keywords?",
    answer: ["To include more relevant terms", "To increase chances of being found"],
    explanation: "App stores provide a limited amount of space for keywords. Maximizing this space allows you to target more search terms, thereby increasing your app's visibility and chances of being discovered (Page 14)."
  },
  {
    id: 277,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two things that make a keyword good for ASO.",
    answer: ["Relevant", "Short", "Easy to read", "Unique"],
    explanation: "The characteristics of good ASO keywords are that they are relevant to the app, short and concise, easy to read, and unique from competitors (Page 14)."
  },
  {
    id: 205,
    type: QuestionType.COMPLETE_ANSWER,
    question: "When researching keywords for your app, what are three questions you should ask?",
    answer: ["What are the main features of your app?", "What are synonyms for the features?", "What are similar apps called?", "What is your app's category?", "What terms do people use in this category?"],
    explanation: "A thorough keyword research process involves understanding your app's features, how users describe them, competitor naming conventions, and common category terminology (Page 15)."
  },
  {
    id: 269,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the purpose of asking 'What terms do people commonly use in this category?' during keyword research?",
    answer: ["To understand user language", "To find relevant keywords"],
    explanation: "This question helps you move beyond internal jargon and discover the actual words and phrases your target audience uses when searching for apps like yours, leading to more effective keywords (Page 15)."
  },
  {
    id: 236,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Name two differences in the app description guidelines between Google Play and Apple.",
    answer: ["Google uses short customized descriptions", "Google allows a subtitle", "Apple focuses on highlighting info when clicked"],
    explanation: "Google Play uses short, customized descriptions and allows a subtitle that appears in search results. Apple uses a short version of the main description that is shown when clicked and emphasizes capturing attention quickly (Page 16)."
  },
  {
    id: 270,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Explain why a 'subtitle' on Google Play is a valuable ASO element.",
    answer: ["It appears directly below the app name in search", "It provides more context quickly"],
    explanation: "Because it appears directly in the search results, the subtitle gives you an extra line of text to add compelling copy or keywords, helping your app stand out and providing more information to users before they even click (Page 16)."
  },
  {
    id: 212,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Name two things an app description should be or should include.",
    answer: ["Essential to metadata", "Informative", "Info on in-app purchases (Apple)", "Relevant social proof", "Highlighted reviews"],
    explanation: "A good description is informative, contains metadata, provides necessary billing info, and builds trust through social proof and reviews (Pages 17-18)."
  },
  {
    id: 226,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two ways an app description can create trust?",
    answer: ["Add relevant social proof", "Highlight reviews"],
    explanation: "Including social proof (like awards or media mentions) and highlighting positive user reviews within the description can help build trust and credibility with potential downloaders (Page 18)."
  },
  {
    id: 263,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Explain the role of 'social proof' in optimizing an app's screenshots and description.",
    answer: ["It can create trust in the app and brand"],
    explanation: "By including elements of social proof (like awards, positive review snippets, or impressive user numbers) in your description or screenshots, you build trust and make potential users more confident in their decision to download (Page 18, 25)."
  },
  {
    id: 206,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Name three engagement metrics that can affect your app's ranking.",
    answer: ["Speed of app", "Usage metrics", "Uninstall rate", "Ratings and reviews", "External links to your app"],
    explanation: "App stores use these signals to determine an app's quality and user satisfaction, which in turn influences its ranking in search results (Page 19)."
  },
  {
    id: 250,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What role do 'Ratings and reviews' play as an engagement metric?",
    answer: ["They signal user satisfaction", "They are a ranking factor"],
    explanation: "High ratings and positive reviews are a strong signal to the app store that users are satisfied with the app, which is a key factor in its ranking algorithm (Page 19)."
  },
  {
    id: 252,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why is an 'Uninstall rate' a significant ASO metric?",
    answer: ["A high uninstall rate signals a low-quality app"],
    explanation: "If many users download an app and then quickly uninstall it, it tells the app store that the app may be buggy, misleading, or provide a poor experience, which can harm its ranking (Page 19)."
  },
  {
    id: 213,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two characteristics of low-quality apps that can get them removed from app stores.",
    answer: ["High crash rates", "Infrequent updates", "Buggy or scammy"],
    explanation: "App stores maintain quality standards and may remove apps that crash often, are not maintained, or have deceptive functionality (Page 20)."
  },
  {
    id: 262,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two potential issues with an app that can lead to it being considered 'low quality'?",
    answer: ["High crash rates", "Infrequent updates", "Buggy or scammy"],
    explanation: "Page 20 lists several characteristics of low-quality apps, including high crash rates, infrequent updates, and being generally buggy or scammy."
  },
  {
    id: 247,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the relationship between 'Rank Position' and 'Downloads' in ASO?",
    answer: ["Higher rank position generally leads to more downloads"],
    explanation: "The goal of improving your rank position for relevant keywords is to increase visibility, which in turn leads to more organic downloads. The chart on page 21 demonstrates tracking this relationship."
  },
  {
    id: 267,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two keywords being tracked in the 'Rank Position and Downloads' tool example.",
    answer: ["vsco", "filter", "photo editor", "collage maker", "instagram"],
    explanation: "The table at the bottom of the ASO tool screenshot on page 21 lists tracked keywords like 'vsco', 'filter', and 'photo editor'."
  },
  {
    id: 249,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the purpose of 'A/B testing' in the context of ASO?",
    answer: ["To find which version of a store listing performs better", "To improve conversion rate"],
    explanation: "A/B testing allows you to test different creative assets (like icons or screenshots) to see which variant results in more page views, and ultimately, more downloads (Page 22, 23)."
  },
  {
    id: 217,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Compare the screenshot requirements for Apple and Google Play.",
    answer: ["Apple allows 10 screenshots", "Google Play allows 8 screenshots (minimum 2)"],
    explanation: "Apple allows up to 10 screenshots. Google Play allows a maximum of 8, but requires a minimum of 2 (Page 24)."
  },
  {
    id: 218,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Compare the video requirements for Apple and Google Play.",
    answer: ["Apple allows 3 videos at 30 seconds each", "Google Play allows 1 video from 30 seconds to 2 minutes"],
    explanation: "Apple allows up to 3 videos, but they must be exactly 30 seconds. Google Play only allows 1 video, but offers more flexibility in length, from 30 seconds up to 2 minutes (Page 24)."
  },
  {
    id: 243,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two characteristics of app videos on the Apple App Store?",
    answer: ["30 seconds each", "Must be of the app itself", "3 videos per localization"],
    explanation: "Apple's guidelines are specific: videos must be 30 seconds long, must be actual footage of the app, and you can have up to 3 for each language/region (Page 24)."
  },
  {
    id: 207,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two reasons why optimizing your app's screenshots is important.",
    answer: ["Improve conversion rate", "It's the first step in onboarding", "They make the first impression", "Can provide social proof"],
    explanation: "Screenshots are critical because they heavily influence the user's decision to download (conversion rate), set initial expectations (onboarding/first impression), and can build trust through social proof (Page 25)."
  },
  {
    id: 271,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two reasons why screenshots and videos make the 'first impression'.",
    answer: ["They are highly visual", "Users decide in 7 seconds", "Only 9% scroll past the first two"],
    explanation: "They are the most prominent and engaging part of an app listing. Given that users make a download decision in just 7 seconds and rarely scroll past the first two, these visuals ARE the first impression (Page 25, 26)."
  },
  {
    id: 233,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the key takeaway from the statistic 'Decisions are made in 7s'?",
    answer: ["First impressions are critical", "Visuals must be compelling immediately"],
    explanation: "This highlights the need for your app store page, particularly the icon, title, and first screenshots, to make an immediate, positive impact to convert a user (Page 26)."
  },
  {
    id: 215,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are three reasons to have KPIs for SEO?",
    answer: ["SEO is a long-term investment", "Demonstrate impact", "Manage expectations", "Measure impact of your strategy"],
    explanation: "KPIs provide tangible data to show progress, justify the long-term nature of SEO, align stakeholder expectations, and evaluate strategic success (Page 27)."
  },
  {
    id: 223,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Explain why SEO is considered a long-term investment.",
    answer: ["Results are not immediate", "It takes time to build authority and rankings"],
    explanation: "SEO is a long-term investment because it takes time for search engines to crawl, index, and rank content. Building authority and seeing significant results is a gradual process, not an overnight one (Page 27)."
  },
  {
    id: 208,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are the three components of 'Organic Traffic' as a KPI?",
    answer: ["Users", "New users", "Sessions"],
    explanation: "These three metrics provide a comprehensive view of organic traffic: 'Users' are unique visitors, 'New users' are first-time visitors, and 'Sessions' represent the total number of visits (Page 28)."
  },
  {
    id: 244,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Define the three organic traffic KPIs: Users, New users, and Sessions.",
    answer: ["Users: unique people", "New users: people who have not visited before", "Sessions: the entire visit of a user"],
    explanation: "Users are unique individuals who visited in a time period. New users are those visiting for the first time. Sessions are the total number of visits, meaning one user can have multiple sessions (Page 28)."
  },
  {
    id: 276,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is a 'session' in the context of web analytics?",
    answer: ["The entire visit of a user"],
    explanation: "A session encompasses all the interactions a user has with your website within a given timeframe. One user can have multiple sessions (Page 28)."
  },
  {
    id: 229,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List two different types of KPIs mentioned in the slides, besides Organic Traffic.",
    answer: ["Unbranded vs. Branded Traffic", "Keyword rankings", "Backlinks", "CTR", "Site Performance"],
    explanation: "The presentation covers several KPI categories, including Branded/Unbranded Traffic, Keyword Rankings, Backlinks, CTR, and Site Performance (Pages 29-32)."
  },
  {
    id: 274,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why would an SEO want to track 'Unbranded Traffic' vs 'Branded Traffic'?",
    answer: ["To distinguish discovery from direct interest", "To measure brand awareness"],
    explanation: "This KPI separates users who found you via generic keywords (discovery, good for SEO measurement) from those who already knew your name (direct interest, good for brand health). It helps to understand the true impact of SEO on attracting a new audience (Page 29)."
  },
  {
    id: 214,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Name four types of Backlink KPIs to monitor.",
    answer: ["Total number of links", "Total number of referring domains", "New links earned", "Links lost", "Low quality or toxic links"],
    explanation: "A comprehensive backlink analysis involves looking at the quantity of links and referring domains, the rate of new link acquisition and loss, and the quality of those links (Page 30)."
  },
  {
    id: 232,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why should you monitor 'Links lost' as a Backlink KPI?",
    answer: ["To identify content that needs updating", "To understand which links are being removed", "To reclaim lost link equity"],
    explanation: "When a valuable backlink is lost, your SEO authority can decrease. Monitoring lost links allows you to reach out to the site owner to potentially get the link restored or understand why it was removed (Page 30)."
  },
  {
    id: 257,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is a 'toxic link' in the context of Backlink KPIs?",
    answer: ["A low-quality or spammy link that can harm SEO"],
    explanation: "A toxic link comes from a low-quality, spammy, or irrelevant website. These links can signal to search engines that your site is untrustworthy, and it's important to identify and disavow them (Page 30)."
  },
  {
    id: 268,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why is it not enough to only track the 'Total number of links' as a KPI?",
    answer: ["You also need to know the number of referring domains and link quality"],
    explanation: "The total number of links can be misleading. It's more important to have links from many different high-quality domains. Therefore, you also need to track 'Total number of referring domains' and 'Low quality or toxic links' (Page 30)."
  },
  {
    id: 253,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are the four metrics shown on the CTR report on slide 31?",
    answer: ["Total clicks", "Total impressions", "Average CTR", "Average position"],
    explanation: "The four main boxes on the report display Total clicks, Total impressions, Average CTR, and Average position."
  },
  {
    id: 279,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What does the 'Site Performance' report on page 32 show?",
    answer: ["Page (HTML) Load Speed", "Performance Issues (Errors, Warnings)", "Number of JavaScript and CSS files"],
    explanation: "The report gives an overview of site health, focusing on load speed, identifying specific performance issues like large HTML size or uncompressed files, and analyzing the number of JS/CSS assets."
  },
  {
    id: 227,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Explain the two main points of the 'SEO survey findings' slide.",
    answer: ["Survey skewed negative because it focused on challenges", "Survey may be 'leading' since it provided a list of challenges"],
    explanation: "The slide serves as a disclaimer, noting that the survey results appear negative because it was designed to identify problems, and that the methodology (providing a list) might have influenced the responses (Page 33)."
  },
  {
    id: 209,
    type: QuestionType.COMPLETE_ANSWER,
    question: "According to the SEO Business Challenges survey, what were the top two challenges?",
    answer: ["Prioritization & Implementation", "Putting out fires"],
    explanation: "The survey found that the biggest challenge (40%) was getting SEO recommendations prioritized and implemented, followed by day-to-day problem solving or 'putting out fires' (25%) (Page 34)."
  },
  {
    id: 234,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List the top four SEO Business Challenges from the survey, in order of percentage.",
    answer: ["Prioritization & Implementation (40%)", "Putting out fires (25%)", "Cross Functional Compatability (20%)", "Setting Expectations (10%)"],
    explanation: "The pie chart on page 34 shows the breakdown: Prioritization & Implementation (40%), Putting out fires (25%), Cross Functional Compatability (20%), and Setting Expectations (10%)."
  },
  {
    id: 278,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What percentage of the SEO Business Challenges was 'Prioritization & Implementation'?",
    answer: ["40%"],
    explanation: "This was the single largest challenge, accounting for 40% of the responses in the survey, indicating it's a major pain point for SEO professionals (Page 34)."
  },
  {
    id: 265,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the relationship between forecasting and getting 'buy-in'?",
    answer: ["Forecasting is a reason to get buy-in and investment"],
    explanation: "A key reason to create an SEO forecast is to present it to stakeholders to get their buy-in and secure investment for new projects or clients (Page 35)."
  },
  {
    id: 219,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are the four 'Use Assumptions' cases for forecasting and their associated probabilities?",
    answer: ["Conservative Case (75%)", "Base Case (50%)", "Aggressive Case (25%)", "Optional - do nothing"],
    explanation: "The four cases are: Conservative (75% probability), Base (50% probability), Aggressive (25% probability), and the optional 'do nothing' baseline (Page 36)."
  },
  {
    id: 239,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the purpose of the 'Optional' case in SEO forecasting?",
    answer: ["To show what happens if you do nothing", "To create a baseline for comparison"],
    explanation: "The optional 'do nothing' case projects future performance without any new initiatives. This creates a baseline that makes the potential impact of the proposed SEO project much clearer and more compelling (Page 36)."
  },
  {
    id: 280,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Describe the three 'cases' used in SEO forecasting.",
    answer: ["Conservative (75% probability)", "Base (50% probability)", "Aggressive (25% probability)"],
    explanation: "Forecasting uses scenarios to manage expectations: a Conservative case that is very likely to be met (75%), a Base case representing the most probable outcome (50%), and an Aggressive 'stretch goal' case (25%) (Page 36)."
  },
  {
    id: 222,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two things a forecast should include, according to the slides?",
    answer: ["Projections of resources needed", "Context of your industry", "Market size and share"],
    explanation: "A solid forecast must include projections of needed resources, the industry context, and an analysis of market size and share (Page 37)."
  },
  {
    id: 240,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three things that should be included in an SEO forecast, aside from the forecast itself.",
    answer: ["Projections of resources needed", "Context of your industry", "Market size and share", "Review of historical keyword volumes", "Comparison ranking"],
    explanation: "A complete forecast includes resource projections, industry context, market analysis, historical keyword data, and competitor ranking comparisons to be comprehensive and credible (Page 37)."
  },
  {
    id: 258,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why is it important to understand your industry's context for an SEO forecast?",
    answer: ["To know if services/products are trending", "To make the forecast more realistic"],
    explanation: "A forecast made in a vacuum is useless. Understanding the industry context, including trends, seasonality, and overall market direction, is crucial for creating a realistic and achievable forecast (Page 37)."
  },
  {
    id: 228,
    type: QuestionType.COMPLETE_ANSWER,
    question: "When monitoring competition, what two questions should you ask about their SEO maturity?",
    answer: ["Are they good at SEO?", "Are they not good at SEO?"],
    explanation: "You need to assess their current state: Are they good at SEO (meaning they will likely compete for the same rankings)? Or are they not good at SEO (meaning they may not outrank you now, but could improve quickly)? (Page 38)."
  },
  {
    id: 246,
    type: QuestionType.COMPLETE_ANSWER,
    question: "Why is it risky to ignore a competitor who is 'not good at SEO'?",
    answer: ["Because their performance could change quickly"],
    explanation: "A competitor's SEO capabilities are not static. They could hire an agency or dedicate resources at any time, causing the competitive landscape to change quickly. Complacency is a risk (Page 38)."
  },
  {
    id: 210,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three useful tools for forecasting SEO impact.",
    answer: ["Google Analytics", "Google Search Console", "Google Trends", "Sites that show data on competition", "Google Data Studio"],
    explanation: "These tools provide the necessary data on historical performance, keyword trends, competitor analysis, and traffic, which are all essential for creating an accurate SEO forecast (Page 39)."
  },
  {
    id: 245,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three tools that use the word 'Google' in their name for forecasting.",
    answer: ["Google Analytics", "Google Search Console", "Google Trends", "Google Data Studio"],
    explanation: "The slide on useful tools lists four with 'Google' in the name: Google Analytics, Google Search Console, Google Trends, and Google Data Studio (Page 39)."
  },
  {
    id: 273,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the main function of Google Trends as a forecasting tool?",
    answer: ["To see search interest for a topic over time", "To identify seasonality"],
    explanation: "Google Trends shows the relative popularity of a search term over a period, which is crucial for understanding trends, seasonality, and long-term interest in your market (Page 39, 40)."
  },
  {
    id: 224,
    type: QuestionType.COMPLETE_ANSWER,
    question: "List three of the top five ranking positions and their approximate CTRs from the graph.",
    answer: ["Position 1 (31.73%)", "Position 2 (24.71%)", "Position 3 (18.66%)", "Position 4 (13.60%)", "Position 5 (9.51%)"],
    explanation: "The graph on page 41 shows the CTR for the top positions, with #1 at 31.73%, #2 at 24.71%, #3 at 18.66%, #4 at 13.60%, and #5 at 9.51%."
  },
  {
    id: 261,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What are two things that using pre-created CTR models (like the one on page 41) helps with?",
    answer: ["Saves time", "Makes it easy to draw specific conclusions"],
    explanation: "The slide notes that while they may not be perfectly accurate for every site, these models save time and make it easy to quickly draw general conclusions about the value of ranking positions."
  },
  {
    id: 266,
    type: QuestionType.COMPLETE_ANSWER,
    question: "What is the main takeaway from the 'Advanced Web Ranking' industry CTR chart?",
    answer: ["Different industries have different CTR curves", "Hobbies & Interests has a high CTR"],
    explanation: "The chart on page 42 shows that CTR performance varies significantly by industry. For example, 'Hobbies & Interests' has a much higher CTR for top positions compared to 'Real Estate'."
  },
];