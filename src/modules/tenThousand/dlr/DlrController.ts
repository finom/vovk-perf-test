import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlrs")
export default class DlrController {
  @operation({
    summary: "Get Dlrs",
  })
  @get()
  static getDlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlr",
  })
  @post("{id}")
  static createDlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
