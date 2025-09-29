import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kems")
export default class KemController {
  @operation({
    summary: "Get Kems",
  })
  @get()
  static getKems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kem",
  })
  @post("{id}")
  static createKem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
