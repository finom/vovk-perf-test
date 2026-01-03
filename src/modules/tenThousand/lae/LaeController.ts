import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laes")
export default class LaeController {
  @operation({
    summary: "Get Laes",
  })
  @get()
  static getLaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lae",
  })
  @post("{id}")
  static createLae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
