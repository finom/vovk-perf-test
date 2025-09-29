import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfvs")
export default class BfvController {
  @operation({
    summary: "Get Bfvs",
  })
  @get()
  static getBfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfv",
  })
  @post("{id}")
  static createBfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
