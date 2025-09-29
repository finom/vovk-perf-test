import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekrs")
export default class EkrController {
  @operation({
    summary: "Get Ekrs",
  })
  @get()
  static getEkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekr",
  })
  @post("{id}")
  static createEkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
