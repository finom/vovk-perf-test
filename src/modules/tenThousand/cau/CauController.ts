import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caus")
export default class CauController {
  @operation({
    summary: "Get Caus",
  })
  @get()
  static getCaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cau",
  })
  @post("{id}")
  static createCau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
