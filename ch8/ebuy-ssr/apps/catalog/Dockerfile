FROM node:18-alpine AS base

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=catalog --docker


FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN yarn global add pnpm
RUN pnpm install --no-frozen-lockfile
# Build the project
COPY --from=builder /app/out/full/ ./ 
COPY turbo.json turbo.json
RUN ENV=PROD pnpm turbo run build --filter=catalog...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/catalog/next.config.js .
COPY --from=installer /app/apps/catalog/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/catalog/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/catalog/.next/static ./apps/catalog/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/catalog/public ./apps/catalog/public

CMD node apps/catalog/server.js
