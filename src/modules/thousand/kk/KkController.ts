import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kks")
export default class KkController {
  @operation({
    summary: "Get Kks",
  })
  @get()
  static getKks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kk",
  })
  @post("{id}")
  static createKk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
