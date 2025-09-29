import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkls")
export default class BklController {
  @operation({
    summary: "Get Bkls",
  })
  @get()
  static getBkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkl",
  })
  @post("{id}")
  static createBkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
