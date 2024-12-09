#!/bin/bash

services=(
  "/Users/phu.phan/projects/neo/petcode/gateway"
  "/Users/phu.phan/projects/neo/petcode/user"
  "/Users/phu.phan/projects/neo/petcode/order"
  "/Users/phu.phan/projects/neo/petcode/payment"
)

for service in "${services[@]}"; do
  echo "Starting service in $service..."
  cd "$service" || { echo "Failed to change directory to $service"; exit 1; }
  npm run start & # Run service in the background
  sleep 5
  echo "Service started in $service"
done

echo "All services have been started."
