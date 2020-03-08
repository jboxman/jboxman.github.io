---
layout: post
title:  "Working with Time Machine backups"
---

# Compare TM backups

`tmutil compare A B | tee /tmp/backup-compare.txt`

http://osxdaily.com/2012/01/21/compare-time-machine-backups-tmutil/

# Look for large diffs

`egrep '\d+M' /tmp/backup-compare.txt`
`egrep '\d+G' /tmp/backup-compare.txt`

# Remove some local snapshots to free up space (10.14.4)

`tmutil thinlocalsnapshots / 21474836480 4`

