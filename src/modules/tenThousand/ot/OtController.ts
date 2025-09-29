import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ots")
export default class OtController {
  @operation({
    summary: "Get Ots",
  })
  @get()
  static getOts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ot",
  })
  @post("{id}")
  static createOt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
