import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("firs")
export default class FirController {
  @operation({
    summary: "Get Firs",
  })
  @get()
  static getFirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fir",
  })
  @post("{id}")
  static createFir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
