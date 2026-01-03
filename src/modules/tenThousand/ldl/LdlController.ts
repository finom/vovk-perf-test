import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldls")
export default class LdlController {
  @operation({
    summary: "Get Ldls",
  })
  @get()
  static getLdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldl",
  })
  @post("{id}")
  static createLdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
