import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvxes")
export default class LvxController {
  @operation({
    summary: "Get Lvxes",
  })
  @get()
  static getLvxes = procedure({
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
