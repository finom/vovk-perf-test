import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("boys")
export default class BoyController {
  @operation({
    summary: "Get Boys",
  })
  @get()
  static getBoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boy",
  })
  @post("{id}")
  static createBoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
