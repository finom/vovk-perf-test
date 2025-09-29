import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqts")
export default class AqtController {
  @operation({
    summary: "Get Aqts",
  })
  @get()
  static getAqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqt",
  })
  @post("{id}")
  static createAqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
