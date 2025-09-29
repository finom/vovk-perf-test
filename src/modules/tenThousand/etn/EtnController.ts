import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etns")
export default class EtnController {
  @operation({
    summary: "Get Etns",
  })
  @get()
  static getEtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etn",
  })
  @post("{id}")
  static createEtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
