import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brws")
export default class BrwController {
  @operation({
    summary: "Get Brws",
  })
  @get()
  static getBrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brw",
  })
  @post("{id}")
  static createBrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
