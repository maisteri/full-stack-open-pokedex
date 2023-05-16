#!/bin/bash

response=$(curl -s --max-time 5 localhost:5000/health)

if  [[ "$response" == "ok" ]]
then
  exit 0
fi
exit 1