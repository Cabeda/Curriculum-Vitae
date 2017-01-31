set -e
echo "machine github.com" >> ~/.netrc
echo "   login jecabeda@gmail.com" >> ~/.netrc
echo "   password ${GH_TOKEN}" >> ~/.netrc