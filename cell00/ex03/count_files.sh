#!/bin/bash

# Define the target directory (defaults to current directory if no argument is provided)
TARGET_DIR="${1:-.}"

# Check if the directory exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: $TARGET_DIR is not a directory."
  exit 1
fi

# Perform the counts
FILE_COUNT=$(find "$TARGET_DIR" -maxdepth 1 -type f | wc -l)
DIR_COUNT=$(find "$TARGET_DIR" -maxdepth 1 -type d ! -path "$TARGET_DIR" | wc -l)

# Display the results
echo "--- Directory Analysis: $TARGET_DIR ---"
echo "Regular Files: $FILE_COUNT"
echo "Directories:   $DIR_COUNT"