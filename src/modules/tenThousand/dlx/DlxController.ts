import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlx")
export default class DlxController {
  @operation({
    summary: "Get Dlx",
  })
  @get()
  static getDlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlx",
  })
  @post("{id}")
  static createDlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
