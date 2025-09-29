import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwos")
export default class CwoController {
  @operation({
    summary: "Get Cwos",
  })
  @get()
  static getCwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwo",
  })
  @post("{id}")
  static createCwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
