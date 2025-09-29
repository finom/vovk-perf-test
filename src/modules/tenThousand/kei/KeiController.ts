import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keis")
export default class KeiController {
  @operation({
    summary: "Get Keis",
  })
  @get()
  static getKeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kei",
  })
  @post("{id}")
  static createKei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
