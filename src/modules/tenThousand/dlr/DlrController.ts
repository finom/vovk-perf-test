import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlrs")
export default class DlrController {
  @operation({
    summary: "Get Dlrs",
  })
  @get()
  static getDlrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlr",
  })
  @post("{id}")
  static createDlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
