import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuxes")
export default class IuxController {
  @operation({
    summary: "Get Iuxes",
  })
  @get()
  static getIuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iux",
  })
  @post("{id}")
  static createIux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
