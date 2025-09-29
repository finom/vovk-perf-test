import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzks")
export default class KzkController {
  @operation({
    summary: "Get Kzks",
  })
  @get()
  static getKzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzk",
  })
  @post("{id}")
  static createKzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
