import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldies")
export default class LdyController {
  @operation({
    summary: "Get Ldies",
  })
  @get()
  static getLdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldy",
  })
  @post("{id}")
  static createLdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
