import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqts")
export default class CqtController {
  @operation({
    summary: "Get Cqts",
  })
  @get()
  static getCqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqt",
  })
  @post("{id}")
  static createCqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
