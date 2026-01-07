import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgd")
export default class LgdController {
  @operation({
    summary: "Get Lgd",
  })
  @get()
  static getLgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgd",
  })
  @post("{id}")
  static createLgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
