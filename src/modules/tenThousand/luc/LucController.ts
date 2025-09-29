import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lucs")
export default class LucController {
  @operation({
    summary: "Get Lucs",
  })
  @get()
  static getLucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luc",
  })
  @post("{id}")
  static createLuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
