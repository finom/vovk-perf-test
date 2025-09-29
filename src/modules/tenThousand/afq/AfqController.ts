import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afqs")
export default class AfqController {
  @operation({
    summary: "Get Afqs",
  })
  @get()
  static getAfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afq",
  })
  @post("{id}")
  static createAfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
