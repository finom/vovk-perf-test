import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knas")
export default class KnaController {
  @operation({
    summary: "Get Knas",
  })
  @get()
  static getKnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kna",
  })
  @post("{id}")
  static createKna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
