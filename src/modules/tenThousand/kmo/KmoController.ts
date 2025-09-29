import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmos")
export default class KmoController {
  @operation({
    summary: "Get Kmos",
  })
  @get()
  static getKmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmo",
  })
  @post("{id}")
  static createKmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
