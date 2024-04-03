#!/usr/bin/env bash

yarn build && cd dist && tar -c -v -z -f - . | ssh hosting "(cd ~/www && tar xzf - )"
