import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lv")
export default class LvController {
  @operation({
    summary: "Get Lv",
  })
  @get()
  static getLv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lv",
  })
  @post("{id}")
  static createLv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
