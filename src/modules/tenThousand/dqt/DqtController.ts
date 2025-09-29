import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqts")
export default class DqtController {
  @operation({
    summary: "Get Dqts",
  })
  @get()
  static getDqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqt",
  })
  @post("{id}")
  static createDqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
