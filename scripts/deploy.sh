#!/bin/bash
set -euo pipefail

export AWS_PROFILE=gab
BUCKET="specforge-spec-site"
DISTRIBUTION_ID="E1OURY46JVIRJY"

echo "Building..."
cd "$(dirname "$0")/../site"
npm run build

echo "Syncing static assets to S3 (long cache)..."
aws s3 sync dist/ s3://$BUCKET/ \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.json"

echo "Syncing HTML/XML/JSON to S3 (short cache)..."
aws s3 sync dist/ s3://$BUCKET/ \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html" \
  --include "*.xml" \
  --include "*.json"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

echo "Done. Site live at https://schema.specforge.tech"
