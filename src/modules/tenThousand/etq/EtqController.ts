import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etqs")
export default class EtqController {
  @operation({
    summary: "Get Etqs",
  })
  @get()
  static getEtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etq",
  })
  @post("{id}")
  static createEtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
