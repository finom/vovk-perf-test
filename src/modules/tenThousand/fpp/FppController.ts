import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpps")
export default class FppController {
  @operation({
    summary: "Get Fpps",
  })
  @get()
  static getFpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpp",
  })
  @post("{id}")
  static createFpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
