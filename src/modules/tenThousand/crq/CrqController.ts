import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crqs")
export default class CrqController {
  @operation({
    summary: "Get Crqs",
  })
  @get()
  static getCrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crq",
  })
  @post("{id}")
  static createCrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
