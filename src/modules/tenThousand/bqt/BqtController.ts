import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqts")
export default class BqtController {
  @operation({
    summary: "Get Bqts",
  })
  @get()
  static getBqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqt",
  })
  @post("{id}")
  static createBqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
