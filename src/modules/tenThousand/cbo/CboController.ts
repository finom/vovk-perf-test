import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbos")
export default class CboController {
  @operation({
    summary: "Get Cbos",
  })
  @get()
  static getCbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbo",
  })
  @post("{id}")
  static createCbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
