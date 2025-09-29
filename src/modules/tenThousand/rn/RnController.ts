import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rns")
export default class RnController {
  @operation({
    summary: "Get Rns",
  })
  @get()
  static getRns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rn",
  })
  @post("{id}")
  static createRn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
