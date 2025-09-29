import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfqs")
export default class LfqController {
  @operation({
    summary: "Get Lfqs",
  })
  @get()
  static getLfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfq",
  })
  @post("{id}")
  static createLfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
