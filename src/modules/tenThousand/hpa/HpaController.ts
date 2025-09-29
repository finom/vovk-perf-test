import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpas")
export default class HpaController {
  @operation({
    summary: "Get Hpas",
  })
  @get()
  static getHpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpa",
  })
  @post("{id}")
  static createHpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
