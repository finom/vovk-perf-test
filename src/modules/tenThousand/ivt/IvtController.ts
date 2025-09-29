import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivts")
export default class IvtController {
  @operation({
    summary: "Get Ivts",
  })
  @get()
  static getIvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivt",
  })
  @post("{id}")
  static createIvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
