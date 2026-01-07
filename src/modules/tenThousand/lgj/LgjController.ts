import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgj")
export default class LgjController {
  @operation({
    summary: "Get Lgj",
  })
  @get()
  static getLgj = procedure({
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
