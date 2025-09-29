import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnls")
export default class FnlController {
  @operation({
    summary: "Get Fnls",
  })
  @get()
  static getFnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnl",
  })
  @post("{id}")
  static createFnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
