import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uxes")
export default class UxController {
  @operation({
    summary: "Get Uxes",
  })
  @get()
  static getUxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ux",
  })
  @post("{id}")
  static createUx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
