import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bon")
export default class BonController {
  @operation({
    summary: "Get Bon",
  })
  @get()
  static getBon = procedure({
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
