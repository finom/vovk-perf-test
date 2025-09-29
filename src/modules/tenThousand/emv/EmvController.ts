import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emvs")
export default class EmvController {
  @operation({
    summary: "Get Emvs",
  })
  @get()
  static getEmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emv",
  })
  @post("{id}")
  static createEmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
