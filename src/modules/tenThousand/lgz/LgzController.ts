import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgz")
export default class LgzController {
  @operation({
    summary: "Get Lgz",
  })
  @get()
  static getLgz = procedure({
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
