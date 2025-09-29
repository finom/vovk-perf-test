import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnms")
export default class CnmController {
  @operation({
    summary: "Get Cnms",
  })
  @get()
  static getCnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnm",
  })
  @post("{id}")
  static createCnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
