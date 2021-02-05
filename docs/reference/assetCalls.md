---
id: assetCalls
title: Asset calls
---

## Media links pre-signed url expiration

All media links on Positive Action API are pre-signed URLs.
A pre-signed URL remains valid for a limited period of time which is specified when the URL is generated.

Pre-signed URLs are valid for 15 minutes after you make the request for the asset. After the time has expired you will have to make another request to retrieve the new pre-signed URL of the asset.

For more information on how **pre-signed** URLs work, we recommend to read the information available [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html).