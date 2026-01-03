import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkws")
export default class LkwController {
  @operation({
    summary: "Get Lkws",
  })
  @get()
  static getLkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkw",
  })
  @post("{id}")
  static createLkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
