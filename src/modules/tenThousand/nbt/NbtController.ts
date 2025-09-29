import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbts")
export default class NbtController {
  @operation({
    summary: "Get Nbts",
  })
  @get()
  static getNbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbt",
  })
  @post("{id}")
  static createNbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
