import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coys")
export default class CoyController {
  @operation({
    summary: "Get Coys",
  })
  @get()
  static getCoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coy",
  })
  @post("{id}")
  static createCoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
