import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lge")
export default class LgeController {
  @operation({
    summary: "Get Lge",
  })
  @get()
  static getLge = procedure({
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
