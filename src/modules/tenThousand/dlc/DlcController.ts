import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlc")
export default class DlcController {
  @operation({
    summary: "Get Dlc",
  })
  @get()
  static getDlc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlc",
  })
  @post("{id}")
  static createDlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
