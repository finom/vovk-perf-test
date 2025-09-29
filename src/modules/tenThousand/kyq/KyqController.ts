import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyqs")
export default class KyqController {
  @operation({
    summary: "Get Kyqs",
  })
  @get()
  static getKyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyq",
  })
  @post("{id}")
  static createKyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
