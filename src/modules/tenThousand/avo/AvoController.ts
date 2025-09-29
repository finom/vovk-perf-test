import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avos")
export default class AvoController {
  @operation({
    summary: "Get Avos",
  })
  @get()
  static getAvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avo",
  })
  @post("{id}")
  static createAvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
