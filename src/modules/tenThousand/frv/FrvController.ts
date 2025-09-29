import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frvs")
export default class FrvController {
  @operation({
    summary: "Get Frvs",
  })
  @get()
  static getFrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frv",
  })
  @post("{id}")
  static createFrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
