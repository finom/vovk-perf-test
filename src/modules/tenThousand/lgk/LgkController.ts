import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgks")
export default class LgkController {
  @operation({
    summary: "Get Lgks",
  })
  @get()
  static getLgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgk",
  })
  @post("{id}")
  static createLgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
