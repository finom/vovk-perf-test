import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkh")
export default class LkhController {
  @operation({
    summary: "Get Lkh",
  })
  @get()
  static getLkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkh",
  })
  @post("{id}")
  static createLkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
