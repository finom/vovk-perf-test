import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldx")
export default class LdxController {
  @operation({
    summary: "Get Ldx",
  })
  @get()
  static getLdx = procedure({
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
