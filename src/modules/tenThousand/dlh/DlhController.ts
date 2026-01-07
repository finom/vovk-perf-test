import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlh")
export default class DlhController {
  @operation({
    summary: "Get Dlh",
  })
  @get()
  static getDlh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlh",
  })
  @post("{id}")
  static createDlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
