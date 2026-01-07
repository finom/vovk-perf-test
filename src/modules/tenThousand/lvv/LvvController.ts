import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvv")
export default class LvvController {
  @operation({
    summary: "Get Lvv",
  })
  @get()
  static getLvv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvv",
  })
  @post("{id}")
  static createLvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
