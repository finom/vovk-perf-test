import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekks")
export default class EkkController {
  @operation({
    summary: "Get Ekks",
  })
  @get()
  static getEkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekk",
  })
  @post("{id}")
  static createEkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
