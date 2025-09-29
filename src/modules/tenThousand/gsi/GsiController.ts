import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsis")
export default class GsiController {
  @operation({
    summary: "Get Gsis",
  })
  @get()
  static getGsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsi",
  })
  @post("{id}")
  static createGsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
