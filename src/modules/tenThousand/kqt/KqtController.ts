import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqts")
export default class KqtController {
  @operation({
    summary: "Get Kqts",
  })
  @get()
  static getKqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqt",
  })
  @post("{id}")
  static createKqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
