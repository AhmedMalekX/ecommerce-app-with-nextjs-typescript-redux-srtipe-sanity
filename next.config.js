/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "noly6j6f",
    SANITY_API_TOKEN:
      "skqnNnFY39NYEy1MEnReRzVcAq7BAhokSrwAmSFhDLiUbp2ircqBGTiY59jY6W90atfgpWJfFnS6PbNwp5aEC2UwXS10qdWsvLblzy7i21nJpFnqf1asuQvdC8CMRe0uU4QyPY2zeJrIwtvlQrnXj1rpFDgl29vgOubTWty73WHYiqRNzTYa",
    STRIPE_SECRET_KEY:
      "sk_test_51LhchpFcvSks98mXvEHQEiWtMCy4oT02Ffa4W5QUbUjaq13Px12aqVlpWos5E0RNpRacVonX6ehCoAbfkVraGATc00VG96tpua",
    GOOGLE_CLIENT_ID:
      "569650852973-s6lvhqle59d1mceuih96uu795n8egabi.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_SECRET: "v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_test_51LhchpFcvSks98mX1dAB7UbSzGdvHRxOtf4uAnDwGky9wPcEKeVU3b3gu6QMjTnd04dZnX7szyeuOTRcnppJX7oC002FEdRWVR",
  },
};
