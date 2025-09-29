import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("boos")
export default class BooController {
  @operation({
    summary: "Get Boos",
  })
  @get()
  static getBoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boo",
  })
  @post("{id}")
  static createBoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
