import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdds")
export default class MddController {
  @operation({
    summary: "Get Mdds",
  })
  @get()
  static getMdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdd",
  })
  @post("{id}")
  static createMdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
