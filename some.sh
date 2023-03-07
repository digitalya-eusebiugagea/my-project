GIT_COMMIT_MSG=$(git log --pretty=oneline -n 1)
SUB='chore(release)'
if [[ "$GIT_COMMIT_MSG" == *"$SUB"* ]]
then
  exit 1
else
  echo "The commit is not a release one"
fi
