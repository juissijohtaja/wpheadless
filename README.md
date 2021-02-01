# WorPress Headless CMS with React Fontend App

Testing how to use WordPress as a headless CMS with a React frontend app. The idea is that the React app gets content from a WordPress CMS (running in Google Cloud Run) using a REST api.

### Demo
[React app](https://wpheadless-e3cfihqsoq-lz.a.run.app/)

### docker
 - docker build -t wpheadless .
 - docker run -dp 8080:8080 wpheadless

### google cloud run
 - (gcloud config list)
 - config set project wpheadless
 - gcloud builds submit --tag gcr.io/wpheadless/wpheadless
 - gcloud run deploy --image gcr.io/wpheadless/wpheadless
