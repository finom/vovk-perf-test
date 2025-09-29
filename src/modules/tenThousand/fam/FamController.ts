import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fams")
export default class FamController {
  @operation({
    summary: "Get Fams",
  })
  @get()
  static getFams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fam",
  })
  @post("{id}")
  static createFam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
