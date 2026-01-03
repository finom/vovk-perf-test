import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mois")
export default class MoiController {
  @operation({
    summary: "Get Mois",
  })
  @get()
  static getMois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moi",
  })
  @post("{id}")
  static createMoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
