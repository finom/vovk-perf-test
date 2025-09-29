import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbks")
export default class MbkController {
  @operation({
    summary: "Get Mbks",
  })
  @get()
  static getMbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbk",
  })
  @post("{id}")
  static createMbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
