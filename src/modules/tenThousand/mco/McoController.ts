import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcos")
export default class McoController {
  @operation({
    summary: "Get Mcos",
  })
  @get()
  static getMcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mco",
  })
  @post("{id}")
  static createMco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
