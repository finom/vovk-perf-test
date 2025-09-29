import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcos")
export default class DcoController {
  @operation({
    summary: "Get Dcos",
  })
  @get()
  static getDcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dco",
  })
  @post("{id}")
  static createDco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
