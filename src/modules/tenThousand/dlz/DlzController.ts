import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlz")
export default class DlzController {
  @operation({
    summary: "Get Dlz",
  })
  @get()
  static getDlz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlz",
  })
  @post("{id}")
  static createDlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
