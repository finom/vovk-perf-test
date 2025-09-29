import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkws")
export default class KkwController {
  @operation({
    summary: "Get Kkws",
  })
  @get()
  static getKkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkw",
  })
  @post("{id}")
  static createKkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
