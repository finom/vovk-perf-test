import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oms")
export default class OmController {
  @operation({
    summary: "Get Oms",
  })
  @get()
  static getOms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Om",
  })
  @post("{id}")
  static createOm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
