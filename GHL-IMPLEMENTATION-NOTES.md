# Client Magnet Copy Tripwire Funnel — GHL Implementation Guide

## Overview

- **Funnel name:** Client Magnet Copy Tripwire
- **Total pages:** 5 (step-1-tripwire.html, step-2-upsell.html, step-3-annual.html, downsell.html, thank-you.html)
- **Purpose:** Acquire leads at $7, ascend to AI Lead Builder membership ($47/mo or $1,497/yr), with a downsell fallback ($27)
- **Location ID:** q9n3pXR3Yoi1NXPDP0uq

### How to Use This Guide

1. Open each HTML reference file in a browser to see the visual layout
2. Recreate each section in GHL's drag-and-drop funnel builder
3. Copy all text directly from the HTML pages — the copy is finalized
4. Follow the exact section order, colors, and layout from the reference files
5. Do NOT rewrite or alter any copy — implement as-is

---

## Funnel Flow Architecture

```
Email/Ad Traffic
    |
    v
Step 1: Tripwire Page ($7)
    | (purchase)
    v
Step 2: OTO - AI Lead Builder ($47 first month)
    |                                |
    v (Accept)                       v (Decline)
Step 3: Annual Upgrade ($1,497/yr)   Downsell Page ($27)
    |              |                  |              |
    v (Accept)     v (Decline)        v (Accept)     v (Decline)
Thank You Page   Thank You Page    Thank You Page  Thank You Page
```

**Key:** Every path eventually reaches the Thank You page. No dead ends.

---

## GHL Funnel Setup Steps

### 1. Create New Funnel

1. Go to **Sites > Funnels > + Create New Funnel**
2. Select **"Start from Scratch"**
3. Name: `Client Magnet Copy Tripwire`
4. Add 5 funnel steps in this exact order:

| Step # | Name | Page Type | URL Path |
|--------|------|-----------|----------|
| 1 | Tripwire | Landing Page (2-Step Order Form) | /client-magnet-copy |
| 2 | Upsell | OTO (One-Time Offer) | /client-magnet-copy/upgrade |
| 3 | Annual Upgrade | OTO (One-Time Offer) | /client-magnet-copy/annual |
| 4 | Downsell | Downsell | /client-magnet-copy/starter |
| 5 | Thank You | Thank You Page | /client-magnet-copy/thank-you |

### 2. Payment Products to Create

Go to **Payments > Products** and create these 4 products:

| Product Name | Type | Price | Billing | Notes |
|-------------|------|-------|---------|-------|
| Client Magnet Copy GPT | One-time | $7.00 | Single charge | Tripwire product |
| AI Lead Builder - First Month | Subscription | $47.00 first / $197.00 recurring | Monthly, first payment different | Use GHL's "different first payment" option |
| AI Lead Builder - Annual | Subscription | $1,497.00/year | Annual billing | Annual subscription plan |
| 5-GPT Starter Bundle | One-time | $27.00 | Single charge | Downsell product |

**Important for "AI Lead Builder - First Month":**
- In GHL product settings, enable "Different first payment amount"
- First payment: $47.00
- Recurring payment: $197.00/month
- This means the buyer pays $47 now, then $197/month starting 30 days later

---

## 3. Step-by-Step Page Configuration

### Step 1: Tripwire Page

**Reference file:** `step-1-tripwire.html`
**Product:** Client Magnet Copy GPT ($7)
**Page type:** 2-Step Order Form

#### Order Form Configuration
- **Step 1 fields:** First Name, Email
  - Headline above form: "Where should we send your access?"
  - Button text: "GET INSTANT ACCESS - JUST $7"
- **Step 2 fields:** Credit card / payment info
  - Show order summary with product name and $7 price
  - Button text: "COMPLETE MY ORDER - $7"
- **Bump offer:** None on this page

#### Page Sections (top to bottom, from HTML reference)

1. **Urgency Bar** — Top sticky bar with countdown or limited-time message
2. **Hero Section** — Navy background, headline, subheadline, hero image/mockup of the GPT
3. **Problem Section** — White background, pain points the prospect faces
4. **Solution Section** — Introduce the Client Magnet Copy GPT as the answer
5. **What You Get Section** — Bullet list of deliverables/features
6. **Social Proof Section** — Testimonials or results
7. **2-Step Order Form** — The actual purchase form (Step 1: email, Step 2: payment)
8. **Guarantee Section** — Money-back guarantee badge and copy
9. **FAQ Section** — Common objections answered
10. **Final CTA Section** — Last call to action
11. **Footer** — Minimal footer with legal links

