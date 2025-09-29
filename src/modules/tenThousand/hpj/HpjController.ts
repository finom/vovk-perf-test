import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpjs")
export default class HpjController {
  @operation({
    summary: "Get Hpjs",
  })
  @get()
  static getHpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpj",
  })
  @post("{id}")
  static createHpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
