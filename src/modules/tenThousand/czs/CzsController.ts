import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czs")
export default class CzsController {
  @operation({
    summary: "Get Czs",
  })
  @get()
  static getCzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czs",
  })
  @post("{id}")
  static createCzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
