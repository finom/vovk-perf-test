import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csies")
export default class CsyController {
  @operation({
    summary: "Get Csies",
  })
  @get()
  static getCsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csy",
  })
  @post("{id}")
  static createCsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
