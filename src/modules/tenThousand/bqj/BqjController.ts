import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqjs")
export default class BqjController {
  @operation({
    summary: "Get Bqjs",
  })
  @get()
  static getBqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqj",
  })
  @post("{id}")
  static createBqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
