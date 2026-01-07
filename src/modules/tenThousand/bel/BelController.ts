import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bel")
export default class BelController {
  @operation({
    summary: "Get Bel",
  })
  @get()
  static getBel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bel",
  })
  @post("{id}")
  static createBel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
