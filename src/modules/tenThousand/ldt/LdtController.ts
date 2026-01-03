import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldts")
export default class LdtController {
  @operation({
    summary: "Get Ldts",
  })
  @get()
  static getLdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldt",
  })
  @post("{id}")
  static createLdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
