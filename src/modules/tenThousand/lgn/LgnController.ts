import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgns")
export default class LgnController {
  @operation({
    summary: "Get Lgns",
  })
  @get()
  static getLgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgn",
  })
  @post("{id}")
  static createLgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
