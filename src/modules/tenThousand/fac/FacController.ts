import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("facs")
export default class FacController {
  @operation({
    summary: "Get Facs",
  })
  @get()
  static getFacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fac",
  })
  @post("{id}")
  static createFac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
