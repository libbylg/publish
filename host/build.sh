#!/usr/bin/env bash

GOPATH=$(cd $(dirname $0); pwd)

cd ${GOPATH}/src/host && go clean && go install
exit $?
