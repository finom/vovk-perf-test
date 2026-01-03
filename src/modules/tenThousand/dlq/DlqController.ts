import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlqs")
export default class DlqController {
  @operation({
    summary: "Get Dlqs",
  })
  @get()
  static getDlqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlq",
  })
  @post("{id}")
  static createDlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
