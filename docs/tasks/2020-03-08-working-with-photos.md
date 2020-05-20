---
layout: default
title: Working with photos
parent: Tasks
nav_order: 4
---

So I've spent nearly 20 years trying to tackle photo management in one way or another.
The approach I describe here takes into consideration what I've found works well for me.

## Requirements

- Flexible organization
- Immutable image data
- Version controlled metadata, stored separately
- Replication of data across multiple storage devices

## Process

Conceptually, the process is as follows:

1. Copy image files into photos-incoming/\<YYYMMDD> directory
1. Cull image files
1. Rotate image data based on EXIF `Orientation` tag (JPEG only)
1. Apply copyright and related metadata to image files
1. Ingest image files into photos/ directory
1. Tag image files as appropriate
1. Replicate image files and metadata to other storage devices

The following tools are used to complete the workflow:

- XnViewMP (culling)
- digiKam (tagging)
- Git (version control)
- git-annex (replication)
- exiftool (copyright, ingest)
- exiftran (JPEG rotation)

The command line (CLI) programs are invoked by a [management program](https://github.com/jboxman/dam) I wrote in JavaScript using NodeJS, although all `git` commands are run manually.

