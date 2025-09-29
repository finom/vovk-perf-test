import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgs")
export default class CgsController {
  @operation({
    summary: "Get Cgs",
  })
  @get()
  static getCgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgs",
  })
  @post("{id}")
  static createCgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
