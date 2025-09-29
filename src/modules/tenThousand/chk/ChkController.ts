import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chks")
export default class ChkController {
  @operation({
    summary: "Get Chks",
  })
  @get()
  static getChks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chk",
  })
  @post("{id}")
  static createChk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
