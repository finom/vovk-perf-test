import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlks")
export default class DlkController {
  @operation({
    summary: "Get Dlks",
  })
  @get()
  static getDlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlk",
  })
  @post("{id}")
  static createDlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
