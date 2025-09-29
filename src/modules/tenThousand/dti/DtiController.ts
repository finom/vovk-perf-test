import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtis")
export default class DtiController {
  @operation({
    summary: "Get Dtis",
  })
  @get()
  static getDtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dti",
  })
  @post("{id}")
  static createDti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
