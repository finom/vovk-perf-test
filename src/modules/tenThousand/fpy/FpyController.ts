import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpies")
export default class FpyController {
  @operation({
    summary: "Get Fpies",
  })
  @get()
  static getFpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpy",
  })
  @post("{id}")
  static createFpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
