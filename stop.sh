#!/bin/bash

# Kill processes running on ports 3000-3005
echo "Killing processes on ports 3000-3005..."
for port in {3000..3005}; do
  pid=$(lsof -ti:$port)
  if [ -n "$pid" ]; then
    echo "Killing process $pid on port $port"
    kill -9 $pid
  else
    echo "No process found on port $port"
  fi
done

# Kill Moleculer brokers
echo "Stopping Moleculer brokers..."
broker_pids=$(ps aux | grep -i 'moleculer' | grep -v grep | awk '{print $2}')
if [ -n "$broker_pids" ]; then
  echo "Killing Moleculer broker processes: $broker_pids"
  kill -9 $broker_pids
else
  echo "No Moleculer broker processes found."
fi

echo "All specified processes stopped."
