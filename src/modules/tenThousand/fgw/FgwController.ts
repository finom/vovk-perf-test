import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgws")
export default class FgwController {
  @operation({
    summary: "Get Fgws",
  })
  @get()
  static getFgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgw",
  })
  @post("{id}")
  static createFgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
