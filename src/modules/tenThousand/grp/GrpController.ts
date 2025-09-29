import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grps")
export default class GrpController {
  @operation({
    summary: "Get Grps",
  })
  @get()
  static getGrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grp",
  })
  @post("{id}")
  static createGrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