#### Redirect After Purchase
- **On successful payment:** Redirect to Step 2 (Upsell page)

---

### Step 2: Upsell Page (OTO)

**Reference file:** `step-2-upsell.html`
**Product:** AI Lead Builder - First Month ($47)
**Page type:** One-Time Offer (OTO)

#### OTO Configuration
- **One-click upsell:** ENABLED (charges the card from Step 1 — no re-entry needed)
- **Accept button text:** "YES! Add AI Lead Builder For Just $47"
- **Decline link text:** "No thanks, I'll stick with just the one GPT"
- **Accept redirect:** Step 3 (Annual Upgrade page)
- **Decline redirect:** Downsell page

#### Page Sections (from HTML reference)

1. **Confirmation Bar** — Green/teal bar: "Wait! Your order is not complete..."
2. **Hero Section** — Navy background, headline about the full AI Lead Builder offer
3. **What You Unlock Section** — All 19 GPTs listed, community access, weekly calls, course
4. **Value Stack Section** — Show total value vs. $47 price
5. **Social Proof Section** — Member testimonials and results
6. **CTA Section** — Accept button (prominent) + decline link (subtle, below)
7. **Guarantee Section** — Risk-free guarantee
8. **Final CTA** — Repeat accept/decline

#### Critical Settings
- Ensure "one-click upsell" is toggled ON in GHL funnel step settings
- The decline link MUST redirect to the Downsell page, not the Thank You page

---

### Step 3: Annual Upgrade Page (OTO)

**Reference file:** `step-3-annual.html`
**Product:** AI Lead Builder - Annual ($1,497)
**Page type:** One-Time Offer (OTO)

#### OTO Configuration
- **One-click upsell:** ENABLED
- **Accept button text:** "YES! Lock In My Annual Rate"
- **Decline link text:** "No thanks, I'll keep my monthly plan"
- **Accept redirect:** Thank You page
- **Decline redirect:** Thank You page (both paths go to Thank You from here)

#### Page Sections (from HTML reference)

1. **Confirmation Bar** — "Your AI Lead Builder membership is confirmed!"
2. **Hero Section** — Headline about saving with annual billing
3. **Savings Comparison** — Monthly cost vs. annual cost, show exact savings
4. **Annual Bonus Section** — Strategy call or exclusive bonus for annual members
5. **CTA Section** — Accept button + decline link
6. **Guarantee Section** — Annual guarantee terms

#### GHL Action on Accept
- When the buyer accepts, GHL should switch/upgrade their subscription from the monthly plan ($47 first / $197 recurring) to the annual plan ($1,497/year)
- Configure this in the OTO step's product settings — select the annual product as a replacement/upgrade

---

### Step 4: Downsell Page

**Reference file:** `downsell.html`
**Product:** 5-GPT Starter Bundle ($27)
**Page type:** Downsell

#### Downsell Configuration
- **One-click purchase:** ENABLED
- **Accept button text:** "YES! Give Me The 5-GPT Starter Bundle - Just $27"
- **Decline link text:** "No thanks, I just want the Client Magnet Copy GPT"
- **Accept redirect:** Thank You page
- **Decline redirect:** Thank You page

#### Page Sections (from HTML reference)

1. **Empathy Bar** — "We get it — $47/month might not be right for you right now"
2. **Hero Section** — Headline offering a lighter alternative
3. **What You Get Section** — The 5 specific GPTs in the bundle
4. **Value Section** — Show value of 5 GPTs vs. $27 price
5. **CTA Section** — Accept button + decline link
6. **Guarantee Section** — Money-back guarantee

#### Important
- This page only appears when someone DECLINES the Step 2 upsell
- It should feel like a genuine alternative, not a pressure tactic

---

### Step 5: Thank You Page

**Reference file:** `thank-you.html`
**Page type:** Thank You

#### Conditional Content Configuration

This page uses GHL's **conditional visibility** to show/hide sections based on which products the contact purchased. This is the most complex page to configure.

**In GHL:** Each section/row should have visibility conditions set based on contact tags.

