import watcher from "@parcel/watcher";

watcher.subscribe(
  process.cwd(),
  () => {
    console.log("src changed");
  },
  { ignore: [".git/*"] }
);
