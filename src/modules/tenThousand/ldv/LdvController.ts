import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldv")
export default class LdvController {
  @operation({
    summary: "Get Ldv",
  })
  @get()
  static getLdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldv",
  })
  @post("{id}")
  static createLdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
