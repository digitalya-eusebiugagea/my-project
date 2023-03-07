GIT_COMMIT_MSG=$(git log --pretty=oneline -n 1)
SUB='chore(release)'
if [[ "$GIT_COMMIT_MSG" == *"$SUB"* ]]; then
  echo "It's there."
fi
