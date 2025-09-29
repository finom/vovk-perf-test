import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dts")
export default class DtController {
  @operation({
    summary: "Get Dts",
  })
  @get()
  static getDts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dt",
  })
  @post("{id}")
  static createDt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
