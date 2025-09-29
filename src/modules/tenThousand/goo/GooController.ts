import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goos")
export default class GooController {
  @operation({
    summary: "Get Goos",
  })
  @get()
  static getGoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goo",
  })
  @post("{id}")
  static createGoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
