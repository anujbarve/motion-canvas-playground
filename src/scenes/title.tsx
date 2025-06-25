import { makeScene2D, Polygon, Rect, Txt } from '@motion-canvas/2d';
import { all, beginSlide, createRef, createSignal, tween } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);

  const bg = createRef<Rect>();
  const header = createRef<Rect>();
  const title = createRef<Txt>();
  const description = createRef<Txt>();
  const polygon = createRef<Polygon>();
  const rotation = createSignal(0);

  // 🔁 Dynamic slide data
  const slides = [
    {
      id: "slide1",
      title: "Introduction to Social Media Marketing",
      description: `
  
* Social media marketing uses platforms to connect with audiences.
  
* It promotes brands, builds loyalty, and increases sales.

* Essential for real-time engagement and customer feedback.

* Platforms vary in purpose, tone, and audience.

* Marketing strategies must adapt to each platform’s strengths.

* Data-driven decisions ensure better performance and ROI.`
    },
    {
      id: "slide2",
      title: "Evolution of Social Media Platforms",
      description: `
  
* Early platforms like MySpace paved the way.
  
* Facebook revolutionized how users interact with brands.

* Instagram and TikTok added visual and short-form appeal.

* LinkedIn remains the leader in professional networking.

* Platforms constantly evolve with new features and algorithms.

* Marketers must stay informed to remain effective.`
    },
    {
      id: "slide3",
      title: "Benefits of Social Media Marketing",
      description: `
  
* Enhances brand awareness and recall.
  
* Drives targeted traffic to websites or landing pages.

* Supports customer service and real-time feedback.

* Builds community and customer loyalty.

* Allows affordable, measurable advertising campaigns.

* Ideal for small businesses and global enterprises alike.`
    },
    {
      id: "slide4",
      title: "Platform Overview: Facebook",
      description: `
  
* Broadest demographic reach, ideal for all industries.
  
* Supports long-form posts, groups, and live videos.

* Robust Ads Manager with granular targeting.

* Messenger facilitates real-time interaction with users.

* Ideal for community-building and paid campaigns.

* Great for retargeting and multi-step funnels.`
    },
    {
      id: "slide5",
      title: "Platform Overview: Instagram",
      description: `
  
* Highly visual and mobile-first platform.
  
* Appeals to younger demographics (18–34).

* Features include Reels, Stories, and Shopping.

* Strong influencer ecosystem for brand partnerships.

* Best for lifestyle, fashion, food, and travel content.

* Hashtags and visuals drive discovery and engagement.`
    },
    {
      id: "slide6",
      title: "Platform Overview: LinkedIn",
      description: `
  
* Professional networking and B2B marketing.
  
* Ideal for recruiters, marketers, and job seekers.

* Supports long-form posts, articles, and company updates.

* High engagement on thought leadership content.

* LinkedIn Ads effective for niche, professional audiences.

* Builds authority and industry presence.`
    },
    {
      id: "slide7",
      title: "Platform Overview: Twitter (X)",
      description: `
  
* Real-time updates, trends, and short messaging.
  
* High usage for news, politics, and events.

* Great for customer service and rapid announcements.

* Supports threads, spaces, and promoted tweets.

* Twitter Ads useful for brand visibility.

* Use hashtags and trends to stay relevant.`
    },
    {
      id: "slide8",
      title: "Platform Overview: TikTok",
      description: `
  
* Short-form, entertaining video content.
  
* Audience is largely Gen Z and young millennials.

* Highly engaging, trend-driven, and viral in nature.

* Great for challenges, behind-the-scenes, and UGC.

* TikTok Creator Marketplace connects brands with influencers.

* Use sounds, filters, and effects to boost visibility.`
    },
    {
      id: "slide9",
      title: "Platform Overview: YouTube",
      description: `
  
* Long-form video content, ideal for education and branding.
  
* Great for tutorials, testimonials, and product demos.

* YouTube Shorts boosts short-form visibility.

* Integrates well with Google Ads ecosystem.

* Influencer collaborations perform strongly here.

* Valuable for building trust and authority.`
    },
    {
      id: "slide10",
      title: "Audience Demographics by Platform",
      description: `
  
* Facebook: 25–44 age range, wide usage across sectors.
  
* Instagram: 18–34 users, skewed female.

* LinkedIn: 25–54, professionals with high income.

* TikTok: 16–24 dominant; fast-growing Gen Z base.

* Twitter: Balanced demographics, more urban users.

* YouTube: All ages; strong with males aged 18–34.`
    },
    {
      id: "slide11",
      title: "Understanding Buyer Personas",
      description: `
  
* Personas reflect your ideal customer profiles.
  
* Based on age, location, interests, pain points, goals.

* Helps personalize messaging and content tone.

* Each platform may target different personas.

* Use analytics to refine and update personas.

* Crucial for effective targeting and content creation.`
    },
    {
      id: "slide12",
      title: "Content Types Across Platforms",
      description: `
  
* Text: LinkedIn updates, tweets.
  
* Images: Instagram posts, Facebook carousels.

* Videos: Reels, Shorts, TikToks, YouTube.

* Live content: Facebook Live, IG Live, Spaces.

* Stories: Ephemeral, engaging, and interactive.

* Blog links: Shared via Facebook, LinkedIn, Twitter.`
    },
    {
      id: "slide13",
      title: "Importance of Visual Content",
      description: `
  
* Visuals increase engagement and retention.
  
* Use branded templates for consistency.

* Infographics perform well on LinkedIn and Pinterest.

* Product demos and behind-the-scenes boost authenticity.

* Short videos get more shares and saves.

* Maintain high quality and mobile-optimization.`
    },
    {
      id: "slide14",
      title: "Content Calendar Planning",
      description: `
  
* Organize posts by day, platform, and format.
  
* Align with events, launches, and seasonal themes.

* Helps maintain consistency and track performance.

* Use tools like Trello, Notion, or Buffer.

* Include hashtags, captions, and image assets.

* Plan weekly, but stay flexible for trends.`
    },
    {
      id: "slide15",
      title: "Storytelling in Social Media",
      description: `
  
* Builds emotional connection and brand personality.
  
* Highlight customer stories, challenges, or behind-the-scenes.

* Use a narrative arc: problem, solution, success.

* Ideal for Instagram, Facebook, LinkedIn.

* Authenticity increases shares and saves.

* Stories should inspire, inform, or entertain.`
    },
    {
      id: "slide16",
      title: "Platform-Specific Features",
      description: `
  
* Facebook: Groups, Events, Marketplace.
  
* Instagram: Reels, Stories, Shopping.

* LinkedIn: Articles, Job Listings.

* TikTok: Duets, Stitch, For You page.

* Twitter: Threads, Spaces.

* Leverage these to maximize content reach.`
    },
    {
      id: "slide17",
      title: "Hashtags and Discovery",
      description: `
  
* Hashtags organize content and improve discoverability.
  
* Use trending hashtags for visibility.

* Platform-specific behavior: limited on LinkedIn, key on Instagram.

* Branded hashtags aid campaigns and UGC.

* Avoid overstuffing—balance relevance and clarity.

* Monitor hashtag performance regularly.`
    },
    {
      id: "slide18",
      title: "Influencer Collaboration",
      description: `
  
* Influencers provide trust and access to niche audiences.
  
* Choose based on audience fit, not just followers.

* Micro-influencers offer high engagement rates.

* Collaborate for giveaways, unboxings, or product reviews.

* Track ROI via affiliate links or codes.

* Disclose partnerships to maintain transparency.`
    },
    {
      id: "slide19",
      title: "Scheduling and Automation Tools",
      description: `
  
* Tools help manage multiple platforms efficiently.
  
* Popular tools: Buffer, Hootsuite, Later, Meta Suite.

* Automate posting, but monitor responses in real-time.

* Schedule during peak engagement hours.

* Use analytics to adjust timing.

* Avoid sounding robotic—engage authentically.`
    },
    {
      id: "slide20",
      title: "The Role of Engagement",
      description: `
  
* Engagement = likes, shares, comments, saves.
  
* Encourages algorithm boosts and visibility.

* Ask questions, use polls, respond to comments.

* Engagement builds trust and loyalty.

* Prompt replies show customer care.

* Quality content is a conversation starter.`
    },
    {
      id: "slide21",
      title: "Social Listening & Feedback",
      description: `
  
* Monitor brand mentions, hashtags, and conversations.
  
* Tools: Brand24, Mention, Sprout Social.

* Understand sentiment, trends, and user needs.

* Respond to feedback to improve products/services.

* Turn negative comments into opportunities.

* Insights help shape future strategy.`
    },
    {
      id: "slide22",
      title: "Organic vs Paid Social",
      description: `
  
* Organic: Unpaid posts relying on engagement and reach.
  
* Paid: Sponsored ads targeting specific audiences.

* Organic builds trust, paid boosts visibility.

* Both must work together for success.

* Track each separately in reports.

* Allocate budget based on campaign goals.`
    },
    {
      id: "slide23",
      title: "Social Media Analytics Basics",
      description: `
  
* Key metrics: Reach, Impressions, Engagement, Follower Growth.
  
* Platform insights dashboards provide native data.

* Monitor link clicks, video views, saves.

* Track trends and optimize accordingly.

* Use UTM tags for external tracking.

* Analyze weekly and monthly for patterns.`
    },
    {
      id: "slide24",
      title: "Challenges in Social Media Marketing",
      description: `
  
* Algorithm changes affect visibility.
  
* Content fatigue from constant posting.

* Negative comments or PR crises.

* Time-consuming without proper planning.

* Measuring ROI isn’t always straightforward.

* Solution: stay agile, test, learn, adapt.`
    },
    {
      id: "slide25",
      title: "Recap and Takeaways",
      description: `
  
* Social media is diverse, fast-moving, and vital to digital marketing.
  
* Choose platforms wisely based on audience and goals.

* Match content type to platform and user behavior.

* Use analytics and tools for consistency and growth.

* Stay authentic, responsive, and up-to-date.

* Success lies in creativity, strategy, and adaptability.`
    }
  ];


  // 🧱 Layout structure
  view.add(<Rect ref={bg} height={1080} width={1920} fill={'#EAEAEA'} />);
  view.add(<Rect ref={header} height={200} width={1920} position={[0, -440]} fill={'#CBC5EA'} />);
  view.add(
    <Txt
      ref={title}
      text=""
      textAlign="left"
      scale={0.25}
      fill="#183642"
      // Set the position of the top-left corner
      position={[-800, -480]} // Adjust these values as needed
      offset={[-1, -1]} // This offset makes the top-left corner the origin for positioning
    />
  );
  view.add(
    <Txt
      ref={description}
      text=""
      textAlign="left"
      scale={0.16}
      fill="#183642"
      // Set the position of the top-left corner
      position={[-800, -200]} // Adjust these values as needed
      offset={[-1, -1]} // This offset makes the top-left corner the origin for positioning
    />
  );


  // 🔁 Slide logic with animated text()
  for (const slide of slides) {
    yield* beginSlide(slide.id);

    yield* all(
      title().text(slide.title, 1),
      description().text(slide.description.trim(), 1)
    );

    switch (slide.id) {
      case 'slide2':
        yield* title().scale(0.3, 0.5);
        yield* title().scale(0.25, 0.5);
        break;

      case 'slide4':
        const startX = description().position.x();
        description().position.x(startX - 300);
        yield* description().position.x(startX, 1);
        break;

    }
  }



});