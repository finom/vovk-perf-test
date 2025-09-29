import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duys")
export default class DuyController {
  @operation({
    summary: "Get Duys",
  })
  @get()
  static getDuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duy",
  })
  @post("{id}")
  static createDuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
