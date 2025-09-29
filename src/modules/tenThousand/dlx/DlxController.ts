import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlxes")
export default class DlxController {
  @operation({
    summary: "Get Dlxes",
  })
  @get()
  static getDlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlx",
  })
  @post("{id}")
  static createDlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
