import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wns")
export default class WnController {
  @operation({
    summary: "Get Wns",
  })
  @get()
  static getWns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wn",
  })
  @post("{id}")
  static createWn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
