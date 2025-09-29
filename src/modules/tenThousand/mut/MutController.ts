import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muts")
export default class MutController {
  @operation({
    summary: "Get Muts",
  })
  @get()
  static getMuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mut",
  })
  @post("{id}")
  static createMut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
