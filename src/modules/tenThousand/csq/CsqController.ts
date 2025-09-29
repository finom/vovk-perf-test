import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csqs")
export default class CsqController {
  @operation({
    summary: "Get Csqs",
  })
  @get()
  static getCsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csq",
  })
  @post("{id}")
  static createCsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
