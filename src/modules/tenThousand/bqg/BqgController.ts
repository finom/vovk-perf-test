import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqgs")
export default class BqgController {
  @operation({
    summary: "Get Bqgs",
  })
  @get()
  static getBqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqg",
  })
  @post("{id}")
  static createBqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
