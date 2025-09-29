import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knus")
export default class KnuController {
  @operation({
    summary: "Get Knus",
  })
  @get()
  static getKnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knu",
  })
  @post("{id}")
  static createKnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
