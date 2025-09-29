import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqhs")
export default class BqhController {
  @operation({
    summary: "Get Bqhs",
  })
  @get()
  static getBqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqh",
  })
  @post("{id}")
  static createBqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
