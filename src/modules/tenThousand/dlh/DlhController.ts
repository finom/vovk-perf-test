import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlhs")
export default class DlhController {
  @operation({
    summary: "Get Dlhs",
  })
  @get()
  static getDlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlh",
  })
  @post("{id}")
  static createDlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
