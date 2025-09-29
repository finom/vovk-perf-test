import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvis")
export default class KviController {
  @operation({
    summary: "Get Kvis",
  })
  @get()
  static getKvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvi",
  })
  @post("{id}")
  static createKvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
