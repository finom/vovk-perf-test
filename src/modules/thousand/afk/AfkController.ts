import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afks")
export default class AfkController {
  @operation({
    summary: "Get Afks",
  })
  @get()
  static getAfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afk",
  })
  @post("{id}")
  static createAfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
