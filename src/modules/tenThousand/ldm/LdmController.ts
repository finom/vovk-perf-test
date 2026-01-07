import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldm")
export default class LdmController {
  @operation({
    summary: "Get Ldm",
  })
  @get()
  static getLdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldm",
  })
  @post("{id}")
  static createLdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
