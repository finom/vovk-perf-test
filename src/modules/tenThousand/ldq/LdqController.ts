import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldq")
export default class LdqController {
  @operation({
    summary: "Get Ldq",
  })
  @get()
  static getLdq = procedure({
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
