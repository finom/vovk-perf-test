import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acbs")
export default class AcbController {
  @operation({
    summary: "Get Acbs",
  })
  @get()
  static getAcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acb",
  })
  @post("{id}")
  static createAcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
