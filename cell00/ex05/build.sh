#!/bin/bash

# Check if any arguments were passed to the script
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through every argument provided
    for arg in "$@"; do
        # Create a directory with "ex" prepended to the argument
        mkdir "ex$arg"
    done
fi