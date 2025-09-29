import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csps")
export default class CspController {
  @operation({
    summary: "Get Csps",
  })
  @get()
  static getCsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csp",
  })
  @post("{id}")
  static createCsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
