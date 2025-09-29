import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlbs")
export default class DlbController {
  @operation({
    summary: "Get Dlbs",
  })
  @get()
  static getDlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlb",
  })
  @post("{id}")
  static createDlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
