import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("embs")
export default class EmbController {
  @operation({
    summary: "Get Embs",
  })
  @get()
  static getEmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emb",
  })
  @post("{id}")
  static createEmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
