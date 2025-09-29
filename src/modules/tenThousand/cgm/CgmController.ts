import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgms")
export default class CgmController {
  @operation({
    summary: "Get Cgms",
  })
  @get()
  static getCgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgm",
  })
  @post("{id}")
  static createCgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
