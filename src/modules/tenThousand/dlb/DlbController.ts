import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlb")
export default class DlbController {
  @operation({
    summary: "Get Dlb",
  })
  @get()
  static getDlb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlb",
  })
  @post("{id}")
  static createDlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
