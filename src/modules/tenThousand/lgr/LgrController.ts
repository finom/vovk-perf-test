import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgrs")
export default class LgrController {
  @operation({
    summary: "Get Lgrs",
  })
  @get()
  static getLgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgr",
  })
  @post("{id}")
  static createLgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
