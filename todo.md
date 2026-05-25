# Malton AI - Project TODO

## Phase 1: Architecture & Planning
- [x] Define database schema (social_accounts, scripts, scheduled_posts, content_library, analytics_snapshots, trend_topics)
- [x] Plan tRPC router structure
- [x] Plan cyberpunk theme color palette and typography
- [x] Plan background job architecture (heartbeat)

## Phase 2: Database Schema & Migrations
- [ ] Create Drizzle schema with all required tables
- [ ] Generate and apply migration SQL
- [ ] Create database helper functions in server/db.ts
- [ ] Write vitest tests for database operations

## Phase 3: Backend tRPC Procedures
- [ ] Create AI script generator procedure (LLM integration)
- [ ] Create trend research procedure (LLM integration)
- [ ] Create social account management procedures (CRUD)
- [ ] Create scheduled posts procedures (CRUD)
- [ ] Create content library procedures (search, filter, copy)
- [ ] Create analytics procedures (fetch and aggregate metrics)
- [ ] Write vitest tests for all procedures

## Phase 4: Cyberpunk Theme & Dashboard Layout
- [ ] Import Rajdhani, Exo 2, Share Tech Mono fonts
- [ ] Create cyberpunk color palette in Tailwind config
- [ ] Build command-center sidebar dashboard layout
- [ ] Implement animated transitions and responsive design
- [ ] Create reusable UI components with cyberpunk styling
- [ ] Add glowing accents and futuristic effects

## Phase 5: Feature Pages
- [ ] Build Script Generator page with LLM integration
- [ ] Build Trend Research page with category filters
- [ ] Build Content Calendar page with scheduling UI
- [ ] Build Content Library page with search and filters
- [ ] Implement copy-to-clipboard functionality
- [ ] Add loading states and error handling

## Phase 6: Multi-Platform OAuth
- [ ] Implement YouTube OAuth flow
- [ ] Implement TikTok OAuth flow
- [ ] Implement Instagram OAuth flow
- [ ] Implement Facebook OAuth flow
- [ ] Implement Snapchat OAuth flow
- [ ] Build account connection/disconnection UI
- [ ] Store OAuth tokens securely in database

## Phase 7: Analytics Dashboard
- [ ] Build analytics page with performance metrics
- [ ] Implement per-platform breakdown charts
- [ ] Display engagement metrics (views, likes, shares, comments)
- [ ] Show posting frequency and performance trends
- [ ] Add date range filtering

## Phase 8: Background Heartbeat Jobs
- [ ] Set up heartbeat job infrastructure
- [ ] Implement auto-post job (15-minute interval)
- [ ] Implement token refresh job (6-hour interval)
- [ ] Add error handling and logging
- [ ] Test job execution and scheduling

## Phase 9: Notifications System
- [ ] Implement job completion notifications
- [ ] Implement token refresh notifications
- [ ] Implement critical error notifications
- [ ] Integrate with owner notification system
- [ ] Test all notification triggers

## Phase 10: Testing & Deployment
- [ ] Run full vitest suite
- [ ] Test all tRPC procedures
- [ ] Test UI responsiveness across devices
- [ ] Test OAuth flows for all platforms
- [ ] Test background jobs execution
- [ ] Create final checkpoint
- [ ] Deploy to production

## Known Issues & Bugs
(None yet)

## Design Decisions
- Color Palette: #000000 (black), #0a0e27 (dark-blue), #00d9ff (neon cyan), #b700ff (purple)
- Typography: Rajdhani (headings), Exo 2 (body), Share Tech Mono (code/data)
- Video Duration: 40-45 seconds
- Post Status States: pending, posted, failed
- Supported Platforms: YouTube, TikTok, Instagram, Facebook, Snapchat
- Job Intervals: Auto-post (15 min), Token refresh (6 hours)
