import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlm")
export default class DlmController {
  @operation({
    summary: "Get Dlm",
  })
  @get()
  static getDlm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlm",
  })
  @post("{id}")
  static createDlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
