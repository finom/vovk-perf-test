import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlgs")
export default class DlgController {
  @operation({
    summary: "Get Dlgs",
  })
  @get()
  static getDlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlg",
  })
  @post("{id}")
  static createDlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
