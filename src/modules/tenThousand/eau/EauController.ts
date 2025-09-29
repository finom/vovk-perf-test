import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaus")
export default class EauController {
  @operation({
    summary: "Get Eaus",
  })
  @get()
  static getEaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eau",
  })
  @post("{id}")
  static createEau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
