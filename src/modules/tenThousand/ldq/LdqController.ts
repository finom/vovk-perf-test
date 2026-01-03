import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldqs")
export default class LdqController {
  @operation({
    summary: "Get Ldqs",
  })
  @get()
  static getLdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldq",
  })
  @post("{id}")
  static createLdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
