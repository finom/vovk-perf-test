import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekcs")
export default class EkcController {
  @operation({
    summary: "Get Ekcs",
  })
  @get()
  static getEkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekc",
  })
  @post("{id}")
  static createEkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
