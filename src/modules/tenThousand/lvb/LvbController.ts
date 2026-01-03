import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvbs")
export default class LvbController {
  @operation({
    summary: "Get Lvbs",
  })
  @get()
  static getLvbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvb",
  })
  @post("{id}")
  static createLvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
