import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltx")
export default class LtxController {
  @operation({
    summary: "Get Ltx",
  })
  @get()
  static getLtx = procedure({
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
