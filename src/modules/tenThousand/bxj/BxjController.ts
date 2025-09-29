import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxjs")
export default class BxjController {
  @operation({
    summary: "Get Bxjs",
  })
  @get()
  static getBxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxj",
  })
  @post("{id}")
  static createBxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