| Section | Visibility Rule | Shows When |
|---------|----------------|------------|
| Client Magnet Copy GPT access | **Always visible** | Everyone who reaches this page |
| Starter Bundle GPTs section | Show if tag = `starter-bundle` | Bought the $27 downsell |
| Full AI Lead Builder access section | Show if tag = `alb-member` | Bought the $47 upsell |
| Strategy call booking section | Show if tag = `alb-annual` | Bought the $1,497 annual |
| Community CTA section | Show if tag = `tripwire-only` OR `starter-bundle` | Did NOT buy full ALB membership |

#### Page Sections (from HTML reference)

1. **Confirmation Header** — "You're in! Here's your access..."
2. **Client Magnet Copy GPT Access** — (ALWAYS VISIBLE) GPT link, Quick Start Guide download, Prompt Templates download
3. **Starter Bundle Access** — (CONDITIONAL: `starter-bundle` tag) Links to all 5 GPTs in the bundle
4. **AI Lead Builder Full Access** — (CONDITIONAL: `alb-member` tag) Platform login, all 19 GPT links, community link, next live call date, course access link
5. **Strategy Call Booking** — (CONDITIONAL: `alb-annual` tag) Calendar embed or booking link for the annual bonus strategy call
6. **Community CTA** — (CONDITIONAL: `tripwire-only` OR `starter-bundle`) Invite to free community or teaser for full membership
7. **Next Steps Section** — What to do right now (use your GPT, join the community, etc.)
8. **Footer** — Support email, social links

#### How to Set Conditional Visibility in GHL
1. Select the row/section in the builder
2. Click the gear icon > Advanced > Display Conditions
3. Set condition: "Contact Tag" > "contains" > [tag name]
4. For OR conditions: Add multiple conditions with "OR" logic

---

## 4. Contact Tags Configuration

Go to **Settings > Tags** and create these tags:

| Tag | Applied When | Purpose |
|-----|-------------|---------|
| `tripwire-buyer` | Step 1 purchase | Identifies all buyers who entered the funnel |
| `alb-member` | Step 2 purchase (OTO accepted) | Identifies AI Lead Builder monthly members |
| `alb-47-first-month` | Step 2 purchase | Tracks who bought at the $47 intro price |
| `alb-annual` | Step 3 purchase (Annual accepted) | Identifies annual subscribers |
| `starter-bundle` | Downsell purchase | Identifies starter bundle buyers |
| `tripwire-only` | Applied by automation (24hr delay) | Buyers who ONLY got the $7 tripwire — no upsell, no downsell |

**Note:** `tripwire-only` is NOT applied at purchase time. It is applied 24 hours later by Workflow 1 if the contact has no other purchase tags.

---

## 5. Pipeline Setup

Go to **Opportunities > Pipelines > + Create Pipeline**

**Pipeline name:** Tripwire Buyers

| Stage # | Stage Name | Stage Value | Description |
|---------|-----------|-------------|-------------|
| 1 | New Buyer ($7) | $7 | Just purchased tripwire |
| 2 | Starter Bundle ($27) | $27 | Purchased the downsell |
| 3 | ALB Monthly ($47) | $47 | Purchased AI Lead Builder monthly |
| 4 | ALB Annual ($1,497) | $1,497 | Upgraded to annual |
| 5 | Won (Converted) | — | Long-term retained customer |

Contacts move through stages via automation workflows (configured below).

---

## 6. Automation Workflows

Go to **Automation > Workflows** and create these 5 workflows.

---

### Workflow 1: Tripwire Purchase

**Trigger:** Product purchased = "Client Magnet Copy GPT"

**Actions (in order):**

1. **Add tag:** `tripwire-buyer`
2. **Create/Update opportunity:** Pipeline = "Tripwire Buyers", Stage = "New Buyer ($7)"
3. **Send email:** "Your Client Magnet Copy GPT Access"
   - Subject: Your Client Magnet Copy GPT is ready
   - Body includes:
     - GPT access link (direct ChatGPT link)
     - Quick Start Guide PDF download link
     - Prompt Templates PDF download link
     - Brief "what to do first" instructions
4. **Wait:** 24 hours
5. **If/Else condition:** Contact does NOT have tag `alb-member` AND does NOT have tag `starter-bundle`
   - **If true (no upsell or downsell purchased):**
     - Add tag: `tripwire-only`
     - Add to workflow: "Tripwire to ALB Nurture Sequence" (Workflow 5)
   - **If false:** Do nothing (they already purchased more)

---

