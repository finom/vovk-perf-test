import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcas")
export default class LcaController {
  @operation({
    summary: "Get Lcas",
  })
  @get()
  static getLcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lca",
  })
  @post("{id}")
  static createLca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
