import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcjs")
export default class BcjController {
  @operation({
    summary: "Get Bcjs",
  })
  @get()
  static getBcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcj",
  })
  @post("{id}")
  static createBcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
