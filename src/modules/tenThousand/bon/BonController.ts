import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bons")
export default class BonController {
  @operation({
    summary: "Get Bons",
  })
  @get()
  static getBons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bon",
  })
  @post("{id}")
  static createBon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
