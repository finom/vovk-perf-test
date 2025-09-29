import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccgs")
export default class CcgController {
  @operation({
    summary: "Get Ccgs",
  })
  @get()
  static getCcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccg",
  })
  @post("{id}")
  static createCcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
