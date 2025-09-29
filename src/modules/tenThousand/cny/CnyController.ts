import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnies")
export default class CnyController {
  @operation({
    summary: "Get Cnies",
  })
  @get()
  static getCnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cny",
  })
  @post("{id}")
  static createCny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
