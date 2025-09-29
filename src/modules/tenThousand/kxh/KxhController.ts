import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxhs")
export default class KxhController {
  @operation({
    summary: "Get Kxhs",
  })
  @get()
  static getKxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxh",
  })
  @post("{id}")
  static createKxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
