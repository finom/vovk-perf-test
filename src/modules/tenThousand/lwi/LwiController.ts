import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwis")
export default class LwiController {
  @operation({
    summary: "Get Lwis",
  })
  @get()
  static getLwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwi",
  })
  @post("{id}")
  static createLwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
