import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgas")
export default class MgaController {
  @operation({
    summary: "Get Mgas",
  })
  @get()
  static getMgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mga",
  })
  @post("{id}")
  static createMga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
