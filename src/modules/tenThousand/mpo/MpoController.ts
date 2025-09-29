import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpos")
export default class MpoController {
  @operation({
    summary: "Get Mpos",
  })
  @get()
  static getMpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpo",
  })
  @post("{id}")
  static createMpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
