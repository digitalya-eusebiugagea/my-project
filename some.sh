GIT_COMMIT_MSG=$(git log --pretty=oneline -n 1)
SUB='chore(release)'
if [[ "$GIT_COMMIT_MSG" == *"$SUB"* ]]; then
  NON_RELEASE=true
fi
