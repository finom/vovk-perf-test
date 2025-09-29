import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuys")
export default class CuyController {
  @operation({
    summary: "Get Cuys",
  })
  @get()
  static getCuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuy",
  })
  @post("{id}")
  static createCuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
