import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgjs")
export default class LgjController {
  @operation({
    summary: "Get Lgjs",
  })
  @get()
  static getLgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgj",
  })
  @post("{id}")
  static createLgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
