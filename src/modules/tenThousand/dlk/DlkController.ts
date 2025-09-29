import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlks")
export default class DlkController {
  @operation({
    summary: "Get Dlks",
  })
  @get()
  static getDlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlk",
  })
  @post("{id}")
  static createDlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
