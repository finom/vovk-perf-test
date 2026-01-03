import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkhs")
export default class LkhController {
  @operation({
    summary: "Get Lkhs",
  })
  @get()
  static getLkhs = procedure({
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
