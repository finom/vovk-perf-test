import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kscs")
export default class KscController {
  @operation({
    summary: "Get Kscs",
  })
  @get()
  static getKscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksc",
  })
  @post("{id}")
  static createKsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
