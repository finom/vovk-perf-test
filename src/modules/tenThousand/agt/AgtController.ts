import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agts")
export default class AgtController {
  @operation({
    summary: "Get Agts",
  })
  @get()
  static getAgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agt",
  })
  @post("{id}")
  static createAgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
