import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwjs")
export default class BwjController {
  @operation({
    summary: "Get Bwjs",
  })
  @get()
  static getBwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwj",
  })
  @post("{id}")
  static createBwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
