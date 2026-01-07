import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvj")
export default class LvjController {
  @operation({
    summary: "Get Lvj",
  })
  @get()
  static getLvj = procedure({
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
