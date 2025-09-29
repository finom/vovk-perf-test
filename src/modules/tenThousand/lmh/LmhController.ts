import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmhs")
export default class LmhController {
  @operation({
    summary: "Get Lmhs",
  })
  @get()
  static getLmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmh",
  })
  @post("{id}")
  static createLmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
