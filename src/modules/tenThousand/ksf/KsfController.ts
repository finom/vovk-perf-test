import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksfs")
export default class KsfController {
  @operation({
    summary: "Get Ksfs",
  })
  @get()
  static getKsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksf",
  })
  @post("{id}")
  static createKsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
