import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkis")
export default class LkiController {
  @operation({
    summary: "Get Lkis",
  })
  @get()
  static getLkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lki",
  })
  @post("{id}")
  static createLki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
