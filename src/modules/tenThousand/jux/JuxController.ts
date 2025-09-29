import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juxes")
export default class JuxController {
  @operation({
    summary: "Get Juxes",
  })
  @get()
  static getJuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jux",
  })
  @post("{id}")
  static createJux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
