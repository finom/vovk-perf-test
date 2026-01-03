import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmos")
export default class BmoController {
  @operation({
    summary: "Get Bmos",
  })
  @get()
  static getBmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmo",
  })
  @post("{id}")
  static createBmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
