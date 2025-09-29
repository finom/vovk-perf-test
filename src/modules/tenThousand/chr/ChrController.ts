import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chrs")
export default class ChrController {
  @operation({
    summary: "Get Chrs",
  })
  @get()
  static getChrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chr",
  })
  @post("{id}")
  static createChr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
