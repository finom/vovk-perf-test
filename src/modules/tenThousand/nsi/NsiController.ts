import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsis")
export default class NsiController {
  @operation({
    summary: "Get Nsis",
  })
  @get()
  static getNsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsi",
  })
  @post("{id}")
  static createNsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
