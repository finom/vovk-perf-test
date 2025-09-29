import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvbs")
export default class DvbController {
  @operation({
    summary: "Get Dvbs",
  })
  @get()
  static getDvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvb",
  })
  @post("{id}")
  static createDvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
