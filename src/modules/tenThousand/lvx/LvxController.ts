import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvx")
export default class LvxController {
  @operation({
    summary: "Get Lvx",
  })
  @get()
  static getLvx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvx",
  })
  @post("{id}")
  static createLvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
