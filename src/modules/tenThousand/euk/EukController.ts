import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euks")
export default class EukController {
  @operation({
    summary: "Get Euks",
  })
  @get()
  static getEuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euk",
  })
  @post("{id}")
  static createEuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
