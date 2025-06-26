import { Circle, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef } from '@motion-canvas/core';

const RED = '#c1121f';
const GREEN = `#6a994e`;
const MINTCREAM = "#F7FFF7";
const JET = "#343434";
const DELFTBLUE = "#2F3061";
const NAPLESYELLOW = "#FFE66D";
const AIRBLUE = "#6CA6C1";

// Slide data (you can import this from an external JSON file)
const slideData = {
  "title": "Day 2: Content Creation for Social Media",
  "slides": [
    {
      "title": "Introduction to Content Creation",
      "content": "Content is the backbone of social media success.\n\nQuality content builds brand image and audience trust.\n\nIt should inform, entertain, inspire, or solve problems.\n\nConsistent, valuable content drives engagement and conversions.\n\nDifferent platforms require different content strategies.\n\nWe’ll cover types, design, storytelling, virality, and engagement."
    },
    {
      "title": "Why Content Matters",
      "content": "Content is what your audience sees, shares, and remembers.\n\nIt shapes perception, trust, and brand voice.\n\nStrong content leads to higher reach and ROI.\n\nHelps users through the awareness, interest, and decision stages.\n\nGreat content converts followers into loyal customers.\n\nIt's your most powerful digital marketing asset."
    },
    {
      "title": "Types of Social Media Content",
      "content": "Text posts: quotes, updates, tips\n\nImages: infographics, product shots, memes\n\nVideos: tutorials, behind-the-scenes, testimonials\n\nStories: ephemeral, interactive, real-time content\n\nLive Streams: real-time Q&A, launches\n\nUser-Generated Content: reviews, reposts, mentions"
    },
    {
      "title": "Educational Content",
      "content": "Teach your audience something valuable or interesting.\n\nHow-to guides, industry tips, tutorials perform well.\n\nPosition your brand as a helpful expert.\n\nUse carousel posts or short videos for teaching.\n\nEducational content earns shares and saves.\n\nIdeal for thought leadership and long-term engagement."
    },
    {
      "title": "Entertaining Content",
      "content": "Content that entertains builds emotional connection.\n\nMemes, trends, humor, relatable scenarios perform best.\n\nUse Reels, TikToks, or casual captions.\n\nHelps humanize your brand and build rapport.\n\nMust stay relevant to your niche.\n\nEntertainment boosts reach and shareability."
    },
    {
      "title": "Promotional Content",
      "content": "Directly showcases products, services, or offers.\n\nShould be balanced—not overly sales-focused.\n\nUse strong CTAs: “Shop Now,” “Learn More,” etc.\n\nCombine with testimonials, benefits, and scarcity.\n\nAdd urgency with limited-time offers.\n\nUse retargeting to show promos to warm leads."
    },
    {
      "title": "Interactive Content",
      "content": "Increases time spent on your content.\n\nExamples: polls, quizzes, sliders, questions.\n\nStories and comment sections are perfect for interaction.\n\nEncourages feedback, engagement, and algorithm boosts.\n\nHelps you gather audience insights.\n\nKeeps your brand memorable and engaging."
    },
    {
      "title": "Inspirational Content",
      "content": "Motivates or uplifts your audience.\n\nQuotes, success stories, customer wins.\n\nWorks well for fitness, wellness, education, and business brands.\n\nVisual aesthetics are important for inspiration.\n\nKeep tone authentic and relatable.\n\nInspirational content drives emotional sharing."
    },
    {
      "title": "Behind-the-Scenes Content",
      "content": "Shows your brand’s personality and human side.\n\nOffice tours, work process, bloopers, team photos.\n\nMakes your brand more relatable and trustworthy.\n\nHelps build community and transparency.\n\nIdeal for stories, reels, or casual captions.\n\nAdds authenticity to your feed."
    },
    {
      "title": "User-Generated Content (UGC)",
      "content": "Content created by your audience or customers.\n\nExamples: testimonials, photos using your product.\n\nIncreases credibility and trust.\n\nAsk for tags or create branded hashtags.\n\nRepost with permission and credit users.\n\nUGC performs well and saves content creation time."
    },
    {
      "title": "Visual Design Principles",
      "content": "Keep visuals clean, branded, and readable.\n\nUse consistent colors, fonts, and filters.\n\nAvoid clutter; highlight one core message.\n\nUse high-resolution images and balanced spacing.\n\nAlign text with visual hierarchy.\n\nMaintain platform-specific size ratios (e.g., 1080x1350 for Instagram)."
    },
    {
      "title": "Color Psychology in Design",
      "content": "Colors influence perception and behavior.\n\nRed: urgency, passion. Blue: trust, calm. Yellow: happiness.\n\nAlign brand colors with messaging.\n\nUse contrast for emphasis and readability.\n\nLimit palettes to 2–3 dominant colors.\n\nConsistent use builds visual identity and recognition."
    },
    {
      "title": "Typography and Readability",
      "content": "Choose 1–2 fonts for consistency.\n\nUse bold for headlines, light for body text.\n\nEnsure contrast between text and background.\n\nAvoid all caps except for emphasis.\n\nKeep text short and impactful.\n\nPrioritize mobile readability."
    },
    {
      "title": "Visual Tools and Resources",
      "content": "Use Canva, Adobe Express, or Figma for content creation.\n\nFree stock images: Unsplash, Pexels, Pixabay.\n\nIcons: Flaticon, Noun Project.\n\nTemplates save time and maintain brand aesthetics.\n\nSchedule posts with design previews using Later or Buffer.\n\nCustomize assets to align with your brand."
    },
    {
      "title": "Introduction to Storytelling",
      "content": "Storytelling creates emotional connection and memorability.\n\nEvery story has a beginning, middle, and end.\n\nUse stories to show challenges, transformation, or results.\n\nEffective in building brand identity.\n\nIdeal for video, carousels, and long captions.\n\nReal stories build stronger communities."
    },
    {
      "title": "Brand Story Framework",
      "content": "Hero: Your customer.\n\nProblem: Their pain point.\n\nGuide: Your brand offering help.\n\nSolution: Your product/service.\n\nResult: Positive transformation or benefit.\n\nUse this narrative across different posts for clarity and persuasion."
    },
    {
      "title": "Storytelling Formats",
      "content": "Use Reels or TikToks for before-and-after stories.\n\nCarousels for case studies or brand timelines.\n\nInstagram Stories for real-time storytelling.\n\nBlogs and LinkedIn posts for detailed journeys.\n\nUse customer quotes, stats, and images for authenticity.\n\nConsistent storytelling builds brand loyalty."
    },
    {
      "title": "What Makes Content Go Viral?",
      "content": "Emotionally resonant: funny, shocking, or heartwarming.\n\nSimple and clear message.\n\nVisually appealing and easy to share.\n\nTimely: tied to current events or trends.\n\nEasy participation: challenges, memes, duets.\n\nEncourage tagging and user interaction."
    },
    {
      "title": "Timing and Trends",
      "content": "Post when your audience is most active.\n\nUse insights to find peak days and hours.\n\nJump on trending topics or audios early.\n\nTrend relevance increases reach significantly.\n\nBalance trends with brand relevance.\n\nStay agile with a mix of evergreen and trending content."
    },
    {
      "title": "Hooking the Audience",
      "content": "Hooks grab attention in the first few seconds.\n\nExamples: “Don’t scroll if you…” or “Here’s why you’re failing…”\n\nUse bold text, animation, or emotional intrigue.\n\nGreat for Reels, TikToks, and LinkedIn posts.\n\nKeeps users watching and increases engagement time.\n\nTest hooks to see what resonates most."
    },
    {
      "title": "Encouraging Engagement",
      "content": "Ask questions in captions or stories.\n\nUse call-to-actions: “Save this,” “Comment below,” “Tag a friend.”\n\nUse polls and quizzes for quick feedback.\n\nEngage back: reply to comments and DMs.\n\nShow appreciation to active followers.\n\nEngagement is a two-way street."
    },
    {
      "title": "Hashtag Strategy",
      "content": "Hashtags increase discoverability.\n\nMix popular, niche, and branded hashtags.\n\nInstagram: 3–5 relevant tags per post.\n\nTwitter/X: 1–2 trending or topic-based tags.\n\nResearch what your audience follows.\n\nDon’t spam—use purposefully."
    },
    {
      "title": "Content Testing and Iteration",
      "content": "Test different formats, styles, and CTAs.\n\nTrack performance with platform insights.\n\nAnalyze reach, engagement, saves, and shares.\n\nDrop low-performing formats; scale winners.\n\nCreate A/B tests with captions or visuals.\n\nIterate weekly or monthly based on data."
    },
    {
      "title": "Content Creation Workflow",
      "content": "Ideate → Script/Write → Design → Schedule → Analyze → Repeat.\n\nUse Notion, Trello, or Airtable for pipeline management.\n\nCollaborate with team or freelancers via shared folders.\n\nStore reusable assets in organized libraries.\n\nMaintain a monthly review rhythm for adjustments."
    },
    {
      "title": "Summary and Next Steps",
      "content": "Content is a mix of creativity, strategy, and analysis.\n\nUse a variety of formats to engage diverse audiences.\n\nFollow visual best practices and stay brand-consistent.\n\nTell stories that resonate and invite action.\n\nTap into trends, test regularly, and engage sincerely.\n\nStart creating with clarity and confidence!"
    }
  ]
}


