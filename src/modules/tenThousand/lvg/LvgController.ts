import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvgs")
export default class LvgController {
  @operation({
    summary: "Get Lvgs",
  })
  @get()
  static getLvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvg",
  })
  @post("{id}")
  static createLvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
