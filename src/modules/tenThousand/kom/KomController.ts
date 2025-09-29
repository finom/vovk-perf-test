import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koms")
export default class KomController {
  @operation({
    summary: "Get Koms",
  })
  @get()
  static getKoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kom",
  })
  @post("{id}")
  static createKom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
