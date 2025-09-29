import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqts")
export default class HqtController {
  @operation({
    summary: "Get Hqts",
  })
  @get()
  static getHqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqt",
  })
  @post("{id}")
  static createHqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
