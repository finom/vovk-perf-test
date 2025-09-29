import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsks")
export default class LskController {
  @operation({
    summary: "Get Lsks",
  })
  @get()
  static getLsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsk",
  })
  @post("{id}")
  static createLsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
