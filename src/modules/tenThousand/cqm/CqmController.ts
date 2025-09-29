import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqms")
export default class CqmController {
  @operation({
    summary: "Get Cqms",
  })
  @get()
  static getCqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqm",
  })
  @post("{id}")
  static createCqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
