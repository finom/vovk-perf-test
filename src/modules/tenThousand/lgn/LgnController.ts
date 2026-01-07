import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgn")
export default class LgnController {
  @operation({
    summary: "Get Lgn",
  })
  @get()
  static getLgn = procedure({
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