### Workflow 2: AI Lead Builder Purchase ($47)

**Trigger:** Product purchased = "AI Lead Builder - First Month"

**Actions (in order):**

1. **Add tags:** `alb-member`, `alb-47-first-month`
2. **Remove tag:** `tripwire-only` (if it exists)
3. **Update opportunity:** Pipeline = "Tripwire Buyers", Stage = "ALB Monthly ($47)"
4. **Remove from workflow:** "Tripwire to ALB Nurture Sequence" (stop nurture if running)
5. **Send email:** "Welcome to AI Lead Builder!"
   - Subject: Welcome to AI Lead Builder — here's everything you need
   - Body includes:
     - Platform login URL
     - All 19 GPT access links (list each by name with direct link)
     - Community link (Skool or whichever platform)
     - Next live call date and time
     - AI Growth Accelerator course access instructions
     - Support contact info
6. **Add to workflow:** "ALB Onboarding Sequence" (separate onboarding workflow — build later)

---

### Workflow 3: Annual Upgrade

**Trigger:** Product purchased = "AI Lead Builder - Annual"

**Actions (in order):**

1. **Add tag:** `alb-annual`
2. **Update opportunity:** Pipeline = "Tripwire Buyers", Stage = "ALB Annual ($1,497)"
3. **Send email:** "Annual Upgrade Confirmed + Book Your Strategy Call"
   - Subject: You're locked in — book your strategy call now
   - Body includes:
     - Confirmation of annual membership
     - Savings breakdown (what they save vs. monthly)
     - Strategy call booking link (calendar link)
     - VIP community access (if applicable)
     - Support contact info

---

### Workflow 4: Starter Bundle Purchase

**Trigger:** Product purchased = "5-GPT Starter Bundle"

**Actions (in order):**

1. **Add tag:** `starter-bundle`
2. **Remove tag:** `tripwire-only` (if it exists)
3. **Update opportunity:** Pipeline = "Tripwire Buyers", Stage = "Starter Bundle ($27)"
4. **Remove from workflow:** "Tripwire to ALB Nurture Sequence" (stop nurture if running)
5. **Send email:** "Your 5-GPT Starter Bundle Access"
   - Subject: Your 5-GPT Starter Bundle is ready
   - Body includes:
     - All 5 GPT access links (list each by name)
     - Quick Start Guide for each GPT
     - Tips for getting the most out of the bundle
6. **Wait:** 3 days
7. **Start workflow:** "Starter Bundle to ALB Nurture" (3-email sequence — details below)

#### Starter Bundle to ALB Nurture (3-email sub-sequence)

- **Email 1 (Day 3):** "You've got 5 GPTs... here's what 19 can do" — Show the breadth of the full AI Lead Builder suite, highlight GPTs not in the starter bundle
- **Email 2 (Day 5):** "How [member name] went from 5 GPTs to a full AI system" — Case study, results, transformation story
- **Email 3 (Day 7):** "Upgrade to AI Lead Builder — special offer for Starter Bundle members" — Direct pitch, special price or bonus for upgrading, CTA to join

**Exit condition:** If contact purchases AI Lead Builder at any point, remove from this sequence.

---

### Workflow 5: Tripwire to ALB Nurture Sequence (5 days)

**Trigger:** Added to workflow (from Workflow 1, after 24hr wait)

**Exit condition:** Contact purchases AI Lead Builder OR 5-GPT Starter Bundle at any point — immediately exit the workflow.

| Day | Email Subject | Content Focus |
|-----|--------------|---------------|
| Day 1 | "Did you try the Client Magnet Copy GPT yet?" | Encourage usage, show quick win they can get today, social proof of results others have gotten |
| Day 2 | "Here's what you're missing with just 1 assistant" | Showcase 2-3 other GPTs from the full suite (e.g., Lead Qualifier, Follow-Up Sequence Builder), demonstrate the power of a connected system |
| Day 3 | "How Shamimah generated 73 leads in one month" | Full case study, real results, connect the dots to AI Lead Builder as the system that made it possible |
| Day 4 | "19 AI assistants vs 1 — the math is simple" | Value comparison, ROI calculation, total value vs. $47 price, limited-time offer framing |
| Day 5 | "Last chance: Your special $47 first month offer" | Final urgency push, deadline, recap of everything included, strong CTA |

