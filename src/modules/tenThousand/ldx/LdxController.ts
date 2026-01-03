import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldxes")
export default class LdxController {
  @operation({
    summary: "Get Ldxes",
  })
  @get()
  static getLdxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldx",
  })
  @post("{id}")
  static createLdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
