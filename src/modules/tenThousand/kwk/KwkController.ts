import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwks")
export default class KwkController {
  @operation({
    summary: "Get Kwks",
  })
  @get()
  static getKwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwk",
  })
  @post("{id}")
  static createKwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
