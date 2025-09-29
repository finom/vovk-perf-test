import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgas")
export default class KgaController {
  @operation({
    summary: "Get Kgas",
  })
  @get()
  static getKgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kga",
  })
  @post("{id}")
  static createKga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
