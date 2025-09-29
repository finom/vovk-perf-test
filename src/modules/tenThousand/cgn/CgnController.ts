import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgns")
export default class CgnController {
  @operation({
    summary: "Get Cgns",
  })
  @get()
  static getCgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgn",
  })
  @post("{id}")
  static createCgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
