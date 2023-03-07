GIT_COMMIT_MSG=$(git log --pretty=oneline -n 1)
echo $GIT_COMMIT_MSG
SUB='chore(release)'
if [[ "$GIT_COMMIT_MSG" == *"$SUB"* ]]
then
  echo "The commit is a release one. The pipeline shouldn't be triggered."
  exit 1
else
  echo "The commit is not a release one"
fi
