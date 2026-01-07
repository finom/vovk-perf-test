import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lte")
export default class LteController {
  @operation({
    summary: "Get Lte",
  })
  @get()
  static getLte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lte",
  })
  @post("{id}")
  static createLte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
