import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyes")
export default class KyeController {
  @operation({
    summary: "Get Kyes",
  })
  @get()
  static getKyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kye",
  })
  @post("{id}")
  static createKye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
