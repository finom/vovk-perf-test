import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnts")
export default class CntController {
  @operation({
    summary: "Get Cnts",
  })
  @get()
  static getCnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnt",
  })
  @post("{id}")
  static createCnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
