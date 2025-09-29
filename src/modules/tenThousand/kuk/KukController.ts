import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuks")
export default class KukController {
  @operation({
    summary: "Get Kuks",
  })
  @get()
  static getKuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuk",
  })
  @post("{id}")
  static createKuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
