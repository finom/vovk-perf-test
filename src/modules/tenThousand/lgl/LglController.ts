import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgls")
export default class LglController {
  @operation({
    summary: "Get Lgls",
  })
  @get()
  static getLgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgl",
  })
  @post("{id}")
  static createLgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
