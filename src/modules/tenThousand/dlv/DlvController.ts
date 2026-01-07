import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlv")
export default class DlvController {
  @operation({
    summary: "Get Dlv",
  })
  @get()
  static getDlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlv",
  })
  @post("{id}")
  static createDlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
