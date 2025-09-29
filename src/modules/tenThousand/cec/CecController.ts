import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cecs")
export default class CecController {
  @operation({
    summary: "Get Cecs",
  })
  @get()
  static getCecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cec",
  })
  @post("{id}")
  static createCec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
