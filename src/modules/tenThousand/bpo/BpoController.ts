import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpos")
export default class BpoController {
  @operation({
    summary: "Get Bpos",
  })
  @get()
  static getBpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpo",
  })
  @post("{id}")
  static createBpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
