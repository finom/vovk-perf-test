import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsis")
export default class FsiController {
  @operation({
    summary: "Get Fsis",
  })
  @get()
  static getFsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsi",
  })
  @post("{id}")
  static createFsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
