import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emos")
export default class EmoController {
  @operation({
    summary: "Get Emos",
  })
  @get()
  static getEmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emo",
  })
  @post("{id}")
  static createEmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
