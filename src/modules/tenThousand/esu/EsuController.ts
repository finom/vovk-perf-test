import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esus")
export default class EsuController {
  @operation({
    summary: "Get Esus",
  })
  @get()
  static getEsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esu",
  })
  @post("{id}")
  static createEsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
