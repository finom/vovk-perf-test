import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhi")
export default class LhiController {
  @operation({
    summary: "Get Lhi",
  })
  @get()
  static getLhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhi",
  })
  @post("{id}")
  static createLhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
