import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyos")
export default class KyoController {
  @operation({
    summary: "Get Kyos",
  })
  @get()
  static getKyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyo",
  })
  @post("{id}")
  static createKyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
