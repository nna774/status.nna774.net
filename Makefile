all: preview

preview:
	deployctl run --libs='' --watch mod.ts

types:
	deployctl types > deploy.d.ts
