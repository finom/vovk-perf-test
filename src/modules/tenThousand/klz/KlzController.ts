import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klzs")
export default class KlzController {
  @operation({
    summary: "Get Klzs",
  })
  @get()
  static getKlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klz",
  })
  @post("{id}")
  static createKlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
