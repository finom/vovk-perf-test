import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlvs")
export default class DlvController {
  @operation({
    summary: "Get Dlvs",
  })
  @get()
  static getDlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlv",
  })
  @post("{id}")
  static createDlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
