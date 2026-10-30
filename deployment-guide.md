# Jinyi Precision Website Deployment Guide

This project is a static production website for Dongguan Jinyi Precision Technology Co., Ltd.

## Current Production Configuration

- Production domain: `https://www.jinyiprecision.com`
  - Canonical tags, schema markup, `sitemap.xml`, and `robots.txt` already use this domain.
- Formspree form ID: `mzdqkjbl`
  - Confirm that Formspree notifications are configured to send inquiries to `yx0205yx@gmail.com`.
- Google Analytics
  - Analytics is intentionally disabled until a verified GA4 Measurement ID is available. Add the real `G-XXXXXXXXXX` value to the page templates before enabling the tracking script.

## Local Preview

Install dependencies:

```bash
npm install
```

Run local development preview:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Vercel Deployment

1. Upload the project folder to GitHub.
2. Open Vercel and import the GitHub repository.
3. Vercel should use these settings from `vercel.json`:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add the real production domain in Vercel project settings.
5. After deployment, submit the production `sitemap.xml` in Google Search Console.

## Production Service Pages

The following folder URLs are the canonical production service pages:

- `precision-mold-components/`
- `wire-edm-parts/`
- `pg-grinding/`
- `tungsten-carbide-parts/`
- `ceramic-parts/`

Each service page includes:

- SEO title and meta description
- Canonical URL
- Open Graph tags
- Breadcrumb navigation
- Service schema
- FAQPage schema
- BreadcrumbList schema
- Overview
- Applications
- Materials
- Tolerances
- Equipment
- FAQ
- RFQ section
- Internal links to the other service pages

## RFQ Form Notes

The website uses Formspree for RFQ submission. File upload is intentionally not used.

Drawing instruction shown on the site:

> Please send PDF, STEP, STP, DWG or DXF drawings by Email or WhatsApp after submitting the RFQ form.

Contact channels:

- Email: `yx0205yx@gmail.com`
- WhatsApp: `+86 13515525036`

## SEO Checklist

Before launch:

- Confirm all production URLs use the real domain.
- Confirm `robots.txt` points to the real sitemap URL.
- Confirm `sitemap.xml` contains the final canonical URLs.
- Confirm all important pages have `index, follow`.
- Confirm Formspree form submissions arrive at `yx0205yx@gmail.com`.
- Confirm Google Analytics is receiving data.
- Submit sitemap to Google Search Console.
