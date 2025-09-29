import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpjs")
export default class KpjController {
  @operation({
    summary: "Get Kpjs",
  })
  @get()
  static getKpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpj",
  })
  @post("{id}")
  static createKpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
