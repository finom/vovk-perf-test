import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldgs")
export default class LdgController {
  @operation({
    summary: "Get Ldgs",
  })
  @get()
  static getLdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldg",
  })
  @post("{id}")
  static createLdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
