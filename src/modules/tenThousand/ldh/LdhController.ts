import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldhs")
export default class LdhController {
  @operation({
    summary: "Get Ldhs",
  })
  @get()
  static getLdhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldh",
  })
  @post("{id}")
  static createLdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
