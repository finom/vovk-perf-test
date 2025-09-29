import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqws")
export default class BqwController {
  @operation({
    summary: "Get Bqws",
  })
  @get()
  static getBqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqw",
  })
  @post("{id}")
  static createBqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
