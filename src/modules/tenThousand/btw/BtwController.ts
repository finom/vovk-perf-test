import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btws")
export default class BtwController {
  @operation({
    summary: "Get Btws",
  })
  @get()
  static getBtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btw",
  })
  @post("{id}")
  static createBtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
