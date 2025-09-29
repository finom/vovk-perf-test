import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsis")
export default class HsiController {
  @operation({
    summary: "Get Hsis",
  })
  @get()
  static getHsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsi",
  })
  @post("{id}")
  static createHsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
