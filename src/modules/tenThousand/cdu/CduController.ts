import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdus")
export default class CduController {
  @operation({
    summary: "Get Cdus",
  })
  @get()
  static getCdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdu",
  })
  @post("{id}")
  static createCdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
