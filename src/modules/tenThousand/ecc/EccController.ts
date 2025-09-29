import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eccs")
export default class EccController {
  @operation({
    summary: "Get Eccs",
  })
  @get()
  static getEccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecc",
  })
  @post("{id}")
  static createEcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
