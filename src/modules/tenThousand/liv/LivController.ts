import { procedure, prefix, get, post, operation } from "vovk";

@prefix("livs")
export default class LivController {
  @operation({
    summary: "Get Livs",
  })
  @get()
  static getLivs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liv",
  })
  @post("{id}")
  static createLiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
