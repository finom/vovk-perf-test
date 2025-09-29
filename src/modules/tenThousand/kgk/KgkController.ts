import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgks")
export default class KgkController {
  @operation({
    summary: "Get Kgks",
  })
  @get()
  static getKgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgk",
  })
  @post("{id}")
  static createKgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
