import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvjs")
export default class LvjController {
  @operation({
    summary: "Get Lvjs",
  })
  @get()
  static getLvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvj",
  })
  @post("{id}")
  static createLvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
