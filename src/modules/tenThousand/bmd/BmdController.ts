import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmds")
export default class BmdController {
  @operation({
    summary: "Get Bmds",
  })
  @get()
  static getBmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmd",
  })
  @post("{id}")
  static createBmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
