import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdqs")
export default class CdqController {
  @operation({
    summary: "Get Cdqs",
  })
  @get()
  static getCdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdq",
  })
  @post("{id}")
  static createCdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
