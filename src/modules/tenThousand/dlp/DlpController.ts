import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlps")
export default class DlpController {
  @operation({
    summary: "Get Dlps",
  })
  @get()
  static getDlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlp",
  })
  @post("{id}")
  static createDlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
