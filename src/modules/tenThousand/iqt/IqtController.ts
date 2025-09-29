import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqts")
export default class IqtController {
  @operation({
    summary: "Get Iqts",
  })
  @get()
  static getIqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqt",
  })
  @post("{id}")
  static createIqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
