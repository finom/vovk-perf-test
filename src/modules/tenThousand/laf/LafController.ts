import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lafs")
export default class LafController {
  @operation({
    summary: "Get Lafs",
  })
  @get()
  static getLafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Laf",
  })
  @post("{id}")
  static createLaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
