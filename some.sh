GIT_COMMIT_MSG=$(git log --pretty=oneline -n 1)
echo $GIT_COMMIT_MSG
SUB='chore(release)'
if [[ "$GIT_COMMIT_MSG" == *"$SUB"* ]]; then
  echo "It's there."
  exit 1
fi
echo "All good"
