import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlps")
export default class DlpController {
  @operation({
    summary: "Get Dlps",
  })
  @get()
  static getDlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlp",
  })
  @post("{id}")
  static createDlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
