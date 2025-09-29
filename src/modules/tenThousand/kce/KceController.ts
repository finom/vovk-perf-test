import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kces")
export default class KceController {
  @operation({
    summary: "Get Kces",
  })
  @get()
  static getKces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kce",
  })
  @post("{id}")
  static createKce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
