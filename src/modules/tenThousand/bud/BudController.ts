import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buds")
export default class BudController {
  @operation({
    summary: "Get Buds",
  })
  @get()
  static getBuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bud",
  })
  @post("{id}")
  static createBud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
