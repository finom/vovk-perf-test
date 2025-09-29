import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chns")
export default class ChnController {
  @operation({
    summary: "Get Chns",
  })
  @get()
  static getChns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chn",
  })
  @post("{id}")
  static createChn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
