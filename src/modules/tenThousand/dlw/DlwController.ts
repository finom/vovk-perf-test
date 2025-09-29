import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlws")
export default class DlwController {
  @operation({
    summary: "Get Dlws",
  })
  @get()
  static getDlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlw",
  })
  @post("{id}")
  static createDlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
