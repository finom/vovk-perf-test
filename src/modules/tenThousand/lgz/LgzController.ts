import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgzs")
export default class LgzController {
  @operation({
    summary: "Get Lgzs",
  })
  @get()
  static getLgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgz",
  })
  @post("{id}")
  static createLgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
