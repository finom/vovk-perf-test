import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgws")
export default class LgwController {
  @operation({
    summary: "Get Lgws",
  })
  @get()
  static getLgws = procedure({
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
