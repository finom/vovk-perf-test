import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqvs")
export default class BqvController {
  @operation({
    summary: "Get Bqvs",
  })
  @get()
  static getBqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqv",
  })
  @post("{id}")
  static createBqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
