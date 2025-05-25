---
title: "Timed File Transfer"
image: "/images/TFT-Home.jpeg"
description: "My self-hosted large file transfer service"
date: "2025-05-15"
slug: "timed-file-transfer"
tags: ["ExpressJS", "S3", "PostgreSQL", "BullMQ", "NextJS"]
---

![App Dashboard image](/images/TFT-Home.jpeg)

## About

Timed file transfer is a project I made with my close friend Jordan Chu.

It allows users to store and send files. It fills in a niche between emails and cloud storage solutions like
google drive. Users can share large files between each other and—after a period of time— have them automatically be deleted. This solves the problem of needing to worry about large files taking up excessive space forever in your limited file storage.

## How it Works

User files are stored in a S3-compatible database (MinIO). For managing user and file-related information, the app uses a Postgres database.

Requests to add, delete, and share files happen though a file access API built with Express. However when a client actually goes to download a file, that is done through a presigned MinIO URL so the file API doesn't need to act as a middleman for transfering the actual files.

![Showing Some File Data](/images/TFT-File-Data.jpeg)

## Authentication

On the client side, we have firebase auth for login. This gives users a very straightforward oauth login interface. Then whenever the user requests a file, the client sends a request alongside a JWT (JSON Web Token).

The file API then authenticates the JWT with firebase to ensure the user is who they claim to be, ensuring that only certain people can access certain files.

## Self Hosting Everything

I currently have the project self-hosted on my little mini PC homelab. One of my goals with this project was to have it cost zero dollars to keep up and running. For object storage, this meant going with MinIO. I was drawn to MinIO because its S3 compatible, meaning if I ever wanted to switch to a AWS S3 cloud solution, I'd have to modify very little.

Postgres is likewise also deployed on the server with docker. The file deletion worker, file api, and client app are all deployed in their own containers and operate together through APIs or by writing and reading from a job queue.

![Portainer Container](/images/TFT-Containers.png)
