import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxqs")
export default class KxqController {
  @operation({
    summary: "Get Kxqs",
  })
  @get()
  static getKxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxq",
  })
  @post("{id}")
  static createKxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
