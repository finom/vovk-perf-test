import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ciks")
export default class CikController {
  @operation({
    summary: "Get Ciks",
  })
  @get()
  static getCiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cik",
  })
  @post("{id}")
  static createCik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