**Email guidelines:**
- Each email should be 300-500 words max
- Include a single clear CTA linking to a direct purchase page or the upsell page
- Use Muhammad's voice (reference `/knowledge/Muhammad_Asmal_Blog_Writing_Style_Guide.md`)
- No hype, no fluff — direct and value-focused
- Every email should provide standalone value even if they don't buy

---

## 7. Design Notes for VA

### Brand Colors (exact hex codes — use these precisely)

```
Deep Navy:     #0A1628  (backgrounds, headlines)
Electric Cyan: #06B6D4  (CTA buttons, highlights, links)
Teal:          #14B8A6  (accents, checkmarks, icons)
Slate:         #1E293B  (card backgrounds, secondary sections)
Cool Gray:     #64748B  (body text, paragraphs)
Light Gray:    #E2E8F0  (borders, dividers)
White:         #FFFFFF  (section backgrounds, text on dark)
Success Green: #10B981  (confirmation bars, guarantee badges)
```

### Typography

**Headlines:** Space Grotesk Bold
- Available on Google Fonts: https://fonts.google.com/specimen/Space+Grotesk
- Use for all H1, H2, H3 headings

**Body text:** Inter Regular
- Available on Google Fonts: https://fonts.google.com/specimen/Inter
- Use for paragraphs, bullets, form labels

**To add custom fonts in GHL:**
1. Go to the funnel step's settings
2. Click "Custom Code" or "Tracking Code"
3. Add to the `<head>` section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

4. Then in the element styles, use `Space Grotesk` for headings and `Inter` for body text.

### Layout Pattern

