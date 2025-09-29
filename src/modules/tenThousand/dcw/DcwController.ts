import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcws")
export default class DcwController {
  @operation({
    summary: "Get Dcws",
  })
  @get()
  static getDcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcw",
  })
  @post("{id}")
  static createDcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
