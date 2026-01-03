import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgvs")
export default class LgvController {
  @operation({
    summary: "Get Lgvs",
  })
  @get()
  static getLgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgv",
  })
  @post("{id}")
  static createLgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
