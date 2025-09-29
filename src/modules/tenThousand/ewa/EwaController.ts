import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewas")
export default class EwaController {
  @operation({
    summary: "Get Ewas",
  })
  @get()
  static getEwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewa",
  })
  @post("{id}")
  static createEwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
