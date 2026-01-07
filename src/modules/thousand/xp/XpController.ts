import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xp")
export default class XpController {
  @operation({
    summary: "Get Xp",
  })
  @get()
  static getXp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xp",
  })
  @post("{id}")
  static createXp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
