import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lges")
export default class LgeController {
  @operation({
    summary: "Get Lges",
  })
  @get()
  static getLges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lge",
  })
  @post("{id}")
  static createLge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
