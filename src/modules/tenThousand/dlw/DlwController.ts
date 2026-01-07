import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlw")
export default class DlwController {
  @operation({
    summary: "Get Dlw",
  })
  @get()
  static getDlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlw",
  })
  @post("{id}")
  static createDlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
