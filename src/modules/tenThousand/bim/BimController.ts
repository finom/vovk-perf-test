import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bims")
export default class BimController {
  @operation({
    summary: "Get Bims",
  })
  @get()
  static getBims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bim",
  })
  @post("{id}")
  static createBim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
