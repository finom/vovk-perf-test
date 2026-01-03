import { procedure, prefix, get, post, operation } from "vovk";

@prefix("embs")
export default class EmbController {
  @operation({
    summary: "Get Embs",
  })
  @get()
  static getEmbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emb",
  })
  @post("{id}")
  static createEmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
