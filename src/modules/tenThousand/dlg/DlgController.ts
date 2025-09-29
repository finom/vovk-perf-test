import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlgs")
export default class DlgController {
  @operation({
    summary: "Get Dlgs",
  })
  @get()
  static getDlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlg",
  })
  @post("{id}")
  static createDlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
