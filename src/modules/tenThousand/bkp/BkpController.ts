import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkps")
export default class BkpController {
  @operation({
    summary: "Get Bkps",
  })
  @get()
  static getBkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkp",
  })
  @post("{id}")
  static createBkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
