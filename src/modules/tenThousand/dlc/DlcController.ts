import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlcs")
export default class DlcController {
  @operation({
    summary: "Get Dlcs",
  })
  @get()
  static getDlcs = procedure({
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
