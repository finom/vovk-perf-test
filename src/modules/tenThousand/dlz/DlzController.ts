import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlzs")
export default class DlzController {
  @operation({
    summary: "Get Dlzs",
  })
  @get()
  static getDlzs = procedure({
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
