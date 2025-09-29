import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esms")
export default class EsmController {
  @operation({
    summary: "Get Esms",
  })
  @get()
  static getEsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esm",
  })
  @post("{id}")
  static createEsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
