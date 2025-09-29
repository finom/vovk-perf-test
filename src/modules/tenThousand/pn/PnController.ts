import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pns")
export default class PnController {
  @operation({
    summary: "Get Pns",
  })
  @get()
  static getPns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pn",
  })
  @post("{id}")
  static createPn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
