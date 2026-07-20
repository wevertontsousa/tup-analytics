FROM node:24-bookworm-slim

USER root

RUN apt update \
  && apt install --no-install-recommends -y ca-certificates curl git openssh-client procps \
  && curl -sS https://starship.rs/install.sh | sh -s -- -y \
  && rm --recursive --force /var/lib/apt/lists/* \
  && echo 'eval "$(starship init bash)"' >> /home/node/.bashrc

ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

USER node

WORKDIR /workspace
