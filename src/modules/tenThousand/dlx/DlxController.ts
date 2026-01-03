import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlxes")
export default class DlxController {
  @operation({
    summary: "Get Dlxes",
  })
  @get()
  static getDlxes = procedure({
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
