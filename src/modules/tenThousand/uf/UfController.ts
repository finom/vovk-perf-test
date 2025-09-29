import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ufs")
export default class UfController {
  @operation({
    summary: "Get Ufs",
  })
  @get()
  static getUfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uf",
  })
  @post("{id}")
  static createUf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
