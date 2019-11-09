#!/usr/bin/zsh

resolverPath="./server/utils/graphql/resolvers"
echo '---- DEBUG INFO [graphql filewatcher] ----'
pwd
#yarn pregenerate
#yarn generate
cp -R "./server/utils/graphql/generated/tmp-resolvers" "./server/utils/graphql/resolvers"
#mv $_ $resolverPath
