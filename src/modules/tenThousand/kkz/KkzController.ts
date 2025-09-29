import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkzs")
export default class KkzController {
  @operation({
    summary: "Get Kkzs",
  })
  @get()
  static getKkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkz",
  })
  @post("{id}")
  static createKkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