export default makeScene2D(function* (view) {
    view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);

    const rowA = createRef<Rect>();
    const rowB = createRef<Layout>();

    const colA = createRef<Rect>();
    const colB = createRef<Rect>();

    const rect = createRef<Rect>();
    const title = createRef<Txt>();
    const description = createRef<Txt>();

    view.add(<Rect ref={rect} height={1080} width={1920} fill={'#000000'} />);

    view.add(
        <>
            <Layout layout gap={10} padding={10} direction="column" width={1920} height={1080}>
                <Rect ref={rowA} fill={MINTCREAM} radius={4} height={100} width={1900}>
                </Rect>
                <Layout ref={rowB} grow={9} direction="row" gap={0}>
                    <Rect ref={colA} grow={10} fill={MINTCREAM} radius={4}>
                    </Rect>
                    <Rect ref={colB} grow={0} fill={RED} radius={4}>
                    </Rect>
                </Layout>
            </Layout>
            <Txt ref={title} text="" offset={[-1, -1]} position={[-900, -510]} scale={0.2}></Txt>
            <Txt
                text=""
                ref={description}
                position={[-900, -380]}
                offset={[-1, -1]}
                maxHeight={960}
                maxWidth={960}
                scale={0.15}>
            </Txt>
        </>,
    );

    

    // Dynamically generate slides from JSON data
    for (const slide of slideData.slides) {
        yield* beginSlide(slide.title);
        yield* all(
            title().text(slide.title, 1),
            description().text(slide.content, 0)
        );
    }
});