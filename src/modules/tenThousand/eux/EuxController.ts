import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euxes")
export default class EuxController {
  @operation({
    summary: "Get Euxes",
  })
  @get()
  static getEuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eux",
  })
  @post("{id}")
  static createEux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