Pages follow an alternating section pattern:
- **Section 1:** Navy (#0A1628) background, white text
- **Section 2:** White (#FFFFFF) background, dark text
- **Section 3:** Navy background, white text
- ...and so on

Follow the HTML reference files exactly for which sections use which background color.

### CTA Button Styling

```
Background:    #06B6D4 (Electric Cyan)
Text color:    #FFFFFF (White)
Font:          Space Grotesk Bold
Border radius: 8px
Padding:       16px 32px
Hover:         Slightly darker cyan (#0891B2)
```

All CTA buttons should have consistent styling across all pages.

### Decline Link Styling

```
Text color:    #64748B (Cool Gray)
Font size:     14px (smaller than body text)
Underline:     Yes
Position:      Centered below the CTA button
```

Decline links should be visually subtle — not hidden, but clearly secondary to the CTA button.

### Responsive Design Checklist

Test all pages at these breakpoints:

| Breakpoint | Device | Key Requirements |
|-----------|--------|-----------------|
| 375px | Mobile (iPhone) | Full-width CTAs, single-column layout, stacked GPT cards |
| 768px | Tablet (iPad) | 2-column GPT grids, padded sections |
| 1440px | Desktop | Full layout as designed in HTML reference |

**Mobile-specific rules:**
- CTA buttons: full-width (100%) on mobile
- GPT grid/cards: stack to single column
- Headline font size: reduce by ~20% on mobile
- Section padding: reduce from 80px to 40px on mobile
- Images: scale down, never overflow the viewport

---

## 8. Tracking & Analytics

### Facebook Pixel

Add to **all funnel pages** via the funnel's global tracking code:

1. Go to the funnel settings > Tracking Code
2. Paste the Facebook Pixel base code in the `<head>` section
3. Add these specific events:

| Page | Facebook Event | Trigger |
|------|---------------|---------|
| Tripwire (Step 1) | `ViewContent` | Page load |
| Tripwire (Step 1) | `InitiateCheckout` | Step 2 of form (payment) |
| Tripwire (Step 1) | `Purchase` (value: 7) | Successful payment |
| Upsell (Step 2) | `Purchase` (value: 47) | OTO accepted |
| Annual (Step 3) | `Purchase` (value: 1497) | OTO accepted |
| Downsell | `Purchase` (value: 27) | Downsell accepted |
| Thank You | `CompleteRegistration` | Page load |

### Google Analytics 4

1. Add GA4 measurement tag to the funnel's global tracking code
2. Configure these as conversion events in GA4:
   - `purchase` (for all payment events)
   - `begin_checkout` (for form step 2)
   - `page_view` (automatic, for funnel step tracking)

### GHL Built-in Tracking

1. Enable GHL's built-in conversion tracking for each funnel step
2. This gives you funnel analytics in **Sites > Funnels > Analytics**
3. Tracks: page views, opt-ins, purchases, conversion rates per step

---

## 9. Pre-Launch Checklist

### Funnel Pages
- [ ] All 5 funnel pages created in GHL
- [ ] All pages styled to match HTML reference files exactly
- [ ] All copy matches the HTML files word-for-word
- [ ] Brand colors correct (check hex codes against the list above)
- [ ] Space Grotesk and Inter fonts loading on all pages
- [ ] All pages mobile responsive (test at 375px, 768px, 1440px)

### Payment & Products
- [ ] All 4 payment products created with correct pricing
- [ ] "AI Lead Builder - First Month" has different first payment ($47) configured
- [ ] "AI Lead Builder - Annual" is set to yearly billing at $1,497
- [ ] Payment processor (Stripe) connected and active
- [ ] Test purchases completed with $1 test products (then delete test transactions)

### Order Forms & OTOs
- [ ] 2-step order form working on Step 1 (email first, then payment)
- [ ] One-click upsell enabled on Step 2 (Upsell)
- [ ] One-click upsell enabled on Step 3 (Annual)
- [ ] One-click purchase enabled on Downsell page
- [ ] All redirect flows tested:
  - [ ] Step 1 purchase -> Step 2
  - [ ] Step 2 accept -> Step 3
  - [ ] Step 2 decline -> Downsell
  - [ ] Step 3 accept -> Thank You
  - [ ] Step 3 decline -> Thank You
  - [ ] Downsell accept -> Thank You
  - [ ] Downsell decline -> Thank You

### Tags & Pipeline
- [ ] All 6 tags created in GHL
- [ ] "Tripwire Buyers" pipeline created with 5 stages
- [ ] Pipeline stages have correct monetary values

### Automations
- [ ] Workflow 1: Tripwire Purchase — built and activated
- [ ] Workflow 2: AI Lead Builder Purchase — built and activated
- [ ] Workflow 3: Annual Upgrade — built and activated
- [ ] Workflow 4: Starter Bundle Purchase — built and activated
- [ ] Workflow 5: Tripwire to ALB Nurture (5-day) — built and activated
- [ ] Starter Bundle to ALB Nurture (3-email) — built and activated
- [ ] All workflow triggers correctly linked to products
- [ ] All email templates drafted and reviewed

### Emails
- [ ] Tripwire welcome email drafted with GPT link, Quick Start Guide, Prompt Templates
- [ ] ALB welcome email drafted with all 19 GPT links, community link, course access
- [ ] Annual confirmation email drafted with strategy call booking link
- [ ] Starter Bundle email drafted with all 5 GPT links
- [ ] All 5 nurture emails (Workflow 5) written
- [ ] All 3 starter bundle nurture emails written
- [ ] All emails tested (send test to Muhammad for review)

### Thank You Page
- [ ] Conditional visibility working for each section
- [ ] Tested with each tag combination:
  - [ ] `tripwire-buyer` only — shows GPT access + community CTA
  - [ ] `starter-bundle` — shows GPT access + bundle access + community CTA
  - [ ] `alb-member` — shows GPT access + full ALB access
  - [ ] `alb-annual` — shows GPT access + full ALB access + strategy call

### Technical
- [ ] Domain/subdomain configured: aileadbuilder.com/client-magnet-copy
- [ ] SSL certificate active
- [ ] Facebook Pixel installed and firing correctly (test with FB Pixel Helper extension)
- [ ] GA4 tag installed and reporting
- [ ] GHL conversion tracking enabled
- [ ] Page load speed acceptable (<3 seconds on mobile)

### Assets Needed Before Launch
- [ ] GPT access links (actual ChatGPT URLs for all GPTs)
- [ ] Quick Start Guide PDF (uploaded to GHL or hosted URL)
- [ ] Prompt Templates PDF (uploaded to GHL or hosted URL)
- [ ] AI Lead Builder platform login URL
- [ ] Community link (Skool or equivalent)
- [ ] AI Growth Accelerator course access URL
- [ ] Strategy call booking link (Calendly or GHL calendar)
- [ ] Support email address for footer/emails

---

## 10. URLs to Configure

Set these in the funnel step settings under "Path":

| Page | Full URL | Path Setting |
|------|----------|-------------|
| Tripwire | aileadbuilder.com/client-magnet-copy | /client-magnet-copy |
| Upsell | aileadbuilder.com/client-magnet-copy/upgrade | /client-magnet-copy/upgrade |
| Annual | aileadbuilder.com/client-magnet-copy/annual | /client-magnet-copy/annual |
| Downsell | aileadbuilder.com/client-magnet-copy/starter | /client-magnet-copy/starter |
| Thank You | aileadbuilder.com/client-magnet-copy/thank-you | /client-magnet-copy/thank-you |

**Domain setup:**
1. Ensure `aileadbuilder.com` is connected as a domain in GHL (Settings > Domains)
2. If using a subdomain, configure DNS accordingly
3. SSL should auto-provision through GHL/Cloudflare

---

## 11. Common GHL Gotchas

1. **One-click upsell not working:** Make sure the OTO step type is set correctly AND the payment integration is the same as Step 1. One-click only works when the same payment processor handles all steps.

2. **Conditional visibility not updating:** After adding tags via automation, the Thank You page conditions evaluate at page load time. Since the page loads immediately after purchase, the automation must apply tags BEFORE the redirect. GHL handles this automatically for funnel step purchases, but verify in testing.

3. **2-step form not advancing:** Ensure the form's "Step 1" and "Step 2" are configured in the form builder, not just visually separated with sections.

4. **Emails not sending:** Check that the sender email/domain is verified in GHL (Settings > Email Services). Unverified domains will block sends.

5. **Subscription upgrade (Step 3):** When annual is purchased after monthly, you may need a manual or automated step to cancel the monthly subscription and start the annual. Test this flow carefully to avoid double-billing.

6. **Funnel analytics showing 0:** Make sure each funnel step has the correct "step type" selected. GHL only tracks conversions when page types are set correctly (Landing Page, OTO, Downsell, Thank You).

---

## 12. Testing Protocol

Before going live, run through this exact test sequence:

### Test Run 1: Full Accept Path
1. Visit tripwire page
2. Purchase with test card ($7)
3. Accept upsell ($47)
4. Accept annual ($1,497)
5. Verify Thank You page shows: GPT access + ALB access + strategy call
6. Verify tags applied: `tripwire-buyer`, `alb-member`, `alb-47-first-month`, `alb-annual`
7. Verify pipeline stage: "ALB Annual ($1,497)"
8. Verify emails received: Tripwire access + ALB welcome + Annual confirmation

### Test Run 2: Upsell Decline + Downsell Accept
1. Visit tripwire page
2. Purchase with test card ($7)
3. Decline upsell -> redirected to downsell page
4. Accept downsell ($27)
5. Verify Thank You page shows: GPT access + bundle access + community CTA
6. Verify tags applied: `tripwire-buyer`, `starter-bundle`
7. Verify pipeline stage: "Starter Bundle ($27)"
8. Verify emails received: Tripwire access + Starter Bundle access

### Test Run 3: Full Decline Path
1. Visit tripwire page
2. Purchase with test card ($7)
3. Decline upsell -> redirected to downsell page
4. Decline downsell -> redirected to Thank You page
5. Verify Thank You page shows: GPT access + community CTA only
6. Verify tags applied: `tripwire-buyer` (then `tripwire-only` after 24hrs)
7. Verify pipeline stage: "New Buyer ($7)"
8. Verify nurture sequence starts after 24 hours

### Test Run 4: Mobile Experience
1. Repeat Test Run 1 on a mobile device (or mobile emulator)
2. Verify all pages render correctly
3. Verify forms are usable on mobile
4. Verify CTAs are tappable and full-width

**After testing:** Delete all test contacts, transactions, and pipeline opportunities created during testing.

---

## Quick Reference Card

Print this or keep it visible during implementation:

```
FUNNEL:    Client Magnet Copy Tripwire
PAGES:     5 (Tripwire > Upsell > Annual > Downsell > Thank You)
PRODUCTS:  4 ($7, $47/mo, $1,497/yr, $27)
TAGS:      6 (tripwire-buyer, alb-member, alb-47-first-month, alb-annual, starter-bundle, tripwire-only)
PIPELINE:  Tripwire Buyers (5 stages)
WORKFLOWS: 5 + 1 sub-sequence
EMAILS:    4 transactional + 5 nurture + 3 bundle nurture = 12 total
DOMAIN:    aileadbuilder.com/client-magnet-copy
COLORS:    Navy #0A1628 | Cyan #06B6D4 | Teal #14B8A6
FONTS:     Space Grotesk (heads) | Inter (body)
```
