# MySpendings — Zero-Entry Expense Tracker (React Native CLI)

This repository contains a React Native CLI–oriented blueprint for a **zero‑manual‑entry** expense tracker
focused on **one‑tap confirmation**. The implementation is intentionally modular and offline‑first, with secure
local storage and privacy‑preserving SMS parsing.

## Product goals
- **Zero manual entry by default** (SMS parsing + auto-categorization)
- **One-tap confirmation** for most actions
- **Minimal UI** (no clutter)
- **Offline-first** with encrypted local storage
- **Privacy** (no SMS content uploaded)

## Screen structure
- Home Dashboard (month total, remaining budget, top categories, trend)
- Inbox (pending confirmations)
- Transactions
- Budgets
- Manual Entry (optional)
- Settings & Privacy

## Navigation
Bottom tab navigation: Home · Inbox · Transactions · Budgets

## Architecture (high level)
- `src/models`: typed data models
- `src/services`: SMS parsing, categorization, recurring detection
- `src/store`: state management (Zustand pattern)
- `src/screens`: UI screens
- `src/components`: reusable UI components

## Key flows
1. **SMS received** → parse → create *pending* expense → push notification
2. **User action** → confirm/edit/ignore
3. **Confirmed** → stored locally (encrypted) → optional sync

## Notes
This repo is a design + engineering blueprint; the code is structured for React Native CLI apps.
