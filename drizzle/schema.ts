import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
  json,
  decimal,
  boolean,
} from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Social accounts table for storing OAuth credentials and platform connections.
 * Supports YouTube, TikTok, Instagram, Facebook, and Snapchat.
 */
export const socialAccounts = mysqlTable("social_accounts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  platform: mysqlEnum("platform", [
    "youtube",
    "tiktok",
    "instagram",
    "facebook",
    "snapchat",
  ]).notNull(),
  accountName: varchar("accountName", { length: 255 }).notNull(),
  accountId: varchar("accountId", { length: 255 }).notNull(),
  accessToken: text("accessToken").notNull(),
  refreshToken: text("refreshToken"),
  tokenExpiresAt: timestamp("tokenExpiresAt"),
  isConnected: boolean("isConnected").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SocialAccount = typeof socialAccounts.$inferSelect;
export type InsertSocialAccount = typeof socialAccounts.$inferInsert;

/**
 * Scripts table for storing generated video scripts.
 * Each script contains hook, retention loop, CTA, hashtags, and visual direction.
 */
export const scripts = mysqlTable("scripts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  hook: text("hook").notNull(),
  retentionLoop: text("retentionLoop").notNull(),
  cta: text("cta").notNull(),
  hashtags: text("hashtags").notNull(), // JSON array stored as text
  visualDirection: text("visualDirection").notNull(),
  duration: int("duration").default(42).notNull(), // in seconds, default 42 (middle of 40-45 range)
  platforms: text("platforms").notNull(), // JSON array of platform names
  generatedAt: timestamp("generatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Script = typeof scripts.$inferSelect;
export type InsertScript = typeof scripts.$inferInsert;

/**
 * Scheduled posts table for tracking content calendar entries.
 * Supports pending, posted, and failed status states.
 */
export const scheduledPosts = mysqlTable("scheduled_posts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  scriptId: int("scriptId").notNull(),
  socialAccountId: int("socialAccountId").notNull(),
  platform: mysqlEnum("platform", [
    "youtube",
    "tiktok",
    "instagram",
    "facebook",
    "snapchat",
  ]).notNull(),
  scheduledAt: timestamp("scheduledAt").notNull(),
  status: mysqlEnum("status", ["pending", "posted", "failed"])
    .default("pending")
    .notNull(),
  postedAt: timestamp("postedAt"),
  postUrl: varchar("postUrl", { length: 512 }),
  errorMessage: text("errorMessage"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ScheduledPost = typeof scheduledPosts.$inferSelect;
export type InsertScheduledPost = typeof scheduledPosts.$inferInsert;

/**
 * Content library table for storing and organizing generated scripts.
 * Allows tagging, categorization, and metadata storage.
 */
export const contentLibrary = mysqlTable("content_library", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  scriptId: int("scriptId").notNull(),
  tags: text("tags").notNull(), // JSON array of tags
  category: varchar("category", { length: 100 }),
  description: text("description"),
  isFavorite: boolean("isFavorite").default(false).notNull(),
  usageCount: int("usageCount").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContentLibraryItem = typeof contentLibrary.$inferSelect;
export type InsertContentLibraryItem = typeof contentLibrary.$inferInsert;

/**
 * Analytics snapshots table for tracking performance metrics.
 * Stores aggregated data per platform and time period.
 */
export const analyticsSnapshots = mysqlTable("analytics_snapshots", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  socialAccountId: int("socialAccountId").notNull(),
  platform: mysqlEnum("platform", [
    "youtube",
    "tiktok",
    "instagram",
    "facebook",
    "snapchat",
  ]).notNull(),
  date: timestamp("date").notNull(),
  views: int("views").default(0).notNull(),
  likes: int("likes").default(0).notNull(),
  shares: int("shares").default(0).notNull(),
  comments: int("comments").default(0).notNull(),
  engagementRate: decimal("engagementRate", { precision: 5, scale: 2 }).default(
    "0"
  ),
  postCount: int("postCount").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AnalyticsSnapshot = typeof analyticsSnapshots.$inferSelect;
export type InsertAnalyticsSnapshot = typeof analyticsSnapshots.$inferInsert;

/**
 * Trend topics table for storing AI-generated trend research.
 * Includes category filtering and per-platform breakdown.
 */
export const trendTopics = mysqlTable("trend_topics", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  topic: varchar("topic", { length: 255 }).notNull(),
  category: mysqlEnum("category", [
    "ai",
    "psychology",
    "future_tech",
    "finance",
    "history",
  ]).notNull(),
  description: text("description").notNull(),
  relevanceScore: decimal("relevanceScore", { precision: 3, scale: 2 }).default(
    "0"
  ),
  platformBreakdown: text("platformBreakdown").notNull(), // JSON object with platform-specific insights
  generatedAt: timestamp("generatedAt").defaultNow().notNull(),
  expiresAt: timestamp("expiresAt"), // Optional expiration for trend relevance
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TrendTopic = typeof trendTopics.$inferSelect;
export type InsertTrendTopic = typeof trendTopics.$inferInsert;

/**
 * Job logs table for tracking background job execution.
 * Used for monitoring auto-post and token refresh jobs.
 */
export const jobLogs = mysqlTable("job_logs", {
  id: int("id").autoincrement().primaryKey(),
  jobType: mysqlEnum("jobType", ["auto_post", "token_refresh"]).notNull(),
  status: mysqlEnum("status", ["success", "failed", "pending"])
    .default("pending")
    .notNull(),
  message: text("message"),
  processedCount: int("processedCount").default(0).notNull(),
  failedCount: int("failedCount").default(0).notNull(),
  executedAt: timestamp("executedAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type JobLog = typeof jobLogs.$inferSelect;
export type InsertJobLog = typeof jobLogs.$inferInsert;
