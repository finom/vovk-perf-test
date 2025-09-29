import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyxes")
export default class KyxController {
  @operation({
    summary: "Get Kyxes",
  })
  @get()
  static getKyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyx",
  })
  @post("{id}")
  static createKyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
