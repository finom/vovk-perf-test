import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbls")
export default class MblController {
  @operation({
    summary: "Get Mbls",
  })
  @get()
  static getMbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbl",
  })
  @post("{id}")
  static createMbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
