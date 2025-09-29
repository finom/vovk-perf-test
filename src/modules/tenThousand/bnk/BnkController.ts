import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnks")
export default class BnkController {
  @operation({
    summary: "Get Bnks",
  })
  @get()
  static getBnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnk",
  })
  @post("{id}")
  static createBnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
