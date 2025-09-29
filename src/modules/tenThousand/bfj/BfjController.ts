import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfjs")
export default class BfjController {
  @operation({
    summary: "Get Bfjs",
  })
  @get()
  static getBfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfj",
  })
  @post("{id}")
  static createBfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
