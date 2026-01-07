import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgw")
export default class LgwController {
  @operation({
    summary: "Get Lgw",
  })
  @get()
  static getLgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgw",
  })
  @post("{id}")
  static createLgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
