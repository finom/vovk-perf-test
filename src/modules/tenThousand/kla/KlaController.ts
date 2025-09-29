import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klas")
export default class KlaController {
  @operation({
    summary: "Get Klas",
  })
  @get()
  static getKlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kla",
  })
  @post("{id}")
  static createKla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
