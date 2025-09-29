import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frhs")
export default class FrhController {
  @operation({
    summary: "Get Frhs",
  })
  @get()
  static getFrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frh",
  })
  @post("{id}")
  static createFrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
