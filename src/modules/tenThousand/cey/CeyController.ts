import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceys")
export default class CeyController {
  @operation({
    summary: "Get Ceys",
  })
  @get()
  static getCeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cey",
  })
  @post("{id}")
  static createCey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
