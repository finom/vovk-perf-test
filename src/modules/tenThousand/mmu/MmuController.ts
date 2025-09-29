import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmus")
export default class MmuController {
  @operation({
    summary: "Get Mmus",
  })
  @get()
  static getMmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmu",
  })
  @post("{id}")
  static createMmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
