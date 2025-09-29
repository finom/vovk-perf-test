import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvts")
export default class DvtController {
  @operation({
    summary: "Get Dvts",
  })
  @get()
  static getDvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvt",
  })
  @post("{id}")
  static createDvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
