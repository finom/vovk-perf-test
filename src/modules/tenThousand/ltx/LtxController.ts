import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltxes")
export default class LtxController {
  @operation({
    summary: "Get Ltxes",
  })
  @get()
  static getLtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltx",
  })
  @post("{id}")
  static createLtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
