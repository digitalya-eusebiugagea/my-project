GIT_COMMIT_MSG=$(git log --pretty=oneline -n 1)
SUB='chore(release)'

if [[ "$GIT_COMMIT_MSG" == *"$SUB"* ]]
then
  echo "The commit is a release one so the pipeline shouldn't be trigerred"
  exit 1
else
  echo "The commit is not a release one"
fi
