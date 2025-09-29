import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqbs")
export default class BqbController {
  @operation({
    summary: "Get Bqbs",
  })
  @get()
  static getBqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqb",
  })
  @post("{id}")
  static createBqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
