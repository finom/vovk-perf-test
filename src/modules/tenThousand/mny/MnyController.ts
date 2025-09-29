import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnies")
export default class MnyController {
  @operation({
    summary: "Get Mnies",
  })
  @get()
  static getMnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mny",
  })
  @post("{id}")
  static createMny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
